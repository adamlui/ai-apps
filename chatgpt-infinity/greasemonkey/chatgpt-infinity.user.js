// ==UserScript==
// @name                ChatGPT Infinity ∞
// @name:ar             ChatGPT إنفينيتي ∞
// @name:bg             ChatGPT Безкрайност ∞
// @name:bn             চ্যাটজিপিটি ইনফিনিটি ∞
// @name:cs             ChatGPT Nekonečno ∞
// @name:da             ChatGPT Uendelighed ∞
// @name:de             ChatGPT Unendlichkeit ∞
// @name:el             ChatGPT Άπειρο ∞
// @name:eo             ChatGPT Senfina ∞
// @name:es             ChatGPT Infinito ∞
// @name:fi             ChatGPT Äärettömyys ∞
// @name:fr             ChatGPT Infini ∞
// @name:fr-CA          ChatGPT Infini ∞
// @name:gu             ચેટજીપીટી અનંત ∞
// @name:hi             चैटजीपीटी अनंत ∞
// @name:hu             ChatGPT Végtelen ∞
// @name:in             ChatGPT Tak Terhingga ∞
// @name:it             ChatGPT Infinito ∞
// @name:iw             צ'אטגפט אינסוף ∞
// @name:ja             ChatGPT 無限大 ∞
// @name:ka             ChatGPT უსასი ∞
// @name:kn             ಚಾಟ್ಜಿಪಿಟಿ ಅನಂತ ∞
// @name:ko             ChatGPT 무한대 ∞
// @name:ku             ChatGPT Bêdawî ∞
// @name:ml             ചാറ്റ്‌ജിപിടി അനന്തതയും ∞
// @name:mr             चॅटजीपीटी अनंत ∞
// @name:ms             ChatGPT Tak Terhingga ∞
// @name:my             ChatGPT အများကြီး ∞
// @name:nl             ChatGPT Oneindigheid ∞
// @name:no             ChatGPT Uendelighet ∞
// @name:or             ଚାଟଜିପିଟି ଅନନ୍ତ ∞
// @name:pa             ਚੈਟਜੀਪੀਟੀ ਅਨੰਤ ∞
// @name:pl             ChatGPT Nieskończoność ∞
// @name:pt             ChatGPT Infinito ∞
// @name:pt-BR          ChatGPT Infinito ∞
// @name:ro             ChatGPT Infinit ∞
// @name:ru             ChatGPT Бесконечность ∞
// @name:sk             ChatGPT Nekonečno ∞
// @name:sr             ChatGPT Бесконачност ∞
// @name:ta             சாட் ஜிபிடி முழுமையான ∞
// @name:th             ChatGPT ความไม่สิ้นสุด ∞
// @name:tr             ChatGPT Sonsuzluk ∞
// @name:uk             ChatGPT Нескінченність ∞
// @name:ur             چیٹ جی پی ٹی بے انتہا ∞
// @name:vi             ChatGPT Vô Hạn ∞
// @name:zh-CN          ChatGPT 无限 ∞
// @name:zh-HK          ChatGPT 無限 ∞
// @name:zh-SG          ChatGPT 无限 ∞
// @name:zh-TW          ChatGPT 無限 ∞
// @version             2023.5.17
// @description         Generate endless answers from all-knowing ChatGPT (in any language!)
// @description:ar      احصل على إجابات لا حصر لها من ChatGPT الذي يعرف الجميع (بأي لغة!)
// @description:bg      Генерирайте безкрайни отговори от всезнаещия ChatGPT (на всеки език!)
// @description:bn      সর্বজনবিদিত ChatGPT থেকে অবিরাম উত্তর তৈরি করুন (যেকোন ভাষায়!)
// @description:cs      Generujte nekonečné odpovědi ze vševědoucího ChatGPT (v jakémkoli jazyce!)
// @description:da      Generer endeløse svar fra alvidende ChatGPT (på ethvert sprog!)
// @description:de      Generieren Sie endlose Antworten aus dem allwissenden ChatGPT (in jeder Sprache!)
// @description:el      Δημιουργήστε ατελείωτες απαντήσεις από το παντογνώστη ChatGPT (σε οποιαδήποτε γλώσσα!)
// @description:eo      Generu senfinajn respondojn de ĉioscia ChatGPT (en iu ajn lingvo!)
// @description:es      Genera infinitas respuestas desde ChatGPT que todo lo sabe (¡en cualquier idioma!)
// @description:fi      Luo loputtomasti vastauksia kaikkitietävästä ChatGPT:stä (millä tahansa kielellä!)
// @description:fr      Générez des réponses sans fin à partir de ChatGPT qui sait tout (dans n'importe quelle langue!)
// @description:fr-CA   Générez des réponses sans fin à partir de ChatGPT qui sait tout (dans n'importe quelle langue!)
// @description:gu      સર્વજ્ઞાની ChatGPT (કોઈપણ ભાષામાં!) તરફથી અનંત જવાબો બનાવો
// @description:hi      सभी जानकार ChatGPT से अंतहीन उत्तर उत्पन्न करें (किसी भी भाषा में!)
// @description:hu      Generáljon végtelen válaszokat a mindent tudó ChatGPT segítségével (bármilyen nyelven!)
// @description:in      Hasilkan jawaban tanpa akhir dari ChatGPT yang serba tahu (dalam bahasa apa pun!)
// @description:it      Genera risposte infinite da ChatGPT onnisciente (in qualsiasi lingua!)
// @description:iw      הפק תשובות אינסופיות מ-ChatGPT היודע הכל (בכל שפה!)
// @description:ja      すべてを知っている ChatGPT から無限の回答を生成します (任意の言語で!)
// @description:ka      შექმენით გაუთავებელი პასუხები ყოვლისმომცველი ChatGPT-დან (ნებისმიერ ენაზე!)
// @description:kn      すべてを知っている ChatGPT から無限の回答を生成します (任意の言語で!)
// @description:ko      모든 것을 아는 ChatGPT에서 끝없는 답변 생성(모든 언어로!)
// @description:ku      Bersivên bêdawî ji ChatGPT-a-zana (bi her zimanî!)
// @description:ml      എല്ലാം അറിയുന്ന ChatGPT-ൽ നിന്ന് അനന്തമായ ഉത്തരങ്ങൾ സൃഷ്ടിക്കുക (ഏത് ഭാഷയിലും!)
// @description:mr      सर्वज्ञात ChatGPT (कोणत्याही भाषेत!) कडून अंतहीन उत्तरे व्युत्पन्न करा.
// @description:ms      Hasilkan jawapan yang tidak berkesudahan daripada ChatGPT yang serba tahu (dalam mana-mana bahasa!)
// @description:my      အားလုံးသိသော ChatGPT (မည်သည့်ဘာသာစကားဖြင့်မဆို) မှ အဆုံးမဲ့အဖြေများကို ဖန်တီးပါ။
// @description:nl      Genereer eindeloze antwoorden van alwetende ChatGPT (in elke taal!)
// @description:no      Generer endeløse svar fra allvitende ChatGPT (på hvilket som helst språk!)
// @description:or      ସମସ୍ତ ଜାଣିବା ChatGPT ରୁ ଅସୀମ ଉତ୍ତର ସୃଷ୍ଟି କରନ୍ତୁ (ଯେକ language ଣସି ଭାଷାରେ!)
// @description:pa      ਸਭ-ਜਾਣਨ ਵਾਲੇ ਚੈਟਜੀਪੀਟੀ (ਕਿਸੇ ਵੀ ਭਾਸ਼ਾ ਵਿੱਚ!) ਤੋਂ ਬੇਅੰਤ ਜਵਾਬ ਤਿਆਰ ਕਰੋ
// @description:pl      Generuj niekończące się odpowiedzi z wszechwiedzącego ChatGPT (w dowolnym języku!)
// @description:pt      Gere respostas infinitas do onisciente ChatGPT (em qualquer idioma!)
// @description:pt-BR   Gere respostas infinitas do onisciente ChatGPT (em qualquer idioma!)
// @description:ro      Generați răspunsuri nesfârșite de la atotștiutorul ChatGPT (în orice limbă!)
// @description:ru      Создавайте бесконечные ответы от всезнающего ChatGPT (на любом языке!)
// @description:sk      Generujte nekonečné odpovede od vševediaceho ChatGPT (v akomkoľvek jazyku!)
// @description:sr      Генеришите бескрајне одговоре од свезнајућег ЦхатГПТ-а (на било ком језику!)
// @description:sv      Generera oändliga svar från allvetande ChatGPT (på vilket språk som helst!)
// @description:ta      அனைத்தையும் அறிந்த ChatGPT இலிருந்து முடிவற்ற பதில்களை உருவாக்கவும் (எந்த மொழியிலும்!)
// @description:th      สร้างคำตอบไม่รู้จบจาก ChatGPT ที่รอบรู้ (ในภาษาใดก็ได้!)
// @description:tr      Her şeyi bilen ChatGPT'den sonsuz cevaplar oluşturun (herhangi bir dilde!)
// @description:uk      Генеруйте нескінченні відповіді від всезнаючого ChatGPT (будь-якою мовою!)
// @description:ur      تمام جاننے والے ChatGPT سے لامتناہی جوابات تیار کریں (کسی بھی زبان میں!)
// @description:vi      Tạo vô số câu trả lời từ ChatGPT toàn năng (bằng bất kỳ ngôn ngữ nào!)
// @description:zh-CN   从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
// @description:zh-HK   從無所不知的 ChatGPT 生成無窮無盡的答案 (用任何語言!)
// @description:zh-SG   从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
// @description:zh-TW   從無所不知的 ChatGPT 生成無窮無盡的答案 (用任何語言!)
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @license             MIT
// @match               https://chat.openai.com/*
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
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
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@51dc48d5bff8e5539e8cee273032360d0691c6a6/dist/chatgpt-1.6.5.min.js
// @connect             raw.githubusercontent.com
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @updateURL           https://greasyfork.org/scripts/465051/code/chatgpt-infinity.meta.js
// @downloadURL         https://greasyfork.org/scripts/465051/code/chatgpt-infinity.user.js
// @homepageURL         https://chatgptevo.com/infinity
// @supportURL          https://chatgptevo.com/infinity/support
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 Adam Lui, chatgpt.js & contributors under the MIT license.

(async () => {

    // Initialize settings
    var configKeyPrefix = 'chatGPTinf_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '', infinityMode: false }
    loadSetting('toggleHidden', 'autoScrollDisabled', 'replyLanguage', 'replyInterval')
    if (!config.replyLanguage) saveSetting('replyLanguage', navigator.languages[0] || navigator.language || '') // init reply language
    if (!config.replyInterval) saveSetting('replyInterval', 7) // init refresh interval to 7 secs if unset

    // Define messages
    var msgsLoaded = new Promise(resolve => {
        var msgHostDir = 'https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/greasemonkey/_locales/'
        var msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        var msgHref = msgHostDir + msgLocaleDir + 'messages.json' // build src link
        var msgXHRtries = 0
        GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
        function onLoad(response) {
            try { // to return localized messages.json
                var messages = JSON.parse(response.responseText)
                var cleanerMsgs = new Proxy(messages, { // remove need to ref nested keys
                    get(target, prop) {
                        if (typeof target[prop] === 'object' && target[prop] !== null && 'message' in target[prop]) {
                            return target[prop].message
                }}}) ; resolve(cleanerMsgs)
            } catch (error) { // if 404
                msgXHRtries++ ; if (msgXHRtries == 3) return // try up to 3X (original/region-stripped/EN) only
                msgHref = config.userLanguage.includes('-') && msgXHRtries == 1 ? // if regional lang on 1st try...
                    msgHref.replace(/(.*)_.*(\/.*)/, '$1$2') // ...strip region before retrying
                        : ( msgHostDir + 'en/messages.json' ) // else use default English messages
                GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
            }
        }
    }) ; var messages = await msgsLoaded

    // Init/register menu
    var menuIDs = [], stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF'] // initialize menu vars
    registerMenu() // create browser toolbar menu

    await chatgpt.isLoaded()

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
    toggleLabel.addEventListener('click', function() {
        var toggleInput = document.querySelector('#infinityToggle')
        toggleInput.click() ; infinityMode.toggle()
    })
    for (var link of document.querySelectorAll('a')) { // inspect sidebar links for classes
        if (link.innerHTML.includes('New chat')) { // focus on 'New chat'
            toggleLabel.setAttribute('class', link.classList) // borrow its classes
            break // stop looping since class assignment is done
        }
    } updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    var navObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
    }})})
    navObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle Infinity Mode
        var imLabel = stateSymbol[+!config.infinityMode] + ' ' + messages.menuLabel_infinityMode + ' ∞ '
            + stateSeparator + stateWord[+!config.infinityMode]
        menuIDs.push(GM_registerMenuCommand(imLabel, function() {
            document.querySelector('#infinityToggle').click()
        }))

        // Add command to toggle visibility of toggle
        var tvLabel = stateSymbol[+config.toggleHidden] + ' ' + messages.menuLabel_toggleVis
            + stateSeparator + stateWord[+config.toggleHidden]
        menuIDs.push(GM_registerMenuCommand(tvLabel, function() {
            saveSetting('toggleHidden', !config.toggleHidden)
            toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex' // toggle visibility
            if (!config.notifHidden) {
                chatgpt.notify('∞ ' + messages.menuLabel_toggleVis + ': '+ stateWord[+config.toggleHidden],
                    '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            } for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        }))

        // Add command to toggle auto-scroll
        var asLabel = stateSymbol[+config.autoScrollDisabled] + ' ' + messages.menuLabel_autoScroll
            + stateSeparator + stateWord[+config.autoScrollDisabled]
        menuIDs.push(GM_registerMenuCommand(asLabel, function() {
            saveSetting('autoScrollDisabled', !config.autoScrollDisabled)
            if (!config.notifHidden) {
                chatgpt.notify('∞ ' + messages.menuLabel_autoScroll + ': '+ stateWord[+config.autoScrollDisabled],
                    '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            } for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        }))

        // Add command to set language
        var rlLabel = '🌐 ' + messages.menuLabel_replyLang + stateSeparator
                    + ( config.replyLanguage ? config.replyLanguage : 'English' )
        menuIDs.push(GM_registerMenuCommand(rlLabel, async function() {
            while (true) {
                var replyLanguage = prompt(`${ messages.prompt_updateReplyLang }:`, config.replyLanguage)
                if (replyLanguage === null) break // user cancelled so do nothing
                else if (!/\d/.test(replyLanguage)) {
                    saveSetting('replyLanguage', replyLanguage)
                    alert(`${ messages.alert_willReplyIn } ${ replyLanguage ? replyLanguage : messages.alerts.yourSysLang }.`)
                    if (config.infinityMode) { // restart session using new reply language
                        chatgpt.stop() ; infinityMode.deactivate() ; infinityMode.toggle() }
                    for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
                    break
        }}}))

        // Add command to change reply interval
        var riLabel = '⌚ ' + messages.menuLabel_replyInt + stateSeparator + config.replyInterval + 's'
        menuIDs.push(GM_registerMenuCommand(riLabel, async function() {
            while (true) {
                var replyInterval = prompt(`${ messages.prompt_updateReplyInt }:`, config.replyInterval)
                if (replyInterval === null) break // user cancelled so do nothing
                else if (!isNaN(parseInt(replyInterval)) && parseInt(replyInterval) > 4) { // valid int set
                    saveSetting('replyInterval', parseInt(replyInterval))
                    alert(`${ messages.alert_willReplyEvery } ${ replyInterval } ${ messages.unit_seconds }.`)
                    if (config.infinityMode) { // reset reply interval w/o ending session
                        clearTimeout(infinityMode.isActive) ; await chatgpt.isIdle()
                        if (config.infinityMode && !infinityMode.isActive) { // double-check in case de-activated before scheduled
                            infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
                    }}
                    for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
                    break
        }}}))
    }

    function getUserscriptManager() { try { return GM_info.scriptHandler } catch(error) { return 'other' }}

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
            <img width="18px" src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/media/images/icons/infinity-icon/icon64.png">
            ${ messages.menuLabel_infinityMode } ${config.infinityMode ? messages.state_enabled : messages.state_disabled }
            <label class="switch" ><input id="infinityToggle" type="checkbox"
                ${ config.infinityMode ? 'checked="true"' : '' } >
                <span class="slider"></span></label>`
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

    var infinityMode = {

        activate: async function() {
            if (!config.notifHidden) {
                chatgpt.notify('∞ ' + messages.menuLabel_infinityMode + ': ON', '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            }
            document.querySelector('nav > a').click()
            setTimeout(function() {
                chatgpt.send('generate a single random q&a' + ( config.replyLanguage ? ( ' in ' + config.replyLanguage ) : ''  )
                                                            + '. don\'t type anything else') }, 500)
            infinityMode.sent = true ; await chatgpt.isIdle()
            if (config.infinityMode && !infinityMode.isActive) { // double-check in case de-activated before scheduled
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
            }
        },

        continue: async function() {
            chatgpt.send('do it again')
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(error) {}
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinityMode.isActive) infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
        },

        deactivate: function() {
            clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null, infinityMode.sent = null
            if (!config.notifHidden) {
                chatgpt.notify('∞ ' + messages.menuLabel_infinityMode + ': OFF', '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            }
        },

        toggle: async function() {
            var toggleInput = document.querySelector('#infinityToggle')
            setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
            config.infinityMode = toggleInput.checked
            for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) ; registerMenu() // refresh menu
            chatgpt.stop()
            if (config.infinityMode && !infinityMode.sent) infinityMode.activate()
            else if (!config.infinityMode && infinityMode.sent) infinityMode.deactivate()
        }
    }

})()
