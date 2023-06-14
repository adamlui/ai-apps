// ==UserScript==
// @name                BraveGPT 🤖
// @version             2023.6.13.1
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description         Adds ChatGPT answers to Brave Search sidebar (powered by GPT-4!)
// @description:de      Fügt ChatGPT-Antworten zur Brave Search-Seitenleiste hinzu (unterstützt von GPT-4!)
// @description:es      Agrega respuestas de ChatGPT a la barra lateral de Brave Search (¡con tecnología de GPT-4!)
// @description:fr      Ajoute les réponses ChatGPT à la barre latérale de Brave Search (propulsé par GPT-4!)
// @description:it      Aggiunge le risposte ChatGPT alla barra laterale di Brave Search (basata su GPT-4!)
// @description:ja      Brave Search サイドバーに ChatGPT の回答を追加します (GPT-4 を搭載!)
// @description:ru      Добавляет ответы ChatGPT на боковую панель Brave Search (на базе GPT-4!)
// @description:ko      Brave Search 사이드바에 ChatGPT 답변 추가 (GPT-4 기반!)
// @description:zh-CN   将 ChatGPT 答案添加到 Brave Search 侧边栏 (由 GPT-4 提供支持!)
// @description:zh-HK   將 ChatGPT 答案添加到 Brave Search 側邊欄 (由 GPT-4 提供支持!)
// @description:zh-SG   将 ChatGPT 答案添加到 Brave Search 侧边栏 (由 GPT-4 提供支持!)
// @description:zh-TW   將 ChatGPT 答案添加到 Brave Search 側邊欄 (由 GPT-4 提供支持!)
// @license             MIT
// @icon                https://media.bravegpt.com/images/bravegpt-icon48.png
// @icon64              https://media.bravegpt.com/images/bravegpt-icon64.png
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @match               https://search.brave.com/search*
// @include             https://auth0.openai.com
// @connect             raw.githubusercontent.com
// @connect             chat.openai.com
// @connect             c1b9-67-188-52-169.ngrok.io
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@f855a11607839fbc55273db604d167b503434598/dist/chatgpt-1.9.1.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/auto-render.min.js
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_cookie
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @downloadURL         https://greasyfork.org/scripts/462440/code/bravegpt.user.js
// @updateURL           https://greasyfork.org/scripts/462440/code/bravegpt.meta.js
// @homepageURL         https://www.bravegpt.com
// @supportURL          https://github.bravegpt.com/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license
// ...and KaTeX, the fastest math typesetting library @ https://katex.org (c) 2013–2020 Khan Academy & contributors under the MIT license

(function() {

    var openAIauthDomain = 'https://auth0.openai.com'
    var chatGPTsessURL = 'https://chat.openai.com/api/auth/session'
    var openAIchatEndpoint = 'https://chat.openai.com/backend-api/conversation'
    var proxyEndpointMap = [[ 'https://c1b9-67-188-52-169.ngrok.io', 'pk-pJNAtlAqCHbUDTrDudubjSKeUVgbOMvkRQWMLtscqsdiKmhI', 'gpt-4' ]]

    var braveGPTalerts = {
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
            notify('Proxy Mode ' + stateIndicator.notifWord[+!config.proxyAPIenabled], '', '', 'shadow')
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
            notify('Prefix Mode ' + stateIndicator.notifWord[+!config.prefixEnabled], '', '', 'shadow')
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
            notify(appSymbol + ' Suffix Mode ' + stateIndicator.notifWord[+!config.suffixEnabled], '', '', 'shadow')
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
        chatgpt.notify(`${ appSymbol } ${ msg }`, position, notifDuration, shadow) }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function checkForUpdates() {

        // Fetch latest meta
        var updateURL = GM_info.scriptUpdateURL || GM_info.script.updateURL || GM_info.script.downloadURL
        var currentVer = GM_info.script.version
        fetch(updateURL + '?t=' + Date.now(), { cache: 'no-cache' })
            .then((response) => { response.text().then((data) => {
                saveSetting('lastCheckTime', Date.now())

                // Compare versions
                var latestVer = data.match(/@version +(.*)/)[1]
                if (!checkForUpdates.fromMenu && config.skipNextUpdate && latestVer === config.skippedVer)
                    return // exit comparison if past auto-alert hidden
                for (var i = 0 ; i < 4 ; i++) { // loop thru subver's
                    if (parseInt(latestVer.split('.')[i] || 0) > parseInt(currentVer.split('.')[i] || 0)) { // if outdated

                        // Alert to update
                        alert('Update available! 🚀',
                            `An update to BraveGPT (v${ latestVer }) is available!`
                                + `<br><a target="_blank" href="https://github.com/kudoai/bravegpt/commits/main/greasemonkey/bravegpt.user.js" style="font-size: 0.7rem">View changes</a>`,
                            function update() { // button
                                saveSetting('skipNextUpdate', false) // reset hidden alert setting
                                window.open(( updateURL.includes('.meta.') ? GM_info.script.downloadURL : updateURL )
                                    + '?t=' + Date.now(), '_blank') },
                            !checkForUpdates.fromMenu ? // checkbox if auto-alert
                                function skipThisVersion() {
                                    saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                    saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                                : ''
                        )
                        return
                }}

                if (checkForUpdates.fromMenu) // alert to no update found
                    alert('Up-to-date!', `BraveGPT (v${ currentVer }) is up-to-date!`)
    })})}

    // Define CONSOLE/ALERT functions

    var braveGPTconsole = {
        info: function(msg) {console.info(appSymbol + ' BraveGPT >> ' + msg)},
        error: function(msg) {console.error(appSymbol + ' BraveGPT >> ERROR: ' + msg)}
    }

    function braveGPTalert(msg) {
        if (msg.includes('login')) deleteOpenAIcookies()
        braveGPTdiv.innerHTML = braveGPTalerts[msg]
            + (braveGPTalerts[msg].includes('@') ? // if msg needs login link, add it
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
            braveGPTconsole.info('OpenAI access token: ' + accessToken)
            if (!accessToken) {
                GM.xmlHttpRequest({
                    url: chatGPTsessURL,
                    onload: function(response) {
                        if (isBlockedbyCloudflare(response.responseText)) {
                            braveGPTalert('checkCloudflare') ; return }
                        try {
                            var newAccessToken = JSON.parse(response.responseText).accessToken
                            GM_setValue('accessToken', newAccessToken)
                            resolve(newAccessToken)
                        } catch (error) { braveGPTalert('login') ; return }
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

    async function getShowReply(question, callback) {

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
            if (!accessKey) { braveGPTalert('login') ; return }
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
                braveGPTconsole.error(error)
                if (!config.proxyAPIenabled) braveGPTalert(!accessKey ? 'login' : 'suggestProxy')
                else { // if proxy mode
                    if (getShowReply.attemptCnt < 1 && proxyEndpointMap.length > 1) retryDiffHost()
                    else braveGPTalert('suggestOpenAI')
            }}
        })

        function responseType() {
          if (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') {
            return 'stream' } else { return 'text' }
        }

        function retryDiffHost() {
            braveGPTconsole.error(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowReply.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowReply.attemptCnt++
            getShowReply(question, callback)
        }

        function onLoadStart() { // process streams for unproxied TM users
            braveGPTconsole.info('Endpoint used: ' + endpoint)
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
                            braveGPTshow(answer)
                        } else if (responseItem.startsWith('data: [DONE]')) { return }
                        return reader.read().then(processText)
        })}}}

        function onLoad() {
            return function(event) {
                if (event.status !== 200) {
                    braveGPTconsole.error('Event status: ' + event.status)
                    braveGPTconsole.info('Event response: ' + event.responseText)
                    if (config.proxyAPIenabled && getShowReply.attemptCnt < 1 && proxyEndpointMap.length > 1) {
                        retryDiffHost() }
                    else if (event.status === 401 && !config.proxyAPIenabled) {
                        GM_deleteValue('accessToken') ; braveGPTalert('login') }
                    else if (event.status === 403) {
                        braveGPTalert(config.proxyAPIenabled ? 'suggestOpenAI' : 'checkCloudflare') }
                    else if (event.status === 429) { braveGPTalert('tooManyRequests') }
                } else if (!config.proxyAPIenabled && getUserscriptManager() !== 'Tampermonkey') {
                    var answer
                    if (event.response) {
                        try { // to parse txt response from OpenAI endpoint for non-TM users
                            answer = JSON.parse(event.response
                                .split('\n\n').slice(-3, -2)[0].slice(6)).message.content.parts[0]
                            braveGPTshow(answer)
                        } catch (error) {
                            braveGPTalert('parseFailed')
                            braveGPTconsole.error(braveGPTalerts.parseFailed + ': ' + error)
                            braveGPTconsole.info('Response: ' + event.response)
                        }
                    }
                } else if (config.proxyAPIenabled) {
                    if (event.responseText) {
                        try { // to parse txt response from proxy endpoints
                            answer = JSON.parse(event.responseText).choices[0].message.content
                            braveGPTshow(answer) ; getShowReply.triedEndpoints = [] ; getShowReply.attemptCnt = 0
                        } catch (error) {
                            braveGPTalert('parseFailed')
                            braveGPTconsole.error(braveGPTalerts.parseFailed + ': ' + error)
                            braveGPTconsole.info('Response: ' + event.responseText)
                        }
        }}}}
    }

    function braveGPTshow(answer) {
        braveGPTdiv.innerHTML = '<span class="prefix">🤖  <a href="https://www.bravegpt.com" target="_blank">BraveGPT</a></span><span class="kudo-ai">by <a target="_blank" href="https://github.com/kudoai">KudoAI</a></span><span class="balloon-tip"></span><pre></pre><section style="margin-bottom: -47px"><form><div class="continue-chat"><textarea id="bravegpt-reply-box" rows="1" placeholder="Send reply..."></textarea><button title="Send reply"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div></form></section>'
        braveGPTdiv.querySelector('pre').textContent = answer
        fillBraveGPTfooter() ; braveGPTfooter.style.height = 'inherit' // (re-)init (after loading replies)
        braveGPTdiv.appendChild(braveGPTfooter) // append feedback link

        // Render math
        renderMathInElement(braveGPTdiv.querySelector('pre'), { // eslint-disable-line no-undef
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
        var form = braveGPTdiv.querySelector('form')
        var replyBox = document.getElementById('bravegpt-reply-box')
        var prevLength = replyBox.value.length

        // Add listeners
        form.addEventListener('keydown', enterToSubmit)
        form.addEventListener('submit', handleSubmit )
        replyBox.addEventListener('input', autosizeBox)

        function enterToSubmit(event) {
            if (event.key === 'Enter' && event.target.nodeName === 'TEXTAREA') handleSubmit(event)
        }

        function handleSubmit(event) {
            event.preventDefault()
            if (messages.length > 2) messages.splice(0, 2) // keep token usage maintainable
            var prevReplyTrimmed = braveGPTdiv.querySelector('pre').textContent.substring(0, 250 - replyBox.value.length)
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
            form.removeEventListener('submit', handleSubmit)
            replyBox.removeEventListener('keydown', enterToSubmit)

            // Show loading status
            var replySection = braveGPTdiv.querySelector('section')
            replySection.classList.add('loading') ; replySection.innerHTML = ''
            braveGPTfooter.innerHTML = '' ; braveGPTfooter.style.height = '51px'
        }

        function autosizeBox() {
            var newLength = replyBox.value.length
            if (newLength < prevLength) { // if deleting txt
                replyBox.style.height = 'auto' // ...auto-fit height
                if (parseInt(getComputedStyle(replyBox).height) < 55) { // if down to one line
                    replyBox.style.height = '2.15rem' } // ...reset to original height
            }
            replyBox.style.height = replyBox.scrollHeight + 'px'
            prevLength = newLength
        }
    }

    function fillBraveGPTfooter() {
        braveGPTfooter.innerHTML = `<a class="feedback svelte-8js1iq" target="_blank" href="https://github.bravegpt.com/discussions/new/choose"><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill-rule="evenodd" d="M.577 6.23a.577.577 0 1 1 0-1.153H1.5a.577.577 0 0 1 0 1.154H.577ZM2.83 8.939a.576.576 0 0 1 0 .816l-1.385 1.385a.573.573 0 0 1-.816 0 .576.576 0 0 1 0-.816l1.385-1.385a.577.577 0 0 1 .816 0ZM.63.985a.576.576 0 1 1 .815-.816L2.83 1.553a.576.576 0 1 1-.816.816L.63.985ZM15 5.654a.577.577 0 0 1-.577.577H13.5a.577.577 0 0 1 0-1.154h.923c.319 0 .577.258.577.577Zm-.631 4.669a.576.576 0 1 1-.816.816l-1.385-1.385a.576.576 0 1 1 .816-.816l1.385 1.385Zm-2.2-7.954a.576.576 0 0 1 0-.816L13.553.17a.577.577 0 0 1 .816.816l-1.385 1.384a.575.575 0 0 1-.816 0ZM9.3 9.09a.579.579 0 0 0-.045.038c-.45.417-.486 1.23-.486 1.47v.238c-1.045.45-2.053.177-2.537-.013v-.226c0-.24-.036-1.053-.487-1.469a.687.687 0 0 0-.044-.037c-.81-.609-1.777-1.667-1.777-3.253 0-2.073 1.604-3.76 3.576-3.76s3.577 1.687 3.577 3.76c0 1.586-.967 2.644-1.777 3.252Zm-1.8 4.757c-.995 0-1.223-.623-1.27-.814v-.997a4.83 4.83 0 0 0 1.343.197c.374 0 .78-.057 1.195-.18v.978c-.05.202-.282.816-1.269.816ZM7.5.923c-2.609 0-4.73 2.204-4.73 4.914 0 1.616.757 3.047 2.192 4.141.058.094.114.39.115.618v2.494c0 .03.003.06.007.09.1.63.732 1.82 2.416 1.82s2.316-1.19 2.416-1.82a.674.674 0 0 0 .006-.09v-2.494c0-.206.054-.525.11-.613 1.438-1.096 2.198-2.528 2.198-4.146 0-2.71-2.121-4.914-4.73-4.914Z" clip-rule="evenodd"></path></svg> Feedback</a>`
    }

    async function loadBraveGPT() {
        braveGPTdiv.innerHTML = '<p class="loading"></p>' // give BraveGPT container spinning loader
        var siderbarContainer = document.querySelector('#side-right')
        siderbarContainer.prepend(braveGPTdiv) // inject BraveGPT container
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
    var appSymbol = '🤖', configPrefix = 'braveGPT_', config = {}, messages = []
    loadSetting('lastCheckTime', 'proxyAPIenabled', 'prefixEnabled', 'skipNextUpdate', 'skippedVer', 'suffixEnabled')
    registerMenu() // create browser toolbar menu

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 1728000000) checkForUpdates()

    // Load BraveGPT if necessary
    if (( !config.prefixEnabled && !config.suffixEnabled) || // prefix/suffix not required
            ( config.prefixEnabled && /.*q=%2F/.test(document.location)) || // or prefix required & included
            ( config.suffixEnabled && /.*q=.*%3F(&|$)/.test(document.location) )) { // or suffix required & included

        // Stylize ChatGPT container + children
        var braveGPTstyle = document.createElement('style')
        braveGPTstyle.innerText = `
            .bravegpt-container { word-wrap: break-word ; white-space: pre-wrap ; margin-bottom: 20px }
            .bravegpt-container p { margin: 0 }
            .bravegpt-container .chatgpt-icon { position: relative ; bottom: -4px ; margin-right: 11px }
            .bravegpt-container .prefix { font-size: 20px ; font-family: var(--brand-font) }
            .bravegpt-container .prefix > a { color: inherit }
            .bravegpt-container .loading { color: #b6b8ba ; animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite }
            .bravegpt-container pre { /* ChatGPT output box */
                /* text spacing */ white-space: pre-wrap ; line-height: 21px ;
                font-family: Consolas, Menlo, Monaco, monospace ;
                /* box spacing */ padding: 1.2em ; margin-top: .7em ; border-radius: 13px ;
                background-color: #eaeaea
            }
            .bravegpt-container .footer {
                margin: 7px 0 -26px 0 ; padding: 14px -1 !important ; font-size: var(--text-sm-2)
                justify-content: right !important ; border-top: none !important
            }
            .bravegpt-container .feedback { font-family: var(--brand-font) ; color: var(--search-text-06);
                font-size: .65rem ; letter-spacing: .02em ; line-height: 1; position: relative ; left: 222px }
            .bravegpt-container .feedback .icon { fill: currentColor ; color: currentColor ; --size:15px ; position: relative ; top: 3px ; right: 3px }
            .bravegpt-container .footer a:hover { color: black }
            @keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }} `
            + '.balloon-tip { content: "" ; position: relative ; top: 0.25em ; right: 9.64rem ; border: 7px solid transparent ;'
                + 'border-bottom-style: solid ; border-bottom-width: 16px ; border-bottom-color: #eaeaea ; border-top: 0 } '
            + '.chatgpt-js { font-family: var(--brand-font) ; font-size: .65rem ; position: relative ; right: .9rem } '
            + '.chatgpt-js > a { color: inherit ; top: .054rem } '
            + '.chatgpt-js > svg { top: 3px ; position: relative ; margin-right: 1px } '
            + '.continue-chat > textarea { border: none ; border-radius: 15px 16px 15px 0 ; margin: -6px 0 5px 0 ;  padding: 9px 0 5px 10px ; '
                + 'background: #eeeeee70 ; height: 2.15rem ; width: 100% ; max-height: 200px ; resize: none ;  } '
            + '.continue-chat > button { position: relative ; bottom: 54px; left: 299px; border: none ; margin: 13px 4px 0 0 ; '
                + 'background: none ; color: lightgrey ; cursor: pointer } '
            + '.kudo-ai { margin-left: 7px ; font-size: .65rem ; color: #aaa } '
            + '.kudo-ai a { color: #aaa ; text-decoration: none } '
            + '.kudo-ai a:hover { color: black ; text-decoration: none } '
            + '.katex-html { display: none } ' // hide unrendered math
        document.head.appendChild(braveGPTstyle) // append style to <head>

        // Create BraveGPT container & add id/classes
        var braveGPTdiv = document.createElement('div') // create container div
        braveGPTdiv.setAttribute('id', 'infobox')
        braveGPTdiv.setAttribute( // assign Brave's .snippet + custom class
            'class', 'snippet bravegpt-container')

        // Create feedback footer & add class
        var braveGPTfooter = document.createElement('div') // create footer div
        braveGPTfooter.className = 'footer'

        // Activate promo campaign if active
        GM.xmlHttpRequest({
            method: 'GET', url: 'https://raw.githubusercontent.com/kudoai/bravegpt/main/ads/live/creative.html',
            onload: function(response) {
                if (response.status == 200) {

                    // Create campaign div & add class/style/HTML
                    var pcDiv = document.createElement('div')
                    pcDiv.setAttribute( // assign Brave's .snippet + custom class
                        'class', 'snippet bravegpt-container')
                    pcDiv.style.display = 'flex'
                    pcDiv.style.padding = '17px 19px 21px 23px'
                    pcDiv.innerHTML = response.responseText

                    // Inject in sidebar
                    braveGPTdiv.insertAdjacentElement('afterend', pcDiv)
        }}})

        loadBraveGPT()
    }

})()
