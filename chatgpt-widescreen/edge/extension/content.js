/* NOTE: This script uses code from the powerful chatgpt.js library @ https://chatgpt.js.org */
/* (c) 2023 Adam Lui, chatgpt.js & contributors under the MIT license. */

(async function() {

    // Import libs
    var { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'))
    var { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add msg listener
    chrome.runtime.onMessage.addListener(function(request) {
        if (request.type === 'notify') chatgpt.notify(request.msg, request.position)
        else window[request.type]()
        return true
    })

    var tooltips = {
        wideScreenON: 'Exit wide screen', wideScreenOFF: 'Wide screen',
        fullWindowON: 'Exit full window', fullWindowOFF: 'Full-window mode',
        newChat: 'New chat', sendMsg: 'Send message'
    }

    // Collect OpenAI classes/colors
    var sendButtonColor = 'currentColor' // changes w/ scheme
    var sendButtonClasses = document.querySelector('form button[class*="bottom"]').classList
    var sendSVGclasses = document.querySelector('form button[class*="bottom"] > svg').classList
    var inputTextAreaClasses = document.querySelector("form button[class*='bottom']").previousSibling.classList
    var sidepadClasses = document.querySelector('#__next > div > div').classList
    var sidebarClasses = document.querySelector('#__next > div > div.dark').classList
    var mainDivClasses = document.querySelector('#__next > div > div.flex').classList

    // Create/stylize tooltip div
    var tooltipDiv = document.createElement('div')
    tooltipDiv.classList.add('toggle-tooltip')
    var tooltipStyle = document.createElement('style')
    tooltipStyle.innerHTML = `.toggle-tooltip {
        /* Box style */   background: black ; padding: 5px ; border-radius: 6px ;
        /* Font style */  font-size: 0.7rem ; color: white ;
        /* V-position */  position: absolute ; top: -22px ;
        /* Visibility */  opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 }`
    document.head.appendChild(tooltipStyle)

    // General style tweaks
    var tweaksStyle = document.createElement('style')
    tweaksStyle.innerHTML = (
        classListToCSS(inputTextAreaClasses) + ' { padding-right: 115px } ' // make input text area accomdate buttons
        + 'div.group > div > div:first-child > div:nth-child(2) { ' // move response paginator
            + 'position: relative ; left: 54px ; top: 7px ; } ' ) // ...below avatar to avoid cropping
    document.head.appendChild(tweaksStyle)

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

    // Create larger text input style
    var largerInputStyle = document.createElement('style')
    largerInputStyle.id = 'largerInput-mode' // for toggleMode()
    largerInputStyle.innerHTML = 'form > div > div:nth-child(2), form textarea { max-height: 85vh !important; } '
    document.head.appendChild(largerInputStyle)

    // Define SVG viewbox + paths
    var svgViewBox = '8 8 ' // move to XY coords to crop whitespace
        + '20 20' // shrink to 20x20 to match Send button size
    var wideScreenONpaths = `
        <path fill="${sendButtonColor}" fill-rule="evenodd"
            d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z"></path>`
    var wideScreenOFFpaths = `
        <path fill="${sendButtonColor}" fill-rule="evenodd"
            d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z"></path>`
    var fullWindowONpaths = `
        <path fill="${sendButtonColor}" d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"></path>
        <path fill="${sendButtonColor}" d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"></path>
        <path fill="${sendButtonColor}" d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"></path>
        <path fill="${sendButtonColor}" d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"></path>`
    var fullWindowOFFpaths = `
        <path fill="${sendButtonColor}" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
        <path fill="${sendButtonColor}" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
        <path fill="${sendButtonColor}" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
        <path fill="${sendButtonColor}" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>`
    var newChatPaths = `
        <path fill="${sendButtonColor}"
            d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"></path>`

    // Create wide screen button & add icon/classes/position/icon/listeners
    var wideScreenButton = document.createElement('button') // create button
    wideScreenButton.id = 'wideScreen-button' // for toggleTooltip()
    updateSVG('wideScreen') // insert icon
    wideScreenButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    wideScreenButton.style.cssText = 'right: 3.83rem' // position left of Send button
    wideScreenButton.addEventListener('click', () => { toggleMode('wideScreen') })
    wideScreenButton.addEventListener('mouseover', toggleTooltip)
    wideScreenButton.addEventListener('mouseout', toggleTooltip)

    // Create full-window button & add icon/classes/position/listeners
    var fullWindowButton = document.createElement('button') // create button
    fullWindowButton.id = 'fullWindow-button' // for toggleTooltip()
    updateSVG('fullWindow') // insert icon
    fullWindowButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    fullWindowButton.style.cssText = 'right: 2.17rem' // position left of wide screen button
    fullWindowButton.addEventListener('click', () => { toggleMode('fullWindow') })
    fullWindowButton.addEventListener('mouseover', toggleTooltip)
    fullWindowButton.addEventListener('mouseout', toggleTooltip)

    // Create new chat button & add icon/classes/position/icon/listeners
    var newChatButton = document.createElement('button') // create button
    newChatButton.id = 'newChat-button' // for toggleTooltip()
    newChatButton.innerHTML = '<svg ' // insert icon
        + `class="${sendSVGclasses}" ` // assign borrowed classes
        + `style="margin: .24rem .05rem -.08rem .16rem ; ` // center overlay
        + `pointer-events: none" ` // prevent triggering tooltips twice
        + `viewBox="11 8 13 13"> ${newChatPaths} </svg>` // set viewbox & insert paths
    newChatButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    newChatButton.style.cssText = 'right: 5.5rem' // position left of full-window button
    newChatButton.addEventListener('click', () => { chatgpt.startNewChat() })
    newChatButton.addEventListener('mouseover', toggleTooltip)
    newChatButton.addEventListener('mouseout', toggleTooltip)

    // Insert buttons
    settings.load('extensionDisabled').then(function() {
        if (!config.extensionDisabled) insertChatButtons() // eslint-disable-line no-undef
    })

    // Monitor node changes to update button visibility + auto-toggle once + manage send button's tooltip
    var prevSessionChecked = false
    var navObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type === 'childList' && addedNodes.length) {

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

            // Restore previous session's state + manage toggles
            settings.load(['wideScreen', 'fullWindow', 'fullerWindow', 'extensionDisabled']).then(function() {
                if (!config.extensionDisabled) {                    
                    if (!prevSessionChecked) { // restore previous session's state
                        if (config.wideScreen) toggleMode('wideScreen', 'ON')
                        if (config.fullWindow) toggleMode('fullWindow', 'ON')
                        prevSessionChecked = true
                    }
                    insertChatButtons() // eslint-disable-line no-undef
                }
                prevSessionChecked = true // even if extensionDisabled, to avoid double-toggle
            })
        }
    })
    navObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Declare script functions

    function classListToCSS(classList) { // convert DOM classList to single CSS selector
        return '.' + [...classList].join('.') // prepend dot to dot-separated string
            .replaceAll(/([:\[\]])/g, '\\$1') // escape CSS special chars
    }

    function toggleMode(mode, state = '') {

        var modeStyle = document.getElementById(mode + '-mode') // look for existing mode style
        if (state.toUpperCase() == 'ON' || !modeStyle) { // if missing or ON-state passed
            modeStyle = mode == 'wideScreen' ? wideScreenStyle : fullWindowStyle
            if (mode == 'fullWindow' && config.fullerWindow) { // activate fuller window if enabled for full window
                if (!config.wideScreen) document.head.appendChild(wideScreenStyle)
            }
            document.head.appendChild(modeStyle); state = 'on' // activate mode
        } else { // de-activate mode
            if (mode == 'fullWindow' && !config.wideScreen) { // if exiting full-window & wide screen wasn't manually enabled
                try { document.head.removeChild(wideScreenStyle) } catch { }
            } // also remove wide screen since fuller window turns it on
            document.head.removeChild(modeStyle); state = 'off'
        }
        settings.save(mode, state.toUpperCase() === 'ON' ? true : false)
        updateSVG(mode); updateTooltip(mode) // update icon/tooltip
        settings.load('notifHidden').then(function() {
            if (!config.notifHidden) { // show mode notification if enabled
                chatgpt.notify(`${mode == 'wideScreen' ? 'Wide screen' : 'Full-window'} ${state.toUpperCase()}`, '', '',
                    chatgpt.isDarkMode() ? '' : 'shadow')
        }})
    }

    function toggleTooltip(event) {
        var buttonType = (
            event.target.id.includes('wide') ? 'wideScreen' :
            event.target.id.includes('full') ? 'fullWindow' :
            event.target.id.includes('new') ? 'newChat' : 'sendMsg')
        updateTooltip(buttonType) // since mouseover's can indicate button change
        tooltipDiv.style.opacity = event.type === 'mouseover' ? '0.8' : '0' // toggle visibility
    }

    function updateSVG(mode) {
        var [button, ONpaths, OFFpaths] = (mode ==
            'wideScreen' ? [wideScreenButton, wideScreenONpaths, wideScreenOFFpaths]
            : [fullWindowButton, fullWindowONpaths, fullWindowOFFpaths])

        // Initialize rem margin offset vs. OpenAI's .mr-1 for hover overlay centeredness
        var lMargin = mode == 'wideScreen' ? .11 : .12
        var rMargin = (.25 - lMargin)

        // Update SVG
        button.innerHTML = '<svg '
            + `class="${sendSVGclasses}" ` // assign borrowed classes
            + `style="margin: 0 ${rMargin}rem 0 ${lMargin}rem ; ` // center overlay
            + `pointer-events: none" ` // prevent triggering tooltips twice
            + `viewBox="${svgViewBox}"> ` // set viewbox pre-tweaked to match Send
            + (config[mode] ? ONpaths : OFFpaths + '</svg>') // dynamically insert paths based on loaded key
    }

    function updateTooltip(buttonType) { // text & position
        tooltipDiv.innerHTML = tooltips[buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'ON' : 'OFF'))]
        var ctrAddend = 17, overlayWidth = 30
        var iniRoffset = overlayWidth * (
            buttonType.includes('send') ? 0
                : buttonType.includes('Window') ? 1
                : buttonType.includes('Screen') ? 2 : 3) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width / 2}px`
    }

    // Define script functions as expressions for listeners

    insertChatButtons = function() { // eslint-disable-line no-undef
        var chatbar = document.querySelector("form button[class*='bottom']").parentNode
        if (chatbar.contains(fullWindowButton)) {
            return // if buttons aren't missing, exit
        } else { chatbar.append(newChatButton, fullWindowButton, wideScreenButton, tooltipDiv) }
    }

    removeChatButtons = function() { // eslint-disable-line no-undef
        var chatbar = document.querySelector('form button[class*="bottom"]').parentNode
        if (!chatbar.contains(fullWindowButton)) { return // if buttons are missing, exit
        } else { // remove chat toggles
            var nodesToRemove = [newChatButton, fullWindowButton, wideScreenButton, tooltipDiv];
            for (var i = 0 ; i < nodesToRemove.length ; i++) { chatbar.removeChild(nodesToRemove[i]) }
    }}

    toggleExtension = function() { // eslint-disable-line no-undef
        settings.load('extensionDisabled', 'fullWindow', 'fullerWindow', 'notifHidden', 'wideScreenStyle').then(function() {
            if (config.extensionDisabled) {
                try { document.head.removeChild(wideScreenStyle) } catch {}
                try { document.head.removeChild(fullWindowStyle) } catch {}
                removeChatButtons() // eslint-disable-line no-undef
            } else {
                if (config.fullWindow) {
                    document.head.appendChild(fullWindowStyle)
                    if (!config.notifHidden) chatgpt.notify('Full-window ON', 'lower-right')
                }
                if (config.wideScreen || ( config.fullWindow && config.fullerWindow )) {
                    document.head.appendChild(wideScreenStyle)
                    if (!config.notifHidden) chatgpt.notify('Wide screen ON', 'lower-right')
                }
                insertChatButtons() // eslint-disable-line no-undef
        }
    })}

})()
