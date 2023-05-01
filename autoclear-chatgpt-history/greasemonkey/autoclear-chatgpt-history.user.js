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
// @version             2023.5.1.2
// @description         Auto-clears chat history when visiting chat.openai.com
// @author              Adam Lui (刘展鹏), Tripp1e & Xiao-Ying Yo (小影哟)
// @namespace           https://github.com/adamlui
// @namespace           https://github.com/Tripp1e
// @namespace           https://github.com/XiaoYingYo
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
// @compatible          qq
// @match               https://chat.openai.com/*
// @run-at              document-end
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@6f86ebd392312d2521a5c814c8df721ba55965a3/dist/chatgpt-1.6.2.min.js
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @noframes
// @updateURL           https://greasyfork.org/scripts/460805/code/autoclear-chatgpt-history.meta.js
// @downloadURL         https://greasyfork.org/scripts/460805/code/autoclear-chatgpt-history.user.js
// @homepageURL         https://github.com/adamlui/autoclear-chatgpt-history
// @supportURL          https://github.com/adamlui/autoclear-chatgpt-history/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 Adam Lui, chatgpt.js & contributors under the MIT license.

(function () {

    // Define script functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order

        // Add 'Toggle Visibility' command
        var tvStateSymbol = ['✔️', '❌']
        var tvStateWord = ['ON', 'OFF']
        var tvLabel = tvStateSymbol[+config.toggleHidden] + ' Toggle Visibility'
            + (getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': ')
            + tvStateWord[+config.toggleHidden]
        menuID.push(GM_registerMenuCommand(tvLabel, function () {
            saveSetting('toggleHidden', !config.toggleHidden)
            toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex' // toggle visibility
            for (var id of menuID) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))
    }

    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting(...keys) {
        keys.forEach(function (key) {
            config[key] = GM_getValue(configKeyPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configKeyPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

    function updateToggleHTML() {
        toggleLabel.innerHTML = `
            <img width="18px" src="https://raw.githubusercontent.com/adamlui/autoclear-chatgpt-history/main/media/images/icons/navicon.png">
            Auto-clear ${config.autoclear ? 'enabled' : 'disabled'}
            <label class="switch" ><input id="autoclearToggle" type="checkbox"
                ${config.autoclear ? "checked='true'" : ""} >
                <span class="slider"></span></label>`
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

    function insertToggle() {
        var firstMenu = document.querySelector('nav')
        if (!firstMenu.contains(toggleLabel)) { // check if label exists first // 检查标签是否首先存在
            firstMenu.insertBefore(toggleLabel, firstMenu.childNodes[0]) // insert before 'New chat'// 在"新聊天"之前插入
    }}

    function toggleAutoclear() {
        var toggleInput = document.querySelector('#autoclearToggle')
        if (event.target == toggleLabel) toggleInput.click() // to avoid double-toggle
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        saveSetting('autoclear', toggleInput.checked)
    }

    async function hookFetch() {
        let unsafeWindow = document.defaultView
        const originalFetch = unsafeWindow.fetch
        unsafeWindow.fetch = function(...args) {
            (async function() {
                let U = args[0]
                if (U.indexOf('http') == -1) return
                let url = new URL(U), pathname = url.pathname, callback = fetchMap.get(pathname)
                if (callback == null) return
                callback(await originalFetch.apply(this, args))
            })()
            return originalFetch.apply(this, args)
    }}

    function createOrShowClearButton(Show = null) {
        if (document.getElementById('_clearButton_') != null) {
            if (Show != null) document.getElementById('_clearButton_').style.display = Show
            return
        }
        let border = document.querySelectorAll('div[class^="border-"]')
        border = border[border.length - 1]
        let div = document.createElement('div')
        div.id = '_clearButton_'
        div.innerHTML = clearSvg[0] + 'Clear Conversations'
        div.name = 0
        let className = border.childNodes[0].className
        div.className = className
        border.insertBefore(div, border.childNodes[0])
        div.addEventListener('click', function () {
            let json = fetchMap.get('conversations')
            if (json.items.length == 0) {
                div.name = 0 ; div.innerHTML = clearSvg[div.name] + 'Clear Conversations'
                return
            }
            if (div.name === 0) div.name = 1
            else { createOrShowClearButton('none') ; div.name = 0 ; chatgpt.clearChats() }
            div.innerHTML = clearSvg[div.name] + 'Clear Conversations'
        })
    }

    // Run MAIN routine

    // Initialize script
    var config = {}, configKeyPrefix = 'chatGPTac_' // initialize config variables
    loadSetting('autoclear', 'toggleHidden') // load script settings
    registerMenu() // create browser toolbar menu

    // Stylize/insert toggle switch
    var switchStyle = document.createElement('style')
    switchStyle.innerHTML = `/* Stylize switch */
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

    // Stylize clear button icons
    var clearSvg = ['<svg t="1682921783   220" class="icon"    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4292" width="16" height="16"><path d="M901.3 504.8l-76.3-150c-13.4-26.3-40-42.6-69.5-42.6H639c-1.1 0-2-0.9-2-2V120.6c0-31.1-25.3-56.3-56.3-56.3h-90c-31.1 0-56.3 25.3-56.3 56.3v189.6c0 1.1-0.9 2-2 2H315.8c-29.5 0-56.1 16.3-69.5 42.6l-76.3 150c-9.2 18.1-8.4 39.3 2.2 56.6 10.3 16.8 27.9 27 47.4 27.6-4.8 101-38.3 205.9-90.2 279.5-12.5 17.8-14.1 40.8-4.1 60.1 10 19.3 29.7 31.3 51.5 31.3h601.5c35 0 66-23.6 75.2-57.4 15.5-56.5 28.4-107.9 29.4-164.9C884 685 874 636 852.9 589c19-1.1 36.1-11.2 46.2-27.6 10.6-17.3 11.4-38.5 2.2-56.6z m-681.4 25.4l76.3-150c3.8-7.4 11.3-12 19.6-12h116.4c32 0 58-26 58-58V120.6c0-0.1 0.2-0.3 0.3-0.3h90c0.1 0 0.3 0.2 0.3 0.3v189.6c0 32 26 58 58 58h116.4c8.3 0 15.8 4.6 19.6 12l76.3 150c0.2 0.3 0.5 1-0.1 2s-1.3 1-1.7 1H221.7c-0.4 0-1.1 0-1.7-1-0.6-1-0.3-1.7-0.1-2zM827 736.6c-0.9 50.5-12.9 98.3-27.4 151.1-2.6 9.5-11.3 16.2-21.2 16.2H651.8c11.3-22.3 18.5-44 23.1-61.2 7.1-26.7 10.7-53.5 10.6-78-0.1-17.1-15.5-30.1-32.4-27.4-13.6 2.2-23.6 14-23.6 27.8 0.1 42.7-14.1 98.2-42.7 138.8H406.2c15.2-21.7 26.1-43.8 33.6-61.9 10-24.3 17.4-49.7 21.2-72.5 2.8-17-10.4-32.5-27.6-32.5-13.6 0-25.3 9.8-27.6 23.3-2.8 16.6-8.3 37.7-17.7 60.4-10.1 24.6-27.8 58.1-55.6 83.3H176.9c-0.5 0-1.2 0-1.8-1.1-0.6-1.1-0.2-1.6 0.1-2 29.7-42.1 54.8-94.5 72.5-151.4 16.2-52.1 25.7-106.9 28-160.3h514.6C816 635.6 828 684 827 736.6z" fill="#ffffff" p-id="4293"></path></svg>','<svg t="1682921891400" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5808" width="16" height="16"><path d="M85.333333 512C85.333333 276.352 276.309333 85.333333 512 85.333333c235.648 0 426.666667 190.976 426.666667 426.666667 0 235.648-190.976 426.666667-426.666667 426.666667-235.648 0-426.666667-190.976-426.666667-426.666667z m376.64 74.325333l-105.642666-105.642666a21.248 21.248 0 0 0-30.122667 0.042666c-8.32 8.32-8.213333 21.973333-0.064 30.101334l120.810667 120.832a21.248 21.248 0 0 0 30.122666-0.085334l211.157334-211.157333a21.290667 21.290667 0 0 0 0-30.186667 21.397333 21.397333 0 0 0-30.250667 0.106667l-196.010667 195.989333z" fill="#ffffff" p-id="5809"></path></svg>']

    // Initialize/fill conversation map
    var fetchMap = new Map()
    fetchMap.set('conversations', {})
    fetchMap.set('/backend-api/conversations', async function(f) {
        let json = await f.json()
        createOrShowClearButton(null)
        if (json.items.length === 0) createOrShowClearButton('none')
        else createOrShowClearButton('')
        fetchMap.set('conversations', json)
    })
    hookFetch()

    // Create toggle label & add listener/classes/HTML
    var toggleLabel = document.createElement("div") // create label div
    toggleLabel.addEventListener('click', (event) => { toggleAutoclear(event) })
    for (var link of document.querySelectorAll('a')) { // inspect sidebar links for classes
        if (link.innerHTML.includes('New chat')) { // focus on 'New chat'
            toggleLabel.setAttribute("class", link.classList) // borrow its classes
            break // stop looping since class assignment is done
        }
    } updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    var navObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
            }
        })
    })
    navObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Auto-clear chats if activated // 自动清除聊天是否激活
    var clearObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function() {
            var clearButton = document.getElementById('_clearButton_')
            if (clearButton) {
                if (clearButton.style.display != 'none') {
                    setTimeout(chatgpt.clearChats, 250) ; clearObserver.disconnect()
    }}})})
    if (config.autoclear) {
        clearObserver.observe(document, { childList: true, subtree: true })
        // Auto-disconnect after 3.5sec to avoid clearing new chats // 还要在3.5秒后断开连接,以避免清除新的频道
        setTimeout(function() { clearObserver.disconnect() }, 3500)
    }

})()
