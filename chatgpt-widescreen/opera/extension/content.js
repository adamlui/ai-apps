// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license
// Source: https://github.com/KudoAI/chatgpt.js
// Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js

(async () => {
    /* global newChatBtn, wideScreenBtn, fullWindowBtn, fullScreenBtn */

    // Import libs
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js')),
          { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add Chrome action msg listener
    chrome.runtime.onMessage.addListener(request => {
        if (request.action == 'notify') notify(request.msg, request.position)
        else if (request.action == 'alert') alert(request.title, request.msg, request.btns)
        else if (typeof window[request.action] == 'function') {
            const args = Array.isArray(request.args) ? request.args // preserve array if supplied
                       : request.args !== undefined ? [request.args] : [] // convert to array if single or no arg
            window[request.action](...args) // call expression functions
        }
        return true
    })

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    // Selectively disable content or user script
    const site = /:\/\/(.*?\.)?(.*)\.[^/]+/.exec(document.location.href)[2]
    if (!['openai', 'poe'].includes(site)) return
    document.documentElement.setAttribute('cwm-extension-installed', true) // for userscript auto-disable

    // Wait for site load
    if (site == 'openai') await chatgpt.isLoaded()

    // Define UI element selectors
    const headerSelector = site == 'openai' ? 'main .sticky' : '',
          footerSelector = site == 'openai' ? 'main form ~ div' : '',
          chatbarSelector = site == 'openai' ? 'div[class*="textarea:focus"'
                          : site == 'poe' ? 'div[class*="ChatMessageInputContainer"]' : ''

    // Save full-window + full screen states
    config.fullWindow = site == 'openai' ? chatgpt.sidebar.isOff() : settings.load('fullWindow')
    config.fullScreen = chatgpt.isFullScreen()

    // Collect button classes
    const sendBtnSelector = site == 'openai' ? 'form button[class*="bottom"]' : null,
          sendBtnClasses = document.querySelector(sendBtnSelector)?.classList || [],
          sendImgClasses = document.querySelector('form button[class*="bottom"] svg')?.classList || []

    // Define UI element selectors
    const inputSelector = site == 'poe' ? '[class*="InputContainer_textArea"] textarea, [class*="InputContainer_textArea"]::after'
                                        : 'form textarea[id*="prompt"]',
          sidebarSelector = site == 'poe' ? 'menu[class*="sidebar"], aside[class*="sidebar"]'
                                          : '#__next > div > div.dark',
          sidepadSelector = '#__next > div > div'

    // Create/stylize tooltip div
    const tooltipDiv = document.createElement('div')
    tooltipDiv.classList.add('toggle-tooltip')
    const tooltipStyle = document.createElement('style')
    tooltipStyle.innerText = '.toggle-tooltip {'
        + 'background: black ; padding: 5px ; border-radius: 6px ; border: 1px solid #d9d9e3 ;' // bubble style
        + 'font-size: 0.7rem ; color: white ; ' // font style
        + 'position: absolute ; bottom: 50px ; ' // v-position
        + 'opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 ; ' // visibility
        + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
    document.head.append(tooltipStyle)

    // Create/apply general style tweaks
    const tweaksStyle = document.createElement('style'),
          tcbStyle = inputSelector + '{ max-height: 68vh !important }', // heighten chatbox
          hhStyle = headerSelector + '{ display: none !important }' // hide header
                  + ( site == 'openai' ? 'main { padding-top: 12px }' : '' ), // increase top-padding
          hfStyle = footerSelector + '{ color: transparent !important ;' // hide footer text
                                   + '  padding: .1rem 0 0 !important }' // reduce v-padding

    updateTweaksStyle() ; document.head.append(tweaksStyle)

    // Create widescreen style
    const wideScreenStyle = document.createElement('style')
    wideScreenStyle.id = 'wideScreen-mode' // for syncMode()
    const wcbStyle = ( // Wider Chatbox for updateWidescreenStyle()
        site == 'openai' ? 'main form { max-width: 96% !important }'
      : site == 'poe' ? '[class^="ChatMessageInputFooter"] { max-width: 100% }' : '' )
    updateWidescreenStyle()

    // Create full-window style
    const fullWindowStyle = document.createElement('style')
    fullWindowStyle.id = 'fullWindow-mode' // for syncMode()
    fullWindowStyle.innerText = (
          sidebarSelector + ' { display: none } ' // hide sidebar
        + sidepadSelector + ' { padding-left: 0px }' ) // remove side padding

    // Create/insert chatbar buttons
    const buttonTypes = ['fullScreen', 'fullWindow', 'wideScreen', 'newChat'],
          rOffset = 3, bOffset = 1.77
    let buttonColor = setBtnColor()
    for (let i = 0 ; i < buttonTypes.length ; i++) {
        (buttonType => { // enclose in IIFE to separately capture button type for async listeners
            const buttonName = buttonType + 'Btn'
            window[buttonName] = document.createElement('div') // create button
            window[buttonName].id = buttonType + '-button' // for toggleTooltip()
            updateBtnSVG(buttonType); // insert icon
            window[buttonName].style.cssText = `right: ${ rOffset + i * bOffset }rem` // position left of prev button
            window[buttonName].style.cursor = 'pointer' // add finger cursor // 添加鼠标手势为手指
            if (site != 'poe') // assign borrowed classes
                window[buttonName].setAttribute('class', sendBtnClasses)
            else if (site == 'poe') // lift buttons slightly
                window[buttonName].style.marginBottom = ( buttonType == 'newChat' ? '0.45' : '0.2' ) + 'rem'
            if (site == 'openai') { // style tweaks for OpenAI Gizmo UI
                window[buttonName].style.backgroundColor = 'transparent' // remove dark mode overlay
                window[buttonName].style.borderColor = 'transparent' // remove dark mode overlay
                window[buttonName].querySelector('svg').setAttribute('width', 18) // fix disappearing width in dark mode
                window[buttonName].style.bottom = '0.91rem' // nudge up for flushness w/ send button
            }

            // Add click/hover listeners
            window[buttonName].addEventListener('click', () => {
                if (buttonType == 'newChat') {
                    if (site == 'openai') chatgpt.startNewChat()
                    else if (site == 'poe') document.querySelector('header a[class*="button"]').click()
                } else toggleMode(buttonType) })
            window[buttonName].addEventListener('mouseover', toggleTooltip)
            window[buttonName].addEventListener('mouseout', toggleTooltip)

        })(buttonTypes[i])
    } settings.load('extensionDisabled').then(() => {
        if (!config.extensionDisabled) insertBtns()
    })

    // Monitor node changes to update button visibility + auto-toggle once
    let prevSessionChecked = false
    const nodeObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type == 'childList' && addedNodes.length) {

            // Restore previous session's state + manage toggles
            settings.load(['wideScreen', 'fullerWindows', 'tcbDisabled', 'widerChatbox', 'ncbDisabled',
                           'hiddenHeader', 'hiddenFooter', 'notifDisabled', 'extensionDisabled'])
                .then(() => { if (!config.extensionDisabled) {                    
                    if (!prevSessionChecked) { // restore previous session's state
                        if (config.wideScreen) toggleMode('wideScreen', 'ON')
                        if (config.fullWindow) { toggleMode('fullWindow', 'ON')
                            if (site == 'openai') { // sidebar observer doesn't trigger
                                syncFullerWindows(true) // so sync Fuller Windows...
                                if (!config.notifDisabled) // ... + notify
                                    notify(chrome.i18n.getMessage('mode_fullWindow') + ' ON')
                        }}
                        if (!config.tcbDisabled || config.ncbDisabled || config.hiddenHeader || config.hiddenFooter)
                            updateTweaksStyle()
                        if (config.widerChatbox) updateWidescreenStyle()
                        prevSessionChecked = true
                    }
                    insertBtns()
                } prevSessionChecked = true // even if extensionDisabled, to avoid double-toggle
            })

    }}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Monitor scheme changes to update button colors
    const schemeObserver = new MutationObserver(([{ type, target }]) => {
        if (target === document.documentElement && type == 'attributes' && target.getAttribute('class'))
            settings.load(['extensionDisabled']).then(() => {
                if (!config.extensionDisabled) {
                    buttonColor = setBtnColor()
                    updateBtnSVG('fullScreen') ; updateBtnSVG('fullWindow')
                    updateBtnSVG('wideScreen') ; updateBtnSVG('newChat')
    }})}) ; schemeObserver.observe(document.documentElement, { attributes: true })

    // Monitor sidebar button to update full-window setting
    if (site == 'openai') {
        const sidebarObserver = new MutationObserver(() => {
            settings.load(['extensionDisabled']).then(() => {
                if (!config.extensionDisabled) {
                    const fullWindowState = chatgpt.sidebar.isOff()
                    if ((config.fullWindow && !fullWindowState) || (!config.fullWindow && fullWindowState))
                        if (!config.modeSynced) syncMode('fullWindow')
        }})})
        setTimeout(() => // delay half-sec before observing to avoid repeated toggles from nodeObserver
            sidebarObserver.observe(document.body, {
                subtree: true, childList: false, attributes: true }), 500)
    }

    // Add full screen listeners to update setting/button + set F11 flag
    window.addEventListener('resize', () => { // sync full screen settings/button
        settings.load(['extensionDisabled']).then(() => {
            if (!config.extensionDisabled) {
                const fullScreenState = chatgpt.isFullScreen()
                if (config.fullScreen && !fullScreenState) { syncMode('fullScreen') ; config.f11 = false } // exiting full screen
                else if (!config.fullScreen && fullScreenState) syncMode('fullScreen') // entering full screen
    }})})
    window.addEventListener('keydown', event => { // set F11 flag for toggleMode() disabled warning
        if ((event.key == 'F11' || event.keyCode === 122) && !config.fullScreen) config.f11 = true
    })

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || chatgpt.isDarkMode() ? '' : 'shadow' )}

    alertToUpdate = version => { // eslint-disable-line no-undef
        if (version) {
            alert(`${ chrome.i18n.getMessage('alert_updateAvail') }!`,
                chrome.i18n.getMessage('alert_newerVer') + ' ' + chrome.i18n.getMessage('appName')
                    + ' v' + version + ' ' + chrome.i18n.getMessage('alert_isAvail') + '!   '
                    + '<a target="_blank" rel="noopener" style="font-size: 0.7rem" '
                        + 'href="' + config.gitHubURL + '/commits/main/chrome/extension" '
                        + '>' + chrome.i18n.getMessage('link_viewChanges') + '</a>',
                function reloadChrome() { chrome.runtime.reload() } // update button
            )
        } else {
            alert(chrome.i18n.getMessage('alert_upToDate') + '!',
                chrome.i18n.getMessage('appName') + ' v' + chrome.runtime.getManifest().version
                    + ' ' + chrome.i18n.getMessage('alert_isUpToDate') + '!' )
    }}

    // Define BUTTON functions

    function setBtnColor() { return (
        site == 'openai' ? ( chatgpt.isDarkMode() || chatgpt.history.isOff() ? 'white' : '#202123' ) : 'currentColor' )}

    function insertBtns() {
        const chatbar = document.querySelector(chatbarSelector)
        if (chatbar.contains(wideScreenBtn)) return // if buttons aren't missing, exit
        const elemsToInsert = [newChatBtn, wideScreenBtn, fullWindowBtn, fullScreenBtn, tooltipDiv],
              leftMostBtn = chatbar.querySelector('button' + ( site != 'poe' ? '[class*="right"]' : ''))
        if (site == 'openai') // allow tooltips to overflow
            chatbar.classList.remove('overflow-hidden')
        else if (site == 'poe') // elevate nested non-send button to chatbar
            chatbar.insertBefore(leftMostBtn, chatbar.lastChild)
        elemsToInsert.forEach(elem => chatbar.insertBefore(elem, leftMostBtn))
    }

    function removeBtns() {
        const chatbar = document.querySelector(chatbarSelector)
        if (!chatbar.contains(fullWindowBtn)) return // if buttons are missing, exit
        else { // remove chat toggles
            const nodesToRemove = [newChatBtn, fullWindowBtn, wideScreenBtn, fullScreenBtn, tooltipDiv]
            for (const node of nodesToRemove) chatbar.removeChild(node)
    }}

    function updateBtnSVG(mode, state = '') {

        // Define SVG viewbox + elems
        const svgViewBox = ( mode == 'newChat' ? '11 6 ' : mode == 'fullWindow' ? '0 0 ' : '8 8 ' ) // move to XY coords to crop whitespace
            + ( mode == 'newChat' ? '13 13' : mode == 'fullWindow' ? '24 24' : '20 20' ) // shrink to fit size
        const fullScreenONelems = [
            createSVGelem('path', { fill: buttonColor, d: 'm14,14-4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z' }),
            createSVGelem('path', { fill: buttonColor, d: 'm22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z' }),
            createSVGelem('path', { fill: buttonColor, d: 'm20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z' }),
            createSVGelem('path', { fill: buttonColor, d: 'm10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z' }) ]
        const fullScreenOFFelems = [
            createSVGelem('path', { fill: buttonColor, d: 'm10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z' }),
            createSVGelem('path', { fill: buttonColor, d: 'm20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z' }),
            createSVGelem('path', { fill: buttonColor, d: 'm24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z' }),
            createSVGelem('path', { fill: buttonColor, d: 'M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z' }) ]
        const fullWindowElems = [
            createSVGelem('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
            createSVGelem('line', { x1: '9', y1: '3', x2: '9', y2: '21' }) ]
        const wideScreenONelems = [
            createSVGelem('path', { fill: buttonColor, 'fill-rule': 'evenodd',
                d: 'm26,13 0,10 -16,0 0,-10 z m-14,2 12,0 0,6 -12,0 0,-6 z' }) ]
        const wideScreenOFFelems = [
            createSVGelem('path', { fill: buttonColor, 'fill-rule': 'evenodd',
                d: 'm28,11 0,14 -20,0 0,-14 z m-18,2 16,0 0,10 -16,0 0,-10 z' }) ]
        const newChatElems = [ createSVGelem('path', { fill: buttonColor, d: 'M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z' }) ]

        // Pick appropriate button/elements
        const [button, ONelems, OFFelems] = (
            mode == 'fullScreen' ? [fullScreenBtn, fullScreenONelems, fullScreenOFFelems]
          : mode == 'fullWindow' ? [fullWindowBtn, fullWindowElems, fullWindowElems]
          : mode == 'wideScreen' ? [wideScreenBtn, wideScreenONelems, wideScreenOFFelems]
                                 : [newChatBtn, newChatElems, newChatElems])

        // Initialize rem margin offset vs. OpenAI's .mr-1 for hover overlay centeredness
        const lMargin = mode == 'wideScreen' ? .11 : .12, rMargin = (.25 - lMargin)

        // Set SVG attributes
        const buttonSVG = button.querySelector('svg') || document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        buttonSVG.setAttribute('height', 18) // prevent shrinking   
        if (mode == 'fullWindow') { // stylize full-window button
            buttonSVG.setAttribute('stroke', buttonColor)
            buttonSVG.setAttribute('fill', 'none')
            buttonSVG.setAttribute('stroke-width', '2')
            buttonSVG.setAttribute('height', site == 'poe' ? '2em' : 18)
            buttonSVG.setAttribute('width', site == 'poe' ? '2em' : 18)
        }
        buttonSVG.setAttribute('class', sendImgClasses) // assign borrowed classes
        buttonSVG.setAttribute( // center oerlay + prevent triggering tooltips twice
            'style', `margin: 0 ${ rMargin }rem 0 ${ lMargin }rem ; pointer-events: none`)
        buttonSVG.setAttribute('viewBox', svgViewBox) // set pre-tweaked viewbox

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
        tooltipDiv.style.opacity = event.type == 'mouseover' ? '0.8' : '0'
    }

    function updateTooltip(buttonType) { // text & position
        tooltipDiv.innerText = chrome.i18n.getMessage('tooltip_' + buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'OFF' : 'ON')))
        const ctrAddend = 25 + ( site == 'poe' ? 42 : 0 ), spreadFactor = site == 'poe' ? 42 : 30,
              iniRoffset = spreadFactor * ( buttonType.includes('fullScreen') ? 1
                                          : buttonType.includes('fullWindow') ? 2
                                          : buttonType.includes('wide') ? 3 : 4 ) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width / 2}px`
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
            if (site == 'poe') syncMode('fullWindow') ; else chatgpt.sidebar.show()
        } else if (mode == 'fullScreen') {
            if (config.f11)
                alert(chrome.i18n.getMessage('alert_pressF11'), chrome.i18n.getMessage('alert_f11reason') + '.')
            document.exitFullscreen().catch(err => console.error(config.appSymbol + ' >> Failed to exit fullscreen', err))
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

    function syncMode(mode) { // setting + icon + tooltip
        const state = ( mode == 'wideScreen' ? !!document.querySelector('#wideScreen-mode')
                      : mode == 'fullWindow' ? ( site == 'poe' ? !!document.querySelector('#fullWindow-mode')
                                                               : chatgpt.sidebar.isOff() )
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
              site == 'openai' ? (
                  inputSelector + `{ padding-right: ${ config.ncbDisabled ? 126 : 152 }px }` // narrow input to accomodate btns
                + 'div.group > div > div > div > div:nth-child(2) { ' // move response paginator
                    + 'position: relative ; left: 66px ; top: 7px } ' // ...below avatar to avoid cropping
                + ( config.hiddenHeader ? hhStyle : '' ) // hide header
                + ( config.hiddenFooter ? hfStyle : '' )) : '' ) // hide footer
        + ( !config.tcbDisabled ? tcbStyle : '' ) // expand text input vertically
        + `#newChat-button { display: ${ config.ncbDisabled ? 'none' : 'flex' }}`
    }

    function updateWidescreenStyle() {
        wideScreenStyle.innerText = (
              site == 'openai' ? (
                  '.text-base { max-width: 100% !important }' // widen outer container
                + '.text-base:nth-of-type(2) { max-width: 97% !important }' // widen inner container
                + '#__next > div > div.flex { width: 100px }' ) // prevent sidebar shrinking when zoomed
            : site == 'poe' ? (
                  '[class^="MainColumn_column"] { width: 100% !important }' // widen outer container
                + '[class*="ChatPageMain_container"] { max-width: 97% !important }' // widen inner container
                + '[class^="Message"] { max-width: 100% !important }' // widen speech bubbles
                + '[class^="ChatMessageInputFooter"] { max-width: 618px ; margin: auto }' ) // preserve chatbar width
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
                    if (config.wideScreen) toggleMode('wideScreen', 'ON')
                    if (config.fullWindow) toggleMode('fullWindow', 'ON')
                    updateTweaksStyle() // sync taller chatbox + hidden header/footer
                    updateWidescreenStyle() // sync wider chatbox
    }})}

})()
