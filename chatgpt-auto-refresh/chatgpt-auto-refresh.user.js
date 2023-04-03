// ==UserScript==
// @name                ChatGPT Auto Refresh ↻
// @version             2023.04.02.5
// @description         Keeps ChatGPT sessions fresh by auto-sending background requests, eliminating constsant network errors + Cloudflare checks
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @name:zh-CN          ChatGPT 自动刷新 ↻
// @name:zh-SG          ChatGPT 自动刷新 ↻
// @name:zh-TW          ChatGPT 自動刷新 ↻
// @name:zh-HK          ChatGPT 自動刷新 ↻
// @name:ja             ChatGPT 自動更新 ↻
// @name:ko             ChatGPT 자동 새로 고침 ↻
// @name:ru             Автоматическое Обновление ChatGPT ↻
// @name:de             Automatische ChatGPT-Aktualisierung ↻
// @name:es             Actualización Automática de ChatGPT ↻
// @name:fr             Actualisation Automatique de ChatGPT ↻
// @name:it             Aggiornamento Automatico ChatGPT ↻
// @name:fi             ChatGPT automaattinen päivitys ↻
// @description:zh-CN   通过自动发送后台请求保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查
// @description:zh-SG   通过自动发送后台请求保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查
// @description:zh-TW   通過自動發送後台請求保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查
// @description:zh-HK   通過自動發送後台請求保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查
// @description:ja      バックグラウンド リクエストを自動送信することで ChatGPT セッションを最新の状態に保ち、一定のネットワーク エラーを排除 + Cloudflare チェック
// @description:ko      백그라운드 요청을 자동 전송하여 ChatGPT 세션을 최신 상태로 유지하고 지속적인 네트워크 오류 + Cloudflare 검사를 제거합니다.
// @description:ru      Сохраняет актуальность сеансов ChatGPT, автоматически отправляя фоновые запросы, устраняя постоянные сетевые ошибки + проверки Cloudflare
// @description:de      Hält ChatGPT-Sitzungen frisch, indem automatisch Hintergrundanfragen gesendet werden, wodurch ständige Netzwerkfehler und Cloudflare-Prüfungen eliminiert werden
// @description:es      Mantiene las sesiones de ChatGPT actualizadas mediante el envío automático de solicitudes en segundo plano, lo que elimina los errores de red constantes y las comprobaciones de Cloudflare
// @description:fr      Maintient les sessions ChatGPT à jour en envoyant automatiquement des requêtes en arrière-plan, éliminant les erreurs réseau constantes + vérifications Cloudflare
// @description:it      Mantiene aggiornate le sessioni di ChatGPT inviando automaticamente le richieste in background, eliminando i continui errori di rete + i controlli di Cloudflare
// @description:sv      Håller ChatGPT-sessioner fräscha genom att automatiskt skicka bakgrundsförfrågningar, vilket eliminerar konstanta nätverksfel + Cloudflare-kontroller
// @description:fi      Pitää ChatGPT-istunnot tuoreina lähettämällä automaattisesti taustapyyntöjä, mikä eliminoi jatkuvat verkkovirheet + Cloudflare-tarkistukset
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
