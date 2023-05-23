// ==UserScript==
// @name                ChatGPT Auto-Continue ⏩
// @name:ar             ChatGPT استمرار تلقائي ⏩
// @name:bg             ChatGPT Автоматично продължаване ⏩
// @name:bn             চ্যাটজিপিটি স্বয়ংক্রিয় চালিয়ে যান ⏩
// @name:cs             ChatGPT Automatické pokračování ⏩
// @name:da             ChatGPT Auto-Fortsæt ⏩
// @name:de             ChatGPT Automatisches Weitermachen ⏩
// @name:el             ChatGPT Αυτόματη Συνέχεια ⏩
// @name:eo             ChatGPT Aŭtomata Daŭrigado ⏩
// @name:es             ChatGPT Continuación Automática ⏩
// @name:fi             ChatGPT Automaattinen Jatkaminen ⏩
// @name:fr             ChatGPT Auto-Continuation ⏩
// @name:fr-CA          ChatGPT Auto-Continuation ⏩
// @name:gu             ચેટજીપીટી સ્વચાલિત ચાલુ રાખો ⏩
// @name:hi             चैटजीपीटी स्वचालित जारी रखें ⏩
// @name:hu             ChatGPT Automatikus Folytatás ⏩
// @name:in             ChatGPT Lanjutan Otomatis ⏩
// @name:it             ChatGPT Continuazione Automatica ⏩
// @name:iw             צ'אטגפט המשך אוטומטי ⏩
// @name:ja             ChatGPT 自動継続 ⏩
// @name:ka             ChatGPT ავტომატური გაგრძელება ⏩
// @name:kn             ಚಾಟ್ಜಿಪಿಟಿ ಸ್ವಯಂಚಾಲಿತ ಮುಂಚಿತವಾಗಿಸಿ ⏩
// @name:ko             ChatGPT 자동 계속하기 ⏩
// @name:ku             ChatGPT Berdewamkirina Otonom ⏩
// @name:ml             ചാറ്റ്‌ജിപിടി ഓട്ടോ-തുടങ്ങൽ ⏩
// @name:mr             चॅटजीपीटी स्वयंचलित सुरू ठेवा ⏩
// @name:ms             ChatGPT Sambungan Auto ⏩
// @name:my             ChatGPT အလိုအလျောက်စက်မှန်ပြတ်သက်ရောက်သည် ⏩
// @name:nl             ChatGPT Automatisch Doorgaan ⏩
// @name:no             ChatGPT Automatisk Fortsette ⏩
// @name:or             ଚାଟଜିପିଟି ସ୍ୱୟଂଚାଳିତ ଚାଲନ୍ତୁ ⏩
// @name:pa             ਚੈਟਜੀਪੀਟੀ ਆਟੋ-ਕੰਟੀਨਿਊ ਕਰੋ ⏩
// @name:pl             ChatGPT Automatyczne Kontynuowanie ⏩
// @name:pt             ChatGPT Continuação Automática ⏩
// @name:pt-BR          ChatGPT Continuação Automática ⏩
// @name:ro             ChatGPT Auto-Continuare ⏩
// @name:ru             ChatGPT Автоматическое Продолжение ⏩
// @name:sk             ChatGPT Automatické Pokračovanie ⏩
// @name:sr             ChatGPT Аутоматско наставак ⏩
// @name:ta             சாட் ஜிபிடி தானியங்கி தொடங்கல் ⏩
// @name:th             ChatGPT ดำเนินการต่ออัตโนมัติ ⏩
// @name:tr             ChatGPT Otomatik Devam Etme ⏩
// @name:uk             ChatGPT Автоматичне Продовження ⏩
// @name:ur             چیٹ جی پی ٹی خودکار جاری رکھیں ⏩
// @name:vi             ChatGPT Tự Động Tiếp Tục ⏩
// @name:zh-CN          ChatGPT 自动继续 ⏩
// @name:zh-HK          ChatGPT 自動繼續 ⏩
// @name:zh-SG          ChatGPT 自动继续 ⏩
// @name:zh-TW          ChatGPT 自動繼續 ⏩
// @version             2023.5.23
// @description         ⚡ Automatically continue generating multiple ChatGPT responses
// @description:ar      ⚡ استمر في توليد إجابات متعددة من ChatGPT تلقائيًا
// @description:bg      ⚡ Автоматично продължаване на генерирането на множество отговори от ChatGPT
// @description:bn      ⚡ অটো-চালিত মাল্টিপল চ্যাটজিপিটি উত্তর তৈরি করা
// @description:cs      ⚡ Automatické pokračování v generování více odpovědí od ChatGPT
// @description:da      ⚡ Auto-fortsæt med at generere flere ChatGPT-svar
// @description:de      ⚡ Automatisches Fortsetzen der Generierung mehrerer ChatGPT-Antworten
// @description:el      ⚡ Αυτόματη συνέχιση παραγωγής πολλαπλών απαντήσεων από το ChatGPT
// @description:eo      ⚡ Aŭtomata daŭrigado de generado de pluraj respondoj de ChatGPT
// @description:es      ⚡ Continuación automática generando múltiples respuestas de ChatGPT
// @description:fi      ⚡ Automaattinen jatkuva useiden ChatGPT-vastausten generointi
// @description:fr      ⚡ Génération automatique continue de multiples réponses ChatGPT
// @description:fr-CA   ⚡ Génération automatique continue de multiples réponses ChatGPT
// @description:gu      ⚡ આપમો-ચાલેલો મલ્ટીપલ ચેટજીપીટી જવાબો જનરેટ કરવો
// @description:hi      ⚡ ऑटो-जारी अनेक ChatGPT उत्तरों का उत्पादन करें
// @description:hu      ⚡ Automatikus folyamatos ChatGPT válaszok generálása
// @description:in      ⚡ Lanjutkan menghasilkan banyak jawaban ChatGPT secara otomatis
// @description:it      ⚡ Continua automaticamente a generare molteplici risposte ChatGPT
// @description:iw      ⚡ המשך אוטומטי ליצירת מספר תשובות מרובות של ChatGPT
// @description:ja      ⚡ ChatGPT の複数の回答を自動で継続的に生成
// @description:ka      ⚡ ავტომატურად გაგებ.
// @description:kn      ⚡ ಚಾಟ್ಜಿಪಿಟಿ ಬಹುತರದ ಪ್ರತಿಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮುಂಚಿತವಾಗಿಸುವುದು
// @description:ko      ⚡ ChatGPT 다중 응답 자동 생성 계속하기
// @description:ku      ⚡ Berdewamkirina Otonom a ChatGPT-ê jiberîne
// @description:ml      ⚡ ചാറ്റ്‌ജിപിടി പലപ്പോഴും ഉത്തരങ്ങൾ സ്വയംചാലിതമായി തുടങ്ങുക
// @description:mr      ⚡ चॅटजीपीटी स्वयंचलितपणे प्रारंभ करा
// @description:ms      ⚡ Sambungan Auto menghasilkan banyak respons ChatGPT
// @description:my      ⚡ ChatGPT အလိုအလျောက်စက်မှန်ပြတ်သက်ရောက်ခြင်း
// @description:nl      ⚡ ChatGPT Automatisch Doorgaan met het genereren van meerdere reacties
// @description:no      ⚡ ChatGPT Automatisk Fortsette generering av flere svar
// @description:or      ⚡ ଚାଟଜିପିଟି ସ୍ୱୟଂଚାଳିତ ବହୁତର ପ୍ରତିଭା ଉତ୍ପାଦନ କରନ୍ତୁ
// @description:pa      ⚡ ਚੈਟਜੀਪੀਟੀ ਆਟੋ-ਕੰਟੀਨਿਊ ਕਰੋ ਬਹੁਤ ਸਾਰੇ ਜਵਾਬ ਦੀ ਪੈਦਾਵਾਰ
// @description:pl      ⚡ ChatGPT Automatycznie Kontynuuj generowanie wielu odpowiedzi
// @description:pt      ⚡ ChatGPT Continuação Automática da geração de várias respostas
// @description:pt-BR   ⚡ ChatGPT Continuação Automática da geração de várias respostas
// @description:ro      ⚡ ChatGPT Continuare automată generarea de mai multe răspunsuri
// @description:ru      ⚡ Автоматическое продолжение генерации нескольких ответов ChatGPT
// @description:sk      ⚡ ChatGPT Automaticky Pokračujte v generovaní viacerých odpovedí
// @description:sr      ⚡ Аутоматски наставак генерисања више одговора ЧатГПТ
// @description:ta      ⚡ பல பதிவுகளைத் தானியங்கி உருவாக்கும் சாட் ஜிபிடி தொடங்கல்
// @description:th      ⚡ ChatGPT ดำเนินการต่ออัตโนมัติในการสร้างคำตอบหลายรายการ
// @description:tr      ⚡ ChatGPT Otomatik Devam Etme Çoklu Yanıt Üretme
// @description:uk      ⚡ Автоматичне продовження генерації кількох відповідей ChatGPT
// @description:ur      ⚡ چیٹ جی پی ٹی متعدد جوابات کی خودکار تیاری جاری رکھیں
// @description:vi      ⚡ ChatGPT Tự Động Tiếp Tục tạo nhiều câu trả lời
// @description:zh-CN   ⚡ 自动继续生成多个 ChatGPT 响应
// @description:zh-HK   ⚡ 自動繼續生成多個 ChatGPT 響應
// @description:zh-SG   ⚡ 自动继续生成多个 ChatGPT 响应
// @description:zh-TW   ⚡ 自動繼續生成多個 ChatGPT 響應
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @license             MIT
// @match               https://chat.openai.com/*
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@744003f7589935a1027840a8be65239696efd05a/dist/chatgpt-1.7.1.min.js
// @connect             raw.githubusercontent.com
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @updateURL           https://greasyfork.org/scripts/466789/code/chatgpt-auto-continue.meta.js
// @downloadURL           https://greasyfork.org/scripts/466789/code/chatgpt-auto-continue.user.js
// @homepageURL         https://github.com/adamlui/chatgpt-auto-continue
// @supportURL          https://github.com/adamlui/chatgpt-auto-continue/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

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

    // Init/register menu
    var menuIDs = [], state = { symbol: ['✔️', '❌'], word: ['ON', 'OFF'] } // initialize menu vars
    registerMenu() // create browser toolbar menu

    // Check for update (1x/48h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 172800000) { // if 48h since last check

        // Fetch latest meta
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

    // Observe DOM for need to continue generating response
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

    function loadSetting(...keys) {
        keys.forEach(key => {
            config[key] = GM_getValue(configKeyPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configKeyPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

})()
