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
// @description         Adds Widescreen + Fullscreen modes to ChatGPT for enhanced viewing + reduced scrolling
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
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @version             2023.6.22.2
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
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@5eed48d721158fc3800c23bc02b5dc0d3959b472/dist/chatgpt-1.10.1.min.js
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @downloadURL         https://greasyfork.org/scripts/461473/code/chatgpt-widescreen-mode.user.js
// @updateURL           https://greasyfork.org/scripts/461473/code/chatgpt-widescreen-mode.meta.js
// @homepageURL         https://chatgptevo.com/widescreen
// @supportURL          https://chatgptevo.com/widescreen/support
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {

    // Initialize settings
    const config = { prefix: 'chatGPTws', appSymbol: '🖥️', userLanguage: navigator.languages[0] || navigator.language || '',
                     ghHostDir: 'https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/',
                     updateURL: 'https://greasyfork.org/scripts/461473/code/chatgpt-widescreen-mode.meta.js' }
    loadSetting('fullerWindows', 'lastCheckTime', 'notifHidden', 'skipNextUpdate', 'skippedVer', 'tcbDisabled', 'wideScreen')

    // Define messages
    const msgsLoaded = new Promise(resolve => {
        const msgHostDir = config.ghHostDir + 'greasemonkey/_locales/'
        const msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        let msgHref = msgHostDir + msgLocaleDir + 'messages.json' // build src link
        let msgXHRtries = 0
        GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
        function onLoad(response) {
            try { // to return localized messages.json
                const messages = new Proxy(JSON.parse(response.responseText), {
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
    }) ; const messages = await msgsLoaded

    // Create browser toolbar menu or disable script if extension installed    
    const state = { symbol: ['✔️', '❌'], word: ['ON', 'OFF'],
                    separator: getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': ' }
    await chatgpt.isLoaded()
    if (document.documentElement.getAttribute('cwm-extension-installed')) { // if extension installed
        GM_registerMenuCommand(state.symbol[1] + ' ' + messages.menuLabel_disabled, () => { return }) // disable menu
        return // exit script
    } else registerMenu() // create functional menu  

    // Save full-window + full screen states
    config.fullWindow = chatgpt.sidebar.isOff() ; config.fullScreen = chatgpt.isFullScreen()

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 172800000) checkForUpdates()

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
            window[buttonName].setAttribute('class', sendButtonClasses); // assign borrowed classes
            window[buttonName].style.cssText = `right: ${2.57 + i * 1.77}rem` // position left of prev button
            window[buttonName].style.cursor = 'pointer' // add finger cursor // 添加鼠标手势为手指
            window[buttonName].addEventListener('click', () => { // add click listeners
                if (buttonType === 'newChat') chatgpt.startNewChat() ; else toggleMode(buttonType) })
            window[buttonName].addEventListener('mouseover', toggleTooltip)
            window[buttonName].addEventListener('mouseout', toggleTooltip)
        })(buttonTypes[i])
    } insertBtns()

    // Monitor node changes to maintain button visibility + auto-toggle once + manage send button's tooltip
    let prevSessionChecked = false
    const nodeObserver = new MutationObserver(([{ addedNodes, type }]) => {
        if (type === 'childList' && addedNodes.length) {
            insertBtns() // again or they constantly disappear

            // Check loaded keys to restore previous session's state
            if (!prevSessionChecked) {
                if (config.wideScreen) toggleMode('wideScreen', 'ON')
                if (config.fullWindow) { toggleMode('fullWindow', 'ON')
                    syncFullerWindows(true) // also sync Fuller Windows...
                    if (!config.notifHidden) // ... + notify since sidebar observer doesn't trigger
                        notify(chrome.i18n.getMessage('mode_fullWindow') + ' ON')
                }
                if (config.tcbDisabled) updateTweaksStyle() ; prevSessionChecked = true
            }

    }}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Monitor scheme changes to update button colors
    const schemeObserver = new MutationObserver(([{ type, target }]) => {
        if (target === document.documentElement && type === 'attributes' && target.getAttribute('class')) {
            buttonColor = setBtnColor()
            updateBtnSVG('fullScreen') ; updateBtnSVG('fullWindow') ; updateBtnSVG('wideScreen') ; updateBtnSVG('newChat')
    }}) ; schemeObserver.observe(document.documentElement, { attributes: true })

    // Monitor sidebar to update full-window setting
    const sidebarObserver = new MutationObserver(() => {
        const fullWindowState = chatgpt.sidebar.isOff()
        if ((config.fullWindow && !fullWindowState) || (!config.fullWindow && fullWindowState))
            if (!config.modeSynced) syncMode('fullWindow')
    })    
    setTimeout(() => { // delay half-sec before observing to avoid repeated toggles from nodeObserver
        sidebarObserver.observe(document.body, { childList: true, subtree: true })}, 500)

    // Add full screen listeners to update setting/button + set F11 flag
    window.addEventListener('resize', () => { // sync full screen settings/button
        const fullScreenState = chatgpt.isFullScreen()
        if (config.fullScreen && !fullScreenState) { syncMode('fullScreen') ; config.f11 = false } // exiting full screen
        else if (!config.fullScreen && fullScreenState) syncMode('fullScreen') // entering full screen
    })
    window.addEventListener('keydown', () => { // set F11 flag for toggleMode() disabled warning
        if ((event.key === 'F11' || event.keyCode === 122) && !config.fullScreen) config.f11 = true // set flag if entering full screen via F11
    })

    // Define SCRIPT functions

    function registerMenu() {
        const menuIDs = [] // empty to store newly registered cmds for removal while preserving order

        // Add command to also activate wide screen in full-window
        const fwLabel = state.symbol[+!config.fullerWindows] + ' ' + messages.menuLabel_fullerWins
                      + state.separator + state.word[+!config.fullerWindows]
        menuIDs.push(GM_registerMenuCommand(fwLabel, () => {
            saveSetting('fullerWindows', !config.fullerWindows)
            syncFullerWindows(config.fullerWindows) // live update on click
            if (!config.notifHidden) {
                notify(`${ messages.menuLabel_fullerWins }: ${ state.word[+!config.fullerWindows] }`)
            } for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to toggle taller chatboxes when typing
        const tcbLabel = state.symbol[+config.tcbDisabled] + ' ' + messages.menuLabel_tallerChatbox
                       + state.separator + state.word[+config.tcbDisabled]
        menuIDs.push(GM_registerMenuCommand(tcbLabel, () => {
            saveSetting('tcbDisabled', !config.tcbDisabled)
            tweaksStyle.innerText = config.tcbDisabled ? tweaksStyle.innerText.replace(tcbStyle, '')
                                                       : tweaksStyle.innerText + tcbStyle
            if (!config.notifHidden) {
                notify(`${ messages.menuLabel_tallerChatbox }: ${ state.word[+config.tcbDisabled] }`)
            } for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to show notifications when switching modes
        const mnLabel = state.symbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
                      + state.separator + state.word[+config.notifHidden]
        menuIDs.push(GM_registerMenuCommand(mnLabel, () => {
            saveSetting('notifHidden', !config.notifHidden)
            notify(`${ messages.menuLabel_modeNotifs }: ${ state.word[+config.notifHidden] }`)
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to check for updates
        const ucLabel = '🚀 ' + messages.menuLabel_updateCheck
        menuIDs.push(GM_registerMenuCommand(ucLabel, () => { checkForUpdates.fromMenu = true ; checkForUpdates() }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting(...keys) {
        keys.forEach(key => {
            config[key] = GM_getValue(config.prefix + '_' + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(config.prefix + '_' + key, value) // save to browser
        config[key] = value // and memory
    }

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`,
            position, notifDuration, shadow ? shadow : ( chatgpt.isDarkMode() ? '' : 'shadow')) }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function checkForUpdates() {

        // Fetch latest meta
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({ method: 'GET', url: config.updateURL + '?t=' + Date.now(), headers: { 'Cache-Control': 'no-cache' },
            onload: (response) => {
                saveSetting('lastCheckTime', Date.now())

                // Compare versions                
                const latestVer = response.responseText.match(/@version +(.*)/)[1]
                if (!checkForUpdates.fromMenu && config.skipNextUpdate && latestVer === config.skippedVer)
                    return // exit comparison if past auto-alert hidden
                for (let i = 0 ; i < 4 ; i++) { // loop thru subver's
                    const currentSubVer = parseInt(currentVer.split('.')[i]) || 0
                    const latestSubVer = parseInt(latestVer.split('.')[i]) || 0
                    if (currentSubVer > latestSubVer) break // out of comparison since not outdated
                    else if (latestSubVer > currentSubVer) { // if outdated
                        if (!checkForUpdates.fromMenu) // if auto-alert...
                            saveSetting('skipNextUpdate', false) // ...reset hidden alert setting for fresh decision

                        // Alert to update
                        const updateAlertID = alert(`${ messages.alert_updateAvail }! 🚀`,
                            `${ messages.alert_newerVer } ${ messages.appName } (v${ latestVer }) ${ messages.alert_isAvail }!   `
                                + `<a target="_blank" href="https://github.com/adamlui/chatgpt-widescreen/commits/main/greasemonkey/chatgpt-widescreen-mode.user.js" style="font-size: 0.7rem">${ messages.link_viewChanges }</a>`,
                            function update() { // button
                                window.open(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now(), '_blank')
                                location.reload() },
                            !checkForUpdates.fromMenu ? // checkbox if auto-alert
                                function dontShowAgainUntilNextUpdate() {
                                    saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                    saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                                : ''
                        )

                        // Localize button/checkbox labels if needed
                        if (!config.userLanguage.startsWith('en')) {
                            const updateAlert = document.querySelector(`[id="${ updateAlertID }"]`)
                            updateAlert.querySelector('label').textContent = ( // checkbox label
                                `${ messages.alert_dontShowAgain } ${ messages.alert_untilNextVer }`)
                            updateAlert.querySelectorAll('button')[1].textContent = messages.buttonLabel_update
                            updateAlert.querySelectorAll('button')[0].textContent = messages.buttonLabel_dismiss
                        }

                        return
                }}

                if (checkForUpdates.fromMenu) { // alert to no update found
                    alert(`${ messages.alert_upToDate }!`, // title
                        `${ messages.appName } (v${ currentVer }) ${ messages.alert_isUpToDate }!`) // msg
    }}})}

    // Define CSS function

    function classListToCSS(classList) { // convert DOM classList to single CSS selector
        return '.' + [...classList].join('.') // prepend dot to dot-separated string
            .replaceAll(/([:\[\]])/g, '\\$1') // escape CSS special chars
    }

    // Define BUTTON functions

    function setBtnColor() { return chatgpt.isDarkMode() || chatgpt.history.isOff() ? 'white' : '#202123' }

    function insertBtns() {
        const chatbar = document.querySelector("form button[class*='bottom']").parentNode
        if (chatbar.contains(fullWindowButton)) return // if buttons aren't missing, exit
        else chatbar.append(newChatButton, fullWindowButton, wideScreenButton, fullScreenButton, tooltipDiv)
    }

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
        tooltipDiv.innerText = messages['tooltip_' + buttonType + (
            !/full|wide/i.test(buttonType) ? '' : (config[buttonType] ? 'OFF' : 'ON'))]
        const ctrAddend = 25, overlayWidth = 30
        const iniRoffset = overlayWidth * (
              buttonType.includes('fullScreen') ? 1
            : buttonType.includes('fullWindow') ? 2
            : buttonType.includes('wide') ? 3 : 4 ) + ctrAddend
        tooltipDiv.style.right = `${ // horizontal position
            iniRoffset - tooltipDiv.getBoundingClientRect().width / 2}px`
    }

    // Define TOGGLE functions

    function activateMode(mode) {
        if (mode == 'wideScreen') { document.head.appendChild(wideScreenStyle) ; syncMode('wideScreen') }
        else if (mode == 'fullWindow') { document.head.appendChild(fullWindowStyle) ; chatgpt.sidebar.hide() ; console.log('fullWindow activated')}
        else if (mode == 'fullScreen') document.documentElement.requestFullscreen()
    }

    function deactivateMode(mode) {
        if (mode == 'wideScreen') try { document.head.removeChild(wideScreenStyle) ; syncMode('wideScreen') } catch (error) {}
        else if (mode == 'fullWindow') { try { document.head.removeChild(fullWindowStyle) } catch (error) {} chatgpt.sidebar.show() }
        else if (mode == 'fullScreen') {
            if (config.f11)
                alert(messages.alert_pressF11, messages.alert_f11reason + '.')
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
                      : mode === 'fullWindow' ? chatgpt.sidebar.isOff()
                                              : chatgpt.isFullScreen() )
        saveSetting(mode, state) ; updateBtnSVG(mode) ; updateTooltip(mode)
        if (mode === 'fullWindow') syncFullerWindows(state)
        if (!config.notifHidden) { // notify synced state
            notify(`${ messages['mode_' + mode] } ${ state ? 'ON' : 'OFF' }`) }
        config.modeSynced = true ; setTimeout(() => { config.modeSynced = false }, 100) // prevent repetition
    }

    function syncFullerWindows(fullWindowState) {
        if (fullWindowState && config.fullerWindows && !config.wideScreen) { // activate fuller window
            document.head.appendChild(wideScreenStyle) ; updateBtnSVG('wideScreen', 'on')
        } else if (!fullWindowState) {
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

})()
