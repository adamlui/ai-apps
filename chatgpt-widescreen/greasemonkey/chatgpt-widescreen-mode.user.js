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
// @version             2023.5.31.1
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
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@abf4e7ea3ed450b9f34b045d73c9522be43b2c1c/dist/chatgpt-1.6.7.min.js
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
    var configPrefix = 'chatGPTws_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '' }
    loadSetting('wideScreen', 'fullWindow', 'notifHidden', 'fullerWindows')

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

    await chatgpt.isLoaded()

    // Create browser toolbar menu
    if (document.documentElement.getAttribute('cwm-extension-installed')) { // if extension installed, disable script/menu
        GM_registerMenuCommand('❌ ' + messages.menuLabel_disabled, function() { return })
        return // exit script
    } else registerMenu() // create functional menu

    // Collect OpenAI classes/colors
    var sendButtonColor = 'currentColor' // changes w/ scheme
    var sendButtonClasses = (document.querySelector('form button[class*="bottom"]') || {}).classList || []
    var sendSVGclasses = (document.querySelector('form button[class*="bottom"] svg') || {}).classList || []
    var inputTextAreaClasses = (document.querySelector("form button[class*='bottom']") || {}).previousSibling.classList || []
    var sidepadClasses = (document.querySelector('#__next > div > div') || {}).classList || []
    var sidebarClasses = (document.querySelector('#__next > div > div.dark') || {}).classList || []
    var mainDivClasses = (document.querySelector('#__next > div > div.flex') || {}).classList || []

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
    var wideScreenButton = document.createElement('div') // create button
    wideScreenButton.id = 'wideScreen-button' // for toggleTooltip()
    wideScreenButton.type = 'button'
    updateSVG('wideScreen') // insert icon
    wideScreenButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    wideScreenButton.style.cssText = 'right: 3.83rem' // position left of Send button
    wideScreenButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    wideScreenButton.addEventListener('click', () => { toggleMode('wideScreen') })
    wideScreenButton.addEventListener('mouseover', toggleTooltip)
    wideScreenButton.addEventListener('mouseout', toggleTooltip)

    // Create full-window button & add icon/classes/position/listeners
    var fullWindowButton = document.createElement('div') // create button
    fullWindowButton.id = 'fullWindow-button' // for toggleTooltip()
    fullWindowButton.type = 'button'
    updateSVG('fullWindow') // insert icon
    fullWindowButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    fullWindowButton.style.cssText = 'right: 2.17rem' // position left of wide screen button
    fullWindowButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
    fullWindowButton.addEventListener('click', () => { toggleMode('fullWindow') })
    fullWindowButton.addEventListener('mouseover', toggleTooltip)
    fullWindowButton.addEventListener('mouseout', toggleTooltip)

    // Create new chat button & add icon/classes/position/icon/listeners
    var newChatButton = document.createElement('div') // create button
    newChatButton.id = 'newChat-button' // for toggleTooltip()
    newChatButton.type = 'button'
    newChatButton.innerHTML = '<svg ' // insert icon
        + `class="${sendSVGclasses}" ` // assign borrowed classes
        + `style="margin: .24rem .05rem -.08rem .16rem ; ` // center overlay
        + `pointer-events: none" ` // prevent triggering tooltips twice
        + `viewBox="11 8 13 13"> ${newChatPaths} </svg>` // set viewbox & insert paths
    newChatButton.setAttribute('class', sendButtonClasses) // assign borrowed classes
    newChatButton.style.cssText = 'right: 5.5rem' // position left of full-window button
    newChatButton.style.cursor = 'pointer' // Add finger cursor // 添加鼠标手势为手指
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

    // Define script functions

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
                chatgpt.notify(messages.menuLabel_fullerWins + ': '+ stateWord[+!config.fullerWindows],
                    '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            } for (var id of menuID) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
            + stateSeparator + stateWord[+config.notifHidden]
        menuID.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify(messages.menuLabel_modeNotifs + ': ' + stateWord[+config.notifHidden],
                '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var id of menuID) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting() {
        var keys = [].slice.call(arguments)
        keys.forEach(function(key) {
            config[key] = GM_getValue(configPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configPrefix + key, value) // save to browser
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
            if (mode == 'fullWindow' && config.fullerWindows) { // activate fuller window if enabled for full window
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
            chatgpt.notify(( mode == 'wideScreen' ? messages.mode_wideScreen : messages.mode_fullWindow )
                + ' ' + state.toUpperCase(), '', '', chatgpt.isDarkMode() ? '' : 'shadow')
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
        tooltipDiv.innerHTML = messages['tooltip_' + buttonType + (
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

})()
