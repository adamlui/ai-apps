// This library is a condensed version of chatgpt.js v1.10.3
// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js
// Latest minified release: https://code.chatgptjs.org/chatgpt-latest.min.js

var alertProps = { queue: [] };
var notifyProps = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
localStorage.alertProps = JSON.stringify(alertProps);
localStorage.notifyProps = JSON.stringify(notifyProps);

var chatgpt = {

    alert: function(title, msg, btns, checkbox, width) {
    // [ title/msg = strings, btns = [named functions], checkbox = named function, width (px) = int ] = optional
    // * Spaces are inserted into button labels by parsing function names in camel/kebab/snake case

        // Create modal parent/children elements
        var modalContainer = document.createElement('div');
        modalContainer.id = Math.floor(Math.random() * 1000000) + Date.now();
        modalContainer.classList.add('chatgpt-modal'); // add class to main div
        var modal = document.createElement('div');
        var modalTitle = document.createElement('h2');
        var modalMessage = document.createElement('p');

        // Create/append style if necessary
        if (!document.querySelector('#chatgpt-alert-style')) {
            var scheme = chatgpt.isDarkMode() ? 'dark' : 'light';
            var modalStyle = document.createElement('style');
            modalStyle.id = 'chatgpt-alert-style';
            modalStyle.innerText = (

                // Background styles
                '.chatgpt-modal {' 
                    + 'position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ;' // expand to full view-port
                    + 'background-color: rgba(67, 70, 72, 0.75) ;' // dim bg
                    + 'display: flex ; justify-content: center ; align-items: center ; z-index: 9999 }' // align

                // Alert styles
                + '.chatgpt-modal > div {'
                    + `background-color: ${ scheme == 'dark' ? 'black' : 'white' } ;`
                    + `max-width: ${ width ? width : 454 }px ;`
                    + 'padding: 20px ; margin: 12px 23px ; border-radius: 5px ; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) }'
                + '.chatgpt-modal h2 { margin-bottom: 9px }'
                + `.chatgpt-modal a { color: ${ scheme == 'dark' ? '#00cfff' : '#1e9ebb' }}`

                // Button styles
                + '.modal-buttons { display: flex ; justify-content: flex-end ; margin: 20px -5px -3px 0 }'
                + '.chatgpt-modal button {'
                    + 'margin-left: 10px ; padding: 4px 18px ; border-radius: 15px ;'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' }}`
                + '.primary-modal-btn {'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + `background: ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + `color: ${ scheme == 'dark' ? 'black' : 'white' }}`
                + '.chatgpt-modal button:hover { background-color: #42B4BF ; border-color: #42B4BF ; color: black }'

                /* Checkbox styles */
                + '.chatgpt-modal .checkbox-group { display: flex ; margin-top: -18px }'
                + '.chatgpt-modal .checkbox-group label {'
                    + 'font-size: .7rem ; margin: -.04rem 0 0px .3rem ;'
                    + `color: ${ scheme == 'dark' ? '#e1e1e1' : '#1e1e1e' }}`
                + '.chatgpt-modal input[type="checkbox"] { transform: scale(0.7) ;'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' }}`
                + '.chatgpt-modal input[type="checkbox"]:checked {'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + 'background-color: black ; position: inherit }'
                + '.chatgpt-modal input[type="checkbox"]:focus { outline: none ; box-shadow: none }'
            );
            document.head.appendChild(modalStyle);
        }

        // Insert text into elements
        modalTitle.innerText = title ? title : '';
        modalMessage.innerText = msg ? msg : ''; this.renderHTML(modalMessage);

        // Create/append buttons (if provided) to buttons div
        var modalButtons = document.createElement('div');
        modalButtons.classList.add('modal-buttons');
        if (btns) { // are supplied
            if (!Array.isArray(btns)) btns = [btns]; // convert single button to array if necessary
            btns.forEach((buttonFn) => { // create title-cased labels + attach listeners
                var button = document.createElement('button');
                button.textContent = buttonFn.name
                    .replace(/[_-]\w/g, match => match.slice(1).toUpperCase()) // convert snake/kebab to camel case
                    .replace(/([A-Z])/g, ' $1') // insert spaces
                    .replace(/^\w/, firstChar => firstChar.toUpperCase()); // capitalize first letter
                button.addEventListener('click', function() { destroyAlert(); buttonFn(); });
                modalButtons.insertBefore(button, modalButtons.firstChild); // insert button to left
            });
        }

        // Create/append OK/dismiss button to buttons div
        var dismissBtn = document.createElement('button');
        dismissBtn.textContent = btns ? 'Dismiss' : 'OK';
        dismissBtn.addEventListener('click', destroyAlert);
        modalButtons.insertBefore(dismissBtn, modalButtons.firstChild);

        // Highlight primary button
        modalButtons.lastChild.classList.add('primary-modal-btn');

        // Create/append checkbox (if provided) to checkbox group div
        var checkboxDiv = document.createElement('div');
        if (checkbox) { // is supplied
            checkboxDiv.classList.add('checkbox-group');
            var checkboxFn = checkbox; // assign the named function to checkboxFn
            var checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.addEventListener('change', checkboxFn);

            // Create/show label
            var checkboxLabel = document.createElement('label');
            checkboxLabel.addEventListener('click', function() {
                checkboxInput.checked = !checkboxInput.checked; checkboxFn(); });
            checkboxLabel.textContent = checkboxFn.name.charAt(0).toUpperCase() // capitalize first char
                + checkboxFn.name.slice(1) // format remaining chars
                    .replace(/([A-Z])/g, (match, letter) => ' ' + letter.toLowerCase()) // insert spaces, convert to lowercase
                    .replace(/\b(\w+)nt\b/gi, '$1n\'t') // insert apostrophe in 'nt' suffixes
                    .trim(); // trim leading/trailing spaces

            checkboxDiv.appendChild(checkboxInput); checkboxDiv.appendChild(checkboxLabel);
        }

        // Assemble/append div
        var elements = [modalTitle, modalMessage, modalButtons, checkboxDiv];
        elements.forEach(function(element) { modal.appendChild(element); });
        modalContainer.appendChild(modal); document.body.appendChild(modalContainer); 

        // Enqueue alert
        alertProps = JSON.parse(localStorage.alertProps);
        alertProps.queue.push(modalContainer.id);
        localStorage.alertProps = JSON.stringify(alertProps);

        // Add listeners
        document.addEventListener('keydown', keyHandler);
        modalContainer.addEventListener('click', function(event) {
            if (event.target === modalContainer) destroyAlert(); });

        // Show alert if none active
        modalContainer.style.display = (alertProps.queue.length === 1) ? '' : 'none';

        function destroyAlert() {
            modalContainer.remove(); // remove from DOM
            var alertProps = JSON.parse(localStorage.alertProps);
            alertProps.queue.shift(); // + memory
            localStorage.alertProps = JSON.stringify(alertProps); // + storage

            // Prevent memory leaks
            modalContainer.removeEventListener('click', destroyAlert);
            document.removeEventListener('keydown', keyHandler);
            dismissBtn.removeEventListener('click', destroyAlert);

            // Check for pending alerts in queue
            if (alertProps.queue.length > 0) {
                var nextAlert = document.getElementById(alertProps.queue[0]);
                setTimeout(() => { nextAlert.style.display = 'flex'; }, 500 );
            }
        }

        function keyHandler(event) {
            var dismissKeys = [13, 27, 32]; // enter/esc/space
            if (dismissKeys.includes(event.keyCode)) {
                for (var i = 0; i < alertProps.queue.length; i++) { // look to handle only if triggering alert is active
                    var alert = document.getElementById(alertProps.queue[i]);
                    if (alert && alert.style.display != 'none') { // active alert found
                        if (event.keyCode === 27) destroyAlert(); // if esc pressed, dismiss alert & do nothing
                        else if (event.keyCode === 32 || event.keyCode === 13) { // else if space/enter pressed
                            var mainButton = alert.querySelector('.modal-buttons').lastChild; // look for main button
                            if (mainButton) { mainButton.click(); event.preventDefault(); } // click if found
                        } return;
        }}}}

        return modalContainer.id;
    },

    history: {
        isOn: function() {
            for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (navLink.text.match(/clear chat/i)) return false;
            } return true;
        },
        isOff: function() { return !this.isOn(); }
    },

    isDarkMode: function() { return document.documentElement.classList.contains('dark'); },

    isFullScreen: function() {
        var userAgentStr = navigator.userAgent;
        return userAgentStr.includes('Chrome') ? window.matchMedia('(display-mode: fullscreen)').matches
             : userAgentStr.includes('Firefox') ? window.fullScreen
             : userAgentStr.match(/MSIE|rv:/) ? document.msFullscreenElement : document.webkitIsFullScreen;
    },

    isLoaded: function() {
        return new Promise(resolve => {
            var intervalId = setInterval(() => {
                if (document.querySelector('nav button[id*="menu"]')) {
                    clearInterval(intervalId); resolve();
    }}, 100);});},

    notify: function(msg, position, notifDuration, shadow) {
        notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
        var fadeDuration = 0.6; // sec duration of fade-out
        var vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

        // Make/stylize/insert div
        var notificationDiv = document.createElement('div'); // make div
        notificationDiv.id = Math.floor(Math.random() * 1000000) + Date.now();
        notificationDiv.style.cssText = ( // stylize it
              ' background-color: black ; padding: 10px ; border-radius: 8px ; ' // box style
            + ' opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ; ' // visibility
            + ' -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ; ' // disable selection
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
            try { // to move old notifications
                var divsToMove = thisQuadrantDivIDs.slice(0, -1); // exclude new div
                for (var j = 0; j < divsToMove.length; j++) {
                    var oldDiv = document.getElementById(divsToMove[j]);
                    var offsetProp = oldDiv.style.top ? 'top' : 'bottom'; // pick property to change
                    var vOffset = +oldDiv.style[offsetProp].match(/\d+/)[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${vOffset}px`; // change prop
                }
            } catch (error) {}
        }

        // Show notification
        notificationDiv.innerText = msg; // insert msg
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

    renderHTML: function(node) {
        const reTags = /<([a-z\d]+)\b([^>]*)>([\s\S]*?)<\/\1>/g;
        const reAttributes = /(\S+)=['"]?((?:.(?!['"]?\s+(?:\S+)=|[>']))+.)['"]?/g;
        const nodeContent = node.childNodes;

        // Preserve consecutive spaces + line breaks
        if (!this.renderHTML.preWrapSet) {
            node.style.whiteSpace = 'pre-wrap'; this.renderHTML.preWrapSet = true;
            setTimeout(() => { this.renderHTML.preWrapSet = false; }, 100);
        }

        // Process child nodes
        for (let i = 0; i < nodeContent.length; i++) {
            const childNode = nodeContent[i];

            // Process text node
            if (childNode.nodeType === Node.TEXT_NODE) {
                const text = childNode.nodeValue;
                const elems = Array.from(text.matchAll(reTags));

                // Process 1st element to render
                if (elems.length > 0) {
                    const elem = elems[0];
                    const [tagContent, tagName, tagAttributes, tagText] = elem.slice(0, 4);
                    const tagNode = document.createElement(tagName); tagNode.textContent = tagText;

                    // Extract/set attributes
                    const attributes = Array.from(tagAttributes.matchAll(reAttributes));
                    attributes.forEach(attribute => {
                        const name = attribute[1], value = attribute[2].replace(/['"]/g, '');
                        tagNode.setAttribute(name, value);
                    });

                    const renderedNode = this.renderHTML(tagNode); // render child elements of newly created node

                    // Insert newly rendered node
                    const beforeTextNode = document.createTextNode(text.substring(0, elem.index));
                    const afterTextNode = document.createTextNode(text.substring(elem.index + tagContent.length));

                    // Replace text node with processed nodes
                    node.replaceChild(beforeTextNode, childNode);
                    node.insertBefore(renderedNode, beforeTextNode.nextSibling);
                    node.insertBefore(afterTextNode, renderedNode.nextSibling);
                }

            // Process element nodes recursively
            } else if (childNode.nodeType === Node.ELEMENT_NODE) this.renderHTML(childNode);
        }

        return node; // if assignment used
    },

    sidebar: {
        isOn: function() { return !document.querySelector('button[aria-label*="Show sidebar"]'); },
        isOff: function() { return !!document.querySelector('button[aria-label*="Show sidebar"]'); },
        hide: function() { this.isOn() ? this.toggle() : console.info( '🤖 chatgpt.js >> Sidebar already hidden!'); },
        show: function() { this.isOff() ? this.toggle() : console.info( '🤖 chatgpt.js >> Sidebar already shown!'); },

        toggle: function() {
            for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (navLink.text.match(/hide sidebar/i)) {
                    navLink.click(); return;                
        }}}
    },

    startNewChat: function() {
        for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (navLink.text.match(/(new|clear) chat/i)) {
                navLink.click(); return;
    }}}

};

export { chatgpt }
