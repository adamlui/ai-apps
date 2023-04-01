// ==UserScript==
// @name                BraveGPT 🤖
// @version             2023.03.30.1
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description         Adds ChatGPT answers to Brave Search sidebar
// @description:zh-CN   将 ChatGPT 答案添加到 Brave Search 侧边栏
// @description:zh-SG   将 ChatGPT 答案添加到 Brave Search 侧边栏
// @description:zh-TW   將 ChatGPT 答案添加到 Brave Search 側邊欄
// @description:zh-HK   將 ChatGPT 答案添加到 Brave Search 側邊欄
// @description:ja      Brave Search サイドバーに ChatGPT の回答を追加します
// @description:ko      Brave Search 사이드바에 ChatGPT 답변 추가
// @description:ru      Добавляет ответы ChatGPT на боковую панель Brave Search
// @description:de      Fügt ChatGPT-Antworten zur Brave Search-Seitenleiste hinzu
// @description:es      Agrega respuestas de ChatGPT a la barra lateral de Brave Search
// @description:fr      Ajoute les réponses ChatGPT à la barre latérale de Brave Search
// @description:it      Aggiunge le risposte ChatGPT alla barra laterale di Brave Search
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
// @compatible          qq
// @match               https://search.brave.com/search*
// @include             https://auth0.openai.com
// @connect             chat.openai.com
// @connect             api.pawan.krd
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

// NOTE: This script uses code from the powerful chatgpt.js library @ https://chatgptjs.org (c) 2023 Adam Lui & 冯不游 under the MIT license.

(function() {

    // API endpoints
    var openAIauthDomain = 'https://auth0.openai.com'
    var chatGPTsessURL = 'https://chat.openai.com/api/auth/session'
    var openAIchatEndpoint = 'https://chat.openai.com/backend-api/conversation'
    var proxyEndpointMap = {
        'https://api.pawan.krd/v1/chat/completions' : 'pk-pJNAtlAqCHbUDTrDudubjSKeUVgbOMvkRQWMLtscqsdiKmhI'
    }

    var braveGPTdivAlerts = {
        login: 'Please login @ ',
        tooManyRequests: 'ChatGPT is flooded with too many requests. Check back later!',
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
                + ( shadow ? ( 'box-shadow: 0 4px 11px 0px ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ));
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
        var pamLabel = stateIndicator.menuSymbol[+config.proxyAPIdisabled] + ' Proxy API Mode '
                     + stateSeparator + stateIndicator.menuWord[+config.proxyAPIdisabled]
        menuID.push(GM_registerMenuCommand(pamLabel, function() {
            saveSetting('proxyAPIdisabled', !config.proxyAPIdisabled)
            chatgpt.notify('Proxy Mode ' + stateIndicator.notifWord[+config.proxyAPIdisabled], '', '', 'shadow')
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

    var braveGPTconsole = {
        info: function(msg) {console.info('🦁 BraveGPT >> ' + msg)},
        error: function(msg) {console.error('🦁 BraveGPT >> ' + msg)},
    }

    function braveGPTalert(msg) {
        if (msg.includes('login')) deleteOpenAIcookies()
        braveGPTdiv.innerHTML = braveGPTdivAlerts[msg]
            + (braveGPTdivAlerts[msg].includes('@') ? // if msg needs login link, add it
                '<a href="https://chat.openai.com" target="_blank">chat.openai.com</a></p>' : '</p>')
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
                        } catch { braveGPTalert('suggestProxy') ; return }
                    }
                })
            } else { resolve(accessToken) }
    })}

    function isBlockedbyCloudflare(resp) {
        try {
            var html = new DOMParser().parseFromString(resp, "text/html")
            var title = html.querySelector("title")
            return title.innerText === "Just a moment..."
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
        if (!config.proxyAPIdisabled) { // randomize proxy API
            var endpoints = Object.keys(proxyEndpointMap).filter(function(endpoint) {
                return !getShowAnswer.triedEndpoints?.includes(endpoint) })
            var endpoint = endpoints[Math.floor(Math.random() * endpoints.length)]
            var accessKey = proxyEndpointMap[endpoint]
        } else { // use OpenAI API
            var endpoint = openAIchatEndpoint
            var accessKey = await getAccessToken()
        }

        // Get answer from ChatGPT
        GM.xmlHttpRequest({
            method: 'POST', url: endpoint,
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessKey },
            responseType: responseType(),
            data: JSON.stringify({
                action: 'next',
                messages: [{
                    role: 'user', id: config.proxyAPIdisabled ? uuidv4() : '', 
                    content: config.proxyAPIdisabled ? { content_type: 'text', parts: [question] } : question
                }],
                model: config.proxyAPIdisabled ? 'text-davinci-002-render' : 'text-davinci-003',
                parent_message_id: config.proxyAPIdisabled ? uuidv4() : '',
                max_tokens: 4000
            }),
            onloadstart: onLoadStart(),
            onload: onLoad(),
            onerror: function(error) {
                if (!config.proxyAPIdisabled && getShowAnswer.attemptCnt < 1) {
                    retryDiffHost() } else { braveGPTconsole.error(error) }}
        })

        function responseType() {
          if (config.proxyAPIdisabled && getUserscriptManager() === 'Tampermonkey') {
            return 'stream' } else { return 'text' }
        }

        function retryDiffHost() {
            braveGPTconsole.error(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowAnswer.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowAnswer.attemptCnt++
            getShowAnswer(question, callback)
        }

        function onLoadStart() { // process streams for unproxied TM users
            braveGPTconsole.info('Endpoint used: ' + endpoint)
            if (config.proxyAPIdisabled && getUserscriptManager() === 'Tampermonkey') {
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
                if (event.status !== 200 && !config.proxyAPIdisabled && getShowAnswer.attemptCnt < 1) {
                    retryDiffHost() }
                else if (event.status === 401 && !config.proxyAPIdisabled) {
                    GM_deleteValue('accessToken') ; braveGPTalert('login') }
                else if (event.status === 403) {
                    braveGPTalert(config.proxyAPIdisabled ? 'suggestProxy' : 'suggestOpenAI') }
                else if (event.status === 429) { braveGPTalert('tooManyRequests') }
                else if (config.proxyAPIdisabled && getUserscriptManager() !== 'Tampermonkey') {
                    if (event.response) {
                        try {
                            var answer = JSON.parse(event.response
                                .split("\n\n").slice(-3, -2)[0].slice(6)).message.content.parts[0]
                            braveGPTshow(answer)
                        } catch (error) { braveGPTconsole.error('Failed to parse response JSON: ' + error) }
                    }
                } else if (!config.proxyAPIdisabled) {
                    if (event.responseText) {
                        try {
                            var answer = JSON.parse(event.responseText).choices[0].message.content
                            braveGPTshow(answer) ; getShowAnswer.triedEndpoints = [] ; getShowAnswer.attemptCnt = 0
                        } catch (error) { braveGPTconsole.error('Failed to parse response JSON: ' + error) }
        }}}}
    }

    function braveGPTshow(answer) {
        braveGPTdiv.innerHTML = `${ navigator.userAgent.includes('Firefox') ? // only load robot emoji in FF + forks
            '<span class="chatgpt-icon"><img width=25 src="https://media.bravegpt.com/images/robot-emoji.png"></span>' : '' }<span class="prefix">ChatGPT</span><pre></pre>`
        braveGPTdiv.querySelector('pre').textContent = answer
        braveGPTdiv.appendChild(braveGPTfooter) // append feedback link
    }

    async function loadBraveGPT() {
        braveGPTdiv.innerHTML = '<p class="loading"></p>' // give BraveGPT container spinning loader
        var siderbarContainer = document.querySelector('#side-right')
        siderbarContainer.prepend(braveGPTdiv) // inject BraveGPT container
        getShowAnswer(new URL(location.href).searchParams.get('q')) // get/show answer
    }

    // Run main routine

    var config = {}, configKeyPrefix = 'braveGPT_'
    loadSetting('proxyAPIdisabled')
    registerMenu() // create browser toolbar menu

    // Stylize ChatGPT container + children
    var braveGPTstyle = document.createElement('style')
    braveGPTstyle.innerText = `
        .chatgpt-container { word-wrap: break-word ; white-space: pre-wrap ; margin-bottom: 20px }
        .chatgpt-container p { margin: 0 }
        .chatgpt-container .chatgpt-icon { position: relative ; bottom: -4px ; margin-right: 11px }
        .chatgpt-container .prefix { font-size: 20px ; font-family: var(--brand-font) }
        .chatgpt-container .loading { color: #b6b8ba ; animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite }
        .chatgpt-container pre { /* ChatGPT output box */
            /* text spacing */ white-space: pre-wrap ; line-height: 21px ;
            font-family: Consolas, Menlo, Monaco, monospace ;
            /* box spacing */ padding: 0.55em ; margin: .5em 0 ; border-radius: 5px ;
            background-color: #eaeaea
        }
        .chatgpt-container .footer {
            margin: 20px 0 -32px 0 ; padding-top: 17px !important ; font-size: var(--text-sm-2)
            justify-content: right !important
        }
        .chatgpt-container .footer a { margin-right: -22px /* to counter .snippet padding */ }
        .chatgpt-container .feedback { font-family: var(--brand-font) ; color: var(--search-text-06);
            font-size: .65rem ; letter-spacing: .02em ; line-height: 1; position: relative ; right: -222px }
        .chatgpt-container .feedback .icon { fill: currentColor ; color: currentColor ; --size:15px }
        .chatgpt-container .footer a:hover { color: black }
        @keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}`
    document.head.appendChild(braveGPTstyle) // append style to <head>

    // Create BraveGPT container & add id/classes
    var braveGPTdiv = document.createElement('div') // create container div
    braveGPTdiv.setAttribute('id', 'infobox')
    braveGPTdiv.setAttribute( // assign Brave's .snippet + custom class
        'class', 'snippet chatgpt-container')

    // Create feedback footer & add class/HTML
    var braveGPTfooter = document.createElement('div') // create footer div
    braveGPTfooter.className = 'footer'
    braveGPTfooter.innerHTML = `<a class="feedback svelte-8js1iq" target="_blank" href="https://github.bravegpt.com/discussions/new/choose"><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill-rule="evenodd" d="M.577 6.23a.577.577 0 1 1 0-1.153H1.5a.577.577 0 0 1 0 1.154H.577ZM2.83 8.939a.576.576 0 0 1 0 .816l-1.385 1.385a.573.573 0 0 1-.816 0 .576.576 0 0 1 0-.816l1.385-1.385a.577.577 0 0 1 .816 0ZM.63.985a.576.576 0 1 1 .815-.816L2.83 1.553a.576.576 0 1 1-.816.816L.63.985ZM15 5.654a.577.577 0 0 1-.577.577H13.5a.577.577 0 0 1 0-1.154h.923c.319 0 .577.258.577.577Zm-.631 4.669a.576.576 0 1 1-.816.816l-1.385-1.385a.576.576 0 1 1 .816-.816l1.385 1.385Zm-2.2-7.954a.576.576 0 0 1 0-.816L13.553.17a.577.577 0 0 1 .816.816l-1.385 1.384a.575.575 0 0 1-.816 0ZM9.3 9.09a.579.579 0 0 0-.045.038c-.45.417-.486 1.23-.486 1.47v.238c-1.045.45-2.053.177-2.537-.013v-.226c0-.24-.036-1.053-.487-1.469a.687.687 0 0 0-.044-.037c-.81-.609-1.777-1.667-1.777-3.253 0-2.073 1.604-3.76 3.576-3.76s3.577 1.687 3.577 3.76c0 1.586-.967 2.644-1.777 3.252Zm-1.8 4.757c-.995 0-1.223-.623-1.27-.814v-.997a4.83 4.83 0 0 0 1.343.197c.374 0 .78-.057 1.195-.18v.978c-.05.202-.282.816-1.269.816ZM7.5.923c-2.609 0-4.73 2.204-4.73 4.914 0 1.616.757 3.047 2.192 4.141.058.094.114.39.115.618v2.494c0 .03.003.06.007.09.1.63.732 1.82 2.416 1.82s2.316-1.19 2.416-1.82a.674.674 0 0 0 .006-.09v-2.494c0-.206.054-.525.11-.613 1.438-1.096 2.198-2.528 2.198-4.146 0-2.71-2.121-4.914-4.73-4.914Z" clip-rule="evenodd"></path></svg> Feedback</a>`

    loadBraveGPT()

})()
