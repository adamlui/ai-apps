// This library is a condensed version of chatgpt.js v2.2.0
// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js
// Latest minified release: https://code.chatgptjs.org/chatgpt-latest.min.js

// Init queues for feedback methods
var alertQueue = []; localStorage.alertQueue = JSON.stringify(alertQueue);
var notifyQueue = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
localStorage.notifyQueue = JSON.stringify(notifyQueue);

const chatgpt = {

    alert: function(title, msg, btns, checkbox, width) {
    // [ title/msg = strings, btns = [named functions], checkbox = named function, width (px) = int ] = optional
    // * Spaces are inserted into button labels by parsing function names in camel/kebab/snake case

        // Create modal parent/children elements
        const modalContainer = document.createElement('div');
        modalContainer.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now();
        modalContainer.classList.add('chatgpt-modal'); // add class to main div
        const modal = document.createElement('div');
        const modalTitle = document.createElement('h2');
        const modalMessage = document.createElement('p');

        // Select or crate/append style
        let modalStyle;
        if (!document.querySelector('#chatgpt-alert-style')) {
            modalStyle = document.createElement('style');
            modalStyle.id = 'chatgpt-alert-style';
            document.head.appendChild(modalStyle);
        } else modalStyle = document.querySelector('#chatgpt-alert-style');

        // Define styles
        const scheme = chatgpt.isDarkMode() ? 'dark' : 'light';
        modalStyle.innerText = (

            // Background styles
            '.chatgpt-modal {' 
                + 'position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ;' // expand to full view-port
                + 'background-color: rgba(67, 70, 72, 0.75) ;' // dim bg
                + 'display: flex ; justify-content: center ; align-items: center ; z-index: 9999 }' // align

            // Alert styles
            + '.chatgpt-modal > div {'
                + `background-color: ${ scheme == 'dark' ? 'black' : 'white' } ;`
                + ( width ? `width: ${ width }px` : 'max-width: 458px ') + ' ;'
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

        // Insert text into elements
        modalTitle.innerText = title || '';
        modalMessage.innerText = msg || ''; this.renderHTML(modalMessage);

        // Create/append buttons (if provided) to buttons div
        const modalButtons = document.createElement('div');
        modalButtons.classList.add('modal-buttons');
        if (btns) { // are supplied
            if (!Array.isArray(btns)) btns = [btns]; // convert single button to array if necessary
            btns.forEach((buttonFn) => { // create title-cased labels + attach listeners
                const button = document.createElement('button');
                button.textContent = buttonFn.name
                    .replace(/[_-]\w/g, match => match.slice(1).toUpperCase()) // convert snake/kebab to camel case
                    .replace(/([A-Z])/g, ' $1') // insert spaces
                    .replace(/^\w/, firstChar => firstChar.toUpperCase()); // capitalize first letter
                button.addEventListener('click', () => { destroyAlert(); buttonFn(); });
                modalButtons.insertBefore(button, modalButtons.firstChild); // insert button to left
            });
        }

        // Create/append OK/dismiss button to buttons div
        const dismissBtn = document.createElement('button');
        dismissBtn.textContent = btns ? 'Dismiss' : 'OK';
        dismissBtn.addEventListener('click', destroyAlert);
        modalButtons.insertBefore(dismissBtn, modalButtons.firstChild);

        // Highlight primary button
        modalButtons.lastChild.classList.add('primary-modal-btn');

        // Create/append checkbox (if provided) to checkbox group div
        const checkboxDiv = document.createElement('div');
        if (checkbox) { // is supplied
            checkboxDiv.classList.add('checkbox-group');
            const checkboxFn = checkbox; // assign the named function to checkboxFn
            const checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.addEventListener('change', checkboxFn);

            // Create/show label
            const checkboxLabel = document.createElement('label');
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
        const elements = [modalTitle, modalMessage, modalButtons, checkboxDiv];
        elements.forEach((element) => { modal.appendChild(element); });
        modalContainer.appendChild(modal); document.body.appendChild(modalContainer); 

        // Enqueue alert
        alertQueue = JSON.parse(localStorage.alertQueue);
        alertQueue.push(modalContainer.id);
        localStorage.alertQueue = JSON.stringify(alertQueue);

        // Add listeners
        document.addEventListener('keydown', keyHandler);
        modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) destroyAlert(); });

        // Show alert if none active
        modalContainer.style.display = (alertQueue.length === 1) ? '' : 'none';

        function destroyAlert() {
            modalContainer.remove(); // remove from DOM
            alertQueue = JSON.parse(localStorage.alertQueue);
            alertQueue.shift(); // + memory
            localStorage.alertQueue = JSON.stringify(alertQueue); // + storage

            // Prevent memory leaks
            modalContainer.removeEventListener('click', destroyAlert);
            document.removeEventListener('keydown', keyHandler);
            dismissBtn.removeEventListener('click', destroyAlert);

            // Check for pending alerts in queue
            if (alertQueue.length > 0) {
                const nextAlert = document.getElementById(alertQueue[0]);
                setTimeout(() => { nextAlert.style.display = 'flex'; }, 500 );
            }
        }

        function keyHandler(event) {
            const dismissKeys = [13, 27]; // enter/esc
            if (dismissKeys.includes(event.keyCode)) {
                for (const alertId of alertQueue) { // look to handle only if triggering alert is active
                    const alert = document.getElementById(alertId);
                    if (alert && alert.style.display !== 'none') { // active alert found
                        if (event.keyCode === 27) destroyAlert(); // if esc pressed, dismiss alert & do nothing
                        else if (event.keyCode === 13) { // else if enter pressed
                            const mainButton = alert.querySelector('.modal-buttons').lastChild; // look for main button
                            if (mainButton) { mainButton.click(); event.preventDefault(); } // click if found
                        } return;
        }}}}

        return modalContainer.id;
    },

    history: {
        isOn: function() {
            for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (/clear chat/i.test(navLink.text)) return false;
            } return true;
        },
        isOff: function() { return !this.isOn(); }
    },

    isDarkMode: function() { return document.documentElement.classList.contains('dark'); },

    isFullScreen: function() {
        const userAgentStr = navigator.userAgent;
        return userAgentStr.includes('Chrome') ? window.matchMedia('(display-mode: fullscreen)').matches
             : userAgentStr.includes('Firefox') ? window.fullScreen
             : /MSIE|rv:/.test(userAgentStr) ? document.msFullscreenElement : document.webkitIsFullScreen;
    },

    isLoaded: function() {
        return new Promise(resolve => {
            const intervalId = setInterval(() => {
                if (document.querySelector('nav button[id*="menu"]')) {
                    clearInterval(intervalId); resolve();
    }}, 100);});},

    notify: function(msg, position, notifDuration, shadow) {
        notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
        const fadeDuration = 0.6, // sec duration of fade-out
              vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

        // Make/stylize/insert div
        const notificationDiv = document.createElement('div'); // make div
        notificationDiv.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now();
        notificationDiv.style.cssText = ( // stylize it
              ' background-color: black ; padding: 10px ; border-radius: 8px ; ' // box style
            + ' opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ; ' // visibility
            + ' -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ; ' // disable selection
            + ( shadow ? ( 'box-shadow: -8px 13px 25px 0 ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ));
        document.body.appendChild(notificationDiv); // insert into DOM

        // Determine div position/quadrant
        notificationDiv.isTop = !position || !/low|bottom/i.test(position);
        notificationDiv.isRight = !position || !/left/i.test(position);
        notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
            + (notificationDiv.isRight ? 'Right' : 'Left');

        // Store div
        notifyQueue = JSON.parse(localStorage.notifyQueue);
        notifyQueue.quadrants[notificationDiv.quadrant].push(notificationDiv.id);
        localStorage.notifyQueue = JSON.stringify(notifyQueue);

        // Position notification (defaults to top-right)
        notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
        notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

        // Reposition old notifications
        const thisQuadrantDivIDs = notifyQueue.quadrants[notificationDiv.quadrant];
        if (thisQuadrantDivIDs.length > 1) {
            try { // to move old notifications
                for (const divId of thisQuadrantDivIDs.slice(0, -1)) { // exclude new div
                    const oldDiv = document.getElementById(divId),
                          offsetProp = oldDiv.style.top ? 'top' : 'bottom', // pick property to change
                          vOffset = +/\d+/.exec(oldDiv.style[offsetProp])[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${vOffset}px`; // change prop
                }
            } catch (err) {}
        }

        // Show notification
        notificationDiv.innerText = msg; // insert msg
        notificationDiv.style.transition = 'none'; // remove fade effect
        notificationDiv.style.opacity = 1; // show msg

        // Hide notification
        const hideDelay = ( // set delay before fading
            fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
            : notifDuration - fadeDuration); // otherwise delay for difference
        notificationDiv.hideTimer = setTimeout(() => { // maintain notification visibility, then fade out
            notificationDiv.style.transition = 'opacity ' + fadeDuration.toString() + 's'; // add fade effect
            notificationDiv.style.opacity = 0; // hide notification
            notificationDiv.hideTimer = null; // prevent memory leaks
        }, hideDelay * 1000); // ...after pre-set duration

        // Destroy notification
        notificationDiv.destroyTimer = setTimeout(() => {
            notificationDiv.remove(); // remove from DOM
            notifyQueue = JSON.parse(localStorage.notifyQueue);
            notifyQueue.quadrants[notificationDiv.quadrant].shift(); // + memory
            localStorage.notifyQueue = JSON.stringify(notifyQueue); // + storage
            notificationDiv.destroyTimer = null; // prevent memory leaks
        }, Math.max(fadeDuration, notifDuration) * 1000); // ...after notification hid
    },

    obfuscate: function() { chatgpt.code.obfuscate(); },

    printAllFunctions: function() {

        // Define colors
        const colors = { // element: [light, dark]
            cmdPrompt: ['#ff00ff', '#00ff00'], // pink, green
            objName: ['#0611e9', '#f9ee16'], // blue, yellow
            methodName: ['#005aff', '#ffa500'], // blue, orange
            entryType: ['#467e06', '#b981f9'], // green, purple
            srcMethod: ['#ff0000', '#00ffff'] // red, cyan
        };
        Object.keys(colors).forEach(element => { // populate dark scheme colors if missing
            colors[element][1] = colors[element][1] ||
                '#' + (Number(`0x1${ colors[element][0].replace(/^#/, '') }`) ^ 0xFFFFFF)
                    .toString(16).substring(1).toUpperCase(); // convert to hex
        });

        // Create [functionNames]
        const functionNames = [];
        for (const prop in this) {
            if (typeof this[prop] === 'function') {
                const chatgptIsParent = !Object.keys(this).find(obj => Object.keys(this[obj]).includes(this[prop].name)),
                      functionParent = chatgptIsParent ? 'chatgpt' : 'other';
                functionNames.push([functionParent, prop]);
            } else if (typeof this[prop] === 'object') {
                for (const nestedProp in this[prop]) {
                    if (typeof this[prop][nestedProp] === 'function') {
                        functionNames.push([prop, nestedProp]);
        }}}}
        functionNames.sort(function(a, b) { return a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]); });

        // Print methods
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches,
              baseFontStyles = 'font-family: monospace ; font-size: larger ; ';
        console.log('\n%c🤖 chatgpt.js methods\n', 'font-family: sans-serif ; font-size: xxx-large ; font-weight: bold');
        for (const functionName of functionNames) {
            const isChatGptObjParent = /chatgpt|other/.test(functionName[0]),
                  rootFunction = ( functionName[0] === 'chatgpt' ? this[functionName[1]].name
                    : functionName[0] !== 'other' ? functionName[0] + '.' + functionName[1]
                    : (( Object.keys(this).find(obj => Object.keys(this[obj]).includes(this[functionName[1]].name)) + '.' )
                        + this[functionName[1]].name )),
                  isAsync = this[functionName[1]]?.constructor.name === 'AsyncFunction';
            console.log('%c>> %c' + ( isChatGptObjParent ? '' : `${ functionName[0] }.%c`) + functionName[1]
                    + ' - https://chatgptjs.org/userguide/' + /(?:.*\.)?(.*)/.exec(rootFunction)[1].toLowerCase() + ( isAsync ? '-async' : '' ) + '\n%c[%c'
                + ((( functionName[0] === 'chatgpt' && functionName[1] === this[functionName[1]].name ) || // parent is chatgpt + names match or
                    !isChatGptObjParent) // parent is chatgpt.obj
                        ? 'Function' : 'Alias of' ) + '%c: %c'
                + rootFunction + '%c]',

                // Styles
                baseFontStyles + 'font-weight: bold ; color:' + colors.cmdPrompt[+isDarkMode],
                baseFontStyles + 'font-weight: bold ;'
                    + 'color:' + colors[isChatGptObjParent ? 'methodName' : 'objName'][+isDarkMode],
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'initial' : 'bold' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.methodName[+isDarkMode] ),
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'bold' : 'initial' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? colors.entryType[+isDarkMode] : 'initial' ),
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'initial' : 'bold' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.entryType[+isDarkMode] ),
                baseFontStyles + ( isChatGptObjParent ? 'font-style: italic' : 'font-weight: initial' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? colors.srcMethod[+isDarkMode] : 'initial' ),
                baseFontStyles + ( isChatGptObjParent ? 'font-weight: initial' : 'font-style: italic' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.srcMethod[+isDarkMode] ),
                isChatGptObjParent ? '' : ( baseFontStyles + 'color: initial ; font-weight: initial' ));
        }
    },

    randomFloat: function() {
    // * Generates a random, cryptographically secure value between 0 (inclusive) & 1 (exclusive)
        const crypto = window.crypto || window.msCrypto;
        return crypto.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF;
    },

    renderHTML: function(node) {
        const reTags = /<([a-z\d]+)\b([^>]*)>([\s\S]*?)<\/\1>/g,
              reAttributes = /(\S+)=['"]?((?:.(?!['"]?\s+(?:\S+)=|[>']))+.)['"]?/g,
              nodeContent = node.childNodes;

        // Preserve consecutive spaces + line breaks
        if (!this.renderHTML.preWrapSet) {
            node.style.whiteSpace = 'pre-wrap'; this.renderHTML.preWrapSet = true;
            setTimeout(() => { this.renderHTML.preWrapSet = false; }, 100);
        }

        // Process child nodes
        for (const childNode of nodeContent) {

            // Process text node
            if (childNode.nodeType === Node.TEXT_NODE) {
                const text = childNode.nodeValue,
                      elems = Array.from(text.matchAll(reTags));

                // Process 1st element to render
                if (elems.length > 0) {
                    const elem = elems[0],
                          [tagContent, tagName, tagAttributes, tagText] = elem.slice(0, 4),
                          tagNode = document.createElement(tagName); tagNode.textContent = tagText;

                    // Extract/set attributes
                    const attributes = Array.from(tagAttributes.matchAll(reAttributes));
                    attributes.forEach(attribute => {
                        const name = attribute[1], value = attribute[2].replace(/['"]/g, '');
                        tagNode.setAttribute(name, value);
                    });

                    const renderedNode = this.renderHTML(tagNode); // render child elements of newly created node

                    // Insert newly rendered node
                    const beforeTextNode = document.createTextNode(text.substring(0, elem.index)),
                          afterTextNode = document.createTextNode(text.substring(elem.index + tagContent.length));

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
        isOn: function() { return !document.querySelector('button[aria-label*="Open sidebar"]'); },
        isOff: function() { return !!document.querySelector('button[aria-label*="Open sidebar"]'); },
        hide: function() { this.isOn() ? this.toggle() : console.info('Sidebar already hidden!'); },
        show: function() { this.isOff() ? this.toggle() : console.info('Sidebar already shown!'); },
        toggle: function() {
            for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (/close sidebar/i.test(navLink.text)) {
                    navLink.click(); return;                
        }}}
    },

    startNewChat: function() {
        for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (/(new|clear) chat/i.test(navLink.text)) {
                navLink.click(); return;
    }}}

};

// Prefix console logs w/ '🤖 chatgpt.js >> '
const consolePrefix = '🤖 chatgpt.js >> ', ogError = console.error, ogInfo = console.info;
console.error = (...args) => {
    if (!args[0].startsWith(consolePrefix)) ogError(consolePrefix + args[0], ...args.slice(1)); 
    else ogError(...args);
};
console.info = (msg) => {
    if (!msg.startsWith(consolePrefix)) ogInfo(consolePrefix + msg);
    else ogInfo(msg);
};

export { chatgpt }
