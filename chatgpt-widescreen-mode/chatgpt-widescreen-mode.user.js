// ==UserScript==
// @name                ChatGPT Widescreen Mode 🖥️
// @version             2023.04.04
// @description         Adds Widescreen + Full-Window modes to ChatGPT for reduced scrolling
// @author              Adam Lui (刘展鹏), Xiao-Ying Yo (小影哟) & mefengl (冯不游)
// @namespace           https://github.com/adamlui
// @namespace           https://github.com/xiaoyingyo
// @namespace           https://github.com/mefengl
// @name:zh-CN          ChatGPT 宽屏模式🖥️
// @name:zh-SG          ChatGPT 宽屏模式🖥️
// @name:zh-TW          ChatGPT 寬屏模式🖥️
// @name:zh-HK          ChatGPT 寬屏模式🖥️
// @name:ja             ChatGPTワイドスクリーンモード🖥️
// @name:ko             ChatGPT 와이드스크린 모드 🖥️
// @name:ru             Широкоэкранный Режим ChatGPT 🖥️
// @name:de             ChatGPT-Breitbildmodus 🖥️
// @name:es             Modo de Pantalla Ancha de ChatGPT 🖥️
// @name:fr             Mode Écran Large ChatGPT 🖥️
// @name:it             ChatGPT Modalità Widescreen 🖥️
// @description:zh-CN   向 ChatGPT 添加宽屏 + 全窗口模式以减少滚动
// @description:zh-SG   向 ChatGPT 添加宽屏 + 全窗口模式以减少滚动
// @description:zh-TW   向 ChatGPT 添加寬屏 + 全窗口模式以減少滾動
// @description:zh-HK   向 ChatGPT 添加寬屏 + 全窗口模式以減少滾動
// @description:ja      スクロールを減らすために、ChatGPT にワイドスクリーン + フルウィンドウ モードを追加します。
// @description:ko      스크롤 감소를 위해 ChatGPT에 와이드스크린 + 전체 창 모드를 추가합니다.
// @description:ru      Добавляет широкоэкранный и полноэкранный режимы в ChatGPT для уменьшения прокрутки.
// @description:de      Fügt Widescreen + Full-Window-Modi zu ChatGPT hinzu, um das Scrollen zu reduzieren
// @description:es      Agrega modos de pantalla ancha + ventana completa a ChatGPT para reducir el desplazamiento
// @description:fr      Ajoute les modes écran large + pleine fenêtre à ChatGPT pour un défilement réduit
// @description:it      Aggiunge le modalità Widescreen + Full-Window a ChatGPT per uno scorrimento ridotto
// @license             MIT
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          qq
// @match               https://chat.openai.com/*
// @match               https://freegpt.one/*
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @downloadURL         https://greasyfork.org/scripts/461473/code/chatgpt-widescreen-mode.user.js
// @updateURL           https://greasyfork.org/scripts/461473/code/chatgpt-widescreen-mode.meta.js
// @homepageURL         https://github.com/adamlui/chatgpt-widescreen
// @supportURL          https://github.com/adamlui/chatgpt-widescreen/issues
// ==/UserScript==

// NOTE: This script uses code from the powerful chatgpt.js library @ https://chatgptjs.org (c) 2023 Adam Lui & 冯不游 under the MIT license.

(function () {

    // Import chatgpt.js functions

    unsafeWindow.chatgptNotifyProps = { // NOTE: `unsafeWindow` is safe! `@match` is limited in scope.
        // (Only if `@match` is highly inclusive, a malicious website could make userscripts do bad things.)
        // Because this script uses GM methods (which isolates script in sandbox) `unsafeWindow` is
        // required to create global object for notification positioning across scripts (but is safe!)
        quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }
    };
    var navLinkLabels = { newChat: location.host === 'freegpt.one' ? 'Reset Thread' : 'New chat' };
    var chatgpt = {

        notify: function(msg, position, notifDuration, shadow) {
            notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
            var fadeDuration = 0.6; // sec duration of fade-out
            var vpYoffset = 13, vpXoffset = 27; // px offset from viewport border

            // Make/stylize/insert div
            var notificationDiv = document.createElement('div'); // make div
            notificationDiv.style.cssText = ( // stylize it
                  '/* Box style */   background-color: black ; padding: 10px ; border-radius: 8px ; '
                + '/* Visibility */  opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ; '
                + ( shadow ? ( 'box-shadow: -8px 13px 25px 0 ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ));
            document.body.appendChild(notificationDiv); // insert into DOM

            // Determine div position/quadrant
            notificationDiv.isTop = !position || !/low|bottom/i.test(position) ? true : false;
            notificationDiv.isRight = !position || !/left/i.test(position) ? true : false;
            notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
                                     + (notificationDiv.isRight ? 'Right' : 'Left');

            // Store div in global memory
            unsafeWindow.chatgptNotifyProps.quadrants[notificationDiv.quadrant].push(notificationDiv); // store div in global object

            // Position notification (defaults to top-right)
            notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
            notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

            // Reposition old notifications
            var thisQuadrantDivs = unsafeWindow.chatgptNotifyProps.quadrants[notificationDiv.quadrant];
            if (thisQuadrantDivs.length > 1) {
                var divsToMove = thisQuadrantDivs.slice(0, -1); // exclude new div
                for (var j = 0; j < divsToMove.length; j++) {
                    var oldDiv = divsToMove[j];
                    var offsetProp = oldDiv.style.top ? 'top' : 'bottom'; // pick property to change
                    var vOffset = +oldDiv.style[offsetProp].match(/\d+/)[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${vOffset}px`; // change prop
            }}

            // Show notification
            notificationDiv.innerHTML = msg; // insert msg
            notificationDiv.style.transition = 'none'; // remove fade effect
            notificationDiv.style.opacity = 1; // show msg

            // Hide notification
            var hideDelay = ( // set delay before fading
                fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
                : notifDuration - fadeDuration); // otherwise delay for difference
            notificationDiv.hideTimer = setTimeout(function hideNotif() { // maintain notification visibility, then fade out
                notificationDiv.style.transition = 'opacity ' + fadeDuration.toString() + 's'; // add fade effect
                notificationDiv.style.opacity = 0; // hide notification
                notificationDiv.hideTimer = null; // prevent memory leaks
            }, hideDelay * 1000); // ...after pre-set duration

            // Destroy notification
            notificationDiv.destroyTimer = setTimeout(function destroyNotif() {
                notificationDiv.remove(); thisQuadrantDivs.shift(); // remove from DOM + memory
                notificationDiv.destroyTimer = null; // prevent memory leaks
            }, Math.max(fadeDuration, notifDuration) * 1000); // ...after notification hid
        },

        startNewChat: function() {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes(navLinkLabels.newChat)) {
                    navLink.click(); return;
        }}}
    }

    // Define script functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order
        var stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF']
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to also activate wide screen in full-window
        var fwLabel = stateSymbol[+!config.fullerWindow] + ' Fuller Windows'
            + stateSeparator + stateWord[+!config.fullerWindow]
        menuID.push(GM_registerMenuCommand(fwLabel, function () {
            saveSetting('fullerWindow', !config.fullerWindow)
            if (!config.notifHidden) chatgpt.notify('Fuller Windows: ' + stateWord[+!config.fullerWindow])
            for (var id of menuID) { GM_unregisterMenuCommand(id) }; registerMenu() // refresh menu
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' Mode Notifications'
            + stateSeparator + stateWord[+config.notifHidden]
        menuID.push(GM_registerMenuCommand(mnLabel, function () {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify('Mode Notifications: ' + stateWord[+config.notifHidden])
            for (var id of menuID) { GM_unregisterMenuCommand(id) }; registerMenu() // refresh menu
        }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting(...keys) {
        keys.forEach(function (key) {
            config[key] = GM_getValue(configKeyPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configKeyPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

    function classListToCSS(classList) { // convert DOM classList to single CSS selector
        return '.' + [...classList].join('.') // prepend dot to dot-separated string
            .replaceAll(/([:\[\]])/g, '\\$1') // escape CSS special chars
    }

    function insertButtons() {
        var chatbar = document.querySelector("form button[class*='bottom']").parentNode
        if (chatbar.contains(fullWindowButton)) {
            return // if buttons aren't missing, exit
        } else { chatbar.append(newChatButton, fullWindowButton, wideScreenButton, tooltipDiv) }
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
        saveSetting(mode, state.toUpperCase() == 'ON' ? true : false)
        updateSVG(mode); updateTooltip(mode) // update icon/tooltip
        if (!config.notifHidden) { // show mode notification if enabled
            chatgpt.notify(`${mode == 'wideScreen' ? 'Wide screen' : 'Full-window'} ${state.toUpperCase()}`)
        }
    }

    function toggleTooltip(event) {
        var buttonType = (
            event.target.id.includes('wide') ? 'wideScreen' :
            event.target.id.includes('full') ? 'fullWindow' :
            event.target.id.includes('new') ? 'newChat' : 'sendMsg')
        updateTooltip(buttonType) // since mouseover's can indicate button change
        tooltipDiv.style.opacity = event.type === 'mouseover' ? '0.8' : '0' // toggle visibility
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

    // Run main routine

    // Initialize script
    var config = {}, configKeyPrefix = 'chatGPTws_'
    loadSetting('wideScreen', 'fullWindow', 'notifHidden', 'fullerWindow')
    registerMenu() // create browser toolbar menu

    var tooltips = {
        wideScreenON: 'Exit wide screen', wideScreenOFF: 'Wide screen',
        fullWindowON: 'Exit full window', fullWindowOFF: 'Full-window mode',
        newChat: 'New chat', sendMsg: 'Send message'
    }

    // Collect OpenAI classes/colors
    var sendButtonColor = 'currentColor' // changes w/ scheme
    var sendButtonClasses = document.querySelector('form button[class*="bottom"]').classList
    var sendSVGclasses = document.querySelector('form button[class*="bottom"] > svg').classList
    if (location.host === 'freegpt.one') { // remove rotation effect
        [...sendSVGclasses].forEach(sendSVGclass => {
            if (sendSVGclass.includes('rotate')) sendSVGclasses.remove(sendSVGclass)
    })}
    var inputTextAreaClasses = document.querySelector("form button[class*='bottom']").previousSibling.classList
    var sidepadClasses = document.querySelector('#__next > div > div').classList
    var sidebarClasses = document.querySelector(`#__next > div > div.${
        location.host === 'freegpt.one' ? 'hidden' : 'dark' }`).classList

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

    // Re-stylize input text area to accomodate buttons
    var inputTextAreaStyle = document.createElement('style')
    inputTextAreaStyle.innerHTML = classListToCSS(inputTextAreaClasses) + '{ padding-right: 115px }'
    document.head.appendChild(inputTextAreaStyle)

    // Create wide screen style
    var wideScreenStyle = document.createElement('style')
    wideScreenStyle.id = 'wideScreen-mode' // for toggleMode()
    wideScreenStyle.innerHTML = '.text-base { max-width: 93% !important }'

    // Create full-window style
    var fullWindowStyle = document.createElement('style')
    fullWindowStyle.id = 'fullWindow-mode' // for toggleMode()
    fullWindowStyle.innerHTML = classListToCSS(sidebarClasses) + '{ display: none }' // hide sidebar
        + classListToCSS(sidepadClasses) + '{ padding-left: 0px }' // remove side padding

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

    insertButtons() // on page load

    // Monitor node changes to maintain button visibility + auto-toggle once + manage send button's tooltip
    var prevSessionChecked = false
    var navObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type === 'childList' && addedNodes.length) {
            insertButtons() // again or they constantly disappear

            // Check loaded keys to restore previous session's state
            if (!prevSessionChecked) {
                if (config.wideScreen) toggleMode('wideScreen', 'ON')
                if (config.fullWindow) toggleMode('fullWindow', 'ON')
                prevSessionChecked = true
            }

            // Manage send button's tooltip
            var sendButton = document.querySelector('form button[class*="bottom"]');
            if (sendButton) { // add/remove tooltip based on enabled state
                if (!sendButton.hasAttribute('disabled') && !sendButton.hasAttribute('hasTooltip')) {
                    sendButton.addEventListener('mouseover', toggleTooltip);
                    sendButton.addEventListener('mouseout', toggleTooltip);
                    sendButton.setAttribute('hasTooltip', true);
                } else if (sendButton.hasAttribute('disabled') && sendButton.hasAttribute('hasTooltip')) {
                    tooltipDiv.style.opacity = '0' // hide tooltip in case cursor was hovering
                    sendButton.removeEventListener('mouseover', toggleTooltip);
                    sendButton.removeEventListener('mouseout', toggleTooltip);
                    sendButton.removeAttribute('hasTooltip');
                }
            }
    }})
    navObserver.observe(document.documentElement, { childList: true, subtree: true })

})()
