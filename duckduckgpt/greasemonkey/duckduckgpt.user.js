// ==UserScript==
// @name                DuckDuckGPT 🤖
// @version             2023.6.22
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description         Adds ChatGPT answers to DuckDuckGo sidebar (powered by GPT-4!)
// @description:de      Fügt ChatGPT-Antworten zur DuckDuckGo-Seitenleiste hinzu (unterstützt von GPT-4!)
// @description:es      Agrega respuestas de ChatGPT a la barra lateral de DuckDuckGo (¡con tecnología de GPT-4!)
// @description:fr      Ajoute les réponses ChatGPT à la barre latérale DuckDuckGo (propulsé par GPT-4!)
// @description:it      Aggiunge le risposte ChatGPT alla barra laterale di DuckDuckGo (basata su GPT-4!)
// @description:ja      ChatGPT の回答を DuckDuckGo サイドバーに追加します (GPT-4 を搭載!)
// @description:ko      DuckDuckGo 사이드바에 ChatGPT 답변 추가 (GPT-4 기반!)
// @description:ru      Добавляет ответы ChatGPT на боковую панель DuckDuckGo (на базе GPT-4!)
// @description:zh-CN   将 ChatGPT 答案添加到 DuckDuckGo 侧边栏 (由 GPT-4 提供支持!)
// @description:zh-HK   將 ChatGPT 答案添加到 DuckDuckGo 側邊欄 (由 GPT-4 提供支持!)
// @description:zh-SG   将 ChatGPT 答案添加到 DuckDuckGo 侧边栏 (由 GPT-4 提供支持!)
// @description:zh-HK   將 ChatGPT 答案添加到 DuckDuckGo 側邊欄 (由 GPT-4 提供支持!)
// @license             MIT
// @icon                https://media.ddgpt.com/images/ddgpt-icon48.png
// @icon64              https://media.ddgpt.com/images/ddgpt-icon64.png
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @match               https://duckduckgo.com/?*
// @include             https://auth0.openai.com
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @connect             chat.openai.com
// @connect             c1b9-67-188-52-169.ngrok.io
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@5eed48d721158fc3800c23bc02b5dc0d3959b472/dist/chatgpt-1.10.1.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/auto-render.min.js
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_cookie
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @downloadURL         https://greasyfork.org/scripts/459849/code/duckduckgpt.user.js
// @updateURL           https://greasyfork.org/scripts/459849/code/duckduckgpt.meta.js
// @homepageURL         https://www.duckduckgpt.com
// @supportURL          https://github.duckduckgpt.com/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license
// ...and KaTeX, the fastest math typesetting library @ https://katex.org (c) 2013–2020 Khan Academy & contributors under the MIT license

(function() {

    var chatGPTsessURL='https://chat.openai.com/api/auth/session'
    var openAIauthDomain = 'https://auth0.openai.com'
    var openAIchatEndpoint = 'https://chat.openai.com/backend-api/conversation'
    var proxyEndpointMap = [[ 'https://c1b9-67-188-52-169.ngrok.io', 'pk-pJNAtlAqCHbUDTrDudubjSKeUVgbOMvkRQWMLtscqsdiKmhI', 'gpt-4' ]]

    var ddgptAlerts = {
        waitingResponse: 'Waiting for ChatGPT response...',
        login: 'Please login @ ',
        tooManyRequests: 'ChatGPT is flooded with too many requests. Check back later!',
        parseFailed: 'Failed to parse response JSON',
        checkCloudflare: 'Please pass Cloudflare security check @ ',
        suggestProxy: 'OpenAI API is not working. (Try switching on Proxy Mode in toolbar)',
        suggestOpenAI: 'Proxy API is not working. (Try switching off Proxy Mode in toolbar)'
    }

    // Define SCRIPT functions

    function registerMenu() {
        var menuIDs = [] // to store registered commands for removal while preserving order
        var stateIndicator = { menuSymbol: ['✔️', '❌'], menuWord: ['ON', 'OFF'], notifWord: ['Enabled', 'Disabled'] }
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle proxy API mode
        var pamLabel = stateIndicator.menuSymbol[+!config.proxyAPIenabled] + ' Proxy API Mode '
                     + stateSeparator + stateIndicator.menuWord[+!config.proxyAPIenabled]
        menuIDs.push(GM_registerMenuCommand(pamLabel, function() {
            saveSetting('proxyAPIenabled', !config.proxyAPIenabled)
            notify('Proxy Mode ' + stateIndicator.notifWord[+!config.proxyAPIenabled])
            for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i])
            registerMenu() // serve fresh menu
            location.reload() // re-send query using new endpoint
        }))

        // Add command to toggle prefix mode
        var pmLabel = stateIndicator.menuSymbol[+!config.prefixEnabled] + ' Require "/" before query '
                     + stateSeparator + stateIndicator.menuWord[+!config.prefixEnabled]
        menuIDs.push(GM_registerMenuCommand(pmLabel, function() {
            saveSetting('prefixEnabled', !config.prefixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Suffix Mode if activating Prefix Mode
                saveSetting('suffixEnabled', !config.suffixEnabled) }
            notify('Prefix Mode ' + stateIndicator.notifWord[+!config.prefixEnabled])
            for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i])
            registerMenu() // serve fresh menu
            if (!config.prefixEnabled) location.reload() // re-send query if newly disabled
        }))

        // Add command to toggle suffix mode
        var smLabel = stateIndicator.menuSymbol[+!config.suffixEnabled] + ' Require "?" after query '
                     + stateSeparator + stateIndicator.menuWord[+!config.suffixEnabled]
        menuIDs.push(GM_registerMenuCommand(smLabel, function() {
            saveSetting('suffixEnabled', !config.suffixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Prefix Mode if activating Suffix Mode
                saveSetting('prefixEnabled', !config.prefixEnabled) }
            notify('Suffix Mode ' + stateIndicator.notifWord[+!config.suffixEnabled])
            for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i])
            registerMenu() // serve fresh menu
            if (!config.suffixEnabled) location.reload() // re-send query if newly disabled
        }))

        // Add command to check for updates
        var ucLabel = '🚀 Check for Updates'
        menuIDs.push(GM_registerMenuCommand(ucLabel, function() { checkForUpdates.fromMenu = true ; checkForUpdates() }))
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

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ appSymbol } ${ msg }`, position, notifDuration, shadow ? shadow : ( isDarkMode() ? '' : 'shadow')) }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function checkForUpdates() {

        // Fetch latest meta
        const updateURL = GM_info.scriptUpdateURL || GM_info.script.updateURL || GM_info.script.downloadURL
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({ method: 'GET', url: updateURL + '?t=' + Date.now(), headers: { 'Cache-Control': 'no-cache' },
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
                        alert('Update available! 🚀',
                            `An update to DuckDuckGPT (v${ latestVer }) is available!`
                                + `<a target="_blank" href="https://github.com/kudoai/duckduckgpt/commits/main/greasemonkey/duckduckgpt.user.js" style="font-size: 0.88rem ; position: relative ; left: 10px">View changes</a>`,
                            function update() { // button
                                window.open(( updateURL.includes('.meta.') ? GM_info.script.downloadURL : updateURL )
                                    + '?t=' + Date.now(), '_blank')
                                location.reload() },
                            !checkForUpdates.fromMenu ? // checkbox if auto-alert
                                function skipThisVersion() {
                                    saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                    saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                                : '', 328 // width
                        )
                        return
                }}

                if (checkForUpdates.fromMenu) // alert to no update found
                    alert('Up-to-date!', `DuckDuckGPT (v${ currentVer }) is up-to-date!`)
    }})}


    function isCenteredMode() { return document.querySelector('html').classList.toString().includes('center') }
    function isDarkMode() { return document.documentElement.classList.toString().includes('dark') }

    // Define CONSOLE/ALERT functions

    var ddgptConsole = {
        info: function(msg) {console.info(appSymbol + ' DuckDuckGPT >> ' + msg)},
        error: function(msg) {console.error(appSymbol + ' DuckDuckGPT >> ERROR: ' + msg)}
    }

    function ddgptAlert(msg) {
        if (msg.includes('login')) deleteOpenAIcookies()
        ddgptDiv.innerHTML = (
            /waiting|loading/i.test(msg) ? // if alert involves loading, add class
                '<p class="loading">' : '<p>') + ddgptAlerts[msg]
            + (ddgptAlerts[msg].includes('@') ? // if msg needs login link, add it
                '<a href="https://chat.openai.com" target="_blank">chat.openai.com</a> (If issue persists, try activating Proxy Mode)</p>' : '</p>')
    }

    // Define SESSION functions

    function uuidv4() {
        var d = new Date().getTime() // get current timestamp in ms (to ensure UUID uniqueness)
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0 // generate random nibble
            d = Math.floor(d/16) // correspond each UUID digit to unique 4-bit chunks of timestamp
            return (c=='x' ? r : (r&0x3|0x8)).toString(16) // generate random hexadecimal digit
        })
        return uuid
    }

    function getAccessToken() {
        return new Promise(function(resolve) {
            var accessToken = GM_getValue('accessToken')
            ddgptConsole.info('OpenAI access token: ' + accessToken)
            if (!accessToken) {
                GM.xmlHttpRequest({
                    url: chatGPTsessURL,
                    onload: function(response) {
                        if (isBlockedbyCloudflare(response.responseText)) {
                            ddgptAlert('checkCloudflare') ; return }
                        try {
                            var newAccessToken = JSON.parse(response.responseText).accessToken
                            GM_setValue('accessToken', newAccessToken)
                            resolve(newAccessToken)
                        } catch { ddgptAlert('login') ; return }
                    }
                })
            } else resolve(accessToken)
    })}

    function isBlockedbyCloudflare(resp) {
        try {
            var html = new DOMParser().parseFromString(resp, 'text/html')
            var title = html.querySelector('title')
            return title.innerText === 'Just a moment...'
        } catch (error) { return false }
    }

    function deleteOpenAIcookies() {
        if (getUserscriptManager() !== 'Tampermonkey') return
        GM_cookie.list({ url: openAIauthDomain }, function(cookies, error) {
            if (!error) { for (var i = 0; i < cookies.length; i++) {
                GM_cookie.delete({ url: openAIauthDomain, name: cookies[i].name })
    }}})}

    // Define ANSWER functions

    async function getShowReply(messages, callback) {

        // Initialize attempt properties
        if (!getShowReply.triedEndpoints) getShowReply.triedEndpoints = []
        if (!getShowReply.attemptCnt) getShowReply.attemptCnt = 0

        // Pick API
        var endpoint, accessKey, model
        if (config.proxyAPIenabled) { // randomize proxy API
            var untriedEndpoints = proxyEndpointMap.filter(function(entry) {
                return !getShowReply.triedEndpoints?.includes(entry[0]) })
            var entry = untriedEndpoints[Math.floor(Math.random() * untriedEndpoints.length)]
            endpoint = entry[0] ; accessKey = entry[1] ; model = entry[2]
        } else { // use OpenAI API
            endpoint = openAIchatEndpoint
            var timeoutPromise = new Promise((resolve, reject) => {
                setTimeout(() => { reject(new Error('Timeout occurred')) }, 3000) })
            accessKey = await Promise.race([getAccessToken(), timeoutPromise])
            if (!accessKey) { ddgptAlert('login') ; return }
            model = 'text-davinci-002-render'
        }

        // Get answer from ChatGPT
        var data = {}
        if (!config.proxyAPIenabled) data = JSON.stringify({ action: 'next', messages: messages, model: model, parent_message_id: uuidv4(), max_tokens: 4000 })
        else data = JSON.stringify({ messages: messages, model: model })

        GM.xmlHttpRequest({
            method: 'POST', url: endpoint,
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessKey },
            responseType: responseType(),
            data: data,
            onloadstart: onLoadStart(),
            onload: onLoad(),
            onerror: function(error) {
                ddgptConsole.error(error)
                if (!config.proxyAPIenabled) ddgptAlert(!accessKey ? 'login' : 'suggestProxy')
                else { // if proxy mode
                    if (getShowReply.attemptCnt < 1 && proxyEndpointMap.length > 1) retryDiffHost()
                    else ddgptAlert('suggestOpenAI')
            }}
        })

        function responseType() {
          if (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') {
            return 'stream' } else { return 'text' }
        }

        function retryDiffHost() {
            ddgptConsole.error(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowReply.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowReply.attemptCnt++
            getShowReply(messages, callback)
        }

        function onLoadStart() { // process streams for unproxied TM users
            ddgptConsole.info('Endpoint used: ' + endpoint)
            if (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') {
                return function(stream) {
                    var reader = stream.response.getReader()
                    reader.read().then(function processText({ done, value }) {
                        if (done) { return }
                        let responseItem = String.fromCharCode(...Array.from(value))
                        var items = responseItem.split('\n\n')
                        if (items.length > 2) {
                            var lastItem = items.slice(-3, -2)[0]
                            if (lastItem.startsWith('data: [DONE]')) {
                                responseItem = items.slice(-4, -3)[0]
                            } else { responseItem = lastItem }
                        }
                        if (responseItem.startsWith('data: {')) {
                            var answer = JSON.parse(responseItem.slice(6)).message.content.parts[0]
                            ddgptShow(answer)
                        } else if (responseItem.startsWith('data: [DONE]')) return
                        return reader.read().then(processText)
        })}}}

        function onLoad() {
            return function(event) {
                if (event.status !== 200) {
                    ddgptConsole.error('Event status: ' + event.status)
                    ddgptConsole.info('Event response: ' + event.responseText)
                    if (config.proxyAPIenabled && getShowReply.attemptCnt < 1 && proxyEndpointMap.length > 1) {
                        retryDiffHost() }
                    else if (event.status === 401 && !config.proxyAPIenabled) {
                        GM_deleteValue('accessToken') ; ddgptAlert('login') }
                    else if (event.status === 403) {
                        ddgptAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'checkCloudflare') }
                    else if (event.status === 429) { ddgptAlert('tooManyRequests') }
                } else if (!config.proxyAPIenabled && getUserscriptManager() !== 'Tampermonkey') {
                    var answer
                    if (event.response) {
                        try { // to parse txt response from OpenAI endpoint for non-TM users
                            answer = JSON.parse(event.response
                                .split('\n\n').slice(-3, -2)[0].slice(6)).message.content.parts[0]
                            ddgptShow(answer)
                        } catch (error) {
                            ddgptAlert('parseFailed')
                            ddgptConsole.error(ddgptAlerts.parseFailed + ': ' + error)
                            ddgptConsole.info('Response: ' + event.response)
                        }
                    }
                } else if (config.proxyAPIenabled) {
                    if (event.responseText) {
                        try { // to parse txt response from proxy endpoints
                            answer = JSON.parse(event.responseText).choices[0].message.content
                            ddgptShow(answer) ; getShowReply.triedEndpoints = [] ; getShowReply.attemptCnt = 0
                        } catch (error) {
                            ddgptAlert('parseFailed')
                            ddgptConsole.error(ddgptAlerts.parseFailed + ': ' + error)
                            ddgptConsole.info('Response: ' + event.responseText)
                        }
        }}}}
    }

    function ddgptShow(answer) {
        ddgptDiv.innerHTML = '<p><span class="prefix">🤖  <a href="https://duckduckgpt.com" target="_blank">DuckDuckGPT</a></span><span class="kudo-ai">by <a target="_blank" href="https://github.com/kudoai">KudoAI</a></span><span class="balloon-tip"></span><pre></pre></p><div></div><section><form><div class="continue-chat"><textarea id="ddgpt-reply-box" rows="1" placeholder="Send reply..."></textarea></div></form></section>'
        ddgptDiv.querySelector('pre').textContent = answer

        // Render math
        renderMathInElement(ddgptDiv.querySelector('pre'), { // eslint-disable-line no-undef
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true},
                {left: '\\begin{equation}', right: '\\end{equation}', display: true},
                {left: '\\begin{align}', right: '\\end{align}', display: true},
                {left: '\\begin{alignat}', right: '\\end{alignat}', display: true},
                {left: '\\begin{gather}', right: '\\end{gather}', display: true},
                {left: '\\begin{CD}', right: '\\end{CD}', display: true},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        })

        // Initialize variables for listeners
        var form = ddgptDiv.querySelector('form')
        var replyBox = document.getElementById('ddgpt-reply-box')
        var { paddingTop, paddingBottom } = getComputedStyle(replyBox)
        var vOffset = parseInt(paddingTop, 10) + parseInt(paddingBottom, 10)
        var prevLength = replyBox.value.length

        // Add listeners
        form.addEventListener('keydown', enterToSubmit)
        replyBox.addEventListener('input', autosizeBox)

        function enterToSubmit(event) {
            if (event.key === 'Enter' && event.target.nodeName === 'TEXTAREA') handleSubmit(event)
        }

        function handleSubmit(event) {
            event.preventDefault()
            if (messages.length > 2) messages.splice(0, 2) // keep token usage maintainable
            var prevReplyTrimmed = ddgptDiv.querySelector('pre').textContent.substring(0, 250 - replyBox.value.length)
            if (!config.proxyAPIenabled) {
                messages.push({ role: 'assistant', id: uuidv4(), content: { content_type: 'text', parts: [prevReplyTrimmed] } })
                messages.push({ role: 'user', id: uuidv4(), content: { content_type: 'text', parts: [replyBox.value] } })
            } else {
                messages.push({ role: 'assistant', content: prevReplyTrimmed })
                messages.push({ role: 'user', content: replyBox.value })
            }
            getShowReply(messages)

            // Remove listeners since they're re-added
            replyBox.removeEventListener('input', autosizeBox)
            replyBox.removeEventListener('keydown', enterToSubmit)

            // Show loading status
            var replySection = ddgptDiv.querySelector('section')
            replySection.classList.add('loading')
            replySection.innerHTML = ddgptAlerts.waitingResponse
        }

        function autosizeBox() {
            var newLength = replyBox.value.length
            if (newLength < prevLength) { // if deleting txt
                replyBox.style.height = 'auto' // ...auto-fit height
                if (parseInt(getComputedStyle(replyBox).height) < 35) { // if down to one line
                    replyBox.style.height = '1.55rem' } // ...reset to original height
            }
            replyBox.style.height = replyBox.scrollHeight - vOffset + 'px'
            prevLength = newLength
        }
    }

    async function loadDDGPT() {
        ddgptAlert('waitingResponse')
        var hostContainer = document.querySelector(isCenteredMode() ? '[data-area*="mainline"]' : '[class*="sidebar"]')
        hostContainer.prepend(ddgptDiv, ddgptFooter)
        var query = new URL(location.href).searchParams.get('q')
        if (!config.proxyAPIenabled) {
            messages.push({
                role: 'user', id: uuidv4(),
                content: { content_type: 'text', parts: [query] }
            })
        } else messages.push({ role: 'user', content: query })
        getShowReply(messages)
    }

    // Run MAIN routine

    // Initialize settings/messages/menu
    var appSymbol = '🤖', configPrefix = 'ddgpt_', config = {}, messages = []
    loadSetting('lastCheckTime', 'proxyAPIenabled', 'prefixEnabled', 'skipNextUpdate', 'skippedVer', 'suffixEnabled')
    registerMenu() // create browser toolbar menu

    // Exit if prefix/suffix required but not present
    if (( config.prefixEnabled && !/.*q=%2F/.test(document.location) ) || // if prefix required but not present
        ( config.suffixEnabled && !/.*q=.*%3F(&|$)/.test(document.location) )) { // or suffix required but not present
            return }

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 1728000000) checkForUpdates()   

    // Stylize elements
    var ddgptStyle = document.createElement('style')
    ddgptStyle.innerText = (
        '.ddgpt-container { border-radius: 8px ; border: 1px solid #dadce0 ; padding: 16px 26px ; flex-basis: 0 ;'
            + 'flex-grow: 1 ; word-wrap: break-word ; white-space: pre-wrap ; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06) ; '
            + ( isDarkMode() ? ' border: none ; background: #282828 } ' : ' } ' )
        + '.ddgpt-container p { margin: 0 ; ' + ( isDarkMode() ? 'color: #ccc } ' : ' } ' )
        + ( isDarkMode() ? '.ddgpt-container a { text-decoration: underline }' : '' ) // underline dark-mode links in alerts
        + '.ddgpt-container .prefix { font-size: 1.5rem ; font-weight: 700 }'
        + '.ddgpt-container .prefix > a { color: ' + ( isDarkMode() ? 'white' : 'inherit' ) + ' ; text-decoration: none }'
        + '.ddgpt-container .loading { color: #b6b8ba ; animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite }'
        + '.ddgpt-container.sidebar-free { margin-left: 60px ; height: fit-content }'
        + '.ddgpt-container pre { font-size: 1.14rem ; white-space: pre-wrap ; min-width: 0 ; margin: 12px 0 0 0 ; line-height: 21px ; padding: 1.25em ; border-radius: 10px ; '
            + ( isDarkMode() ? 'background: #3a3a3a ; color: #f2f2f2 } ' : ' } ' )
        + '@keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}'
        + '.ddgpt-container section.loading { padding-left: 5px } ' // left-pad loading status when sending replies
        + '.chatgpt-feedback { margin: 2px 0 25px }'
        + '.balloon-tip { content: "" ; position: relative ; top: 5px ; right: 16.5em ; border: 7px solid transparent ;'
            + 'border-bottom-style: solid ; border-bottom-width: 1.19rem ; border-top: 0 ; border-bottom-color: '
            + ( isDarkMode() ? '#3a3a3a' : '#eaeaea' ) + ' } '
        + '.continue-chat > textarea {'
            + 'border: none ; border-radius: 12px 13px 12px 0 ; '
            + 'height: 1.55rem ; width: 97.6% ; max-height: 200px ;resize: none ; '
            + 'margin: 3px 0 15px 0 ; padding: 9px 0 5px 10px ; '
            + 'background: ' + ( isDarkMode() ? '#515151' : '#eeeeee70' ) + ' } '
        + '.kudo-ai { position: relative ; left: 6px ; color: #aaa } '
        + '.kudo-ai a, .kudo-ai a:visited { color: #aaa ; text-decoration: none } '
        + '.kudo-ai a:hover { color: ' + ( isDarkMode() ? 'white' : 'black' ) + ' ; text-decoration: none } '
        + '.katex-html { display: none } ' // hide unrendered math
        + '.chatgpt-modal h2 { margin: 0 ; padding: 0 } ' // shrink margin/padding around update alert title
        + '.chatgpt-modal p { margin: -8px 0 -9px ; font-size: 1.25rem } ' // position/size update alert msg
        + '.chatgpt-modal button { cursor: pointer } ' // add finger to update alert button hovers
        + '.chatgpt-modal button:hover { color: white !important } ' // color text white on update alert button hovers
        + '.chatgpt-modal div[class*=checkbox] label { position: relative ; bottom: -0.1857rem ; left: -2px } ' // position skip update checkbox
    )
    document.head.appendChild(ddgptStyle) // append style to <head>

    // Create DDGPT container & add class
    var ddgptDiv = document.createElement('div') // create container div
    ddgptDiv.className = 'ddgpt-container'

    // Create feedback footer & add classes/HTML
    var ddgptFooter = document.createElement('div')
    ddgptFooter.className = 'feedback-prompt chatgpt-feedback'
    ddgptFooter.innerHTML = '<a href="https://github.ddgpt.com/discussions/new/choose" class="feedback-prompt__link" target="_blank">Share Feedback</a>'

    // Activate promo campaign if active
    GM.xmlHttpRequest({
        method: 'GET', url: 'https://raw.githubusercontent.com/kudoai/duckduckgpt/main/ads/live/creative.html',
        onload: function(response) {
            if (response.status == 200) {

                // Create campaign div & add class/style/HTML
                var pcDiv = document.createElement('div')
                pcDiv.className = 'ddgpt-container'
                pcDiv.style.display = 'flex'
                pcDiv.innerHTML = response.responseText

                // Create feedback footer & add classes/HTML
                var pcFooter = document.createElement('div')
                pcFooter.className = 'feedback-prompt chatgpt-feedback'
                pcFooter.innerHTML = '<a href="https://github.ddgpt.com/discussions/new/choose" class="feedback-prompt__link" target="_blank">Share Feedback</a>'

                // Inject in sidebar
                ddgptFooter.insertAdjacentElement('afterend', pcDiv)
                pcDiv.insertAdjacentElement('afterend', pcFooter)
    }}})

    loadDDGPT()

})()
