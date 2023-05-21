// ==UserScript==
// @name                ChatGPT Auto-Continue ⏩
// @version             2023.5.21.5
// @description         Auto-continue multiple ChatGPT responses
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @license             MIT
// @match               https://chat.openai.com/*
// @icon                https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@744003f7589935a1027840a8be65239696efd05a/dist/chatgpt-1.7.1.min.js
// @connect             raw.githubusercontent.com
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @homepageURL         https://github.com/adamlui/chatgpt-auto-continue
// @supportURL          https://github.com/adamlui/chatgpt-auto-continue/issues
// ==/UserScript==

(async () => {

    // Initialize settings
    var appSymbol = '≫', configKeyPrefix = 'chatGPTactn_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '' }
    loadSetting('lastCheckTime', 'notifHidden', 'skipNextUpdate', 'skippedVer')

    // Define messages
    var msgsLoaded = new Promise(resolve => {
        var msgHostDir = 'https://raw.githubusercontent.com/adamlui/chatgpt-auto-continue/main/greasemonkey/_locales/'
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

    // Check for update (1x/24h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 86400000) { // if 24h since last check

        // Fetch .js to examine meta
        var updateURL = GM_info.scriptUpdateURL || GM_info.script.updateURL || GM_info.script.downloadURL
        fetch(updateURL + '?t=' + Date.now(), { cache: 'no-cache' })
            .then((response) => { response.text().then((data) => {
                saveSetting('lastCheckTime', Date.now())

                // Compare versions
                var currentVer = GM_info.script.version
                var latestVer = data.match(/@version +(.*)/)[1]
                if (config.skipNextUpdate && latestVer === config.skippedVer) return // exit comparison if past alert hidden
                for (var i = 0 ; i < 4 ; i++) { // loop thru subver's
                    if (parseInt(latestVer.split('.')[i] || 0) > parseInt(currentVer.split('.')[i] || 0)) { // if outdated

                        // Alert to update
                        var updateAlertID = chatgpt.alert(`${ appSymbol } ${ messages.alert_updateAvail }! 🚀`,
                            `${ messages.alert_newerVer } ${ messages.appName } (v${ currentVer }) ${ messages.alert_isAvail }!`
                                + `<a target="_blank" href="https://github.com/adamlui/chatgpt-auto-continue/commits/main/greasemonkey/chatgpt-auto-continue.user.js" style="font-size: 0.7rem ; position: relative ; left: 8px">${ messages.link_viewChanges }</a>`,
                            function update() { // button
                                saveSetting('skipNextUpdate', false) // reset hidden alert setting
                                window.open(( updateURL.includes('.meta.') ? GM_info.script.downloadURL : updateURL )
                                    + '?t=' + Date.now(), '_blank') },
                            function dontShowAgainUntilNextUpdate() { // checkbox
                                saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                        )

                        // Internationalize button/checkbox labels if needed
                        if (!config.userLanguage.startsWith('en')) {
                            var updateAlert = document.querySelector(`[id="${ updateAlertID }"]`)
                            updateAlert.querySelector('label').textContent = ( // checkbox label
                                `${ messages.alert_dontShowAgain } ${ messages.alert_untilNextVer }`)
                            updateAlert.querySelectorAll('button')[1].textContent = messages.buttonLabel_update
                            updateAlert.querySelectorAll('button')[0].textContent = messages.buttonLabel_dismiss
                        }

                        return
    }}})})}

    // Init/register menu
    var menuIDs = [], state = { symbol: ['✔️', '❌'], word: ['ON', 'OFF'] } // initialize menu vars
    registerMenu() // create browser toolbar menu

    // Observe DOM for need to continue
    const continueObserver = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const addedNode of mutation.addedNodes) {
                    if (addedNode.nodeName === 'BUTTON' && addedNode.innerHTML.includes('Continue generating')) {
                        addedNode.click()
    }}}}})
    continueObserver.observe(document, { childList: true, subtree: true })

    // Notify of status on load
    if (!config.notifHidden) {
        chatgpt.notify(appSymbol + ' ' + messages.mode_autoContinue + ': ON',
            '', '', chatgpt.isDarkMode() ? '' : 'shadow' )}

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to hide/show notifications on load
        var mnLabel = state.symbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
                    + stateSeparator + state.word[+config.notifHidden]
        menuIDs.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify(appSymbol + ' ' + messages.menuLabel_modeNotifs + ': ' + state.word[+config.notifHidden],
                '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))
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

})()
