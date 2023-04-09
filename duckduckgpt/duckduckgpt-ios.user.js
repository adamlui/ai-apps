// ==UserScript==
// @name                DuckDuckGPT 🤖 iOS
// @version             2023.04.01.1
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description         Adds ChatGPT answers to DuckDuckGo sidebar on iOS
// @description:zh-CN   将 ChatGPT 答案添加到 iOS 上的 DuckDuckGo 侧边栏
// @description:zh-SG   将 ChatGPT 答案添加到 iOS 上的 DuckDuckGo 侧边栏
// @description:zh-TW   將 ChatGPT 答案添加到 iOS 上的 DuckDuckGo 側邊欄
// @description:zh-HK   將 ChatGPT 答案添加到 iOS 上的 DuckDuckGo 側邊欄
// @description:ja      iOS の DuckDuckGo サイドバーに ChatGPT の回答を追加します
// @description:ko      iOS의 DuckDuckGo 사이드바에 ChatGPT 답변 추가
// @description:ru      Добавляет ответы ChatGPT на боковую панель DuckDuckGo на iOS
// @description:de      Fügt ChatGPT-Antworten zur DuckDuckGo-Seitenleiste auf iOS hinzu
// @description:es      Agrega respuestas de ChatGPT a la barra lateral de DuckDuckGo en iOS
// @description:fr      Ajoute les réponses ChatGPT à la barre latérale DuckDuckGo sur iOS
// @description:it      Aggiunge le risposte ChatGPT alla barra laterale DuckDuckGo su iOS
// @license             MIT
// @icon                https://media.ddgpt.com/images/ddgpt-icon48.png
// @icon64              https://media.ddgpt.com/images/ddgpt-icon64.png
// @match               https://duckduckgo.com/*
// @connect             c1b9-67-188-52-169.ngrok.io
// @grant               GM.xmlHttpRequest
// @downloadURL         https://github.com/kudoai/duckduckgpt/raw/main/greasemonkey/duckduckgpt-ios.user.js
// @updateURL           https://github.com/kudoai/duckduckgpt/raw/main/greasemonkey/duckduckgpt-ios.user.js
// @homepageURL         https://www.duckduckgpt.com
// @supportURL          https://github.duckduckgpt.com/issues
// ==/UserScript==

(function() {

    // API endpoints
    var proxyEndpointMap = {
        'https://c1b9-67-188-52-169.ngrok.io' : 'pk-pJNAtlAqCHbUDTrDudubjSKeUVgbOMvkRQWMLtscqsdiKmhI'
    }

    var ddgptDivAlerts = {
        waitingResponse: 'Waiting for ChatGPT response...',
        tooManyRequests: 'ChatGPT is flooded with too many requests. Check back later!'
    }

    // Define console/alert functions

    var ddgptConsole = {
        info: function(msg) {console.info('🐤 DuckDuckGPT >> ' + msg)},
        error: function(msg) {console.error('🐤 DuckDuckGPT >> ' + msg)},
    }

    function ddgptAlert(msg) {
        if (msg.includes('login')) deleteOpenAIcookies()
        ddgptDiv.innerHTML = (
            /waiting|loading/i.test(msg) ? // if alert involves loading, add class
                '<p class="loading">' : '<p>') + ddgptDivAlerts[msg]
            + (ddgptDivAlerts[msg].includes('@') ? // if msg needs login link, add it
                '<a href="https://chat.openai.com" target="_blank">chat.openai.com</a></p>' : '</p>')
    }

    // Define ANSWER functions

    async function getShowAnswer(question, callback) {

        // Initialize attempt properties
        if (!getShowAnswer.triedEndpoints) getShowAnswer.triedEndpoints = []
        if (!getShowAnswer.attemptCnt) getShowAnswer.attemptCnt = 0

        // Randomize proxy API
        var endpoints = Object.keys(proxyEndpointMap).filter(function(endpoint) {
            return !getShowAnswer.triedEndpoints?.includes(endpoint) })
        var endpoint = endpoints[Math.floor(Math.random() * endpoints.length)]
        var accessKey = proxyEndpointMap[endpoint]        

        // Get answer from ChatGPT
        GM.xmlHttpRequest({
            method: 'POST', url: endpoint,
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessKey },
            responseType: 'text',
            data: JSON.stringify({
//              action: 'next',
                messages: [{ role: 'user', content: question }],
                model: 'text-davinci-003',
                max_tokens: 4000                
            }),
            onload: onLoad(),
            onerror: function(error) {
                if (getShowAnswer.attemptCnt < 1) {
                    retryDiffHost() } else { ddgptConsole.error(error) }}
        })

        function retryDiffHost() {
            ddgptConsole.error(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowAnswer.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowAnswer.attemptCnt++
            getShowAnswer(question, callback)
        }

        function onLoad() {
            return function(event) {
                if (event.status !== 200 && getShowAnswer.attemptCnt < 1) {
                    retryDiffHost() }
                else if (event.status === 429) { ddgptAlert('tooManyRequests') }
                else if (event.responseText) {
                    try {
                        var answer = JSON.parse(event.responseText).choices[0].message.content
                        ddgptShow(answer) ; getShowAnswer.triedEndpoints = [] ; getShowAnswer.attemptCnt = 0
                    } catch (error) {                        
                        ddgptConsole.error('Failed to parse response JSON: ' + error)
                        if (getShowAnswer.attemptCnt < 1) retryDiffHost()
                    }
        }}}
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
        + '.chatgpt-feedback { margin: 2px 0 25px }' )
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
