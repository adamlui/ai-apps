// ==UserScript==
// @name                Autoclear ChatGPT History
// @name:zh-CN          自动清除 ChatGPT 历史记录
// @name:zh-SG          自动清除 ChatGPT 历史记录
// @name:zh-TW          自動清除 ChatGPT 歷史記錄
// @name:zh-HK          自動清除 ChatGPT 歷史記錄
// @name:ja             ChatGPT 履歴の自動消去
// @name:ko             ChatGPT 기록 자동 삭제
// @name:ru             Автоочистка Истории ChatGPT
// @name:de             ChatGPT-Verlauf Automatisch Löschen
// @name:es             Borrar Automáticamente el Historial de ChatGPT
// @name:fr             Effacement Automatique de L'Historique ChatGPT
// @name:it             Cancella Automaticamente Cronologia ChatGPT
// @description         Auto-clears chat history when visiting chat.openai.com
// @description:zh-CN   访问 chat.openai.com 时自动清除聊天记录
// @description:zh-SG   访问 chat.openai.com 时自动清除聊天记录
// @description:zh-TW   訪問 chat.openai.com 時自動清除聊天記錄
// @description:zh-HK   訪問 chat.openai.com 時自動清除聊天記錄
// @description:ja      chat.openai.com にアクセスすると、チャット履歴が自動的に消去されます
// @description:ko      chat.openai.com 방문 시 채팅 기록 자동 삭제
// @description:ru      Автоматически очищает историю чата при посещении chat.openai.com
// @description:de      Löscht den Chat-Verlauf automatisch, wenn Sie chat.openai.com besuchen
// @description:es      Borra automáticamente el historial de chat al visitar chat.openai.com
// @description:fr      Efface automatiquement l'historique des discussions lors de la visite de chat.openai.com
// @description:it      Cancella automaticamente la cronologia chat quando visiti chat.openai.com
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @version             2023.6.22.4
// @license             MIT
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @compatible          chrome
// @compatible          edge
// @compatible          firefox
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @match               https://chat.openai.com/*
// @run-at              document-end
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@5eed48d721158fc3800c23bc02b5dc0d3959b472/dist/chatgpt-1.10.1.min.js
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @updateURL           https://greasyfork.org/scripts/460805/code/autoclear-chatgpt-history.meta.js
// @downloadURL         https://greasyfork.org/scripts/460805/code/autoclear-chatgpt-history.user.js
// @homepageURL         https://github.com/adamlui/autoclear-chatgpt-history
// @supportURL          https://github.com/adamlui/autoclear-chatgpt-history/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {

    // Init config
    const config = { prefix: 'chatGPTac', appSymbol: '🕶️', userLanguage: navigator.languages[0] || navigator.language || '',
                     ghHostDir: 'https://raw.githubusercontent.com/adamlui/autoclear-chatgpt-history/main/',
                     updateURL: 'https://greasyfork.org/scripts/460805/code/autoclear-chatgpt-history.meta.js' }
    loadSetting('autoclear', 'buttonHidden', 'lastCheckTime', 'notifHidden', 'skipNextUpdate', 'skippedVer', 'toggleHidden')

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

    // Init/register menu
    let menuIDs = [], state = { symbol: ['✔️', '❌'], word: ['ON', 'OFF'],
                                separator: getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': ' }
    registerMenu() // create browser toolbar menu

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 172800000) checkForUpdates()

    // Auto-clear chats if activated // 自动清除聊天是否激活
    await chatgpt.isLoaded()
    setTimeout(() => { if (config.autoclear) chatgpt.clearChats() }, 250)

    // Notify of mode if enabled
    if (!config.notifHidden && config.autoclear) notify(messages.mode_autoClear + ': ON')

    // Stylize/insert toggle switch
    const switchStyle = document.createElement('style')
    switchStyle.innerText = `/* Stylize switch */
        .switch { position:absolute ; left:208px ; width:34px ; height:18px }
        .switch input { opacity:0 ; width:0 ; height:0 } /* hide checkbox */
        .slider { position:absolute ; cursor:pointer ; top:0 ; left:0 ; right:0 ; bottom:0 ; background-color:#ccc ; -webkit-transition:.4s ; transition:.4s ; border-radius:28px }
        .slider:before { position:absolute ; content:"" ; height:14px ; width:14px ; left:3px; bottom:2px ; background-color:white ; -webkit-transition:.4s ; transition:.4s ; border-radius:28px }

        /* Position/color ON-state */
        input:checked { position:absolute ; right:3px }
        input:checked + .slider { background-color:#42B4BF }
        input:checked + .slider:before {
            -webkit-transform: translateX(14px) translateY(1px) ;
            -ms-transform: translateX(14px) translateY(1px) ;
            transform: translateX(14px) }`
    document.head.appendChild(switchStyle)

    // Create toggle label, add styles/classes/listener/HTML
    const toggleLabel = document.createElement('div') // create label div
    toggleLabel.style.maxHeight = '44px' // prevent flex overgrowth
    toggleLabel.style.margin = '2px 0' // add v-margins
    toggleLabel.style.userSelect = 'none' // prevent highlighting
    for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) { // inspect sidebar for classes to borrow
        if (navLink.text.match(/(new|clear) chat/i)) { // focus on new/clear chat button
            toggleLabel.setAttribute('class', navLink.classList) // borrow link classes
            navLink.parentNode.style.margin = '2px 0' // add v-margins
            break // stop looping since class assignment is done
    }}
    toggleLabel.addEventListener('click', () => { // add listener to toggle switch/label/config/menu + auto-clear
        const toggleInput = document.querySelector('#acToggleInput')
        toggleInput.checked = !toggleInput.checked
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        config.autoclear = toggleInput.checked
        for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        if (config.autoclear) {
            setTimeout(chatgpt.clearChats, 250)
            if (!config.notifHidden) notify(messages.mode_autoClear + ': ON')
        } else if (!config.autoclear)
            if (!config.notifHidden) notify(messages.mode_autoClear + ': OFF')
        saveSetting('autoclear', config.autoclear)
    })
    updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    const nodeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
    }})}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order

        // Add command to toggle auto-clear
        const acLabel = state.symbol[+!config.autoclear] + ' ' + messages.menuLabel_autoClear
                    + state.separator + state.word[+!config.autoclear]
        menuIDs.push(GM_registerMenuCommand(acLabel, function() {
            document.querySelector('#acToggleLabel').click()
        }))

        // Add 'Toggle Visibility' command
        const tvLabel = state.symbol[+config.toggleHidden] + ' ' + messages.menuLabel_toggleVis
                    + state.separator + state.word[+config.toggleHidden]
        menuIDs.push(GM_registerMenuCommand(tvLabel, function() {
            saveSetting('toggleHidden', !config.toggleHidden)
            toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex' // toggle visibility
            if (!config.notifHidden) {
                notify(messages.menuLabel_toggleVis + ': '+ state.word[+config.toggleHidden])
            } for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to show notifications when changing settings/modes
        const mnLabel = state.symbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
                    + state.separator + state.word[+config.notifHidden]
        menuIDs.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            notify(messages.menuLabel_modeNotifs + ': ' + state.word[+config.notifHidden])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to check for updates
        const ucLabel = '🚀 Check for Updates'
        menuIDs.push(GM_registerMenuCommand(ucLabel, function() { checkForUpdates.fromMenu = true ; checkForUpdates() }))
    }

    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting(...keys) {
        keys.forEach(key => {
            config[key] = GM_getValue(config.prefix + '_' + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(config.prefix + '_' + key, value) // save to browser
        config[key] = value // and memory
    }

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration, shadow ? shadow : ( chatgpt.isDarkMode() ? '' : 'shadow')) }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function checkForUpdates() {

        // Fetch latest meta
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({ method: 'GET', url: config.updateURL + '?t=' + Date.now(), headers: { 'Cache-Control': 'no-cache' },
            onload: (response) => { saveSetting('lastCheckTime', Date.now())

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
                        alert('Update available! 🚀',
                            `An update to ${ messages.appName } (v${ latestVer }) is available!   `
                                + `<a target="_blank" href="https://github.com/adamlui/autoclear-chatgpt-history/commits/main/greasemonkey/autoclear-chatgpt-history.user.js" style="font-size: 0.7rem">View changes</a>`,
                            function update() { // button
                                window.open(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now(), '_blank')
                                location.reload() },
                            !checkForUpdates.fromMenu ? // checkbox if auto-alert
                                function dontShowAgainUntilNextUpdate() {
                                    saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                    saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                                : ''
                        )
                        return
                }}

                if (checkForUpdates.fromMenu) { // alert to no update found
                    alert('Up-to-date!', `${ messages.appName } (v${ currentVer }) is up-to-date!`)
    }}})}

    // Define TOGGLE functions

    function insertToggle() {
        const chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]') || {}
        const firstButton = chatHistoryNav.querySelector('a') || {}
        if (chatgpt.history.isOff()) try { firstButton.parentNode.nextElementSibling.style.display = 'none' } catch (error) {} // hide enable-history spam div
        if (!chatHistoryNav.contains(toggleLabel)) try { chatHistoryNav.insertBefore(toggleLabel, firstButton.parentNode) } catch (error) {} // insert toggle
    }

    function updateToggleHTML() {
        while (toggleLabel.firstChild) toggleLabel.firstChild.remove() // clear old content

        // Create elements
        const navicon = document.createElement('img') ; navicon.width = 18
        navicon.src = 'https://raw.githubusercontent.com/adamlui/autoclear-chatgpt-history/main/media/images/icons/navicon.png'
        const label = document.createElement('label') ; label.className = 'switch' ; label.id = 'acToggleLabel'
        const labelText = document.createTextNode('Auto-clear ' + ( config.autoclear ? 'enabled' : 'disabled' ))
        const input = document.createElement('input') ; input.id = 'acToggleInput'
        input.type = 'checkbox' ; input.disabled = true ; input.checked = config.autoclear
        const span = document.createElement('span') ; span.className = 'slider'

        // Append elements
        label.appendChild(input) ; label.appendChild(span)
        toggleLabel.appendChild(navicon) ; toggleLabel.appendChild(label) ; toggleLabel.appendChild(labelText)

        // Update visibility
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

})()
