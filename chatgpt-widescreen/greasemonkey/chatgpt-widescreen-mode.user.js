// ==UserScript==
// @name                ChatGPT Widescreen Mode 🖥️
// @name:de             ChatGPT-Breitbildmodus 🖥️
// @name:es             Modo de Pantalla Ancha de ChatGPT 🖥️
// @name:fr             Mode Écran Large ChatGPT 🖥️
// @name:it             ChatGPT Modalità Widescreen 🖥️
// @name:ja             ChatGPT ワイドスクリーンモード 🖥️
// @name:ko             ChatGPT 와이드스크린 모드 🖥️
// @name:pt             Modo Widescreen ChatGPT 🖥️
// @name:pt-BR          Modo Widescreen ChatGPT 🖥️
// @name:ru             Широкоэкранный Режим ChatGPT 🖥️
// @name:uk             Широкоекранний Pежим ChatGPT 🖥️
// @name:zh-CN          ChatGPT 宽屏模式 🖥️
// @name:zh-HK          ChatGPT 寬屏模式 🖥️
// @name:zh-SG          ChatGPT 宽屏模式 🖥️
// @name:zh-TW          ChatGPT 寬屏模式 🖥️
// @version             2023.6.7.1
// @description         Adds Widescreen + Full-Window modes to ChatGPT for enhanced viewing + reduced scrolling
// @author              Adam Lui (刘展鹏), Xiao-Ying Yo (小影哟) & mefengl (冯不游)
// @namespace           https://github.com/adamlui
// @namespace           https://github.com/xiaoyingyo
// @namespace           https://github.com/mefengl
// @description:de      Fügt ChatGPT die Modi Breitbild und Vollbild hinzu, um die Anzeige zu verbessern und das Scrollen zu reduzieren
// @description:es      Agrega modos de pantalla ancha + ventana completa a ChatGPT para una visualización mejorada + desplazamiento reducido
// @description:fr      Ajoute les modes écran large + pleine fenêtre à ChatGPT pour une visualisation améliorée + un défilement réduit
// @description:it      Aggiunge le modalità Widescreen + Full-Window a ChatGPT per una visualizzazione migliorata + scorrimento ridotto
// @description:ja      ChatGPT にワイドスクリーン + フルウィンドウ モードを追加し、表示の強化とスクロールの削減を実現します
// @description:ko      향상된 보기 + 스크롤 감소를 위해 ChatGPT에 와이드스크린 + 전체 창 모드를 추가합니다.
// @description:pt      Adiciona os modos Widescreen + Full-Window ao ChatGPT para visualização aprimorada + rolagem reduzida
// @description:pt-BR   Adiciona os modos Widescreen + Full-Window ao ChatGPT para visualização aprimorada + rolagem reduzida
// @description:ru      Добавляет широкоэкранный и полноэкранный режимы в ChatGPT для улучшенного просмотра и уменьшения прокрутки.
// @description:uk      Додано широкоформатний + повновіконний режими до ChatGPT для покращеного перегляду + зменшеного прокручування
// @description:zh-CN   向 ChatGPT 添加宽屏 + 全屏模式以增强查看效果 + 减少滚动
// @description:zh-HK   向 ChatGPT 添加寬屏 + 全屏模式以增強查看效果 + 減少滾動
// @description:zh-SG   向 ChatGPT 添加宽屏 + 全屏模式以增强查看效果 + 减少滚动
// @description:zh-TW   向 ChatGPT 添加寬屏 + 全屏模式以增強查看效果 + 減少滾動
// @license             MIT
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @match               https://chat.openai.com/*
// @icon                https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon64.png
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@65b028f36b34e830ae3a557c987e8757e7b025f1/dist/chatgpt-1.8.0.min.js
// @connect             raw.githubusercontent.com
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @homepageURL         https://github.com/adamlui/chatgpt-widescreen
// @supportURL          https://github.com/adamlui/chatgpt-widescreen/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {

    // Initialize settings
    var appSymbol = '🖥️', configPrefix = 'chatGPTws_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '' }
    loadSetting('fullerWindows', 'notifHidden', 'wideScreen')

    // Define messages
    var msgsLoaded = new Promise(resolve => {
        var msgHostDir = 'https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/greasemonkey/_locales/'
        var msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        var msgHref = msgHostDir + msgLocaleDir + 'messages.json' // build src link
        var msgXHRtries = 0
        GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
        function onLoad(response) {
            try { // to return localized messages.json
                var messages = new Proxy(JSON.parse(response.responseText), {
                    get(target, prop) { // remove need to ref nested keys
                        if (typeof target[prop] === 'object' && target[prop] !== null && 'message' in target[prop]) {
                            return target[prop].message
                }}}) ; resolve(messages)
            } catch (error) { // if 404
                msgXHRtries++ ; if (msgXHRtries == 3) return // try up to 3X (original/region-stripped/EN) only
                msgHref = config.userLanguage.includes('-') && msgXHRtries == 1 ? // if regional lang on 1st try...
                    msgHref.replace(/(.*)_.*(\/.*)/, '$1$2') // ...strip region before retrying
                        : ( msgHostDir + 'en/messages.json' ) // else use default English messages
                GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
            }
        }
    }) ; var messages = await msgsLoaded

    // Save full-window + fullscreen states
    await chatgpt.isLoaded() ; config.fullWindow = chatgpt.sidebar.isOff() ; config.fullScreen = isFullScreen()

    // Create browser toolbar menu
    if (document.documentElement.getAttribute('cwm-extension-installed')) { // if extension installed, disable script/menu
        GM_registerMenuCommand('❌ ' + messages.menuLabel_disabled, function() { return })
        return // exit script
    } else registerMenu() // create functional menu

    // Collect OpenAI classes
    var sendButtonClasses = (document.querySelector('form button[class*="bottom"]') || {}).classList || []
    var sendSVGclasses = (document.querySelector('form button[class*="bottom"] svg') || {}).classList || []
    var inputTextAreaClasses = (document.querySelector("form button[class*='bottom']") || {}).previousSibling.classList || []
    var sidepadClasses = (document.querySelector('#__next > div > div') || {}).classList || []
    var sidebarClasses = (document.querySelector('#__next > div > div.dark') || {}).classList || []
    var mainDivClasses = (document.querySelector('#__next > div > div.flex') || {}).classList || []

    // Set toggle colors
    var buttonColor = setBtnColor()    

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
           classListToCSS(inputTextAreaClasses) + ' { padding-right: 145px } ' // make input text area accomdate buttons
        + 'div.group > div > div:first-child > div:nth-child(2) { ' // move response paginator
            + 'position: relative ; left: 54px ; top: 7px } ' // ...below avatar to avoid cropping
        + 'form > div > div:nth-child(2), form textarea { max-height: 68vh !important; } ' ) // expand text input vertically
    document.head.appendChild(tweaksStyle)

    // Create wide screen style
    var wideScreenStyle = document.createElement('style')
    wideScreenStyle.id = 'wideScreen-mode' // for toggleMode()
    wideScreenStyle.innerHTML = '.text-base { max-width: 93% !important } '
        + 'div' + classListToCSS(mainDivClasses) + '{ width: 100px }' // prevent sidebar shrinking when zoomed

    // Create full-screen button & add icon/classes/position/listeners
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

    insertBtns()

    // Monitor node changes to maintain button visibility + auto-toggle once + manage send button's tooltip
    var prevSessionChecked = false
    var nodeObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type === 'childList' && addedNodes.length) {
            insertBtns() // again or they constantly disappear

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
    }}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Monitor scheme changes to update button colors
    var schemeObserver = new MutationObserver(([{ type, target }]) => {
        if (target === document.documentElement && type === 'attributes' && target.getAttribute('class')) {
            buttonColor = setBtnColor()
            updateBtnSVG('fullScreen') ; updateBtnSVG('fullWindow') ; updateBtnSVG('wideScreen') ; updateBtnSVG('newChat')
    }}) ; schemeObserver.observe(document.documentElement, { attributes: true })

    // Add fullscreen listeners to update setting/button + enable F11 flag
    window.addEventListener('resize', function() { // sync fullscreen settings/button
        var fullScreenState = isFullScreen()
        if ((config.fullScreen && !fullScreenState) || (!config.fullScreen && fullScreenState)) syncFullScreen()
        if (!fullScreenState) config.f11 = false
    })
    window.addEventListener('keydown', function() { // enable F11 flag for toggleMode() disabled warning
        if ((event.key === 'F11' || event.keyCode === 122) && !config.fullScreen) // if entering fullscreen via F11
            config.f11 = true
    })

    // Define SCRIPT functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order
        var stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF']
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to also activate wide screen in full-window
        var fwLabel = stateSymbol[+!config.fullerWindows] + ' ' + messages.menuLabel_fullerWins
            + stateSeparator + stateWord[+!config.fullerWindows]
        menuID.push(GM_registerMenuCommand(fwLabel, function() {
            saveSetting('fullerWindows', !config.fullerWindows)
            if (!config.notifHidden) {
                chatgpt.notify(appSymbol + ' ' + messages.menuLabel_fullerWins + ': '+ stateWord[+!config.fullerWindows],
                    '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            } for (var id of menuID) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
            + stateSeparator + stateWord[+config.notifHidden]
        menuID.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify(appSymbol + ' ' + messages.menuLabel_modeNotifs + ': ' + stateWord[+config.notifHidden],
                '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var id of menuID) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting(...keys) {
        keys.forEach(key => {
            config[key] = GM_getValue(configPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

    // Define CSS function

    function classListToCSS(classList) { // convert DOM classList to single CSS selector
        return '.' + [...classList].join('.') // prepend dot to dot-separated string
            .replaceAll(/([:\[\]])/g, '\\$1') // escape CSS special chars
    }

    // Define BUTTON functions

    function setBtnColor() { return chatgpt.isDarkMode() || chatgpt.history.isOff() ? 'white' : '#202123' }

    function insertBtns() {
        var chatbar = document.querySelector("form button[class*='bottom']").parentNode
        if (chatbar.contains(fullWindowButton)) return // if buttons aren't missing, exit
        else chatbar.append(newChatButton, fullWindowButton, wideScreenButton, fullScreenButton, tooltipDiv)
    }

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
        tooltipDiv.innerHTML = messages['tooltip_' + buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'OFF' : 'ON'))]
        var ctrAddend = 25, overlayWidth = 30
        var iniRoffset = overlayWidth * (
            buttonType.includes('send') ? 0
                : buttonType.includes('fullScreen') ? 1
                : buttonType.includes('fullWindow') ? 2
                : buttonType.includes('wide') ? 3 : 4) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width / 2}px`
    }

    // Define MODE functions

    function toggleMode(mode, state = '') {
        if (state.toUpperCase() == 'ON' || !config[mode]) { // if de-activated or ON-state passed
            if (mode == 'fullScreen') { // activate fullscreen
                var htmlNode = document.documentElement
                if (htmlNode.requestFullscreen) htmlNode.requestFullscreen() // HTML5
                else if (htmlNode.webkitRequestFullscreen) htmlNode.webkitRequestFullscreen() // Safari
                else if (htmlNode.msRequestFullscreen) htmlNode.msRequestFullscreen() // IE11
            } else if (mode == 'fullWindow') { // activate full-window
                if (config.fullerWindows) // activate fuller window if needed
                    if (!config.wideScreen) { document.head.appendChild(wideScreenStyle) ; updateBtnSVG('wideScreen', 'on') }
                chatgpt.sidebar.hide()
            } else document.head.appendChild(wideScreenStyle) // activate widescreen
            state = 'ON'
        } else { // de-activate mode
            if (mode == 'fullScreen') { // exit fullscreen
                if (config.f11) {
                    chatgpt.notify(`${ appSymbol } Press [F11] to EXIT full screen`,
                        '', 3.5, chatgpt.isDarkMode() ? '' : 'shadow')
                } else {
                    try { // to exit fullscreen
                        if (document.exitFullscreen) document.exitFullscreen() // HTML5
                        else if (document.webkitExitFullscreen) document.webkitExitFullscreen() // Safari
                        else if (document.msExitFullscreen) document.msExitFullscreen() // IE11
                    } catch (error) { console.error(appSymbol + ' >> '), error }
                }
            } else if (mode == 'fullWindow') { // exit full-window
                if (!config.wideScreen) // de-activate fuller window if needed
                    try { document.head.removeChild(wideScreenStyle) } catch (error) {} updateBtnSVG('wideScreen', 'off')
                chatgpt.sidebar.show()
            } else try { document.head.removeChild(wideScreenStyle) } catch (error) {} // exit widescreen
            state = 'OFF'
        }
        if (mode !== 'fullScreen') saveSetting(mode, state == 'ON' ? true : false)
        updateBtnSVG(mode); updateTooltip(mode) // update icon/tooltip
        if (!config.notifHidden & mode !== 'fullScreen') { // show mode notification if enabled
            chatgpt.notify(`${ appSymbol } ${ messages['mode_' + mode] } ${ state.toUpperCase() }`,
                '', '', chatgpt.isDarkMode() ? '' : 'shadow') }
    }

    function isFullScreen() {
        var userAgentStr = navigator.userAgent
        var browser = userAgentStr.includes('Chrome') ? 'chromium'
                          : userAgentStr.includes('Firefox') ? 'firefox'
                          : userAgentStr.match(/MSIE|rv:/) ? 'ie' : 'webkit'
        return browser === 'chromium' ? window.matchMedia('(display-mode: fullscreen)').matches
             : browser === 'firefox' ? window.fullScreen
             : browser === 'ie' ? document.msFullscreenElement : document.webkitIsFullScreen
    }

    function syncFullScreen() { // setting + toggle icon
        var fullScreenState = isFullScreen()
        saveSetting('fullScreen', isFullScreen()) ; updateBtnSVG('fullScreen')
        if (!config.notifHidden) { // show exit notification if enabled
            chatgpt.notify(`${ appSymbol } ${ messages.mode_fullScreen } ${ fullScreenState ? 'ON' : 'OFF' }`,
                '', '', chatgpt.isDarkMode() ? '' : 'shadow') }
    }

})()
