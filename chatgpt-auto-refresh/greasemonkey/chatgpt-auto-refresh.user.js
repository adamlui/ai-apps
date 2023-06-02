// ==UserScript==
// @name                ChatGPT Auto Refresh ↻
// @name:ar             تحديث تلقائي لـ ChatGPT ↻
// @name:bg             Автоматично опресняване на ChatGPT ↻
// @name:bn             ChatGPT অটো রিফ্রেশ ↻
// @name:cs             Automatické obnovení ChatGPT ↻
// @name:da             ChatGPT Auto Refresh ↻
// @name:de             Automatische ChatGPT-Aktualisierung ↻
// @name:el             Αυτόματη ανανέωση ChatGPT ↻
// @name:eo             ChatGPT Aŭtomata Refreŝigo ↻
// @name:es             Actualización Automática de ChatGPT ↻
// @name:fi             ChatGPT automaattinen päivitys ↻
// @name:fr             Actualisation Automatique de ChatGPT ↻
// @name:fr-CA          Actualisation Automatique de ChatGPT ↻
// @name:gu             ChatGPT ઓટો રિફ્રેશ ↻
// @name:hi             चैटजीपीटी ऑटो रिफ्रेश ↻
// @name:hu             ChatGPT automatikus frissítése ↻
// @name:in             Penyegaran Otomatis ChatGPT ↻
// @name:it             Aggiornamento Automatico ChatGPT ↻
// @name:iw             רענון אוטומטי של ChatGPT ↻
// @name:ja             ChatGPT 自動更新 ↻
// @name:ka             ChatGPT ავტომატური განახლება ↻
// @name:kn             ChatGPT ಸ್ವಯಂ ರಿಫ್ರೆಶ್ ↻
// @name:ko             ChatGPT 자동 새로 고침 ↻
// @name:ku             ChatGPT Xweseriya Nûvekirina ↻
// @name:ml             ChatGPT യാന്ത്രിക പുതുക്കൽ ↻
// @name:mr             ChatGPT ऑटो रिफ्रेश ↻
// @name:ms             Segar Semula AutoGPT ↻
// @name:my             ChatGPT အလိုအလျောက်ပြန်လည်စတင်ခြင်း ↻
// @name:nl             ChatGPT automatisch vernieuwen ↻
// @name:no             ChatGPT Auto Refresh ↻
// @name:or             ChatGPT ଅଟୋ ସତେଜ ↻
// @name:pa             ਚੈਟਜੀਪੀਟੀ ਆਟੋ ਰਿਫ੍ਰੈਸ਼ ↻
// @name:pl             Automatyczne odświeżanie ChatGPT ↻
// @name:pt             Atualização automática do ChatGPT ↻
// @name:pt-BR          Atualização automática do ChatGPT ↻
// @name:ro             Actualizare automată ChatGPT ↻
// @name:ru             Автоматическое Обновление ChatGPT ↻
// @name:sk             Automatické obnovenie chatGPT ↻
// @name:sr             Аутоматско освежавање ЦхатГПТ ↻
// @name:ta             ChatGPT தானியங்கு புதுப்பிப்பு ↻
// @name:th             ChatGPT รีเฟรชอัตโนมัติ ↻
// @name:tr             ChatGPT Otomatik Yenileme ↻
// @name:uk             Автоматичне оновлення ChatGPT ↻
// @name:ur             چیٹ جی پی ٹی آٹو ریفریش ↻
// @name:vi             Tự động làm mới ChatGPT ↻
// @name:zh-CN          ChatGPT 自动刷新 ↻
// @name:zh-HK          ChatGPT 自動刷新 ↻
// @name:zh-SG          ChatGPT 自动刷新 ↻
// @name:zh-TW          ChatGPT 自動刷新 ↻
// @version             2023.6.2
// @description         *SAFELY* keeps ChatGPT sessions fresh, eliminating constant network errors + Cloudflare checks (all from the background!)
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description:ar      *SAFELY* يحافظ على جلسات ChatGPT جديدة ، ويقضي على أخطاء الشبكة المستمرة + فحوصات Cloudflare (كلها من الخلفية!)
// @description:bg      *БЕЗОПАСНО* поддържа сесиите на ChatGPT свежи, елиминирайки постоянни мрежови грешки + проверки на Cloudflare (всички от заден план!)
// @description:bn      *নিরাপদে* চ্যাটজিপিটি সেশনগুলিকে সতেজ রাখে, ধ্রুবক নেটওয়ার্ক ত্রুটিগুলি দূর করে + ক্লাউডফ্লেয়ার চেক (সবই ব্যাকগ্রাউন্ড থেকে!)
// @description:cs      *BEZPEČNĚ* udržuje relace ChatGPT čerstvé, eliminuje neustálé chyby sítě + kontroly Cloudflare (vše na pozadí!)
// @description:da      *SIKKERT* holder ChatGPT-sessioner friske og eliminerer konstante netværksfejl + Cloudflare-tjek (alt sammen fra baggrunden!)
// @description:de      *SICHER* hält ChatGPT-Sitzungen frisch, eliminiert ständige Netzwerkfehler + Cloudflare-Prüfungen (alles aus dem Hintergrund!)
// @description:el      Το *SAFELY* διατηρεί φρέσκες τις περιόδους σύνδεσης ChatGPT, εξαλείφοντας τα συνεχή σφάλματα δικτύου + τους ελέγχους Cloudflare (όλα από το παρασκήνιο!)
// @description:eo      *SEKURE* konservas ChatGPT-sesiojn freŝaj, forigante konstantajn retajn erarojn + Cloudflare-kontroloj (ĉiuj el la fono!)
// @description:es      *SEGURIDAD* mantiene las sesiones de ChatGPT actualizadas, lo que elimina los errores de red constantes + las comprobaciones de Cloudflare (¡todo en segundo plano!)
// @description:fi      *TURVALLISESTI* pitää ChatGPT-istunnot tuoreina, eliminoiden jatkuvat verkkovirheet + Cloudflare-tarkistukset (kaikki taustalta!)
// @description:fr      *EN TOUTE SÉCURITÉ* maintient les sessions ChatGPT à jour, éliminant les erreurs réseau constantes + vérifications Cloudflare (toutes en arrière-plan!)
// @description:fr-CA   *EN TOUTE SÉCURITÉ* maintient les sessions ChatGPT à jour, éliminant les erreurs réseau constantes + vérifications Cloudflare (toutes en arrière-plan!)
// @description:gu      *સેફલી* ચેટજીપીટી સત્રોને તાજા રાખે છે, સતત નેટવર્ક ભૂલોને દૂર કરે છે + ક્લાઉડફ્લેર તપાસો (બધું પૃષ્ઠભૂમિમાંથી!)
// @description:hi      न*सुरक्षित* चैटजीपीटी सत्रों को ताज़ा रखता है, निरंतर नेटवर्क त्रुटियों को समाप्त करता है + क्लाउडफ्लेयर चेक (सभी पृष्ठभूमि से!)
// @description:hu      *BIZTONSÁGOSAN* frissen tartja a ChatGPT munkameneteket, kiküszöbölve az állandó hálózati hibákat + Cloudflare ellenőrzéseket (mind a háttérből!)
// @description:in      *AMAN* membuat sesi ChatGPT tetap segar, menghilangkan kesalahan jaringan konstan + pemeriksaan Cloudflare (semua dari latar belakang!)
// @description:it      *IN MODO SICURO* mantiene aggiornate le sessioni di ChatGPT, eliminando i continui errori di rete + i controlli di Cloudflare (tutto in background!)
// @description:iw      *בטוח* שומר על מפגשי ChatGPT טריים, מבטל שגיאות רשת קבועות + בדיקות Cloudflare (הכל מהרקע!)
// @description:ja      *安全に* ChatGPT セッションを最新の状態に保ち、一定のネットワーク エラー + Cloudflare チェック (すべてバックグラウンドから!) を排除します。
// @description:ka      *SAFELY* ინახავს ChatGPT სესიებს ახალი, აღმოფხვრის ქსელის მუდმივ შეცდომებს + Cloudflare შემოწმებებს (ყველაფერი ფონიდან!)
// @description:kn      *ಸುರಕ್ಷಿತವಾಗಿ* ಚಾಟ್‌ಜಿಪಿಟಿ ಸೆಷನ್‌ಗಳನ್ನು ತಾಜಾವಾಗಿರಿಸುತ್ತದೆ, ನಿರಂತರ ನೆಟ್‌ವರ್ಕ್ ದೋಷಗಳನ್ನು ನಿವಾರಿಸುತ್ತದೆ + ಕ್ಲೌಡ್‌ಫ್ಲೇರ್ ಪರಿಶೀಲನೆಗಳು (ಎಲ್ಲವೂ ಹಿನ್ನೆಲೆಯಿಂದ!)
// @description:ko      *SAFELY*는 ChatGPT 세션을 최신 상태로 유지하여 지속적인 네트워크 오류 + Cloudflare 검사(모두 백그라운드에서!)를 제거합니다.
// @description:ku      *EWLE* danişînên ChatGPT nû digire, xeletiyên torê yên domdar ji holê radike + kontrolên Cloudflare (hemû ji paşîn!)
// @description:ml      *സുരക്ഷിതമായി* ChatGPT സെഷനുകൾ പുതുമയുള്ളതാക്കുന്നു, നിരന്തരമായ നെറ്റ്‌വർക്ക് പിശകുകൾ ഇല്ലാതാക്കുന്നു + ക്ലൗഡ്ഫ്ലെയർ പരിശോധനകൾ (എല്ലാം പശ്ചാത്തലത്തിൽ നിന്ന്!)
// @description:mr      *सुरक्षितपणे* ChatGPT सत्रे ताजे ठेवते, सतत नेटवर्क त्रुटी दूर करते + क्लाउडफ्लेअर तपासणी (सर्व पार्श्वभूमीतून!)
// @description:ms      *SELAMAT* memastikan sesi ChatGPT sentiasa segar, menghapuskan ralat rangkaian berterusan + pemeriksaan Cloudflare (semua dari latar belakang!)
// @description:my      *ဘေးကင်းစွာ* သည် ChatGPT ဆက်ရှင်များကို လတ်ဆတ်နေစေပြီး အမြဲမပြတ် ကွန်ရက်အမှားအယွင်းများကို ဖယ်ရှားပေးသည် + Cloudflare စစ်ဆေးမှုများ (အားလုံးသည် နောက်ခံမှ!)
// @description:nl      *VEILIG* houdt ChatGPT-sessies up-to-date en elimineert constante netwerkfouten + Cloudflare-controles (allemaal vanaf de achtergrond!)
// @description:no      *SIKKERT* holder ChatGPT-økter ferske, og eliminerer konstante nettverksfeil + Cloudflare-sjekker (alt fra bakgrunnen!)
// @description:or      *ନିରାପଦ* ଚାଟ୍ ଜିପିଟି ଅଧିବେଶନକୁ ସତେଜ ରଖେ, କ୍ରମାଗତ ନେଟୱାର୍କ ତ୍ରୁଟି + କ୍ଲାଉଡ୍ ଫ୍ଲାର୍ ଚେକ୍ (ସମସ୍ତ ପୃଷ୍ଠଭୂମିରୁ!)
// @description:pa      *ਸੁਰੱਖਿਅਤ* ਚੈਟਜੀਪੀਟੀ ਸੈਸ਼ਨਾਂ ਨੂੰ ਤਾਜ਼ਾ ਰੱਖਦਾ ਹੈ, ਨਿਰੰਤਰ ਨੈੱਟਵਰਕ ਤਰੁਟੀਆਂ ਨੂੰ ਖਤਮ ਕਰਦਾ ਹੈ + ਕਲਾਉਡਫਲੇਅਰ ਜਾਂਚਾਂ (ਸਾਰੇ ਪਿਛੋਕੜ ਤੋਂ!)
// @description:pl      *BEZPIECZNIE* utrzymuje aktualne sesje ChatGPT, eliminując ciągłe błędy sieciowe + kontrole Cloudflare (wszystko w tle!)
// @description:pt      *SEGURANÇA* mantém as sessões ChatGPT atualizadas, eliminando erros constantes de rede + verificações Cloudflare (tudo em segundo plano!)
// @description:pt-BR   *SEGURANÇA* mantém as sessões ChatGPT atualizadas, eliminando erros constantes de rede + verificações Cloudflare (tudo em segundo plano!)
// @description:ro      *ÎN SIGURANȚĂ* păstrează sesiunile ChatGPT actuale, eliminând erorile constante de rețea + verificări Cloudflare (toate din fundal!)
// @description:ru      *БЕЗОПАСНО* обновляет сеансы ChatGPT, устраняя постоянные сетевые ошибки + проверки Cloudflare (все в фоновом режиме!)
// @description:sk      *BEZPEČNE* udržiava relácie ChatGPT čerstvé, čím sa eliminujú neustále chyby siete + kontroly Cloudflare (všetko na pozadí!)
// @description:sr      *СИГУРНО* одржава сесије ЦхатГПТ свежим, елиминишући сталне мрежне грешке + Цлоудфларе провере (све из позадине!)
// @description:sv      *SÄKERT* håller ChatGPT-sessioner fräscha och eliminerar konstant nätverksfel + Cloudflare-kontroller (alla från bakgrunden!)
// @description:ta      *பாதுகாப்பாக* ChatGPT அமர்வுகளை புதியதாக வைத்திருக்கிறது, நிலையான நெட்வொர்க் பிழைகள் + Cloudflare சோதனைகளை நீக்குகிறது (அனைத்தும் பின்புலத்திலிருந்து!)
// @description:th      *ปลอดภัย* รักษาเซสชัน ChatGPT ให้สดใหม่ กำจัดข้อผิดพลาดของเครือข่ายอย่างต่อเนื่อง + ตรวจสอบ Cloudflare (ทั้งหมดจากเบื้องหลัง!)
// @description:tr      *GÜVENLİ* ChatGPT oturumlarını güncel tutar, sürekli ağ hatalarını ve Cloudflare kontrollerini (hepsi arka planda!) ortadan kaldırır.
// @description:uk      *БЕЗПЕЧНО* підтримує сеанси ChatGPT свіжими, усуваючи постійні помилки мережі + перевірки Cloudflare (все у фоновому режимі!)
// @description:ur      *محفوظ طریقے سے* چیٹ جی پی ٹی سیشنز کو تازہ رکھتا ہے، نیٹ ورک کی مستقل خرابیوں کو ختم کرتا ہے + کلاؤڈ فلیئر چیکس (سب کچھ پس منظر سے!)
// @description:vi      *AN TOÀN* giữ cho các phiên ChatGPT luôn mới, loại bỏ các lỗi mạng liên tục + kiểm tra Cloudflare (tất cả từ nền!)
// @description:zh-CN   *安全*保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查（全部来自后台！）
// @description:zh-HK   *安全*保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查（全部來自後台！）
// @description:zh-SG   *安全*保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查（全部来自后台！）
// @description:zh-TW   *安全*保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查（全部來自後台！）
// @license             MIT
// @match               https://chat.openai.com/*
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
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@821a4afaedc308160425b0ec91454af0d3af996e/dist/chatgpt-1.7.5.min.js
// @connect             raw.githubusercontent.com
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @homepageURL         https://github.com/adamlui/chatgpt-auto-refresh
// @supportURL          https://github.com/adamlui/chatgpt-auto-refresh/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {

    // Initialize settings
    var configPrefix = 'chatGPTar_'
    var config = { userLanguage: navigator.languages[0] || navigator.language || '' }
    loadSetting('arDisabled', 'notifHidden', 'refreshInterval', 'toggleHidden')
    if (!config.refreshInterval) saveSetting('refreshInterval', 30) // init refresh interval to 30 secs if unset

    // Define messages
    var msgsLoaded = new Promise(resolve => {
        var msgHostDir = 'https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/greasemonkey/_locales/'
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

    // Create toggle label, add listener/max-height/classes/HTML
    var toggleLabel = document.createElement('div') // create label div
    toggleLabel.addEventListener('click', function() {
        var toggleInput = document.querySelector('#autoRefreshToggle')
        toggleInput.click()
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        config.arDisabled = !toggleInput.checked
        for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        if (!config.arDisabled && !chatgpt.autoRefresh.isActive) {
            chatgpt.autoRefresh.activate(config.refreshInterval) // ; config.isActive = true
            if (!config.notifHidden) {
                chatgpt.notify('↻ ' + messages.menuLabel_autoRefresh + ': ON',
                    '', '', chatgpt.isDarkMode() ? '' : 'shadow')
        }} else if (config.arDisabled && chatgpt.autoRefresh.isActive) {
            chatgpt.autoRefresh.deactivate() // ; config.isActive = false
            if (!config.notifHidden) {
                chatgpt.notify('↻ ' + messages.menuLabel_autoRefresh + ': OFF',
                    '', '', chatgpt.isDarkMode() ? '' : 'shadow')
        }}
        saveSetting('arDisabled', config.arDisabled)
    })
    for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) { // inspect sidebar for classes to borrow
        if (navLink.text.match(/(new|clear) chat/i)) { // focus on new/clear chat button
            toggleLabel.setAttribute('class', navLink.classList) // borrow link classes
            break // stop looping since class assignment is done
        }
    } toggleLabel.style.maxHeight = '44px' // prevent flex overgrowth
    updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    var navObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
    }})})
    navObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Activate auto-refresh on first visit if enabled
    if (!config.arDisabled) {
        chatgpt.autoRefresh.activate(config.refreshInterval) // ; config.isActive = true
        if (!config.notifHidden) {
            chatgpt.notify('↻ ' + messages.menuLabel_autoRefresh + ': ON',
                '', '', chatgpt.isDarkMode() ? '' : 'shadow')
    }}

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle auto-refresh
        var arLabel = stateSymbol[+config.arDisabled] + ' ' + messages.menuLabel_autoRefresh + ' ↻ '
                    + stateSeparator + stateWord[+config.arDisabled]
        menuIDs.push(GM_registerMenuCommand(arLabel, function() {
            document.querySelector('#autoRefreshToggle').click()
        }))

        // Add command to toggle visibility of toggle
        var tvLabel = stateSymbol[+config.toggleHidden] + ' ' + messages.menuLabel_toggleVis
            + stateSeparator + stateWord[+config.toggleHidden]
        menuIDs.push(GM_registerMenuCommand(tvLabel, function() {
            saveSetting('toggleHidden', !config.toggleHidden)
            toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex' // toggle visibility
            if (!config.notifHidden) {
                chatgpt.notify('↻ ' + messages.menuLabel_toggleVis + ': '+ stateWord[+config.toggleHidden],
                    '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            } for (var id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
                    + stateSeparator + stateWord[+config.notifHidden]
        menuIDs.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify('↻ ' + messages.menuLabel_modeNotifs + ': ' + stateWord[+config.notifHidden],
                '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))

        // Add command to change refresh interval
        var riLabel = '⌚ ' + messages.menuLabel_refreshInt + ' ' + stateSeparator + config.refreshInterval + 's'
        menuIDs.push(GM_registerMenuCommand(riLabel, function() {
            while (true) {
                var refreshInterval = prompt(`${ messages.prompt_updateInt }:`, config.refreshInterval)
                if (refreshInterval === null) break // user cancelled so do nothing
                else if (!isNaN(parseInt(refreshInterval)) && parseInt(refreshInterval) > 0) { // valid int set
                    saveSetting('refreshInterval', parseInt(refreshInterval))
                    if (chatgpt.autoRefresh.isActive) { // reset running auto-refresh
                        chatgpt.autoRefresh.deactivate()
                        chatgpt.autoRefresh.activate(refreshInterval)
                    }
                    for (var i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) // remove all cmd's
                    registerMenu() // serve fresh one
                    var minInterval = Math.max(2, config.refreshInterval - 10)
                    var maxInterval = config.refreshInterval + 10
                    alert(`${ messages.alert_intUpdated } ${ minInterval }–${ maxInterval } secs`)
                    break
        }}}))
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

    // Define TOGGLE functions

    function insertToggle() {
        var chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]') || {}
        var firstButton = chatHistoryNav.querySelector('a') || {}
        if (chatgpt.history.isOff()) try { firstButton.parentNode.nextElementSibling.style.display = 'none' } catch (error) {} // hide enable-history spam div
        if (!chatHistoryNav.contains(toggleLabel)) try { chatHistoryNav.insertBefore(toggleLabel, firstButton.parentNode) } catch (error) {} // insert toggle
    }

    function updateToggleHTML() {
        toggleLabel.innerHTML = (
            '<img width="18px" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/icons/auto-refresh-navicon-light-155.png">'
                + ( messages.menuLabel_autoRefresh
                    + (( messages.menuLabel_autoRefresh.length + Math.max(messages.state_disabled.length, messages.state_enabled.length )) > 21 ? ''
                        : ( ' ' + ( config.arDisabled ? messages.state_disabled : messages.state_enabled ))))
                + '<label class="switch" ><input id="autoRefreshToggle" type="checkbox"'
                + ( !config.arDisabled ? 'checked="true"' : '' ) + '><span class="slider"></span></label>' )
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

})()
