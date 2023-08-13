// ==UserScript==
// @name                DuckDuckGPT 🤖
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
// @author              KudoAI
// @namespace           https://kudoai.com
// @version             2023.8.13
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
// @connect             api.aigcfun.com
// @require             https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@315fc8e62d4d3e82276fbb641128774a0d1c5219/dist/chatgpt-2.1.0.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/auto-render.min.js
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_cookie
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_openInTab
// @grant               GM.xmlHttpRequest
// @downloadURL         https://greasyfork.org/scripts/459849/code/duckduckgpt.user.js
// @updateURL           https://greasyfork.org/scripts/459849/code/duckduckgpt.meta.js
// @homepageURL         https://www.duckduckgpt.com
// @supportURL          https://github.duckduckgpt.com/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license
// ...and KaTeX, the fastest math typesetting library @ https://katex.org (c) 2013–2020 Khan Academy & contributors under the MIT license

(async () => {

    // Define SCRIPT functions

    function loadSetting(...keys) { keys.forEach(key => { config[key] = GM_getValue(config.prefix + '_' + key, false) })}
    function saveSetting(key, value) { GM_setValue(config.prefix + '_' + key, value) ; config[key] = value }
    function safeWindowOpen(url) { window.open(url, '_blank', 'noopener') } // to prevent backdoor vulnerabilities

    function updateCheck() {

        // Fetch latest meta
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({
            method: 'GET', url: config.updateURL + '?t=' + Date.now(),
            headers: { 'Cache-Control': 'no-cache' },
            onload: (response) => {

                // Compare versions
                const latestVer = /@version +(.*)/.exec(response.responseText)[1]
                for (let i = 0 ; i < 4 ; i++) { // loop thru subver's
                    const currentSubVer = parseInt(currentVer.split('.')[i]) || 0
                    const latestSubVer = parseInt(latestVer.split('.')[i]) || 0
                    if (currentSubVer > latestSubVer) break // out of comparison since not outdated
                    else if (latestSubVer > currentSubVer) { // if outdated

                        // Alert to update
                        alert(messages.alert_updateAvail + '! 🚀', // title
                            messages.alert_newerVer + ' DuckDuckGPT v' + latestVer + ' '
                                + messages.alert_isAvail + '!   '
                                + '<a target="_blank" rel="noopener" style="font-size: 0.7rem" '
                                    + 'href="' + config.gitHubURL + '/commits/main/greasemonkey/'
                                    + config.updateURL.replace(/.*\/(.*)meta\.js/, '$1user.js') + '" '
                                    + '>View changes</a>',
                            function update() { // button
                                GM_openInTab(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now(),
                                    { active: true, insert: true } // focus, make adjacent
                                ).onclose = () => location.reload() },
                            '', 328 // width
                        )
                        return
                }}

                alert(`${ messages.alert_upToDate }!`, // title
                        `DuckDuckGPT (v${ currentVer }) ${ messages.alert_isUpToDate }!`) // msg
    }})}

    // Define MENU functions

    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function registerMenu() {
        const menuIDs = [] // to store registered commands for removal while preserving order
        const state = {
            symbol: ['✔️', '❌'], word: ['ON', 'OFF'],
            separator: getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': ' }

        // Add command to toggle proxy API mode
        const pamLabel = state.symbol[+!config.proxyAPIenabled]
                       + ' ' + messages.menuLabel_proxyAPImode + ' '
                       + state.separator + state.word[+!config.proxyAPIenabled]
        menuIDs.push(GM_registerMenuCommand(pamLabel, function() {
            saveSetting('proxyAPIenabled', !config.proxyAPIenabled)
            notify(messages.menuLabel_proxyAPImode + ' '
                + messages['state_' + ( config.proxyAPIenabled ? 'enabled' : 'disabled' )])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            location.reload() // re-send query using new endpoint
        }))

        // Add command to toggle prefix mode
        const pmLabel = state.symbol[+!config.prefixEnabled] + ' '
                      + messages.menuLabel_require + ' "/" '
                      + messages.menuLabel_beforeQuery + ' '
                      + state.separator + state.word[+!config.prefixEnabled]
        menuIDs.push(GM_registerMenuCommand(pmLabel, function() {
            saveSetting('prefixEnabled', !config.prefixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Suffix Mode if activating Prefix Mode
                saveSetting('suffixEnabled', !config.suffixEnabled) }
            notify(messages.alert_prefixMode + ' '
                + messages['state_' + ( config.prefixEnabled ? 'enabled' : 'disabled' )])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            if (!config.prefixEnabled) location.reload() // re-send query if newly disabled
        }))

        // Add command to toggle suffix mode
        const smLabel = state.symbol[+!config.suffixEnabled] + ' '
                      + messages.menuLabel_require + ' "?" '
                      + messages.menuLabel_afterQuery + ' '
                      + state.separator + state.word[+!config.suffixEnabled]
        menuIDs.push(GM_registerMenuCommand(smLabel, function() {
            saveSetting('suffixEnabled', !config.suffixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Prefix Mode if activating Suffix Mode
                saveSetting('prefixEnabled', !config.prefixEnabled) }
            notify(messages.alert_suffixMode + ' '
                + messages['state_' + ( config.suffixEnabled ? 'enabled' : 'disabled' )])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            if (!config.suffixEnabled) location.reload() // re-send query if newly disabled
        }))

        // Add command to toggle fatter sidebar
        const fsbLabel = ( config.fatterSidebar ? '🔛' : '↔️' ) + ' '
                       + messages.menuLabel_fatterSidebar
                       + state.separator + state.word[+!config.fatterSidebar]
        menuIDs.push(GM_registerMenuCommand(fsbLabel, () => {
            saveSetting('fatterSidebar', !config.fatterSidebar)
            updateTweaksStyle()
            if (!config.notifHidden)
                notify(messages.menuLabel_fatterSidebar + ' '
                    + messages['state_' + ( config.fatterSidebar ? 'enabled' : 'disabled' )])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to set reply language
        const rlLabel = '🌐 ' + messages.menuLabel_replyLanguage
                      + state.separator + config.replyLanguage
        menuIDs.push(GM_registerMenuCommand(rlLabel, () => {
            while (true) {
                const replyLanguage = prompt(
                    messages.prompt_updateReplyLang + ':', config.replyLanguage)
                if (replyLanguage === null) break // user cancelled so do nothing
                else if (!/\d/.test(replyLanguage)) {
                    saveSetting('replyLanguage', replyLanguage || config.userLanguage)
                    alert(messages.alert_langUpdated + '!', // title
                        'DuckDuckGPT ' + messages.alert_willReplyIn + ' '
                            + ( replyLanguage || messages.alert_yourSysLang ) + '.')
                    for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
                    break
        }}}))

        // Add command to launch About modal
        const aboutLabel = '💡 ' + messages.menuLabel_about + ' DuckDuckGPT'
        menuIDs.push(GM_registerMenuCommand(aboutLabel, async () => {

            // Get chatgpt.js version
            const scriptMeta = await new Promise(resolve => {
                GM.xmlHttpRequest({ method: 'GET', url: config.updateURL + '?t=' + Date.now(),
                    headers: { 'Cache-Control': 'no-cache' }, onload: resolve
            })})
            const chatgptJSver = /chatgpt-([\d\.]+)\.min/.exec(scriptMeta.responseText)?.[1] || ''

            // Show alert
            const aboutAlertID = alert(
                'DuckDuckGPT', // title
                ' ' + messages.alert_version + ': ' + GM_info.script.version + '\n '
                    + messages.alert_poweredBy + ': '
                    + '<a href="https://chatgpt.js.org" target="_blank" rel="noopener">chatgpt.js</a>'
                    + ( chatgptJSver ? ( ' v' + chatgptJSver ) : '' ),
                [ // buttons
                    function checkForUpdates() { updateCheck() },
                    function githubSource() { safeWindowOpen(config.gitHubURL) },
                    function leaveAReview() {
                        const reviewAlertID = chatgpt.alert(messages.alert_choosePlatform + ':', '',
                            [ function greasyFork() { safeWindowOpen(
                                  config.greasyForkURL + '/feedback#post-discussion') },
                              function productHunt() { safeWindowOpen(
                                  'https://www.producthunt.com/products/duckduckgpt/reviews/new') },
                              function futurepedia() { safeWindowOpen(
                                  'https://www.futurepedia.io/tool/duckduckgpt#duckduckgpt-review') }])
                        document.getElementById(reviewAlertID).querySelector('button')
                            .style.display = 'none' } // hide Dismiss button
                ], '', 524) // About modal width

            // Re-format buttons to include emojis + re-case + hide 'Dismiss'
            for (const button of document.getElementById(aboutAlertID).querySelectorAll('button')) {
                if (/updates/i.test(button.textContent))
                    button.textContent = '🚀 ' + messages.buttonLabel_updateCheck
                else if (/review/i.test(button.textContent))
                    button.textContent = '⭐ ' + messages.buttonLabel_leaveReview
                else if (/github/i.test(button.textContent))
                    button.textContent = '🖥️ ' + messages.buttonLabel_githubSrc
                else button.style.display = 'none' // hide Dismiss button
            }
        }))
    }

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || ( isDarkMode() ? '' : 'shadow'))
    }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    const ddgptConsole = {
        info: function(msg) { console.info(config.appSymbol + ' DuckDuckGPT >> ' + msg) },
        error: function(msg) { console.error(config.appSymbol + ' DuckDuckGPT >> ERROR: ' + msg) }
    }

    function ddgptAlert(msg) {
        if (msg.includes('login')) deleteOpenAIcookies()
        ddgptDiv.innerHTML = (
            /waiting|loading/i.test(msg) ? // if alert involves loading, add class
                '<p class="loading">' : '<p>') + ddgptAlerts[msg]
            + (ddgptAlerts[msg].includes('@') ? // if msg needs login link, add it
                '<a href="https://chat.openai.com" target="_blank" rel="noopener">chat.openai.com</a> '
                    + '(' + messages.alert_ifIssuePersists + ')</p>' : '</p>')
    }

    // Define DDG UI functions

    function isCenteredMode() { return document.querySelector('html').classList.toString().includes('center') }
    function isDarkMode() { return document.documentElement.classList.toString().includes('dark') }

    // Define SESSION functions

    function isBlockedbyCloudflare(resp) {
        try {
            const html = new DOMParser().parseFromString(resp, 'text/html')
            const title = html.querySelector('title')
            return title.innerText === messages.alert_justAmoment + '...'
        } catch (error) { return false }
    }

    function deleteOpenAIcookies() {
        if (getUserscriptManager() !== 'Tampermonkey') return
        GM_cookie.list({ url: openAIendpoints.auth }, (cookies, error) => {
            if (!error) { for (const cookie of cookies) {
                GM_cookie.delete({ url: openAIendpoints.auth, name: cookie.name })
    }}})}

    function getOpenAItoken() {
        return new Promise((resolve) => {
            const accessToken = GM_getValue(config.prefix + '_openAItoken')
            ddgptConsole.info('OpenAI access token: ' + accessToken)
            if (!accessToken) {
                GM.xmlHttpRequest({ url: openAIendpoints.session, onload: (response) => {
                    if (isBlockedbyCloudflare(response.responseText)) {
                        ddgptAlert('checkCloudflare') ; return }
                    try {
                        const newAccessToken = JSON.parse(response.responseText).accessToken
                        GM_setValue(config.prefix + '_openAItoken', newAccessToken)
                        resolve(newAccessToken)
                    } catch { ddgptAlert('login') ; return }
                }})
            } else resolve(accessToken)
    })}

    function getAIGCFkey() {
        return new Promise((resolve) => {
            const publicKey = GM_getValue(config.prefix + '_aigcfKey')
            if (!publicKey) {
                GM.xmlHttpRequest({ method: 'GET', url: 'https://api.aigcfun.com/fc/key',
                    headers: {
                        'Content-Type': 'application/json',
                        'Referer': 'https://aigcfun.com/',
                        'X-Forwarded-For': chatgpt.generateRandomIP() },
                    onload: (response) => {
                        const newPublicKey = JSON.parse(response.responseText).data
                        if (!newPublicKey) { ddgptConsole.error('Failed to get AIGCFun public key') ; return }
                        GM_setValue(config.prefix + '_aigcfKey', newPublicKey)
                        console.info('AIGCFun public key set: ' + newPublicKey)
                        resolve(newPublicKey)
                }})
            } else resolve(publicKey)
    })}

    // Define ANSWER functions

    async function getShowReply(convo, callback) {

        // Initialize attempt properties
        if (!getShowReply.triedEndpoints) getShowReply.triedEndpoints = []
        if (!getShowReply.attemptCnt) getShowReply.attemptCnt = 0

        // Pick API
        let endpoint, accessKey, model
        if (config.proxyAPIenabled) { // randomize proxy API
            const untriedEndpoints = proxyEndpoints.filter((entry) => {
                return !getShowReply.triedEndpoints?.includes(entry[0]) })
            const entry = untriedEndpoints[Math.floor(chatgpt.randomFloat() * untriedEndpoints.length)]
            endpoint = entry[0] ; accessKey = entry[1] ; model = entry[2]
        } else { // use OpenAI API
            endpoint = openAIendpoints.chat
            const timeoutPromise = new Promise((resolve, reject) => {
                setTimeout(() => { reject(new Error('Timeout occurred')) }, 3000) })
            accessKey = await Promise.race([getOpenAItoken(), timeoutPromise])
            if (!accessKey) { ddgptAlert('login') ; return }
            model = 'text-davinci-002-render'
        }

        // Get answer from ChatGPT
        const data = JSON.stringify(
            config.proxyAPIenabled ? { messages: convo, model: model }
                                   : { action: 'next', messages: convo, model: model,
                                       parent_message_id: chatgpt.uuidv4(), max_tokens: 4000 })
        GM.xmlHttpRequest({
            method: 'POST', url: endpoint,
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessKey },
            responseType: responseType(), data: data, onloadstart: onLoadStart(), onload: onLoad(),
            onerror: (error) => {
                ddgptConsole.error(error)
                if (!config.proxyAPIenabled) ddgptAlert(!accessKey ? 'login' : 'suggestProxy')
                else { // if proxy mode
                    if (getShowReply.attemptCnt < proxyEndpoints.length) retryDiffHost()
                    else ddgptAlert('suggestOpenAI')
            }}
        })

        function responseType() {
            return (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') ? 'stream' : 'text' }

        function retryDiffHost() {
            ddgptConsole.error(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowReply.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowReply.attemptCnt++
            getShowReply(convo, callback)
        }

        function onLoadStart() { // process streams for unproxied TM users
            ddgptConsole.info('Endpoint used: ' + endpoint)
            if (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') {
                return (stream) => {
                    const reader = stream.response.getReader()
                    reader.read().then(function processText({ done, value }) {
                        if (done) return
                        let responseItem = String.fromCharCode(...Array.from(value))
                        const items = responseItem.split('\n\n')
                        if (items.length > 2) {
                            const lastItem = items.slice(-3, -2)[0]
                            if (lastItem.startsWith('data: [DONE]')) responseItem = items.slice(-4, -3)[0]
                            else responseItem = lastItem
                        }
                        if (responseItem.startsWith('data: {')) {
                            const answer = JSON.parse(responseItem.slice(6)).message.content.parts[0]
                            ddgptShow(answer)
                        } else if (responseItem.startsWith('data: [DONE]')) return
                        return reader.read().then(processText)
        })}}}

        function onLoad() {
            return (event) => {
                if (event.status !== 200) {
                    ddgptConsole.error('Event status: ' + event.status)
                    ddgptConsole.info('Event response: ' + event.responseText)
                    if (config.proxyAPIenabled && getShowReply.attemptCnt < proxyEndpoints.length)
                        retryDiffHost()
                    else if (event.status === 401 && !config.proxyAPIenabled) {
                        GM_deleteValue(config.prefix + '_openAItoken') ; ddgptAlert('login') }
                    else if (event.status === 403)
                        ddgptAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'checkCloudflare')
                    else if (event.status === 429) ddgptAlert('tooManyRequests')
                    else ddgptAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'suggestProxy')
                } else if (!config.proxyAPIenabled && getUserscriptManager() !== 'Tampermonkey') {
                    if (event.response) {
                        try { // to parse txt response from OpenAI endpoint for non-TM users
                            const answer = JSON.parse(event.response
                                .split('\n\n').slice(-3, -2)[0].slice(6)).message.content.parts[0]
                            ddgptShow(answer)
                        } catch (error) {
                            ddgptConsole.error(ddgptAlerts.parseFailed + ': ' + error)
                            ddgptConsole.info('Response: ' + event.response)
                            ddgptAlert('suggestProxy')
                        }
                    }
                } else if (config.proxyAPIenabled) {
                    if (event.responseText) {
                        try { // to parse txt response from proxy endpoints
                            const answer = JSON.parse(event.responseText).choices[0].message.content
                            ddgptShow(answer) ; getShowReply.triedEndpoints = [] ; getShowReply.attemptCnt = 0
                        } catch (error) {
                            ddgptConsole.info('Response: ' + event.responseText)

                            if (event.responseText.includes('finish_reason')) { // if AIGCF error encountered
                                GM_setValue(config.prefix + '_aigcfKey', false) // clear GM key for fresh getAIGCFkey()

                                // Determine index of AIGCF in endpoint map
                                let aigcfMapIndex = -1
                                for (let i = 0 ; i < proxyEndpoints.length ; i++) {
                                    const endpoint = proxyEndpoints[i]
                                    if (endpoint.some(item => item.includes('aigcfun'))) {
                                        aigcfMapIndex = i ; break
                                }}

                                // Updated AIGCF endpoint w/ fresh key (using fresh IP)
                                (async () => { // IIFE to use await
                                    proxyEndpoints[aigcfMapIndex][0] = (
                                        'https://api.aigcfun.com/api/v1/text?key=' + await getAIGCFkey())
                                    getShowReply(convo, callback) // re-fetch reply
                                })()

                            } else { // use different endpoint or suggest OpenAI
                                ddgptConsole.error(ddgptAlerts.parseFailed + ': ' + error)
                                if (getShowReply.attemptCnt < proxyEndpoints.length) retryDiffHost()
                                else ddgptAlert('suggestOpenAI')
                            }
                        }
        }}}}
    }

    function ddgptShow(answer) {
        ddgptDiv.innerHTML = '<p><span class="prefix">🤖  <a href="https://duckduckgpt.com" target="_blank" rel="noopener">DuckDuckGPT</a></span><span class="kudo-ai">by <a target="_blank" href="https://github.com/kudoai" rel="noopener">KudoAI</a></span><span class="balloon-tip"></span><pre></pre></p><div></div><section><form><div class="continue-chat"><textarea id="ddgpt-reply-box" rows="1" placeholder="Send reply..."></textarea></div></form></section>'
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

        // Init variables for listeners
        const form = ddgptDiv.querySelector('form')
        const replyBox = document.getElementById('ddgpt-reply-box')
        const { paddingTop, paddingBottom } = getComputedStyle(replyBox)
        const vOffset = parseInt(paddingTop, 10) + parseInt(paddingBottom, 10)
        let prevLength = replyBox.value.length

        // Add listeners
        form.addEventListener('keydown', enterToSubmit)
        replyBox.addEventListener('input', autosizeBox)

        function enterToSubmit(event) {
            if (event.key === 'Enter' && event.target.nodeName === 'TEXTAREA') handleSubmit(event) }

        function handleSubmit(event) {
            event.preventDefault()
            if (convo.length > 2) convo.splice(0, 2) // keep token usage maintainable
            const prevReplyTrimmed = ddgptDiv.querySelector('pre').textContent.substring(0, 250 - replyBox.value.length)
            const yourReply = replyBox.value + ' / Answer in ' + config.replyLanguage
            if (!config.proxyAPIenabled) {
                convo.push({ role: 'assistant', id: chatgpt.uuidv4(), content: { content_type: 'text', parts: [prevReplyTrimmed] } })
                convo.push({ role: 'user', id: chatgpt.uuidv4(), content: { content_type: 'text', parts: [yourReply] } })
            } else {
                convo.push({ role: 'assistant', content: prevReplyTrimmed })
                convo.push({ role: 'user', content: yourReply })
            } getShowReply(convo)

            // Remove listeners since they're re-added
            replyBox.removeEventListener('input', autosizeBox)
            replyBox.removeEventListener('keydown', enterToSubmit)

            // Show loading status
            const replySection = ddgptDiv.querySelector('section')
            replySection.classList.add('loading')
            replySection.innerHTML = ddgptAlerts.waitingResponse
        }

        function autosizeBox() {
            const newLength = replyBox.value.length
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
        const hostContainer = document.querySelector(isCenteredMode() ? '[data-area*="mainline"]' : '[class*="sidebar"]')
        hostContainer.prepend(ddgptDiv, ddgptFooter)
        const query = new URL(location.href).searchParams.get('q') + ' / Answer in ' + config.replyLanguage
        convo.push(
            config.proxyAPIenabled ? { role: 'user', content: query }
                                   : { role: 'user', id: chatgpt.uuidv4(),
                                       content: { content_type: 'text', parts: [query] }})
        getShowReply(convo)
    }

    // Define SYNC function

    function updateTweaksStyle() {
        tweaksStyle.innerText = config.fatterSidebar ? fsbStyle : (
            'section[data-area="sidebar"] { flex-basis: 448px ; max-width: 448px } '
          + 'section[data-area="mainline"] { flex-basis: 672px ; max-width: 672px } ')
    }

    // Run MAIN routine

    // Init config/convo/menu
    const config = {
        prefix: 'ddgpt', appSymbol: '🤖', userLanguage: chatgpt.getUserLanguage(),
        gitHubURL: 'https://github.com/kudoai/duckduckgpt',
        greasyForkURL: 'https://greasyfork.org/scripts/459849-duckduckgpt' }
    config.updateURL = config.greasyForkURL + '/code/duckduckgpt.meta.js'
    config.assetHostURL = config.gitHubURL.replace('github.com', 'raw.githubusercontent.com') + '/main/'
    loadSetting('proxyAPIenabled', 'prefixEnabled', 'replyLanguage', 'fatterSidebar', 'skippedVer', 'suffixEnabled')
    if (!config.replyLanguage) saveSetting('replyLanguage', config.userLanguage) // init reply language if unset
    const convo = []

    // Exit if prefix/suffix required but not present
    if (( config.prefixEnabled && !/.*q=%2F/.test(document.location) ) || // if prefix required but not present
        ( config.suffixEnabled && !/.*q=.*%3F(&|$)/.test(document.location) )) { // or suffix required but not present
            return }

    // Define messages
    const msgsLoaded = new Promise(resolve => {
        const msgHostDir = config.assetHostURL + 'greasemonkey/_locales/'
        const msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        let msgHref = msgHostDir + msgLocaleDir + 'messages.json', msgXHRtries = 0
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

    registerMenu()

    // Init endpoints
    const openAIendpoints = {
        session: 'https://chat.openai.com/api/auth/session',
        auth: 'https://auth0.openai.com',
        chat: 'https://chat.openai.com/backend-api/conversation' }
    const proxyEndpoints = [[ 'https://api.aigcfun.com/api/v1/text?key=' + await getAIGCFkey(), '', 'gpt-3.5-turbo' ]]

    // Init alerts
    const ddgptAlerts = {
        waitingResponse: messages.alert_waitingResponse + '...',
        login: messages.alert_login + ' @ ',
        tooManyRequests: messages.alert_tooManyRequests + '. '
            + messages['alert_suggest' + ( config.proxyAPIenabled ? 'OpenAI' : 'Proxy' )],
        parseFailed: messages.alert_parseFailed + '. '
            + messages['alert_suggest' + ( config.proxyAPIenabled ? 'OpenAI' : 'Proxy' )],
        checkCloudflare: messages.alert_checkCloudflare + ' @ ',
        suggestProxy: messages.alert_openAInotWorking + '. ' + messages.alert_suggestProxy,
        suggestOpenAI: messages.alert_proxyNotWorking + '. ' + messages.alert_suggestOpenAI
    }

    // Create DDG style tweaks
    const tweaksStyle = document.createElement('style')
    const fsbStyle = 'section[data-area="sidebar"], section[data-area="mainline"] '
        + '{ flex-basis: 560px !important ; max-width: 560px !important }'
    updateTweaksStyle() ; document.head.appendChild(tweaksStyle)

    // Stylize elements
    const ddgptStyle = document.createElement('style')
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
        + '.chatgpt-modal p { margin: -8px 0 -9px 4px ; font-size: 1.55rem } ' // position/size update alert msg
        + '.chatgpt-modal button { ' // chatgpt.alert() buttons
            + 'padding: 8px 15px !important ; cursor: pointer ; border-radius: 0 !important ; '
            + 'text-transform: uppercase ; border: 2px solid black !important } '
        + '.chatgpt-modal button:hover { color: white !important } ' // color text white on update alert button hovers
        + '.chatgpt-modal div[class*=checkbox] label { position: relative ; bottom: -0.1857rem ; left: -2px } ' // position skip update checkbox
    )
    document.head.appendChild(ddgptStyle) // append style to <head>

    // Create DDGPT container & add class
    const ddgptDiv = document.createElement('div') // create container div
    ddgptDiv.className = 'ddgpt-container'

    // Create feedback footer & add classes/HTML
    const ddgptFooter = document.createElement('div')
    ddgptFooter.className = 'feedback-prompt chatgpt-feedback'
    ddgptFooter.innerHTML = '<a href="https://github.ddgpt.com/discussions/new/choose"'
        + ' class="feedback-prompt__link" target="_blank" rel="noopener">' + messages.link_shareFeedback +'</a>'

    // Activate promo campaign if active
    GM.xmlHttpRequest({
        method: 'GET', url: config.assetHostURL + 'ads/live/creative.html',
        onload: (response) => { if (response.status == 200) {

            // Create campaign div & add class/style/HTML
            const pcDiv = document.createElement('div')
            pcDiv.className = 'ddgpt-container'
            pcDiv.style.display = 'flex'
            pcDiv.innerHTML = response.responseText

            // Create feedback footer & add classes/HTML
            const pcFooter = document.createElement('div')
            pcFooter.className = 'feedback-prompt chatgpt-feedback'
            pcFooter.innerHTML = '<a href="https://github.ddgpt.com/discussions/new/choose" class="feedback-prompt__link" target="_blank" rel="noopener">' + messages.link_shareFeedback +'</a>'

            // Inject in sidebar
            ddgptFooter.insertAdjacentElement('afterend', pcDiv)
            pcDiv.insertAdjacentElement('afterend', pcFooter)
    }}})

    loadDDGPT()

})()
