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
// @name:ug             ChatGPT ئاپتوماتىك يېڭىلاش ↻
// @name:uk             Автоматичне оновлення ChatGPT ↻
// @name:ur             چیٹ جی پی ٹی آٹو ریفریش ↻
// @name:vi             Tự động làm mới ChatGPT ↻
// @name:zh-CN          ChatGPT 自动刷新 ↻
// @name:zh-HK          ChatGPT 自動刷新 ↻
// @name:zh-SG          ChatGPT 自动刷新 ↻
// @name:zh-TW          ChatGPT 自動刷新 ↻
// @version             2023.04.22.1
// @description         Keeps ChatGPT sessions fresh, eliminating constant network errors + Cloudflare checks (all from the background!)
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description:ar      يحافظ على جلسات ChatGPT جديدة ، مما يقلل من أخطاء الشبكة المستمرة + فحوصات Cloudflare (كل ذلك من الخلفية!)
// @description:bg      Поддържа сесиите на ChatGPT свежи, елиминирайки постоянни мрежови грешки + проверки на Cloudflare (всички от заден план!)
// @description:bn      ChatGPT সেশনগুলিকে সতেজ রাখে, ধ্রুবক নেটওয়ার্ক ত্রুটিগুলি দূর করে + ক্লাউডফ্লেয়ার চেক (সবই ব্যাকগ্রাউন্ড থেকে!)
// @description:cs      Udržuje relace ChatGPT čerstvé, eliminuje neustálé chyby sítě + kontroly Cloudflare (vše na pozadí!)
// @description:da      Holder ChatGPT-sessioner friske og eliminerer konstante netværksfejl + Cloudflare-tjek (alt sammen fra baggrunden!)
// @description:de      Hält ChatGPT-Sitzungen frisch, eliminiert ständige Netzwerkfehler + Cloudflare-Prüfungen (alles aus dem Hintergrund!)
// @description:el      Διατηρεί φρέσκες τις συνεδρίες ChatGPT, εξαλείφοντας τα συνεχή σφάλματα δικτύου + ελέγχους Cloudflare (όλα από το παρασκήνιο!)
// @description:eo      Tenas ChatGPT-sesiojn freŝaj, forigante konstantajn retajn erarojn + Cloudflare-kontroloj (ĉio el la fono!)
// @description:es      Mantiene las sesiones de ChatGPT actualizadas, lo que elimina los errores de red constantes + las comprobaciones de Cloudflare (¡todo en segundo plano!)
// @description:fi      Pitää ChatGPT-istunnot tuoreina, eliminoiden jatkuvat verkkovirheet + Cloudflare-tarkistukset (kaikki taustalta!)
// @description:fr      Maintient les sessions ChatGPT à jour, éliminant les erreurs réseau constantes + vérifications Cloudflare (le tout en arrière-plan!)
// @description:fr-CA   Maintient les sessions ChatGPT à jour, éliminant les erreurs réseau constantes + vérifications Cloudflare (le tout en arrière-plan!)
// @description:gu      ChatGPT સત્રોને તાજા રાખે છે, સતત નેટવર્ક ભૂલોને દૂર કરે છે + Cloudflare તપાસો (બધું પૃષ્ઠભૂમિમાંથી!)
// @description:hi      चैटजीपीटी सत्रों को ताजा रखता है, लगातार नेटवर्क त्रुटियों को समाप्त करता है + क्लाउडफ्लेयर चेक (सभी पृष्ठभूमि से!)
// @description:hu      Frissen tartja a ChatGPT munkameneteket, kiküszöbölve az állandó hálózati hibákat + Cloudflare ellenőrzéseket (mind a háttérből!)
// @description:in      Menjaga sesi ChatGPT tetap segar, menghilangkan kesalahan jaringan konstan + pemeriksaan Cloudflare (semua dari latar belakang!)
// @description:it      Mantiene fresche le sessioni di ChatGPT, eliminando i continui errori di rete + i controlli di Cloudflare (tutto in background!)
// @description:iw      שומר על מפגשי ChatGPT טריים, מבטל שגיאות רשת קבועות + בדיקות Cloudflare (הכל מהרקע!)
// @description:ja      ChatGPT セッションを最新の状態に保ち、一定のネットワーク エラーを排除 + Cloudflare チェック (すべてバックグラウンドから!)
// @description:ka      ინახავს ChatGPT სესიებს ახალი, აღმოფხვრის ქსელის მუდმივ შეცდომებს + Cloudflare-ის შემოწმებას (ყველაფერი ფონიდან!)
// @description:kn      ಚಾಟ್‌ಜಿಪಿಟಿ ಸೆಷನ್‌ಗಳನ್ನು ತಾಜಾವಾಗಿರಿಸುತ್ತದೆ, ನಿರಂತರ ನೆಟ್‌ವರ್ಕ್ ದೋಷಗಳನ್ನು ನಿವಾರಿಸುತ್ತದೆ + ಕ್ಲೌಡ್‌ಫ್ಲೇರ್ ಪರಿಶೀಲನೆಗಳು (ಎಲ್ಲವೂ ಹಿನ್ನೆಲೆಯಿಂದ!)
// @description:ko      ChatGPT 세션을 최신 상태로 유지하여 지속적인 네트워크 오류 제거 + Cloudflare 검사(모두 백그라운드에서!)
// @description:ku      Danişînên ChatGPT nû digire, xeletiyên torê yên domdar ji holê radike + kontrolên Cloudflare (hemû ji paşperdeyê!)
// @description:ml      ChatGPT സെഷനുകൾ പുതുമയുള്ളതാക്കുന്നു, നിരന്തരമായ നെറ്റ്‌വർക്ക് പിശകുകൾ ഇല്ലാതാക്കുന്നു + ക്ലൗഡ്ഫ്ലെയർ പരിശോധനകൾ (എല്ലാം പശ്ചാത്തലത്തിൽ നിന്ന്!)
// @description:mr      सतत नेटवर्क त्रुटी दूर करून ChatGPT सत्रे ताजी ठेवते + क्लाउडफ्लेअर तपासणी (सर्व पार्श्वभूमीतून!)
// @description:ms      Memastikan sesi ChatGPT sentiasa segar, menghapuskan ralat rangkaian berterusan + pemeriksaan Cloudflare (semua dari latar belakang!)
// @description:my      ChatGPT စက်ရှင်များကို လတ်ဆတ်စေကာ စဉ်ဆက်မပြတ် ကွန်ရက်အမှားအယွင်းများကို ဖယ်ရှားပေးသည် + Cloudflare စစ်ဆေးမှုများ (အားလုံးသည် နောက်ခံမှ!)
// @description:nl      Houdt ChatGPT-sessies up-to-date en elimineert constante netwerkfouten + Cloudflare-controles (allemaal vanaf de achtergrond!)
// @description:no      Holder ChatGPT-økter ferske, eliminerer konstante nettverksfeil + Cloudflare-sjekker (alt fra bakgrunnen!)
// @description:or      ଚାଟ୍ ଜିପିଟି ଅଧିବେଶନଗୁଡ଼ିକୁ ସତେଜ ରଖେ, କ୍ରମାଗତ ନେଟୱାର୍କ ତ୍ରୁଟି + କ୍ଲାଉଡ୍ ଫ୍ଲାର୍ ଚେକ୍ (ସମସ୍ତ ପୃଷ୍ଠଭୂମିରୁ!)
// @description:pa      ChatGPT ਸੈਸ਼ਨਾਂ ਨੂੰ ਤਾਜ਼ਾ ਰੱਖਦਾ ਹੈ, ਲਗਾਤਾਰ ਨੈੱਟਵਰਕ ਤਰੁਟੀਆਂ ਨੂੰ ਖਤਮ ਕਰਦਾ ਹੈ + Cloudflare ਜਾਂਚਾਂ (ਸਭ ਬੈਕਗ੍ਰਾਊਂਡ ਤੋਂ!)
// @description:pl      Utrzymuje świeżość sesji ChatGPT, eliminując ciągłe błędy sieciowe + kontrole Cloudflare (wszystko w tle!)
// @description:pt      Mantém as sessões ChatGPT atualizadas, eliminando erros constantes de rede + verificações Cloudflare (tudo em segundo plano!)
// @description:pt-BR   Mantém as sessões ChatGPT atualizadas, eliminando erros constantes de rede + verificações Cloudflare (tudo em segundo plano!)
// @description:ro      Păstrează sesiunile ChatGPT proaspete, eliminând erorile constante de rețea + verificări Cloudflare (toate din fundal!)
// @description:ru      Поддерживает актуальность сеансов ChatGPT, устраняя постоянные сетевые ошибки + проверки Cloudflare (все в фоновом режиме!)
// @description:sk      Udržuje relácie ChatGPT čerstvé, eliminuje neustále chyby siete + kontroly Cloudflare (všetko na pozadí!)
// @description:sr      Одржава сесије ЦхатГПТ свежим, елиминишући сталне мрежне грешке + Цлоудфларе провере (све из позадине!)
// @description:sv      Håller ChatGPT-sessioner fräscha, eliminerar konstant nätverksfel + Cloudflare-kontroller (alla från bakgrunden!)
// @description:ta      ChatGPT அமர்வுகளை புதியதாக வைத்திருக்கும், நிலையான நெட்வொர்க் பிழைகள் + Cloudflare சோதனைகள் (அனைத்தும் பின்புலத்திலிருந்து!)
// @description:th      รักษาเซสชัน ChatGPT ให้สดใหม่ กำจัดข้อผิดพลาดของเครือข่ายอย่างต่อเนื่อง + ตรวจสอบ Cloudflare (ทั้งหมดจากเบื้องหลัง!)
// @description:tr      ChatGPT oturumlarını taze tutar, sürekli ağ hatalarını ve Cloudflare kontrollerini (tamamı arka planda!) ortadan kaldırır.
// @description:ug      ChatGPT يىغىنلىرىنى يېڭى ھالەتتە ساقلايدۇ ، دائىملىق تور خاتالىقى + Cloudflare تەكشۈرۈشىنى يوقىتىدۇ (ھەممىسى ئارقا كۆرۈنۈشتىن!)
// @description:uk      Підтримує сеанси ChatGPT свіжими, усуваючи постійні помилки мережі + перевірки Cloudflare (усе у фоновому режимі!)
// @description:ur      نیٹ ورک کی مستقل خرابیوں کو ختم کرتے ہوئے چیٹ جی پی ٹی سیشنز کو تازہ رکھتا ہے + کلاؤڈ فلیئر چیکس (سب کچھ پس منظر سے!)
// @description:vi      Giữ cho các phiên ChatGPT luôn mới, loại bỏ các lỗi mạng liên tục + kiểm tra Cloudflare (tất cả từ nền!)
// @description:zh-CN   保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查（全部来自后台！）
// @description:zh-HK   保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查（全部来自后台！）
// @description:zh-SG   保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查（全部來自後台！）
// @description:zh-TW   保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查（全部來自後台！）
// @license             MIT
// @match               https://chat.openai.com/*
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          qq
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @require             https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@6aaf7aaa199582b9cde757a06a99c68abca9f928/dist/chatgpt-1.4.1.min.js
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @noframes
// @homepageURL         https://github.com/adamlui/chatgpt-auto-refresh
// @supportURL          https://github.com/adamlui/chatgpt-auto-refresh/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 Adam Lui, chatgpt.js & contributors under the MIT license.

(function() {

    // Initialize variables/settings/menu
    var config = {}, configKeyPrefix = 'chatGPTar_'
    var chatGPTsessURL = 'https://chat.openai.com/api/auth/session'
    var refreshInterval = 30 // secs between refreshes
    loadSetting('arDisabled', 'notifHidden')
    registerMenu() // create browser toolbar menu

    // Activate auto-refresh if enabled
    if (!config.arDisabled) chatgpt.autoRefresh.activate(refreshInterval)

    // Show status notification on first visit if enabled
    if (!config.notifHidden && document.title === 'New chat') {
        chatgpt.notify('Auto-Refresh: ' + (config.arDisabled ? 'OFF' : 'ON'), '', '', chatgpt.isDarkMode() ? '' : 'shadow') }

    // Functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order
        var stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF']
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle auto-refresh
        var arLabel = stateSymbol[+config.arDisabled] + ' Auto-Refresh ↻ '
                    + stateSeparator + stateWord[+config.arDisabled]
        menuID.push(GM_registerMenuCommand(arLabel, function() {
            if (config.arDisabled) chatgpt.autoRefresh.activate(15)
            else chatgpt.autoRefresh.deactivate(15)
            saveSetting('arDisabled', !config.arDisabled)
            if (!config.notifHidden) chatgpt.notify('Auto-Refresh: ' + stateWord[+config.arDisabled], '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var i = 0 ; i < menuID.length ; i++) GM_unregisterMenuCommand(menuID[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' Mode Notifications'
                    + stateSeparator + stateWord[+config.notifHidden]
        menuID.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify('Mode Notifications: ' + stateWord[+config.notifHidden], '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var i = 0 ; i < menuID.length ; i++) GM_unregisterMenuCommand(menuID[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return "other" }}

    function loadSetting() {
        var keys = [].slice.call(arguments)
        keys.forEach(function(key) {
            config[key] = GM_getValue(configKeyPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configKeyPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

})()
