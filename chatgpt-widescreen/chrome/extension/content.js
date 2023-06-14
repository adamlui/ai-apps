/* NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org */
/* (c) 2023 KudoAI & contributors under the MIT license */
/* Source: https://github.com/chatgptjs/chatgpt.js */

(async () => {

    document.documentElement.setAttribute('cwm-extension-installed', true) // for userscript auto-disable

    // Import libs
    var { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'))
    var { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add Chrome msg listener
    chrome.runtime.onMessage.addListener((request) => {
        if (request.action === 'notify') notify(request.msg, request.position)
        else if (request.action === 'alert') alert(request.title, request.msg, request.btns)
        else window[request.action]()
        return true
    })

    await chatgpt.isLoaded()

    // Initialize settings
    var appSymbol = '🖥️' ; config.fullScreen = chatgpt.isFullScreen()

    // Collect OpenAI classes
    var sendButtonClasses = (document.querySelector('form button[class*="bottom"]') || {}).classList || []
    var sendSVGclasses = (document.querySelector('form button[class*="bottom"] svg') || {}).classList || []
    var inputTextAreaClasses = (document.querySelector("form button[class*='bottom']") || {}).previousSibling.classList || []
    var mainDivClasses = (document.querySelector('#__next > div > div.flex') || {}).classList || []
    var sidepadClasses = (document.querySelector('#__next > div > div') || {}).classList || []
    var sidebarClasses = (document.querySelector('#__next > div > div.dark') || {}).classList || []

    // Create/stylize tooltip div
    var tooltipDiv = document.createElement('div')
    tooltipDiv.classList.add('toggle-tooltip')
    var tooltipStyle = document.createElement('style')
    tooltipStyle.innerHTML = '.toggle-tooltip {'
        + 'background: black ; padding: 5px ; border-radius: 6px ; ' // box style
        + 'font-size: 0.7rem ; color: white ; ' // font style
        + 'position: absolute ; bottom: 50px ; ' // v-position
        + 'opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 ; ' // visibility
        + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }' // disable select
    document.head.appendChild(tooltipStyle)

    // Create general style tweaks
    var tweaksStyle = document.createElement('style')
    var tcbStyle = 'form > div > div:nth-child(2), form textarea { max-height: 68vh !important; } '
    updateTweaksStyle() ; document.head.appendChild(tweaksStyle)

    // Create wide screen style
    var wideScreenStyle = document.createElement('style')
    wideScreenStyle.id = 'wideScreen-mode' // for toggleMode()
    wideScreenStyle.innerHTML = '.text-base { max-width: 93% !important } '
        + 'div' + classListToCSS(mainDivClasses) + '{ width: 100px }' // prevent sidebar shrinking when zoomed

    // Create full-window style
    var fullWindowStyle = document.createElement('style')
    fullWindowStyle.id = 'fullWindow-mode' // for toggleMode()
    fullWindowStyle.innerHTML = classListToCSS(sidebarClasses) + '{ display: none }' // hide sidebar
        + classListToCSS(sidepadClasses) + '{ padding-left: 0px }' // remove side padding

    var buttonColor = setBtnColor()

    // Create full screen button & add icon/classes/position/listeners
    var fullScreenButton = document.createElement('div') // create button
    fullScreenButton.id = 'fullScreen-button' // for toggleTooltip()
    updateBtnSVG('fullScreen') // insert icon
    fullScreenButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    fullScreenButton.style.cssText = 'right: 2.57rem' // position left of wide screen button
    fullScreenButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    fullScreenButton.addEventListener('click', () => { toggleMode('fullScreen') })
    fullScreenButton.addEventListener('mouseover', toggleTooltip)
    fullScreenButton.addEventListener('mouseout', toggleTooltip)

    // Create full-window button & add icon/classes/position/listeners
    var fullWindowButton = document.createElement('div') // create button
    fullWindowButton.id = 'fullWindow-button' // for toggleTooltip()
    updateBtnSVG('fullWindow') // insert icon
    fullWindowButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    fullWindowButton.style.cssText = 'right: 4.34rem' // position left of wide screen button
    fullWindowButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    fullWindowButton.addEventListener('click', () => { toggleMode('fullWindow') })
    fullWindowButton.addEventListener('mouseover', toggleTooltip)
    fullWindowButton.addEventListener('mouseout', toggleTooltip)

    // Create wide screen button & add icon/classes/position/icon/listeners
    var wideScreenButton = document.createElement('div') // create button
    wideScreenButton.id = 'wideScreen-button' // for toggleTooltip()
    updateBtnSVG('wideScreen') // insert icon
    wideScreenButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    wideScreenButton.style.cssText = 'right: 6.11rem' // position left of Send button
    wideScreenButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    wideScreenButton.addEventListener('click', () => { toggleMode('wideScreen') })
    wideScreenButton.addEventListener('mouseover', toggleTooltip)
    wideScreenButton.addEventListener('mouseout', toggleTooltip)

    // Create new chat button & add icon/classes/position/icon/listeners
    var newChatButton = document.createElement('div') // create button
    newChatButton.id = 'newChat-button' // for toggleTooltip()
    updateBtnSVG('newChat') // insert icon
    newChatButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    newChatButton.style.cssText = 'right: 7.88rem' // position left of full-window button
    newChatButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    newChatButton.addEventListener('click', () => { chatgpt.startNewChat() })
    newChatButton.addEventListener('mouseover', toggleTooltip)
    newChatButton.addEventListener('mouseout', toggleTooltip)

    // Insert buttons
    settings.load('extensionDisabled').then(function() {
        if (!config.extensionDisabled) insertBtns() // eslint-disable-line no-undef
    })

    // Monitor node changes to update button visibility + auto-toggle once + manage send button's tooltip
    var prevSessionChecked = false
    var navObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type === 'childList' && addedNodes.length) {

            // Restore previous session's state + manage toggles
            settings.load(['wideScreen', 'fullWindow', 'fullerWindow', 'tcbDisabled', 'extensionDisabled']).then(function() {
                if (!config.extensionDisabled) {                    
                    if (!prevSessionChecked) { // restore previous session's state
                        if (config.wideScreen) toggleMode('wideScreen', 'ON')
                        if (config.fullWindow) toggleMode('fullWindow', 'ON')
                        if (config.tcbDisabled) updateTweaksStyle()
                        prevSessionChecked = true
                    }
                    insertBtns() // eslint-disable-line no-undef
                }
                prevSessionChecked = true // even if extensionDisabled, to avoid double-toggle
            })

            // Manage send button's tooltip
            var sendButton = document.querySelector('form button[class*="bottom"]')
            if (sendButton) { // add/remove tooltip based on enabled state
                if (!sendButton.hasAttribute('disabled') && !sendButton.hasAttribute('hasTooltip')) {
                    sendButton.addEventListener('mouseover', toggleTooltip)
                    sendButton.addEventListener('mouseout', toggleTooltip)
                    sendButton.setAttribute('hasTooltip', true)
                } else if (sendButton.hasAttribute('disabled') && sendButton.hasAttribute('hasTooltip')) {
                    tooltipDiv.style.opacity = '0' // hide tooltip in case cursor was hovering
                    sendButton.removeEventListener('mouseover', toggleTooltip)
                    sendButton.removeEventListener('mouseout', toggleTooltip)
                    sendButton.removeAttribute('hasTooltip')
                }
            }
        }
    }) ; navObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Monitor scheme changes to update button colors
    var schemeObserver = new MutationObserver(([{ type, target }]) => {
        if (target === document.documentElement && type === 'attributes' && target.getAttribute('class'))
            settings.load(['extensionDisabled']).then(function() {
                if (!config.extensionDisabled) {
                    buttonColor = setBtnColor()
                    updateBtnSVG('fullScreen') ; updateBtnSVG('fullWindow')
                    updateBtnSVG('wideScreen') ; updateBtnSVG('newChat')
    }})}) ; schemeObserver.observe(document.documentElement, { attributes: true })

    // Monitor sidebar button to update full-window setting
    var sidebarObserver = new MutationObserver(() => {
        settings.load(['extensionDisabled']).then(() => {
            if (!config.extensionDisabled) {
                var fullWindowState = chatgpt.sidebar.isOff()
                if ((config.fullWindow && !fullWindowState) || (!config.fullWindow && fullWindowState))
                    if (!config.modeSynced) syncMode('fullWindow')
    }})}) ; sidebarObserver.observe(document.body, { childList: true, subtree: true })

    // Add full screen listeners to update setting/button + set F11 flag
    window.addEventListener('resize', () => { // sync full screen settings/button
        settings.load(['extensionDisabled']).then(function() {
            if (!config.extensionDisabled) {
                var fullScreenState = chatgpt.isFullScreen()
                if (config.fullScreen && !fullScreenState) { syncMode('fullScreen') ; config.f11 = false } // exiting full screen
                else if (!config.fullScreen && fullScreenState) syncMode('fullScreen') // entering full screen
    }})})
    window.addEventListener('keydown', () => { // set F11 flag for toggleMode() disabled warning
        if ((event.key === 'F11' || event.keyCode === 122) && !config.fullScreen) config.f11 = true // set flag if entering full screen via F11
    })

    // Define GENERAL functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ appSymbol } ${ msg }`, position, notifDuration, shadow ? shadow : ( isDarkMode() ? '' : 'shadow')) }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function classListToCSS(classList) { // convert DOM classList to single CSS selector
        return '.' + [...classList].join('.') // prepend dot to dot-separated string
            .replaceAll(/([:\[\]])/g, '\\$1') // escape CSS special chars
    }

    // Define BUTTON functions

    function setBtnColor() { return chatgpt.isDarkMode() || chatgpt.history.isOff() ? 'white' : '#202123' }

    function updateBtnSVG(mode, state = '') {

        // Define SVG viewbox + elems
        var svgViewBox = ( mode == 'newChat' ? '11 6 ' : mode == 'fullWindow' ? '0 0 ' : '8 8 ' ) // move to XY coords to crop whitespace
            + ( mode == 'newChat' ? '13 13' : mode == 'fullWindow' ? '24 24' : '20 20' ) // shrink to fit size
        var fullScreenONelems = `
            <path fill="${ buttonColor }" d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"></path>`
        var fullScreenOFFelems = `
            <path fill="${ buttonColor }" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
            <path fill="${ buttonColor }" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
            <path fill="${ buttonColor }" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>`
        var fullWindowElems = `
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>`
        var wideScreenONelems = `
            <path fill="${ buttonColor }" fill-rule="evenodd"
                d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z"></path>`
        var wideScreenOFFelems = `
            <path fill="${ buttonColor }" fill-rule="evenodd"
                d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z"></path>`
        var newChatElems = `<path fill="${ buttonColor }"d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z"></path>`

        // Pick appropriate button/elements
        var [button, ONelems, OFFelems] = (
            mode == 'fullScreen' ? [fullScreenButton, fullScreenONelems, fullScreenOFFelems]
          : mode == 'fullWindow' ? [fullWindowButton, fullWindowElems, fullWindowElems]
          : mode == 'wideScreen' ? [wideScreenButton, wideScreenONelems, wideScreenOFFelems]
                                 : [newChatButton, newChatElems, newChatElems])

        // Initialize rem margin offset vs. OpenAI's .mr-1 for hover overlay centeredness
        var lMargin = mode == 'wideScreen' ? .11 : .12
        var rMargin = (.25 - lMargin)

        // Update SVG
        button.innerHTML = '<svg '
            + (mode == 'fullWindow' ? `stroke="${ buttonColor }" fill="none" stroke-width="2" height="1em" width="1em"` : '')
            + `class="${ sendSVGclasses }" ` // assign borrowed classes
            + `style="margin: 0 ${ rMargin }rem 0 ${ lMargin }rem ; ` // center overlay
            + 'pointer-events: none" ' // prevent triggering tooltips twice
            + `viewBox="${ svgViewBox }"> ` // set pre-tweaked viewbox
            + (config[mode] || state.toLowerCase() == 'on' ? ONelems : OFFelems + '</svg>') // dynamically insert elems based on loaded key
    }

    // Define TOOLTIP functions

    function toggleTooltip(event) {
        var buttonType = (
            event.target.id.includes('fullScreen') ? 'fullScreen' :
            event.target.id.includes('fullWindow') ? 'fullWindow' :
            event.target.id.includes('wide') ? 'wideScreen' :
            event.target.id.includes('new') ? 'newChat' : 'sendMsg')
        updateTooltip(buttonType) // since mouseover's can indicate button change
        tooltipDiv.style.opacity = event.type === 'mouseover' ? '0.8' : '0' // toggle visibility
    }

    function updateTooltip(buttonType) { // text & position

        tooltipDiv.innerHTML = chrome.i18n.getMessage('tooltip_' + buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'OFF' : 'ON')))
        var ctrAddend = 25, overlayWidth = 30
        var iniRoffset = overlayWidth * (
              buttonType.includes('send') ? 0
            : buttonType.includes('fullScreen') ? 1
            : buttonType.includes('fullWindow') ? 2
            : buttonType.includes('wide') ? 3 : 4) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width / 2 }px`
    }

    // Define MODE functions

    function activateMode(mode) {
        if (mode == 'wideScreen') { document.head.appendChild(wideScreenStyle) ; syncMode('wideScreen') }
        else if (mode == 'fullWindow') { document.head.appendChild(fullWindowStyle) ; chatgpt.sidebar.hide() }
        else if (mode == 'fullScreen') document.documentElement.requestFullscreen()
    }

    function deactivateMode(mode) {
        if (mode == 'wideScreen') try { document.head.removeChild(wideScreenStyle) ; syncMode('wideScreen') } catch (error) {}
        else if (mode == 'fullWindow') { try { document.head.removeChild(fullWindowStyle) } catch (error) { console.error(error)} chatgpt.sidebar.show() }
        else if (mode == 'fullScreen') {
            if (config.f11)
                alert(chrome.i18n.getMessage('alert_pressF11'), chrome.i18n.getMessage('alert_f11reason') + '.')
            else try { document.exitFullscreen() } catch (error) { console.error(appSymbol + ' >> ', error) }
    }}

    function toggleMode(mode, state = '') {
        switch (state.toUpperCase()) {
            case 'ON' : activateMode(mode) ; break
            case 'OFF' : deactivateMode(mode) ; break
            default : config[mode] ? deactivateMode(mode) : activateMode(mode)
        }
    }

    function syncMode(mode) { // setting + icon + tooltip')

        var state = ( mode === 'wideScreen' ? !!document.querySelector('#wideScreen-mode')
                    : mode === 'fullWindow' ? !!chatgpt.sidebar.isOff()
                                            : chatgpt.isFullScreen() )
        settings.save(mode, state) ; updateBtnSVG(mode) ; updateTooltip(mode)

        // Handle fuller window & OpenAI toggle
        if (mode === 'fullWindow') {
            if (state && config.fullerWindows && !config.wideScreen) { // activate fuller window
                document.head.appendChild(wideScreenStyle) ; updateBtnSVG('wideScreen', 'on')
            } else if (!state) {
                try { document.head.removeChild(fullWindowStyle) } catch (error) {} // remove style too so sidebar shows
                if (!config.wideScreen) { // disable widescreen if result of fuller window
                    try { document.head.removeChild(wideScreenStyle) } catch (error) {} updateBtnSVG('wideScreen', 'off')
        }}}

        settings.load('notifHidden').then(function() {
            if (!config.notifHidden) { // notify synced state
                notify(`${ chrome.i18n.getMessage('mode_' + mode) } ${ state ? 'ON' : 'OFF' }`)
        }})

        config.modeSynced = true ; setTimeout(() => { config.modeSynced = false }, 100) // prevent repetition
    }

    function updateTweaksStyle() {
        tweaksStyle.innerHTML = (
               classListToCSS(inputTextAreaClasses) + ' { padding-right: 145px } ' // make input text area accomdate buttons
            + 'div.group > div > div:first-child > div:nth-child(2) { ' // move response paginator
                + 'position: relative ; left: 54px ; top: 7px } ' // ...below avatar to avoid cropping
            + ( !config.tcbDisabled ? tcbStyle : '' )) // expand text input vertically        
    }

    // Define EXPRESSION functions for listeners

    insertBtns = () => { // eslint-disable-line no-undef
        var chatbar = document.querySelector("form button[class*='bottom']").parentNode
        if (chatbar.contains(fullWindowButton)) return // if buttons aren't missing, exit
        else { chatbar.append(newChatButton, fullWindowButton, wideScreenButton, fullScreenButton, tooltipDiv) }
    }

    removeBtns = () => { // eslint-disable-line no-undef
        var chatbar = document.querySelector('form button[class*="bottom"]').parentNode
        if (!chatbar.contains(fullWindowButton)) return // if buttons are missing, exit
        else { // remove chat toggles
            var nodesToRemove = [newChatButton, fullWindowButton, wideScreenButton, fullScreenButton, tooltipDiv];
            for (var i = 0 ; i < nodesToRemove.length ; i++) { chatbar.removeChild(nodesToRemove[i]) }
    }}

    syncExtension = () => { // eslint-disable-line no-undef
        settings.load('extensionDisabled', 'fullerWindow', 'tcbDisabled', 'notifHidden') // sync toggle settings
            .then(function() {
                if (config.extensionDisabled) { // try to disable modes
                    try { document.head.removeChild(wideScreenStyle) } catch {}
                    try { document.head.removeChild(fullWindowStyle) ; chatgpt.sidebar.show() } catch {}
                    tweaksStyle.innerHTML = tweaksStyle.innerHTML.replace(tcbStyle, '')
                    removeBtns() // eslint-disable-line no-undef
                } else updateTweaksStyle() // sync taller chatbox
    })}

})()
