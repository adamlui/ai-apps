// ==UserScript==
// @name                ChatGPT Auto Refresh ↻
// @version             2023.04.02.6
// @description         Keeps ChatGPT sessions fresh to eliminate constant network errors + Cloudflare checks
// @author              Adam Lui
// @namespace           https://github.com/adamlui
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
// @description:ar      يحافظ على جلسات ChatGPT جديدة للتخلص من أخطاء الشبكة المستمرة + فحوصات Cloudflare
// @description:bg      يحافظ على Поддържа сесиите на ChatGPT свежи, за да елиминира постоянните мрежови грешки + проверките на Cloudflare
// @description:bn      يحافظ ধ্রুবক নেটওয়ার্ক ত্রুটি + ক্লাউডফ্লেয়ার চেকগুলি দূর করতে ChatGPT সেশনগুলিকে সতেজ রাখে৷
// @description:cs      Udržuje relace ChatGPT čerstvé, aby se eliminovaly neustálé chyby sítě + kontroly Cloudflare
// @description:da      Holder ChatGPT-sessioner friske for at eliminere konstante netværksfejl + Cloudflare-tjek
// @description:de      Hält ChatGPT-Sitzungen frisch, um ständige Netzwerkfehler zu vermeiden + Cloudflare-Prüfungen
// @description:el      Διατηρεί φρέσκες τις συνεδρίες ChatGPT για την εξάλειψη συνεχών σφαλμάτων δικτύου + ελέγχους Cloudflare
// @description:eo      Tenas ChatGPT-sesiojn freŝaj por forigi konstantajn retajn erarojn + Cloudflare-kontrolojn
// @description:es      Mantiene las sesiones de ChatGPT actualizadas para eliminar errores de red constantes + verificaciones de Cloudflare
// @description:fi      Pitää ChatGPT-istunnot tuoreina ja eliminoi jatkuvat verkkovirheet + Cloudflare-tarkistukset
// @description:fr      Maintient les sessions ChatGPT à jour pour éliminer les erreurs réseau constantes + vérifications Cloudflare
// @description:fr-CA   Maintient les sessions ChatGPT à jour pour éliminer les erreurs réseau constantes + vérifications Cloudflare
// @description:gu      સતત નેટવર્ક ભૂલો + Cloudflare તપાસો દૂર કરવા માટે ChatGPT સત્રોને તાજા રાખે છે
// @description:hi      निरंतर नेटवर्क त्रुटियों को समाप्त करने के लिए ChatGPT सत्रों को ताजा रखता है + क्लाउडफ्लेयर चेक
// @description:hu      Frissen tartja a ChatGPT munkameneteket, hogy kiküszöbölje az állandó hálózati hibákat + Cloudflare ellenőrzéseket
// @description:in      Menjaga sesi ChatGPT tetap segar untuk menghilangkan kesalahan jaringan konstan + pemeriksaan Cloudflare
// @description:it      Mantiene aggiornate le sessioni ChatGPT per eliminare errori di rete costanti + controlli Cloudflare
// @description:iw      שומר על מפגשי ChatGPT טריים כדי למנוע שגיאות רשת קבועות + בדיקות Cloudflare
// @description:ja      ChatGPT セッションを最新の状態に保ち、一定のネットワーク エラーを排除 + Cloudflare チェック
// @description:ka      ინახავს ChatGPT სესიებს ახალი ქსელის მუდმივი შეცდომების აღმოსაფხვრელად + Cloudflare შემოწმებები
// @description:kn      ನಿರಂತರ ನೆಟ್‌ವರ್ಕ್ ದೋಷಗಳು + ಕ್ಲೌಡ್‌ಫ್ಲೇರ್ ಪರಿಶೀಲನೆಗಳನ್ನು ತೊಡೆದುಹಾಕಲು ChatGPT ಸೆಷನ್‌ಗಳನ್ನು ತಾಜಾವಾಗಿರಿಸುತ್ತದೆ
// @description:ko      지속적인 네트워크 오류 + Cloudflare 검사를 제거하기 위해 ChatGPT 세션을 최신 상태로 유지
// @description:ku      Danişînên ChatGPT nû digire da ku xeletiyên domdar ên torê + kontrolên Cloudflare ji holê rake
// @description:ml      നിരന്തരമായ നെറ്റ്‌വർക്ക് പിശകുകൾ + ക്ലൗഡ്ഫ്ലെയർ പരിശോധനകൾ ഇല്ലാതാക്കാൻ ChatGPT സെഷനുകൾ പുതുമയുള്ളതാക്കുന്നു
// @description:mr      सतत नेटवर्क त्रुटी दूर करण्यासाठी ChatGPT सत्र ताजे ठेवते + क्लाउडफ्लेअर तपासणी
// @description:ms      Memastikan sesi ChatGPT sentiasa segar untuk menghapuskan ralat rangkaian yang berterusan + pemeriksaan Cloudflare
// @description:my      စဉ်ဆက်မပြတ်ကွန်ရက်အမှားအယွင်းများ + Cloudflare စစ်ဆေးမှုများကိုဖယ်ရှားရန် ChatGPT စက်ရှင်များကို လတ်ဆတ်စေသည်။
// @description:nl      Houdt ChatGPT-sessies up-to-date om constante netwerkfouten te elimineren + Cloudflare-controles
// @description:no      Holder ChatGPT-økter ferske for å eliminere konstante nettverksfeil + Cloudflare-sjekker
// @description:or      ଲଗାତାର ନେଟୱର୍କ ତ୍ରୁଟି + କ୍ଲାଉଡ୍ ଫ୍ଲେର୍ ଯା check ୍ଚକୁ ଦୂର କରିବା ପାଇଁ ChatGPT ଅଧିବେଶନକୁ ସତେଜ ରଖେ |
// @description:pa      ਲਗਾਤਾਰ ਨੈੱਟਵਰਕ ਤਰੁਟੀਆਂ + Cloudflare ਜਾਂਚਾਂ ਨੂੰ ਖਤਮ ਕਰਨ ਲਈ ChatGPT ਸੈਸ਼ਨਾਂ ਨੂੰ ਤਾਜ਼ਾ ਰੱਖਦਾ ਹੈ
// @description:pl      Utrzymuje sesje ChatGPT na bieżąco, aby wyeliminować ciągłe błędy sieciowe + kontrole Cloudflare
// @description:pt      Mantém as sessões ChatGPT atualizadas para eliminar erros de rede constantes + verificações Cloudflare
// @description:pt-BR   Mantém as sessões ChatGPT atualizadas para eliminar erros de rede constantes + verificações Cloudflare
// @description:ro      Păstrează sesiunile ChatGPT proaspete pentru a elimina erorile constante de rețea + verificări Cloudflare
// @description:ru      Сохраняет актуальность сеансов ChatGPT для устранения постоянных сетевых ошибок + проверки Cloudflare
// @description:sk      Udržuje relácie ChatGPT čerstvé, aby sa eliminovali neustále chyby siete + kontroly Cloudflare
// @description:sr      Одржава сесије ЦхатГПТ свежим како би се елиминисале сталне мрежне грешке + Цлоудфларе провере
// @description:sv      Håller ChatGPT-sessioner fräscha för att eliminera konstanta nätverksfel + Cloudflare-kontroller
// @description:ta      நிலையான நெட்வொர்க் பிழைகள் + Cloudflare சோதனைகளை அகற்ற ChatGPT அமர்வுகளை புதியதாக வைத்திருக்கிறது
// @description:th      รักษาเซสชัน ChatGPT ให้ใหม่อยู่เสมอเพื่อกำจัดข้อผิดพลาดของเครือข่ายอย่างต่อเนื่อง + การตรวจสอบ Cloudflare
// @description:tr      Sürekli ağ hatalarını ve Cloudflare kontrollerini ortadan kaldırmak için ChatGPT oturumlarını taze tutar
// @description:ug      دائىملىق تور خاتالىقى + Cloudflare تەكشۈرۈشىنى تۈگىتىش ئۈچۈن ChatGPT 
// @description:uk      Зберігає актуальність сеансів ChatGPT для усунення постійних помилок мережі + перевірки Cloudflareيىغىنلىرىنى يېڭى ھالەتتە ساقلايدۇ
// @description:ur      نیٹ ورک کی مستقل خرابیوں + Cloudflare چیکس کو ختم کرنے کے لیے ChatGPT سیشنز کو تازہ رکھتا ہے۔
// @description:vi      Giữ cho các phiên ChatGPT luôn mới để loại bỏ lỗi mạng liên tục + kiểm tra Cloudflare
// @description:zh-CN   保持 ChatGPT 会话新鲜以消除持续的网络错误 + Cloudflare 检查
// @description:zh-HK   保持 ChatGPT 會話新鮮以消除持續的網絡錯誤 + Cloudflare 檢查
// @description:zh-SG   保持 ChatGPT 会话新鲜以消除持续的网络错误 + Cloudflare 检查
// @description:zh-TW   保持 ChatGPT 會話新鮮以消除持續的網絡錯誤 + Cloudflare 檢查
// @license             MIT
// @match               https://chat.openai.com/chat*
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
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @downloadURL         https://greasyfork.org/scripts/462422/code/chatgpt-auto-refresh.user.js
// @updateURL           https://greasyfork.org/scripts/462422/code/chatgpt-auto-refresh.meta.js
// @homepageURL         https://github.com/adamlui/chatgpt-auto-refresh
// @supportURL          https://github.com/adamlui/chatgpt-auto-refresh/issues
// ==/UserScript==

// NOTE: This script uses code from the powerful chatgpt.js library @ https://chatgptjs.org (c) 2023 Adam Lui & 冯不游 under the MIT license.

(function() {

    // Import chatgpt.js functions

    unsafeWindow.chatgptNotifyProps = { // NOTE: `unsafeWindow` is safe! `@match` is limited in scope.
        // (Only if `@match` is highly inclusive, a malicious website could make userscripts do bad things.)
        // Because this script uses GM methods (which isolates script in sandbox) `unsafeWindow` is
        // required to create global object for notification positioning across scripts (but is safe!)
        quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }
    };
    var chatGPTsessURL = 'https://chat.openai.com/api/auth/session';
    var autoRefreshTimer = 60; // secs between session auto-refreshes
    var chatgpt = {

        activateAutoRefresh: function() {
            if (!this.activateAutoRefresh.intervalId) {
                console.info('↻ ChatGPT >> Auto refresh activated');
                this.activateAutoRefresh.intervalId = setInterval(function() {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', chatGPTsessURL);
                    xhr.send(); console.info('ChatGPT session refreshed');
                }, autoRefreshTimer * 1000); // refresh every pre-set interval
            } else { console.info('↻ ChatGPT >> Auto refresh already active!'); }
        },

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
            unsafeWindow.chatgptNotifyProps.quadrants[notificationDiv.quadrant].push(notificationDiv); // store div in global object

            // Position notification (defaults to top-right)
            notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
            notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

            // Reposition old notifications
            var thisQuadrantDivs = unsafeWindow.chatgptNotifyProps.quadrants[notificationDiv.quadrant];
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
        },

        toggleAutoRefresh: function() {
            if (!this.activateAutoRefresh.intervalId) {
                console.info('↻ ChatGPT >> Auto refresh activated');
                this.activateAutoRefresh.intervalId = setInterval(function() {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', chatGPTsessURL);
                    xhr.send(); console.info('↻ ChatGPT >> ChatGPT session refreshed');
                }, autoRefreshTimer * 1000); // refresh every pre-set interval
            } else {
                clearInterval(this.activateAutoRefresh.intervalId);
                this.activateAutoRefresh.intervalId = null;
                console.info('↻ ChatGPT >> Auto refresh de-activated');
            }
        }
    };

    // Define script functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order
        var stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF']
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle auto-refresh
        var arLabel = stateSymbol[+config.arDisabled] + ' Auto-Refresh ↻ '
                    + stateSeparator + stateWord[+config.arDisabled]
        menuID.push(GM_registerMenuCommand(arLabel, function() {
            chatgpt.toggleAutoRefresh()
            saveSetting('arDisabled', !config.arDisabled)
            if (!config.notifHidden) chatgpt.notify('Auto-Refresh: ' + stateWord[+config.arDisabled])
            for (var i = 0 ; i < menuID.length ; i++) GM_unregisterMenuCommand(menuID[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' Mode Notifications'
                    + stateSeparator + stateWord[+config.notifHidden]
        menuID.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify('Mode Notifications: ' + stateWord[+config.notifHidden])
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

    // Run main routine

    var config = {}, configKeyPrefix = 'chatGPTar_'
    loadSetting('arDisabled', 'notifHidden')
    registerMenu() // create browser toolbar menu
    if (!config.arDisabled) chatgpt.activateAutoRefresh()
    if (!config.notifHidden && document.title === 'New chat') {
        chatgpt.notify('Auto-Refresh: ' + (config.arDisabled ? 'OFF' : 'ON')) }

})()
