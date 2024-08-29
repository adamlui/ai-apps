// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license
// Source: https://github.com/KudoAI/chatgpt.js
// Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js

(async () => {
    /* global newChatBtn, wideScreenBtn, fullWindowBtn, fullScreenBtn */

    const site = /:\/\/(.*?\.)?(.*)\.[^/]+/.exec(document.location.href)[2]

    // Import LIBS
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js')),
          { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(request => {
        if (request.action == 'notify') notify(request.msg, request.position)
        else if (request.action == 'alert') siteAlert(request.title, request.msg, request.btns)
        else if (typeof window[request.action] == 'function') {
            const args = Array.isArray(request.args) ? request.args // preserve array if supplied
                       : request.args != undefined ? [request.args] : [] // convert to array if single or no arg
            window[request.action](...args) // call expression functions
        }
        return true
    })

    function siteAlert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(title, msg, btns, checkbox, width )}

    // Selectively DISABLE content or user script
    if (!/chatgpt|openai|poe/.test(site)) return
    document.documentElement.setAttribute('cwm-extension-installed', true) // for userscript auto-disable

    // Init UI flag
    const isGPT4oUI = document.documentElement.className.includes(' ')

    // Define UI element SELECTORS
    const inputSelector = /chatgpt|openai/.test(site) ? '#prompt-textarea'
                        : site == 'poe' ? '[class*="InputContainer_textArea"] textarea, [class*="InputContainer_textArea"]::after' : '',
          sidebarSelector = /chatgpt|openai/.test(site) ? '#__next > div > div.dark'
                          : site == 'poe' ? 'menu[class*="sidebar"], aside[class*="sidebar"]' : '',
          sidepadSelector = '#__next > div > div',
          headerSelector = /chatgpt|openai/.test(site) ? 'main .sticky' : ''
    let footerSelector = 'footer'
    try { footerSelector = /chatgpt|openai/.test(site) ?
              chatgpt.getFooterDiv()?.classList.toString().replace(/([:[\]\\])/g, '\\$1').replace(/^| /g, '.') : ''
    } catch (err) {}

    // AUTO-FOCUS ChatGPT chatbar if enabled
    if (/chatgpt|openai/.test(site)) {
        settings.load('autoFocusChatbarDisabled').then(async () => { if (!config.autoFocusChatbarDisabled) {
            await Promise.race([
                new Promise(resolve => {
                    (function checkSecondChatbarBtn() { // since it causes de-focus
                        const chatbarBtns = document.querySelector(inputSelector)?.parentNode.parentNode.getElementsByTagName('button')
                        chatbarBtns?.length >= 2 ? resolve(true) : setTimeout(checkSecondChatbarBtn, 200)
                    })();
                }), new Promise(resolve => setTimeout(resolve, 3000)) // timeout after 3s
            ])
            document.querySelector(inputSelector)?.focus()
    }})}

    // Save FULL-WINDOW + FULL SCREEN states
    config.fullWindow = /chatgpt|openai/.test(site) ? isFullWindow() : settings.load('fullWindow')
    config.fullScreen = chatgpt.isFullScreen()

    // Collect SEND BUTTON classes
    const sendBtn = chatgpt.getSendBtn(),
          sendBtnClasses = sendBtn?.classList || [],
          sendSVGclasses = sendBtn?.querySelector('svg')?.classList || []

    // Create/stylize TOOLTIP div
    const tooltipDiv = document.createElement('div')
    tooltipDiv.classList.add('toggle-tooltip')
    const tooltipStyle = document.createElement('style')
    tooltipStyle.innerText = '.toggle-tooltip {'
        + 'background-color: rgba(0, 0, 0, 0.71) ; padding: 5px ; border-radius: 6px ; border: 1px solid #d9d9e3 ;' // bubble style
        + 'font-size: 0.85rem ; color: white ;' // font style
        + 'position: absolute ; bottom: 50px ;' // v-position
        + 'box-shadow: 4px 6px 16px 0px rgb(0 0 0 / 38%) ;' // drop shadow
        + 'opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 ;' // visibility
        + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
    document.head.append(tooltipStyle)

    // Create/apply general style TWEAKS
    const tweaksStyle = document.createElement('style'),
          tcbStyle = inputSelector + '{ max-height: 68vh !important }', // heighten chatbox
          hhStyle = headerSelector + '{ display: none !important }' // hide header
                  + ( /chatgpt|openai/.test(site) ? 'main { padding-top: 12px }' : '' ), // increase top-padding
          hfStyle = footerSelector + '{ color: transparent !important ;' // hide footer text
                                   + '  padding: .1rem 0 0 !important }' // reduce v-padding

    updateTweaksStyle() ; document.head.append(tweaksStyle)

    // Create WIDESCREEN style
    const wideScreenStyle = document.createElement('style')
    wideScreenStyle.id = 'wideScreen-mode' // for syncMode()
    const wcbStyle = ( // Wider Chatbox for updateWidescreenStyle()
        /chatgpt|openai/.test(site) ? 'main form { max-width: 96% !important }'
      : site == 'poe' ? '[class*=footerInner] { width: 100% }' : '' )
    updateWidescreenStyle()

    // Create FULL-WINDOW style
    const fullWindowStyle = document.createElement('style')
    fullWindowStyle.id = 'fullWindow-mode' // for syncMode()
    fullWindowStyle.innerText = (
          sidebarSelector + ' { display: none } ' // hide sidebar
        + sidepadSelector + ' { padding-left: 0 }' ) // remove side padding

    // Create/insert chatbar BUTTONS
    const buttonTypes = ['fullScreen', 'fullWindow', 'wideScreen', 'newChat'],
          bOffset = site == 'poe' ? -1.5 : -13, rOffset = site == 'poe' ? -6 : -4
    let btnColor = setBtnColor()
    for (let i = 0 ; i < buttonTypes.length ; i++) {
        (buttonType => { // enclose in IIFE to separately capture button type for async listeners
            const buttonName = buttonType + 'Btn'
            window[buttonName] = document.createElement('div') // create button
            window[buttonName].id = buttonType + '-button' // for toggleTooltip()
            updateBtnSVG(buttonType) // insert icon
            window[buttonName].style.cssText = 'position: relative ; top: 0 ;'
                                             + `right: ${ rOffset + i * bOffset }px` // position left of prev button
            window[buttonName].style.cursor = 'pointer' // add finger cursor
            if (isGPT4oUI || site == 'poe') window[buttonName].style.position = 'relative' // override static pos
            if (/chatgpt|openai/.test(site)) { // assign classes + tweak styles
                window[buttonName].setAttribute('class', sendBtnClasses)
                window[buttonName].style.backgroundColor = 'transparent' // remove dark mode overlay
                window[buttonName].style.borderColor = 'transparent' // remove dark mode overlay
            } else if (site == 'poe') // lift buttons slightly
                window[buttonName].style.marginBottom = ( buttonType == 'newChat' ? '0.45' : '0.2' ) + 'rem'

            // Add click/hover listeners
            window[buttonName].onclick = () => {
                if (buttonType == 'newChat') {
                    if (/chatgpt|openai/.test(site)) chatgpt.startNewChat()
                    else if (site == 'poe') document.querySelector('header a[class*="button"]')?.click()
                } else toggleMode(buttonType)
            }
            window[buttonName].onmouseover = toggleTooltip
            window[buttonName].onmouseout = toggleTooltip

        })(buttonTypes[i])
    } settings.load('extensionDisabled').then(() => {
        if (!config.extensionDisabled) insertBtns()
    })

    // Monitor NODE CHANGES to auto-toggle once + maintain button visibility + update colors
    let isTempChat = false, prevSessionChecked = false
    const nodeObserver = new MutationObserver(([mutation]) => {

        // Restore previous session's state + manage toggles
        settings.load(['wideScreen', 'fullerWindows', 'tcbDisabled', 'widerChatbox', 'ncbDisabled',
                       'hiddenHeader', 'hiddenFooter', 'notifDisabled', 'extensionDisabled'])
            .then(() => { if (!config.extensionDisabled) {
                if (!prevSessionChecked) { // restore previous session's state
                    if (config.wideScreen) toggleMode('wideScreen', 'ON')
                    if (config.fullWindow) { toggleMode('fullWindow', 'ON')
                        if (/chatgpt|openai/.test(site)) { // sidebar observer doesn't trigger
                            syncFullerWindows(true) // so sync Fuller Windows...
                            if (!config.notifDisabled) // ... + notify
                                notify(chrome.i18n.getMessage('mode_fullWindow') + ' ON')
                    }}
                    if (!config.tcbDisabled || config.ncbDisabled || config.hiddenHeader || config.hiddenFooter)
                        updateTweaksStyle()
                    if (config.widerChatbox) updateWidescreenStyle()
                    prevSessionChecked = true
                }
                insertBtns() // again or they constantly disappear
            } prevSessionChecked = true // even if extensionDisabled, to avoid double-toggle
        })

        // Update button colors on ChatGPT scheme or temp chat toggle
        if (/chatgpt|openai/.test(site)) {
            let chatbarBGdiv = document.querySelector('textarea')
            for (let i = 0 ; i < ( isGPT4oUI ? 3 : 1 ) ; i++) { chatbarBGdiv = chatbarBGdiv.parentNode }
            if (chatbarBGdiv) {
                const chatbarBGisBlack = chatbarBGdiv.classList.contains('bg-black');
                if ((mutation.type === 'attributes' && mutation.attributeName === 'class') // potential scheme toggled
                     || (chatbarBGisBlack && !isTempChat) || (!chatbarBGisBlack && isTempChat)) { // temp chat toggled
                            btnColor = setBtnColor() // init new color
                            chatbarBGdiv.style.overflow = 'visible' // allow tooltips to overflow pre-GPT4o UI
                            const buttons = ['fullScreen', 'fullWindow', 'wideScreen', 'newChat']
                            buttons.forEach(btn => updateBtnSVG(btn)) ; isTempChat = !isTempChat
        }}}
    })
    nodeObserver.observe(document.documentElement, { attributes: true }) // <html> for page scheme toggles
    nodeObserver.observe(document.querySelector('main'), { attributes: true, subtree: true }); // <main> for chatbar changes

    // Monitor SIDEBAR to update full-window setting
    if (/chatgpt|openai/.test(site)) {
        const sidebarObserver = new MutationObserver(() => {
            settings.load(['extensionDisabled']).then(() => {
                if (!config.extensionDisabled) {
                    const fullWindowState = isFullWindow()
                    if ((config.fullWindow && !fullWindowState) || (!config.fullWindow && fullWindowState))
                        if (!config.modeSynced) syncMode('fullWindow')
        }})})
        setTimeout(() => // delay half-sec before observing to avoid repeated toggles from nodeObserver
            sidebarObserver.observe(document.body, {
                subtree: true, childList: false, attributes: true }), 500)
    }

    // Add RESIZE LISTENER to update full screen setting/button + disable F11 flag
    window.onresize = () => {
        const fullScreenState = chatgpt.isFullScreen()
        if (config.fullScreen && !fullScreenState) { syncMode('fullScreen') ; config.f11 = false } // exiting full screen
        else if (!config.fullScreen && fullScreenState) syncMode('fullScreen') // entering full screen
    }

    // Add KEY LISTENER to enable flag on F11 + stop generating text on ESC
    window.onkeydown = event => {
        if ((event.key == 'F11' || event.keyCode == 122) && !config.fullScreen) config.f11 = true
        else if ((event.key == 'Escape' || event.keyCode == 27) && !chatgpt.isIdle()) chatgpt.stop()
    }

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {

        // Strip state word to append colored one later
        const foundState = ['ON', 'OFF'].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration, shadow || chatgpt.isDarkMode() ? '' : 'shadow')
        const notifs = document.querySelectorAll('.chatgpt-notif'),
              notif = notifs[notifs.length -1]

        // Append styled state word
        if (foundState) {
            const styledState = document.createElement('span')
            styledState.style.cssText = `color: ${
                foundState == 'OFF' ? '#ef4848 ; text-shadow: rgba(255, 169, 225, 0.44) 2px 1px 5px'
                                    : '#5cef48 ; text-shadow: rgba(255, 250, 169, 0.38) 2px 1px 5px' }`
            styledState.append(foundState) ; notif.append(styledState)
        }
    }

    // Define BUTTON functions

    function setBtnColor() { return (
        /chatgpt|openai/.test(site) ? (
            document.querySelector('.dark.bg-black, [class*="dark:bg-gray"]') // temp chat post-GPT4-o, pre-GPT-4o
         || chatgpt.isDarkMode() ? 'white' : '#202123' )
      : site == 'poe' ? 'currentColor' : ''
    )}

    function insertBtns() {

        // Init chatbar
        let chatbar = document.querySelector(inputSelector)
        if (/chatgpt|openai/.test(site)) chatbar = chatbar?.parentNode.parentNode // select outer container
        if (!chatbar || chatbar.contains(wideScreenBtn)) return // if chatbar missing or buttons aren't missing, exit

        // Tweak chatbar
        if (/chatgpt|openai/.test(site)) // allow tooltips to overflow
            chatbar.classList.remove('overflow-hidden')
        else if (site == 'poe') { // left-align attach file button
            const attachFileBtn = chatbar.querySelector('button[class*="File"]')
            attachFileBtn.style.cssText = 'position: absolute ; left: 1rem ; bottom: 0.35rem'
            document.querySelector(inputSelector).style.padding = '0 13px 0 40px' // accommodate new btn pos
        }

        // Insert buttons
        const elemsToInsert = [newChatBtn, wideScreenBtn, fullWindowBtn, fullScreenBtn, tooltipDiv]
        const elemToInsertBefore = (
            /chatgpt|openai/.test(site) ? chatbar.querySelector('button[class*="right"]') // ChatGPT pre-5/2024
                                       || chatbar.lastChild // ChatGPT post-5/2024 + Poe
                                        : chatbar.children[1] ) // Poe
        elemsToInsert.forEach(elem => chatbar.insertBefore(elem, elemToInsertBefore))
    }

    function removeBtns() {

        // ID chatbar
        let chatbar
        if (/chatgpt|openai/.test(site)) {
            chatbar = document.querySelector('div[class*="textarea:focus"]') // pre-GPT-4o UI
                   || document.getElementById('prompt-textarea').parentNode.parentNode // post-GPT-4o UI
        } else if (site == 'poe') chatbar = document.querySelector('div[class*="ChatMessageInputContainer"]')

        // Remove buttons
        if (chatbar.contains(fullWindowBtn)) {
            const nodesToRemove = [newChatBtn, fullWindowBtn, wideScreenBtn, fullScreenBtn, tooltipDiv]
            for (const node of nodesToRemove) chatbar.removeChild(node)
        }
    }

    function updateBtnSVG(mode, state = '') {

        // Define SVG viewbox + elems
        const svgViewBox = ( mode == 'newChat' ? '11 6 ' : mode == 'fullWindow' ? '-2 -0.5 ' : '8 8 ' ) // move to XY coords to crop whitespace
                         + ( mode == 'newChat' ? '13 13' : mode == 'fullWindow' ? '24 24' : '20 20' ) // shrink to fit size
        const fullScreenONelems = [
            createSVGelem('path', { fill: btnColor, d: 'm14,14-4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z' }),
            createSVGelem('path', { fill: btnColor, d: 'm22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z' }),
            createSVGelem('path', { fill: btnColor, d: 'm20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z' }),
            createSVGelem('path', { fill: btnColor, d: 'm10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z' }) ]
        const fullScreenOFFelems = [
            createSVGelem('path', { fill: btnColor, d: 'm10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z' }),
            createSVGelem('path', { fill: btnColor, d: 'm20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z' }),
            createSVGelem('path', { fill: btnColor, d: 'm24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z' }),
            createSVGelem('path', { fill: btnColor, d: 'M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z' }) ]
        const fullWindowElems = [
            createSVGelem('rect', { x: '3', y: '3', width: '17', height: '17', rx: '2', ry: '2' }),
            createSVGelem('line', { x1: '9', y1: '3', x2: '9', y2: '21' }) ]
        const wideScreenONelems = [
            createSVGelem('path', { fill: btnColor, 'fill-rule': 'evenodd',
                d: 'm26,13 0,10 -16,0 0,-10 z m-14,2 12,0 0,6 -12,0 0,-6 z' }) ]
        const wideScreenOFFelems = [
            createSVGelem('path', { fill: btnColor, 'fill-rule': 'evenodd',
                d: 'm28,11 0,14 -20,0 0,-14 z m-18,2 16,0 0,10 -16,0 0,-10 z' }) ]
        const newChatElems = [ createSVGelem('path', { fill: btnColor, d: 'M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z' }) ]

        // Pick appropriate button/elements
        const [button, ONelems, OFFelems] = (
            mode == 'fullScreen' ? [fullScreenBtn, fullScreenONelems, fullScreenOFFelems]
          : mode == 'fullWindow' ? [fullWindowBtn, fullWindowElems, fullWindowElems]
          : mode == 'wideScreen' ? [wideScreenBtn, wideScreenONelems, wideScreenOFFelems]
                                 : [newChatBtn, newChatElems, newChatElems])

        // Set SVG attributes
        const buttonSVG = button.querySelector('svg') || document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        buttonSVG.setAttribute('height', 18) // prevent shrinking
        if (mode == 'fullWindow') { // stylize full-window button
            buttonSVG.setAttribute('stroke', btnColor)
            buttonSVG.setAttribute('fill', 'none')
            buttonSVG.setAttribute('stroke-width', '2')
            buttonSVG.setAttribute('height', site == 'poe' ? '2em' : 17)
            buttonSVG.setAttribute('width', site == 'poe' ? '2em' : 17)
        }
        buttonSVG.setAttribute('class', sendSVGclasses) // assign borrowed classes
        buttonSVG.setAttribute('viewBox', svgViewBox) // set pre-tweaked viewbox
        buttonSVG.style.pointerEvents = 'none' // prevent triggering tooltips twice
        if (/chatgpt|openai/.test(site)) // override button resizing
            buttonSVG.style.height = buttonSVG.style.width = `${ isGPT4oUI ? 1.25 : 1.3 }rem`

        // Update SVG elements
        while (buttonSVG.firstChild) { buttonSVG.removeChild(buttonSVG.firstChild) }
        const svgElems = config[mode] || state.toLowerCase() == 'on' ? ONelems : OFFelems
        svgElems.forEach(elem => buttonSVG.append(elem))

        // Update SVG
        if (!button.contains(buttonSVG)) button.append(buttonSVG)
    }

    function createSVGelem(tagName, attributes) {
        const elem = document.createElementNS('http://www.w3.org/2000/svg', tagName)
        for (const attr in attributes) elem.setAttributeNS(null, attr, attributes[attr])       
        return elem
    }

    // Define TOOLTIP functions

    function toggleTooltip(event) {
        updateTooltip(event.currentTarget.id.replace(/-button$/, ''))
        tooltipDiv.style.opacity = event.type == 'mouseover' ? '1' : '0'
    }

    function updateTooltip(buttonType) { // text & position
        tooltipDiv.innerText = chrome.i18n.getMessage('tooltip_' + buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'OFF' : 'ON')))
            const ctrAddend = 25 + ( site == 'poe' ? 45 : 12 ),
            spreadFactor = site == 'poe' ? 35 : 30.5,
            iniRoffset = spreadFactor * ( buttonType.includes('fullScreen') ? 1
                                          : buttonType.includes('fullWindow') ? 2
                                          : buttonType.includes('wide') ? 3 : 4 ) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width /2 }px`
    }

    // Define TOGGLE functions

    function activateMode(mode) {
        if (mode == 'wideScreen') { document.head.append(wideScreenStyle) ; syncMode('wideScreen') }
        else if (mode == 'fullWindow') {
            document.head.append(fullWindowStyle)
            if (site == 'poe') syncMode('fullWindow') ; else chatgpt.sidebar.hide()
        } else if (mode == 'fullScreen') document.documentElement.requestFullscreen()
    }

    function deactivateMode(mode) {
        if (mode == 'wideScreen')
            try { document.head.removeChild(wideScreenStyle) ; syncMode('wideScreen') } catch (err) {}
        else if (mode == 'fullWindow') {
            try { document.head.removeChild(fullWindowStyle) } catch (err) {}
            if (/chatgpt|openai/.test(site)) chatgpt.sidebar.show()
            else if (site == 'poe') syncMode('fullWindow') // since not sidebarObserve()'d
        } else if (mode == 'fullScreen') {
            if (config.f11)
                siteAlert(chrome.i18n.getMessage('alert_pressF11'), chrome.i18n.getMessage('alert_f11reason') + '.')
            document.exitFullscreen().catch(err => console.error(config.appSymbol + ' » Failed to exit fullscreen', err))
        }
    }

    function toggleMode(mode, state = '') {
        switch (state.toUpperCase()) {
            case 'ON' : activateMode(mode) ; break
            case 'OFF' : deactivateMode(mode) ; break
            default : config[mode] ? deactivateMode(mode) : activateMode(mode)
        }
    }

    // Define SYNC functions

    function isFullWindow() {
        return site == 'poe' ? !!document.getElementById('fullWindow-mode')
                             : chatgpt.sidebar.isOff()
    }

    function syncMode(mode) { // setting + icon + tooltip
        const state = ( mode == 'wideScreen' ? !!document.getElementById('wideScreen-mode')
                      : mode == 'fullWindow' ? isFullWindow()
                                             : chatgpt.isFullScreen() )
        settings.save(mode, state) ; updateBtnSVG(mode) ; updateTooltip(mode)
        if (mode == 'fullWindow') syncFullerWindows(state)
        settings.load('notifDisabled').then(() => {
            if (!config.notifDisabled) // notify synced state
                notify(`${ chrome.i18n.getMessage('mode_' + mode) } ${ state ? 'ON' : 'OFF' }`)
        })
        config.modeSynced = true ; setTimeout(() => config.modeSynced = false, 100) // prevent repetition
    }

    function syncFullerWindows(fullWindowState) {
        if (fullWindowState && config.fullerWindows && !config.wideScreen) { // activate fuller windows
            document.head.append(wideScreenStyle) ; updateBtnSVG('wideScreen', 'on')
        } else if (!fullWindowState) { // de-activate fuller windows
            try { document.head.removeChild(fullWindowStyle) } catch (err) {} // to remove style too so sidebar shows
            if (!config.wideScreen) { // disable widescreen if result of fuller window
                try { document.head.removeChild(wideScreenStyle) } catch (err) {}                
                updateBtnSVG('wideScreen', 'off')
    }}}

    function updateTweaksStyle() {
        tweaksStyle.innerText = (
            /chatgpt|openai/.test(site) ? (
                  ( inputSelector + '{ margin-right: -43px }' ) // widen/narrow input to be flush w/ btns
                + ( '[id$="-button"]:hover { opacity: 80% !important }' ) // dim chatbar btns on hover
                + ( config.hiddenHeader ? hhStyle : '' ) // hide header
                + ( config.hiddenFooter ? hfStyle : '' )) // hide footer
          : site == 'poe' ? 'button[class*="Voice"] { margin: 0 -3px 0 -8px }' // h-pad mic btn for even spread
          : '' )
        + ( !config.tcbDisabled ? tcbStyle : '' ) // expand text input vertically
        + `#newChat-button { display: ${ config.ncbDisabled ? 'none' : 'flex' }}`
    }

    function updateWidescreenStyle() {
        wideScreenStyle.innerText = (
              /chatgpt|openai/.test(site) ? (
                  '.text-base { max-width: 100% !important }' // widen outer container
                + '.text-base:nth-of-type(2) { max-width: 97% !important }' // widen inner container
                + '#__next > div > div.flex { width: 100px }' ) // prevent sidebar shrinking when zoomed
            : site == 'poe' ? (
                  '[class*="ChatMessagesView"] { width: 100% !important }' // widen outer container
                + '[class^="Message"] { max-width: 100% !important }' ) // widen speech bubbles
            : '' )
        if (config.widerChatbox) wideScreenStyle.innerText += wcbStyle        
    }

    syncExtension = () => { // sync settings
        settings.load('extensionDisabled', 'fullerWindows', 'tcbDisabled', 'widerChatbox', 'ncbDisabled',
                      'hiddenHeader', 'hiddenFooter', 'notifDisabled')
            .then(() => {
                if (config.extensionDisabled) { // try to disable modes
                    try { document.head.removeChild(wideScreenStyle) } catch (err) {}
                    try { document.head.removeChild(fullWindowStyle) ; chatgpt.sidebar.show() } catch (err) {}
                    tweaksStyle.innerText = tweaksStyle.innerText.replace(tcbStyle, '')
                    tweaksStyle.innerText = tweaksStyle.innerText.replace(hhStyle, '')
                    tweaksStyle.innerText = tweaksStyle.innerText.replace(hfStyle, '')
                    removeBtns()
                } else { // restore modes
                    if (config.wideScreen && !document.head.contains(wideScreenStyle)) toggleMode('wideScreen', 'ON')
                    if (config.fullWindow && !isFullWindow()) toggleMode('fullWindow', 'ON')
                    updateTweaksStyle() // sync taller chatbox + hidden header/footer
                    updateWidescreenStyle() // sync wider chatbox
    }})}

})()
