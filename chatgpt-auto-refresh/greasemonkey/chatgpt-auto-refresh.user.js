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
// @description         *SAFELY* keeps ChatGPT sessions fresh, eliminating constant network errors + Cloudflare checks (all from the background!)
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
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @version             2023.6.22.3
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
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@5eed48d721158fc3800c23bc02b5dc0d3959b472/dist/chatgpt-1.10.1.min.js
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.xmlHttpRequest
// @noframes
// @updateURL           https://greasyfork.org/scripts/462422/code/chatgpt-auto-refresh.meta.js
// @downloadURL         https://greasyfork.org/scripts/462422/code/chatgpt-auto-refresh.user.js
// @homepageURL         https://github.com/adamlui/chatgpt-auto-refresh
// @supportURL          https://github.com/adamlui/chatgpt-auto-refresh/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {

    // Init config
    const config = { prefix: 'chatGPTar', appSymbol: '↻', userLanguage: navigator.languages[0] || navigator.language || '',
                     ghHostDir: 'https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/',
                     updateURL: 'https://greasyfork.org/scripts/462422/code/chatgpt-auto-refresh.meta.js' }
    loadSetting('arDisabled', 'lastCheckTime', 'notifHidden', 'refreshInterval', 'skipNextUpdate', 'skippedVer', 'toggleHidden')
    if (!config.refreshInterval) saveSetting('refreshInterval', 30) // init refresh interval to 30 secs if unset

    // Define messages
    const msgsLoaded = new Promise(resolve => {
        const msgHostDir = config.ghHostDir + 'greasemonkey/_locales/'
        const msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        let msgHref = msgHostDir + msgLocaleDir + 'messages.json' // build src link
        let msgXHRtries = 0
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

    // Init/register menu
    let menuIDs = [], state = { symbol: ['✔️', '❌'], word: ['ON', 'OFF'],
                                separator: getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': ' }
    await chatgpt.isLoaded() ; registerMenu() // create browser toolbar menu

    // Check for updates (1x/72h)
    if (!config.lastCheckTime || Date.now() - config.lastCheckTime > 172800000) checkForUpdates()

    // Stylize toggle switch
    const switchStyle = document.createElement('style')
    switchStyle.innerText = `/* Stylize switch */
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

    // Create toggle label, add styles/classes/listener/HTML
    const toggleLabel = document.createElement('div') // create label div
    toggleLabel.style.maxHeight = '44px' // prevent flex overgrowth
    toggleLabel.style.margin = '2px 0' // add v-margins
    toggleLabel.style.userSelect = 'none' // prevent highlighting
    for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) { // inspect sidebar for classes to borrow
        if (navLink.text.match(/(new|clear) chat/i)) { // focus on new/clear chat button
            toggleLabel.setAttribute('class', navLink.classList) // borrow link classes
            navLink.parentNode.style.margin = '2px 0' // add v-margins
            break // stop looping since class assignment is done
    }}
    toggleLabel.addEventListener('click', () => { // add listener to toggle switch/label/config/menu/auto-refresh
        const toggleInput = document.querySelector('#arToggleInput')
        toggleInput.checked = !toggleInput.checked
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        config.arDisabled = !toggleInput.checked
        for (const id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        if (!config.arDisabled && !chatgpt.autoRefresh.isActive) {
            chatgpt.autoRefresh.activate(config.refreshInterval)
            if (!config.notifHidden) notify(messages.menuLabel_autoRefresh + ': ON')
        } else if (config.arDisabled && chatgpt.autoRefresh.isActive) {
            chatgpt.autoRefresh.deactivate()
            if (!config.notifHidden) notify(messages.menuLabel_autoRefresh + ': OFF')
        } saveSetting('arDisabled', config.arDisabled)
    })
    updateToggleHTML()

    // Insert full toggle on page load + during navigation // 在导航期间插入页面加载 + 的完整切换
    insertToggle()
    const nodeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                insertToggle()
    }})}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Activate auto-refresh on first visit if enabled
    if (!config.arDisabled) {
        chatgpt.autoRefresh.activate(config.refreshInterval)
        if (!config.notifHidden) notify(messages.menuLabel_autoRefresh + ': ON')
    }

    // Define SCRIPT functions

    function registerMenu() {
        menuIDs = [] // empty to store newly registered cmds for removal while preserving order

        // Add command to toggle auto-refresh
        const arLabel = state.symbol[+config.arDisabled] + ' ' + messages.menuLabel_autoRefresh + ' ↻ '
                      + state.separator + state.word[+config.arDisabled]
        menuIDs.push(GM_registerMenuCommand(arLabel, () => {
            document.querySelector('#arToggleLabel').click()
        }))

        // Add command to toggle visibility of toggle
        const tvLabel = state.symbol[+config.toggleHidden] + ' ' + messages.menuLabel_toggleVis
                      + state.separator + state.word[+config.toggleHidden]
        menuIDs.push(GM_registerMenuCommand(tvLabel, () => {
            saveSetting('toggleHidden', !config.toggleHidden)
            toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex' // toggle visibility
            if (!config.notifHidden) {
                notify(messages.menuLabel_toggleVis + ': '+ state.word[+config.toggleHidden])
            } for (const id of menuIDs) GM_unregisterMenuCommand(id) ; registerMenu() // refresh menu
        }))

        // Add command to show notifications when switching modes
        const mnLabel = state.symbol[+config.notifHidden] + ' ' + messages.menuLabel_modeNotifs
                      + state.separator + state.word[+config.notifHidden]
        menuIDs.push(GM_registerMenuCommand(mnLabel, () => {
            saveSetting('notifHidden', !config.notifHidden)
            notify(messages.menuLabel_modeNotifs + ': ' + state.word[+config.notifHidden])
            for (let i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))

        // Add command to change refresh interval
        const riLabel = '⌚ ' + messages.menuLabel_refreshInt + ' ' + state.separator + config.refreshInterval + 's'
        menuIDs.push(GM_registerMenuCommand(riLabel, () => {
            while (true) {
                const refreshInterval = prompt(`${ messages.prompt_updateInt }:`, config.refreshInterval)
                if (refreshInterval === null) break // user cancelled so do nothing
                else if (!isNaN(parseInt(refreshInterval)) && parseInt(refreshInterval) > 0) { // valid int set
                    saveSetting('refreshInterval', parseInt(refreshInterval))
                    if (chatgpt.autoRefresh.isActive) { // reset running auto-refresh
                        chatgpt.autoRefresh.deactivate()
                        chatgpt.autoRefresh.activate(refreshInterval)
                    }
                    for (let i = 0 ; i < menuIDs.length ; i++) GM_unregisterMenuCommand(menuIDs[i]) // remove all cmd's
                    registerMenu() // serve fresh one
                    const minInterval = Math.max(2, config.refreshInterval - 10)
                    const maxInterval = config.refreshInterval + 10
                    alert('Interval updated!', `${ messages.alert_intUpdated } ${ minInterval }–${ maxInterval } secs`)
                    break
        }}}))

        // Add command to check for updates
        const ucLabel = '🚀 Check for Updates'
        menuIDs.push(GM_registerMenuCommand(ucLabel, () => { checkForUpdates.fromMenu = true ; checkForUpdates() }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function loadSetting(...keys) {
        keys.forEach(key => {
            config[key] = GM_getValue(config.prefix + '_' + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(config.prefix + '_' + key, value) // save to browser
        config[key] = value // and memory
    }

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration, shadow ? shadow : ( chatgpt.isDarkMode() ? '' : 'shadow')) }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function checkForUpdates() {

        // Fetch latest meta
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({ method: 'GET', url: config.updateURL + '?t=' + Date.now(), headers: { 'Cache-Control': 'no-cache' },
            onload: (response) => { saveSetting('lastCheckTime', Date.now())

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
                            `An update to ${ messages.appName } (v${ latestVer }) is available!   `
                                + `<a target="_blank" href="https://github.com/adamlui/chatgpt-auto-refresh/commits/main/greasemonkey/chatgpt-auto-refresh.user.js" style="font-size: 0.7rem">View changes</a>`,
                            function update() { // button
                                window.open(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now(), '_blank')
                                location.reload() },
                            !checkForUpdates.fromMenu ? // checkbox if auto-alert
                                function dontShowAgainUntilNextUpdate() {
                                    saveSetting('skipNextUpdate', !config.skipNextUpdate)
                                    saveSetting('skippedVer', config.skipNextUpdate ? latestVer : false) }
                                : ''
                        )
                        return
                }}

                if (checkForUpdates.fromMenu) // alert to no update found
                    alert('Up-to-date!', `${ messages.appName } (v${ currentVer }) is up-to-date!`)
    }})}

    // Define TOGGLE functions

    function insertToggle() {
        const chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]') || {}
        const firstButton = chatHistoryNav.querySelector('a') || {}
        if (chatgpt.history.isOff()) // hide enable-history spam div
            try { firstButton.parentNode.nextElementSibling.style.display = 'none' } catch (error) {}
        if (!chatHistoryNav.contains(toggleLabel)) // insert toggle
            try { chatHistoryNav.insertBefore(toggleLabel, firstButton.parentNode) } catch (error) {}
    }

    function updateToggleHTML() {
        while (toggleLabel.firstChild) toggleLabel.firstChild.remove() // clear old content

        // Create elements
        const navicon = document.createElement('img') ; navicon.width = 18
        navicon.src = config.ghHostDir + 'media/images/icons/auto-refresh-navicon-light-155.png'
        const label = document.createElement('label') ; label.className = 'switch' ; label.id = 'arToggleLabel'
        const labelText = document.createTextNode(messages.menuLabel_autoRefresh + ' '
            + ( messages['state_' + ( config.arDisabled ? 'disabled' : 'enabled' )]))
        const input = document.createElement('input') ; input.id = 'arToggleInput'
        input.type = 'checkbox' ; input.disabled = true ; input.checked = !config.arDisabled
        const span = document.createElement('span') ; span.className = 'slider'

        // Append elements
        label.appendChild(input) ; label.appendChild(span)
        toggleLabel.appendChild(navicon) ; toggleLabel.appendChild(label) ; toggleLabel.appendChild(labelText)

        // Update visibility
        toggleLabel.style.display = config.toggleHidden ? 'none' : 'flex'
    }

})()
