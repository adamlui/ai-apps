// ==UserScript==
// @name                DuckDuckGPT 🤖
// @version             2023.04.02
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description         Adds ChatGPT answers to DuckDuckGo sidebar
// @description:zh-CN   将 ChatGPT 答案添加到 DuckDuckGo 侧边栏
// @description:zh-SG   将 ChatGPT 答案添加到 DuckDuckGo 侧边栏
// @description:zh-TW   將 ChatGPT 答案添加到 DuckDuckGo 側邊欄
// @description:zh-HK   將 ChatGPT 答案添加到 DuckDuckGo 側邊欄
// @description:ja      ChatGPT の回答を DuckDuckGo サイドバーに追加します
// @description:ko      DuckDuckGo 사이드바에 ChatGPT 답변 추가
// @description:ru      Добавляет ответы ChatGPT на боковую панель DuckDuckGo
// @description:de      Fügt ChatGPT-Antworten zur Seitenleiste von DuckDuckGo hinzu
// @description:es      Agrega respuestas de ChatGPT a la barra lateral de DuckDuckGo
// @description:fr      Ajoute les réponses ChatGPT à la barre latérale DuckDuckGo
// @description:it      Aggiunge le risposte di ChatGPT alla barra laterale di DuckDuckGo
// @license             MIT
// @icon                https://media.ddgpt.com/images/ddgpt-icon48.png
// @icon64              https://media.ddgpt.com/images/ddgpt-icon64.png
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          qq
// @match               https://duckduckgo.com/?*
// @include             https://auth0.openai.com
// @connect             chat.openai.com
// @connect             c1b9-67-188-52-169.ngrok.io
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_cookie
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @downloadURL         https://www.duckduckgpt.com/userscript/code/duckduckgpt.user.js
// @updateURL           https://www.duckduckgpt.com/userscript/code/duckduckgpt.meta.js
// @homepageURL         https://www.duckduckgpt.com
// @supportURL          https://github.duckduckgpt.com/issues
// ==/UserScript==

// NOTE: This script uses code from the powerful chatgpt.js library @ https://chatgptjs.org (c) 2023 Adam Lui & 冯不游 under the MIT license.

(function() {

    // API endpoints
    var openAIauthDomain = 'https://auth0.openai.com'
    var chatGPTsessURL = 'https://chat.openai.com/api/auth/session'
    var openAIchatEndpoint = 'https://chat.openai.com/backend-api/conversation'
    var proxyEndpointMap = [[ 'https://c1b9-67-188-52-169.ngrok.io', 'pk-pJNAtlAqCHbUDTrDudubjSKeUVgbOMvkRQWMLtscqsdiKmhI', 'gpt-3.5-turbo' ]]

    var ddgptAlerts = {
        waitingResponse: 'Waiting for ChatGPT response...',
        login: 'Please login @ ',
        tooManyRequests: 'ChatGPT is flooded with too many requests. Check back later!',
        parseFailed: 'Failed to parse response JSON',
        checkCloudflare: 'Please pass Cloudflare security check @ ',
        suggestProxy: 'OpenAI API is not working. (Try switching on Proxy Mode in toolbar)',
        suggestOpenAI: 'Proxy API is not working. (Try switching off Proxy Mode in toolbar)'
    }

    // Import chatgpt.js functions

    window.chatgptNotifyProps = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
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
            window.chatgptNotifyProps.quadrants[notificationDiv.quadrant].push(notificationDiv); // store div in global object

            // Position notification (defaults to top-right)
            notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
            notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

            // Reposition old notifications
            var thisQuadrantDivs = window.chatgptNotifyProps.quadrants[notificationDiv.quadrant];
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
        }
    };

    // Define userscript functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order
        var stateIndicator = { menuSymbol: ['✔️', '❌'], menuWord: ['ON', 'OFF'], notifWord: ['Enabled', 'Disabled'] }
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle proxy API mode
        var pamLabel = stateIndicator.menuSymbol[+!config.proxyAPIenabled] + ' Proxy API Mode '
                     + stateSeparator + stateIndicator.menuWord[+!config.proxyAPIenabled]
        menuID.push(GM_registerMenuCommand(pamLabel, function() {
            saveSetting('proxyAPIenabled', !config.proxyAPIenabled)
            chatgpt.notify('Proxy Mode ' + stateIndicator.notifWord[+!config.proxyAPIenabled], '', '', 'shadow')
            for (var i = 0 ; i < menuID.length ; i++) GM_unregisterMenuCommand(menuID[i])
            registerMenu() // serve fresh menu
            location.reload() // re-send query using new endpoint
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

    // Define console/alert functions

    var ddgptConsole = {
        info: function(msg) {console.info('🐤 DuckDuckGPT >> ' + msg)},
        error: function(msg) {console.error('🐤 DuckDuckGPT >> ERROR: ' + msg)},
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
        return new Promise(function(resolve, reject) {
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
            } else { resolve(accessToken) }
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

    async function getShowAnswer(question, callback) {

        // Initialize attempt properties
        if (!getShowAnswer.triedEndpoints) getShowAnswer.triedEndpoints = []
        if (!getShowAnswer.attemptCnt) getShowAnswer.attemptCnt = 0

        // Pick API
        if (config.proxyAPIenabled) { // randomize proxy API
            var untriedEndpoints = proxyEndpointMap.filter(function(entry) {
                return !getShowAnswer.triedEndpoints?.includes(entry[0]) })
            var entry = untriedEndpoints[Math.floor(Math.random() * untriedEndpoints.length)]
            var endpoint = entry[0], accessKey = entry[1], model = entry[2]
        } else { // use OpenAI API
            var endpoint = openAIchatEndpoint
            var timeoutPromise = new Promise((resolve, reject) => {
                setTimeout(() => { reject(new Error('Timeout occurred')) }, 3000) })
            var accessKey = await Promise.race([getAccessToken(), timeoutPromise])
            if (!accessKey) { ddgptAlert('login') ; return }
            model = 'text-davinci-002-render'
        }

        // Get answer from ChatGPT
        GM.xmlHttpRequest({
            method: 'POST', url: endpoint,
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessKey },
            responseType: responseType(),
            data: JSON.stringify({
                action: 'next',
                messages: [{
                    role: 'user', id: !config.proxyAPIenabled ? uuidv4() : '',
                    content: !config.proxyAPIenabled ? { content_type: 'text', parts: [question] } : question
                }],
                model: model,
                parent_message_id: !config.proxyAPIenabled ? uuidv4() : '',
                max_tokens: 4000
            }),
            onloadstart: onLoadStart(),
            onload: onLoad(),
            onerror: function(error) {
                ddgptConsole.error(error)
                if (!config.proxyAPIenabled) ddgptAlert(!accessKey ? 'login' : 'suggestProxy')
                else { // if proxy mode
                    if (getShowAnswer.attemptCnt < 1 && proxyEndpointMap.length > 1) retryDiffHost()
                    else ddgptAlert('suggestOpenAI')
                }
            }
        })

        function responseType() {
          if (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') {
            return 'stream' } else { return 'text' }
        }

        function retryDiffHost() {
            ddgptConsole.error(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowAnswer.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowAnswer.attemptCnt++
            getShowAnswer(question, callback)
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
                        } else if (responseItem.startsWith('data: [DONE]')) { return }
                        return reader.read().then(processText)
        })}}}

        function onLoad() {
            return function(event) {
                if (event.status !== 200) {
                    ddgptConsole.error('Event status: ' + event.status)
                    ddgptConsole.info('Event response: ' + event.responseText)
                    if (config.proxyAPIenabled && getShowAnswer.attemptCnt < 1 && proxyEndpointMap.length > 1) {
                        retryDiffHost() }
                    else if (event.status === 401 && !config.proxyAPIenabled) {
                        GM_deleteValue('accessToken') ; ddgptAlert('login') }
                    else if (event.status === 403) {
                        ddgptAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'checkCloudflare') }
                    else if (event.status === 429) { ddgptAlert('tooManyRequests') }
                } else if (!config.proxyAPIenabled && getUserscriptManager() !== 'Tampermonkey') {
                    if (event.response) {
                        try { // to parse txt response from OpenAI endpoint for non-TM users
                            var answer = JSON.parse(event.response
                                .split("\n\n").slice(-3, -2)[0].slice(6)).message.content.parts[0]
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
                            var answer = JSON.parse(event.responseText).choices[0].message.content
                            ddgptShow(answer) ; getShowAnswer.triedEndpoints = [] ; getShowAnswer.attemptCnt = 0
                        } catch (error) {
                            ddgptAlert('parseFailed')
                            ddgptConsole.error(ddgptAlerts.parseFailed + ': ' + error)
                            ddgptConsole.info('Response: ' + event.responseText)
                        }
        }}}}
    }

    function ddgptShow(answer) {
        ddgptDiv.innerHTML = '<p><span class="prefix">ChatGPT</span><pre></pre></p>'
        ddgptDiv.querySelector('pre').textContent = answer
    }

    async function loadDDGPT() {
        ddgptAlert('waitingResponse')
        var siderbarContainer = document.getElementsByClassName('results--sidebar')[0]
        siderbarContainer.prepend(ddgptDiv, ddgptFooter)
        getShowAnswer(new URL(location.href).searchParams.get('q'))
    }

    // Run main routine

    var config = {}, configKeyPrefix = 'ddgpt_'
    loadSetting('proxyAPIenabled')
    registerMenu() // create browser toolbar menu

    // Stylize ChatGPT container + footer
    var ddgptStyle = document.createElement('style')
    ddgptStyle.innerText = (
         '.chatgpt-container { border-radius: 8px ; border: 1px solid #dadce0 ; padding: 15px ; flex-basis: 0 ;'
        + 'flex-grow: 1 ; word-wrap: break-word ; white-space: pre-wrap ; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06) }'
        + '.chatgpt-container p { margin: 0 }'
        + '.chatgpt-container .prefix { font-weight: 700 }'
        + '.chatgpt-container .loading { color: #b6b8ba ; animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite }'
        + '.chatgpt-container.sidebar-free { margin-left: 60px ; height: fit-content }'
        + '.chatgpt-container pre { white-space: pre-wrap ; min-width: 0 ; margin-bottom: 0 ; line-height: 20px }'
        + '@keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}'
        + '.chatgpt-feedback { margin: 2px 0 25px 0 }' )
    document.head.appendChild(ddgptStyle) // append style to <head>

    // Create DDGPT container & add class
    var ddgptDiv = document.createElement('div') // create container div
    ddgptDiv.className = 'chatgpt-container'

    // Create feedback footer & add classes/HTML
    var ddgptFooter = document.createElement('div')
    ddgptFooter.className = 'feedback-prompt chatgpt-feedback'
    ddgptFooter.innerHTML = '<a href="https://github.ddgpt.com/discussions/new/choose" class="feedback-prompt__link" target="_blank">Share Feedback</a>'

    loadDDGPT()

})()
