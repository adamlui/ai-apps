/* This library is a condensed version of chatgpt.js */
/* (c) 2023 Adam Lui, chatgpt.js & contributors under the MIT license. */
/* Source: https://github.com/chatgptjs/chatgpt.js */

var notifyProps = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
localStorage.notifyProps = JSON.stringify(notifyProps);

var navLinkLabels = {
    clearChats: 'Clear conversations',
    confirmClearChats: 'Confirm clear conversations',
    newChat: 'New chat'
};

var chatgpt = {

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

    startNewChat: function() {
        for (var navLink of document.querySelectorAll('nav > a')) {
            if (navLink.text.includes(navLinkLabels.newChat)) {
                navLink.click(); return;
    }}}

};

export { chatgpt }
