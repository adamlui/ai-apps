/* NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org */
/* (c) 2023 KudoAI & contributors under the MIT license */
/* Source: https://github.com/chatgptjs/chatgpt.js */

(async () => {

    document.documentElement.setAttribute('cwm-extension-installed', true) // for userscript auto-disable

    // Import libs
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'))
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add Chrome action msg listener
    chrome.runtime.onMessage.addListener((request) => {
        if (request.action === 'notify') notify(request.msg, request.position)
        else if (request.action === 'alert') alert(request.title, request.msg, request.btns)
        else if (typeof window[request.action] === 'function') {
            const args = Array.isArray(request.args) ? request.args // preserve array if supplied
                       : request.args !== undefined ? [request.args] : [] // convert to array if single or no arg
            window[request.action](...args) // call expression functions
        }
        return true
    })

    await chatgpt.isLoaded()

    // Initialize config
    config = { appSymbool: '🖥️', fullScreen: chatgpt.isFullScreen() }

    // Collect OpenAI classes
    const sendButtonClasses = (document.querySelector('form button[class*="bottom"]') || {}).classList || []
    const sendSVGclasses = (document.querySelector('form button[class*="bottom"] svg') || {}).classList || []
    const inputTextAreaClasses = (document.querySelector("form button[class*='bottom']") || {}).previousSibling.classList || []
    const mainDivClasses = (document.querySelector('#__next > div > div.flex') || {}).classList || []
    const sidepadClasses = (document.querySelector('#__next > div > div') || {}).classList || []
    const sidebarClasses = (document.querySelector('#__next > div > div.dark') || {}).classList || []

    // Create/stylize tooltip div
    const tooltipDiv = document.createElement('div')
    tooltipDiv.classList.add('toggle-tooltip')
    const tooltipStyle = document.createElement('style')
    tooltipStyle.innerText = '.toggle-tooltip {'
        + 'background: black ; padding: 5px ; border-radius: 6px ; ' // box style
        + 'font-size: 0.7rem ; color: white ; ' // font style
        + 'position: absolute ; bottom: 50px ; ' // v-position
        + 'opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 ; ' // visibility
        + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }' // disable select
    document.head.appendChild(tooltipStyle)

    // Create general style tweaks
    const tweaksStyle = document.createElement('style')
    const tcbStyle = 'form > div > div:nth-child(2), form textarea { max-height: 68vh !important } '
    updateTweaksStyle() ; document.head.appendChild(tweaksStyle)

    // Create wide screen style
    const wideScreenStyle = document.createElement('style')
    wideScreenStyle.id = 'wideScreen-mode' // for toggleMode()
    wideScreenStyle.innerText = '.text-base, main > div > div > div > div > div { max-width: 93% !important } '
        + 'div' + classListToCSS(mainDivClasses) + '{ width: 100px }' // prevent sidebar shrinking when zoomed

    // Create full-window style
    const fullWindowStyle = document.createElement('style')
    fullWindowStyle.id = 'fullWindow-mode' // for toggleMode()
    fullWindowStyle.innerText = classListToCSS(sidebarClasses) + '{ display: none }' // hide sidebar
        + classListToCSS(sidepadClasses) + '{ padding-left: 0px }' // remove side padding

    let buttonColor = setBtnColor()

    // Create/insert chatbar buttons
    const buttonTypes = ['fullScreen', 'fullWindow', 'wideScreen', 'newChat']
    for (let i = 0 ; i < buttonTypes.length ; i++) {
        ((buttonType) => { // enclose in IIFE to separately capture button type for async listeners
            const buttonName = buttonType + 'Button'
            window[buttonName] = document.createElement('div') // create button
            window[buttonName].id = buttonType + '-button' // for toggleTooltip()
            updateBtnSVG(buttonType); // insert icon
            window[buttonName].setAttribute('class', sendButtonClasses) // assign borrowed classes
            window[buttonName].style.cssText = `right: ${2.57 + i * 1.77}rem` // position left of prev button
            window[buttonName].style.cursor = 'pointer' // add finger cursor // 添加鼠标手势为手指
            window[buttonName].addEventListener('click', () => { // add click listeners
                if (buttonType === 'newChat') chatgpt.startNewChat() ; else toggleMode(buttonType) })
            window[buttonName].addEventListener('mouseover', toggleTooltip)
            window[buttonName].addEventListener('mouseout', toggleTooltip)
        })(buttonTypes[i])
    } settings.load('extensionDisabled').then(() => {
        if (!config.extensionDisabled) insertBtns() // eslint-disable-line no-undef
    })

    // Monitor node changes to update button visibility + auto-toggle once
    let prevSessionChecked = false
    const nodeObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type === 'childList' && addedNodes.length) {

            // Restore previous session's state + manage toggles
            settings.load(['wideScreen', 'fullWindow', 'fullerWindows', 'tcbDisabled', 'extensionDisabled']).then(() => {
                if (!config.extensionDisabled) {                    
                    if (!prevSessionChecked) { // restore previous session's state
                        if (config.wideScreen) toggleMode('wideScreen', 'ON')
                        if (config.fullWindow) { toggleMode('fullWindow', 'ON')
                            // Also sync/notify since sidebar observer's syncMode('fullWindow') doesn't trigger
                            syncFullerWindows(true) ; notify(chrome.i18n.getMessage('mode_fullWindow') + ' ON')
                        }
                        if (config.tcbDisabled) updateTweaksStyle()
                        prevSessionChecked = true
                    }
                    insertBtns() // eslint-disable-line no-undef
                } prevSessionChecked = true // even if extensionDisabled, to avoid double-toggle
            })

    }}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Monitor scheme changes to update button colors
    const schemeObserver = new MutationObserver(([{ type, target }]) => {
        if (target === document.documentElement && type === 'attributes' && target.getAttribute('class'))
            settings.load(['extensionDisabled']).then(() => {
                if (!config.extensionDisabled) {
                    buttonColor = setBtnColor()
                    updateBtnSVG('fullScreen') ; updateBtnSVG('fullWindow')
                    updateBtnSVG('wideScreen') ; updateBtnSVG('newChat')
    }})}) ; schemeObserver.observe(document.documentElement, { attributes: true })

    // Monitor sidebar button to update full-window setting
    const sidebarObserver = new MutationObserver(() => {
        settings.load(['extensionDisabled']).then(() => {
            if (!config.extensionDisabled) {
                const fullWindowState = chatgpt.sidebar.isOff()
                if ((config.fullWindow && !fullWindowState) || (!config.fullWindow && fullWindowState))
                    if (!config.modeSynced) syncMode('fullWindow')
    }})})
    setTimeout(() => { // delay half-sec before observing to avoid repeated toggles from nodeObserver
        sidebarObserver.observe(document.body, { childList: true, subtree: true })}, 500)

    // Add full screen listeners to update setting/button + set F11 flag
    window.addEventListener('resize', () => { // sync full screen settings/button
        settings.load(['extensionDisabled']).then(() => {
            if (!config.extensionDisabled) {
                const fullScreenState = chatgpt.isFullScreen()
                if (config.fullScreen && !fullScreenState) { syncMode('fullScreen') ; config.f11 = false } // exiting full screen
                else if (!config.fullScreen && fullScreenState) syncMode('fullScreen') // entering full screen
    }})})
    window.addEventListener('keydown', () => { // set F11 flag for toggleMode() disabled warning
        if ((event.key === 'F11' || event.keyCode === 122) && !config.fullScreen) config.f11 = true
    })

    // Define GENERAL functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow ? shadow : ( chatgpt.isDarkMode() ? '' : 'shadow' ))}

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function classListToCSS(classList) { // convert DOM classList to single CSS selector
        return '.' + [...classList].join('.') // prepend dot to dot-separated string
            .replaceAll(/([:\[\]])/g, '\\$1') // escape CSS special chars
    }

    // Define BUTTON functions

    function setBtnColor() { return chatgpt.isDarkMode() || chatgpt.history.isOff() ? 'white' : '#202123' }

    function insertBtns() { // eslint-disable-line no-undef
        const chatbar = document.querySelector("form button[class*='bottom']").parentNode
        if (chatbar.contains(fullWindowButton)) return // if buttons aren't missing, exit
        else { chatbar.append(newChatButton, fullWindowButton, wideScreenButton, fullScreenButton, tooltipDiv) }
    }

    function removeBtns() { // eslint-disable-line no-undef
        const chatbar = document.querySelector('form button[class*="bottom"]').parentNode
        if (!chatbar.contains(fullWindowButton)) return // if buttons are missing, exit
        else { // remove chat toggles
            const nodesToRemove = [newChatButton, fullWindowButton, wideScreenButton, fullScreenButton, tooltipDiv]
            for (let i = 0 ; i < nodesToRemove.length ; i++) { chatbar.removeChild(nodesToRemove[i]) }
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
            mode == 'fullScreen' ? [fullScreenButton, fullScreenONelems, fullScreenOFFelems]
          : mode == 'fullWindow' ? [fullWindowButton, fullWindowElems, fullWindowElems]
          : mode == 'wideScreen' ? [wideScreenButton, wideScreenONelems, wideScreenOFFelems]
                                 : [newChatButton, newChatElems, newChatElems])

        // Initialize rem margin offset vs. OpenAI's .mr-1 for hover overlay centeredness
        const lMargin = mode == 'wideScreen' ? .11 : .12
        const rMargin = (.25 - lMargin)

        // Set SVG attributes
        const buttonSVG = button.querySelector('svg') || document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        if (mode == 'fullWindow') { // stylize full-window button
            buttonSVG.setAttribute('stroke', buttonColor)
            buttonSVG.setAttribute('fill', 'none')
            buttonSVG.setAttribute('stroke-width', '2')
            buttonSVG.setAttribute('height', '1em')
            buttonSVG.setAttribute('width', '1em')
        }
        buttonSVG.setAttribute('class', sendSVGclasses) // assign borrowed classes
        buttonSVG.setAttribute( // center oerlay + prevent triggering tooltips twice
            'style', `margin: 0 ${rMargin}rem 0 ${lMargin}rem ; pointer-events: none`)
        buttonSVG.setAttribute('viewBox', svgViewBox) // set pre-tweaked viewbox

        // Update SVG elements
        while (buttonSVG.firstChild) { buttonSVG.removeChild(buttonSVG.firstChild) }
        const svgElems = config[mode] || state.toLowerCase() === 'on' ? ONelems : OFFelems
        svgElems.forEach(elem => { buttonSVG.appendChild(elem) })

        // Update SVG
        if (!button.contains(buttonSVG)) button.appendChild(buttonSVG)
    }

    function createSVGelem(tagName, attributes) {
        const elem = document.createElementNS('http://www.w3.org/2000/svg', tagName)
        for (const attr in attributes) elem.setAttributeNS(null, attr, attributes[attr])       
        return elem
    }

    // Define TOOLTIP functions

    function toggleTooltip(event) {
        const buttonType = (
            event.target.id.includes('fullScreen') ? 'fullScreen' :
            event.target.id.includes('fullWindow') ? 'fullWindow' :
            event.target.id.includes('wide') ? 'wideScreen' : 'newChat')
        updateTooltip(buttonType) // since mouseover's can indicate button change
        tooltipDiv.style.opacity = event.type === 'mouseover' ? '0.8' : '0' // toggle visibility
    }

    function updateTooltip(buttonType) { // text & position

        tooltipDiv.innerText = chrome.i18n.getMessage('tooltip_' + buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'OFF' : 'ON')))
        const ctrAddend = 25, overlayWidth = 30
        const iniRoffset = overlayWidth * (
              buttonType.includes('fullScreen') ? 1
            : buttonType.includes('fullWindow') ? 2
            : buttonType.includes('wide') ? 3 : 4 ) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width / 2 }px`
    }

    // Define TOGGLE functions

    function activateMode(mode) {
        if (mode == 'wideScreen') { document.head.appendChild(wideScreenStyle) ; syncMode('wideScreen') }
        else if (mode == 'fullWindow') { document.head.appendChild(fullWindowStyle) ; chatgpt.sidebar.hide() }
        else if (mode == 'fullScreen') document.documentElement.requestFullscreen()
        
    }

    function deactivateMode(mode) {
        if (mode == 'wideScreen') try { document.head.removeChild(wideScreenStyle) ; syncMode('wideScreen') } catch (error) {}
        else if (mode == 'fullWindow') {
            try { document.head.removeChild(fullWindowStyle) } catch (error) { console.error(error) } chatgpt.sidebar.show() }
        else if (mode == 'fullScreen') {
            if (config.f11)
                alert(chrome.i18n.getMessage('alert_pressF11'), chrome.i18n.getMessage('alert_f11reason') + '.')
            else try { document.exitFullscreen() } catch (error) { console.error(config.appSymbol + ' >> ', error) }
    }}

    function toggleMode(mode, state = '') {
        switch (state.toUpperCase()) {
            case 'ON' : activateMode(mode) ; break
            case 'OFF' : deactivateMode(mode) ; break
            default : config[mode] ? deactivateMode(mode) : activateMode(mode)
        }
    }

    // Define SYNC functions

    function syncMode(mode) { // setting + icon + tooltip
        const state = ( mode === 'wideScreen' ? !!document.querySelector('#wideScreen-mode')
                      : mode === 'fullWindow' ? !!chatgpt.sidebar.isOff()
                                              : chatgpt.isFullScreen() )
        settings.save(mode, state) ; updateBtnSVG(mode) ; updateTooltip(mode)
        if (mode === 'fullWindow') syncFullerWindows(state)
        settings.load('notifHidden').then(() => {
            if (!config.notifHidden) { // notify synced state
                notify(`${ chrome.i18n.getMessage('mode_' + mode) } ${ state ? 'ON' : 'OFF' }`)
        }})
        config.modeSynced = true ; setTimeout(() => { config.modeSynced = false }, 100) // prevent repetition
    }

    function syncFullerWindows(fullWindowState) {
        if (fullWindowState && config.fullerWindows && !config.wideScreen) { // activate fuller windows
            document.head.appendChild(wideScreenStyle) ; updateBtnSVG('wideScreen', 'on')
        } else if (!fullWindowState) { // de-activate fuller windows
            try { document.head.removeChild(fullWindowStyle) } catch (error) {} // remove style too so sidebar shows
            if (!config.wideScreen) { // disable widescreen if result of fuller window
                try { document.head.removeChild(wideScreenStyle) } catch (error) {} updateBtnSVG('wideScreen', 'off')
    }}}

    function updateTweaksStyle() {
        tweaksStyle.innerText = (
               classListToCSS(inputTextAreaClasses) + ' { padding-right: 145px } ' // make input text area accomdate buttons
            + 'div.group > div > div:first-child > div:nth-child(2) { ' // move response paginator
                + 'position: relative ; left: 54px ; top: 7px } ' // ...below avatar to avoid cropping
            + ( !config.tcbDisabled ? tcbStyle : '' )) // expand text input vertically        
    }

    syncExtension = () => { // settings, then disable modes or sync taller chatbox
        settings.load('extensionDisabled', 'fullerWindows', 'tcbDisabled', 'notifHidden')
            .then(() => {
                if (config.extensionDisabled) { // try to disable modes
                    try { document.head.removeChild(wideScreenStyle) } catch {}
                    try { document.head.removeChild(fullWindowStyle) ; chatgpt.sidebar.show() } catch {}
                    tweaksStyle.innerText = tweaksStyle.innerText.replace(tcbStyle, '')
                    removeBtns() // eslint-disable-line no-undef
                } else {
                    syncFullerWindows(config.fullerWindows)
                    updateTweaksStyle() // sync taller chatbox
    }})}

})()
