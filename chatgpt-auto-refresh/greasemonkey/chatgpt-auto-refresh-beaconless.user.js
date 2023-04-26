// ==UserScript==
// @name                ChatGPT Auto Refresh ↻ Beaconless
// @version             2023.4.25
// @description         *SAFELY* keeps ChatGPT sessions fresh, eliminating constant network errors + Cloudflare checks (all from the background!)
// @author              Adam Lui
// @namespace           https://github.com/adamlui
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
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @noframes
// @downloadURL         https://greasyfork.org/scripts/462422/code/chatgpt-auto-refresh.user.js
// @updateURL           https://greasyfork.org/scripts/462422/code/chatgpt-auto-refresh.meta.js
// @homepageURL         https://github.com/adamlui/chatgpt-auto-refresh
// @supportURL          https://github.com/adamlui/chatgpt-auto-refresh/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 Adam Lui, chatgpt.js & contributors under the MIT license.

(function() {

    // Import chatgpt.js condensed lib

    var notifyProps = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
    localStorage.notifyProps = JSON.stringify(notifyProps);

    var chatgpt = {

        autoRefresh: {
            activate: function(interval) {
                if (this.isActive) { // already running, do nothing
                    console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh already active!'); return; }

                var autoRefresh = this;

                // Run main activate routine
                this.toggle.refreshFrame();
                scheduleRefreshes( interval ? parseInt(interval) : 30 );
                console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh activated');

                function scheduleRefreshes(interval) {
                    var randomDelay = Math.max(2, Math.floor(Math.random() * 21 - 10)); // set random delay up to ±10 secs
                    autoRefresh.isActive = setTimeout(function() {
                        var refreshFrame = document.querySelector('#refresh-frame');
                        var manifestScript = document.querySelector('script[src*="_ssgManifest.js"]');
                        refreshFrame.src = manifestScript.src + '?' + Date.now();
                        console.info('↻ ChatGPT >> [' + autoRefresh.nowTimeStamp() + '] ChatGPT session refreshed');
                        scheduleRefreshes(interval);
                    }, (interval + randomDelay) * 1000);
                }
            },

            deactivate: function() {
                if (this.isActive) {
                    this.toggle.refreshFrame();
                    clearTimeout(this.isActive); this.isActive = null;
                    console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh de-activated');
                } else { console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh already inactive!'); }
            },

            nowTimeStamp: function() {
                var now = new Date();
                var hours = now.getHours() % 12 || 12; // Convert to 12-hour format
                var minutes = now.getMinutes(); var seconds = now.getSeconds();
                if (minutes < 10) minutes = '0' + minutes; if (seconds < 10) seconds = '0' + seconds;
                var meridiem = now.getHours() < 12 ? 'AM' : 'PM';
                return hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
            },

            toggle: {

                refreshFrame: function() {
                    var refreshFrame = document.querySelector('#refresh-frame');
                    if (refreshFrame) refreshFrame.remove();
                    else {
                        refreshFrame = Object.assign(document.createElement('iframe'),
                            { id: 'refresh-frame', style: 'display: none' });
                        document.head.prepend(refreshFrame);
                    }
                }
            }
        },

        isDarkMode: function() { return document.documentElement.classList.contains('dark'); },

        notify: function(msg, position, notifDuration, shadow) {
            notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
            var fadeDuration = 0.6; // sec duration of fade-out
            var vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

            // Make/stylize/insert div
            var notificationDiv = document.createElement('div'); // make div
            notificationDiv.id = Math.floor(Math.random() * 1000000) + Date.now();
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

            // Store div
            notifyProps = JSON.parse(localStorage.notifyProps);
            notifyProps.quadrants[notificationDiv.quadrant].push(notificationDiv.id);
            localStorage.notifyProps = JSON.stringify(notifyProps);

            // Position notification (defaults to top-right)
            notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
            notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

            // Reposition old notifications
            var thisQuadrantDivIDs = notifyProps.quadrants[notificationDiv.quadrant];
            if (thisQuadrantDivIDs.length > 1) {
                var divsToMove = thisQuadrantDivIDs.slice(0, -1); // exclude new div
                for (var j = 0; j < divsToMove.length; j++) {
                    var oldDiv = document.getElementById(divsToMove[j]);
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
                notificationDiv.remove(); // remove from DOM
                notifyProps = JSON.parse(localStorage.notifyProps);
                notifyProps.quadrants[notificationDiv.quadrant].shift(); // + memory
                localStorage.notifyProps = JSON.stringify(notifyProps); // + storage
                notificationDiv.destroyTimer = null; // prevent memory leaks
            }, Math.max(fadeDuration, notifDuration) * 1000); // ...after notification hid
        },

    };

    // Define SCRIPT functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order
        var stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF']
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle auto-refresh
        var arLabel = stateSymbol[+config.arDisabled] + ' Auto-Refresh ↻ '
                    + stateSeparator + stateWord[+config.arDisabled]
        menuID.push(GM_registerMenuCommand(arLabel, function() {
            if (config.arDisabled) chatgpt.autoRefresh.activate(config.refreshInterval)
            else chatgpt.autoRefresh.deactivate()
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

        // Add command to change refresh interval
        menuID.push(GM_registerMenuCommand('⌚ Change Refresh Interval (' + config.refreshInterval + 's)', function() {
            while (true) {
                var refreshInterval = prompt("Update refresh interval (in secs):", config.refreshInterval)
                if (refreshInterval === null) break // user cancelled so do nothing
                else if (!isNaN(parseInt(refreshInterval)) && parseInt(refreshInterval) > 0) { // valid int set
                    saveSetting('refreshInterval', parseInt(refreshInterval))
                    if (chatgpt.autoRefresh.isActive) { // reset running auto-refresh
                        chatgpt.autoRefresh.deactivate()
                        chatgpt.autoRefresh.activate(refreshInterval)
                    }
                    for (var i = 0 ; i < menuID.length ; i++) GM_unregisterMenuCommand(menuID[i]) // remove all cmd's
                    registerMenu() // serve fresh one
                    var minInterval = Math.max(2, config.refreshInterval - 10)
                    var maxInterval = config.refreshInterval + 10
                    alert('ChatGPT session will auto-refresh every ' + minInterval + ' to ' + maxInterval + ' secs')
                    break
        }}}))
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

    // Run MAIN routine

    // Initialize variables/settings/menu
    var config = {}, configKeyPrefix = 'chatGPTar_'
    loadSetting('arDisabled', 'notifHidden', 'refreshInterval')
    if (!config.refreshInterval) saveSetting('refreshInterval', 30) // init refresh interval to 30 secs if unset
    registerMenu() // create browser toolbar menu

    // Activate auto-refresh if enabled
    if (!config.arDisabled) chatgpt.autoRefresh.activate(config.refreshInterval)

    // Show status notification on first visit if enabled
    if (!config.notifHidden && document.title === 'New chat') {
        chatgpt.notify('Auto-Refresh: ' + (config.arDisabled ? 'OFF' : 'ON'), '', '', chatgpt.isDarkMode() ? '' : 'shadow') }

})()
