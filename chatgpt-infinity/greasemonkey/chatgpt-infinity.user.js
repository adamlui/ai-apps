// ==UserScript==
// @name                ChatGPT Infinity ∞
// @version             2023.4.28
// @description         Generate endless answers from all-knowing ChatGPT
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @license             MIT
// @match               https://chat.openai.com/*
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@95c0547bdec79385eb8931d57bdad0b2b357b67f/dist/chatgpt-1.6.0.min.js
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @noframes
// @homepageURL         https://github.com/adamlui/chatgpt-infinity
// @supportURL          https://github.com/adamlui/chatgpt-infinity/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 Adam Lui, chatgpt.js & contributors under the MIT license.

(function () {

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle Infinity Mode
        var imLabel = stateSymbol[+!config.infinityMode] + ' Infinity Mode'
            + stateSeparator + stateWord[+!config.infinityMode]
        menuIDs.push(GM_registerMenuCommand(imLabel, function() {
            document.querySelector('#infinityToggle').click()
            if (!config.notifHidden) chatgpt.notify('Infinity Mode: ' + stateWord[+!config.infinityMode], '', '', chatgpt.isDarkMode() ? '' : 'shadow')
        }))

        // Add command to set language
        menuIDs.push(GM_registerMenuCommand('🌐 Reply Language (' + config.replyLanguage + ')', function() {
            var replyLanguage = prompt('Update reply language:', config.replyLanguage)
            saveSetting('replyLanguage', replyLanguage)
            alert('ChatGPT Infinity will reply in ' + replyLanguage + '.')
            if (config.infinityMode.isActive) { // reset running infinity mode
                toggleInfinityMode() ; toggleInfinityMode() }
            for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) // remove all cmd's
            registerMenu() // serve fresh menu
        }))

        // Add command to change reply interval
        menuIDs.push(GM_registerMenuCommand('⌚ Reply Interval (' + config.replyInterval + 's)', function() {
            while (true) {
                var replyInterval = prompt("Update reply interval (minimum 5 secs):", config.replyInterval)
                if (replyInterval === null) break // user cancelled so do nothing
                else if (!isNaN(parseInt(replyInterval)) && parseInt(replyInterval) > 4) { // valid int set
                    saveSetting('replyInterval', parseInt(replyInterval))
                    alert('ChatGPT Infinity will reply every ' + replyInterval + ' seconds.')
                    if (config.infinityMode.isActive) { // reset running infinity mode
                        toggleInfinityMode() ; toggleInfinityMode() }
                    for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) // remove all cmd's
                    registerMenu() // serve fresh menu
                    break
        }}}))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting() {
        var keys = [].slice.call(arguments)
        keys.forEach(function(key) {
            config[key] = GM_getValue(configKeyPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configKeyPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

    // Define TOGGLE functions

    function insertToggle() {
        var firstMenu = document.querySelector('nav')
        if (!firstMenu.contains(toggleLabel)) { // check if label exists first // 检查标签是否首先存在
            firstMenu.insertBefore(toggleLabel, firstMenu.childNodes[0]) // insert before 'New chat'// 在"新聊天"之前插入
    }}

    function updateToggleHTML() {
        toggleLabel.innerHTML = `
            <img width="18px" src="https://i.imgur.com/QdwpqDt.png">
            Infinity Mode ${config.infinityMode ? 'enabled' : 'disabled'}
            <label class="switch" ><input id="infinityToggle" type="checkbox"
                ${config.infinityMode ? "checked='true'" : ""} >
                <span class="slider"></span></label>`
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

    async function toggleInfinityMode() {
        var toggleInput = document.querySelector('#infinityToggle')
        if (event.target == toggleLabel) toggleInput.click() // to avoid double-toggle
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        config.infinityMode = toggleInput.checked
        for (var id of menuIDs) { GM_unregisterMenuCommand(id) } ; registerMenu() // refresh menu
        if (config.infinityMode) { // activate it
            chatgpt.sendInNewChat('generate a single random q&a in ' + config.replyLanguage + '. don\'t type anything else')
            await chatgpt.isIdle()
            if (config.infinityMode && !config.isActive) { // double-check in case de-activated before scheduled
                config.isActive = setInterval(async function() {
                    chatgpt.send('do it again') ; await chatgpt.isIdle()
                }, parseInt(config.replyInterval) * 1000)
            }
        } else { // de-activate it
            clearInterval(config.isActive) ; config.isActive = null
        }
    }

    // Run MAIN routine

    // Init settings
    var config = { isActive: false }, configKeyPrefix = 'chatGPTinf_' // initialize config variables
    loadSetting('replyLanguage', 'replyInterval')
    if (!config.replyLanguage) saveSetting('replyLanguage', 'English') // init reply language to English if unset
    if (!config.replyInterval) saveSetting('replyInterval', 7) // init refresh interval to 7 secs if unset

    // Init/register menu
    var menuIDs = [], stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF'] // initialize menu vars
    registerMenu() // create browser toolbar menu

    // Stylize toggle switch
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

    // Create toggle label, add listener/classes/HTML
    var toggleLabel = document.createElement('div') // create label div
    toggleLabel.addEventListener('click', (event) => { toggleInfinityMode(event) })
    for (var link of document.querySelectorAll('a')) { // inspect sidebar links for classes
        if (link.innerHTML.includes('New chat')) { // focus on 'New chat'
            toggleLabel.setAttribute('class', link.classList) // borrow its classes
            break // stop looping since class assignment is done
        }
    } updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    var navObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
    }})})
    navObserver.observe(document.documentElement, { childList: true, subtree: true })

})()
