// This library is a condensed version of chatgpt.js v2.3.11
// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js
// Latest minified release: https://code.chatgptjs.org/chatgpt-latest.min.js

// Init endpoints
const endpoints = { assets: 'https://raw.githubusercontent.com/KudoAI/chatgpt.js/main' }

// Init feedback properties
localStorage.alertQueue = JSON.stringify([]);
localStorage.notifyProps = JSON.stringify({
    queue: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }});

const chatgpt = {

    alert: function(title, msg, btns, checkbox, width) {
    // [ title/msg = strings, btns = [named functions], checkbox = named function, width (px) = int ] = optional
    // * Spaces are inserted into button labels by parsing function names in camel/kebab/snake case

        // Create modal parent/children elements
        const modalContainer = document.createElement('div');
        modalContainer.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now();
        modalContainer.classList.add('chatgpt-modal'); // add class to main div
        const modal = document.createElement('div'),
              modalTitle = document.createElement('h2'),
              modalMessage = document.createElement('p');

        // Create/append modal style (if missing)
        if (!document.querySelector('#chatgpt-alert-style')) {
            const modalStyle = document.createElement('style'),
                  scheme = chatgpt.isDarkMode() ? 'dark' : 'light';                  
            modalStyle.id = 'chatgpt-alert-style';
            modalStyle.innerText = (

                // Background styles
                '.chatgpt-modal {' 
                    + 'position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ;' // expand to full view-port
                    + 'background-color: rgba(67, 70, 72, 0.75) ;' // dim bg
                    + 'display: flex ; justify-content: center ; align-items: center ; z-index: 9999 }' // align

                // Alert styles
                + '.chatgpt-modal > div {'
                    + 'opacity: 0 ; transform: translateX(-2px) translateY(5px) ;'
                    + 'transition: opacity 0.1s cubic-bezier(.165,.84,.44,1), transform 0.2s cubic-bezier(.165,.84,.44,1) ;'
                    + `background-color: ${ scheme === 'dark' ? 'black' : 'white' } ;`
                    + ( width ? `width: ${ width }px` : 'max-width: 458px ') + ' ;'
                    + 'padding: 20px ; margin: 12px 23px ; border-radius: 5px ; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) ;'
                    + ' -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ; }' // disable selection
                + '.chatgpt-modal h2 { margin-bottom: 9px }'
                + `.chatgpt-modal a { color: ${ scheme === 'dark' ? '#00cfff' : '#1e9ebb' }}`
                + '.chatgpt-modal.animated > div { opacity: 1 ; transform: translateX(0) translateY(0) }'
                + '@keyframes alert-zoom-fade-out { 0% { opacity: 1 ; transform: scale(1) }'
                    + '50% { opacity: 0.25 ; transform: scale(1.35) }'
                    + '100% { opacity: 0 ; transform: scale(2) }}'

                // Button styles
                + '.modal-buttons { display: flex ; justify-content: flex-end ; margin: 20px -5px -3px 0 }'
                + '.chatgpt-modal button {'
                    + 'margin-left: 10px ; padding: 4px 18px ; border-radius: 15px ;'
                    + `border: 1px solid ${ scheme === 'dark' ? 'white' : 'black' }}`
                + '.primary-modal-btn {'
                    + `border: 1px solid ${ scheme === 'dark' ? 'white' : 'black' } ;`
                    + `background: ${ scheme === 'dark' ? 'white' : 'black' } ;`
                    + `color: ${ scheme === 'dark' ? 'black' : 'white' }}`
                + '.chatgpt-modal button:hover { color: #3d5d71 ; border-color: #6d9cb9 ;'
                    + 'background-color: ' + ( scheme === 'dark' ? '#00cfff' : '#9cdaff' ) + ';'
                    + 'box-shadow: 2px 1px ' + ( scheme === 'dark' ? '54px #00cfff' : '30px #9cdaff' ) + '}'
                + '.modal-close-btn { cursor: pointer ; float: right ; position: relative ; right: -2px }'

                /* Checkbox styles */
                + '.chatgpt-modal .checkbox-group { display: flex ; margin-top: -18px }'
                + '.chatgpt-modal .checkbox-group label {'
                    + 'font-size: .7rem ; margin: -.04rem 0 0px .3rem ;'
                    + `color: ${ scheme === 'dark' ? '#e1e1e1' : '#1e1e1e' }}`
                + '.chatgpt-modal input[type="checkbox"] { transform: scale(0.7) ;'
                    + `border: 1px solid ${ scheme === 'dark' ? 'white' : 'black' }}`
                + '.chatgpt-modal input[type="checkbox"]:checked {'
                    + `border: 1px solid ${ scheme === 'dark' ? 'white' : 'black' } ;`
                    + 'background-color: black ; position: inherit }'
                + '.chatgpt-modal input[type="checkbox"]:focus { outline: none ; box-shadow: none }'
            );
            document.head.appendChild(modalStyle);
        }

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
                button.addEventListener('click', () => { dismissAlert(); buttonFn(); });
                modalButtons.insertBefore(button, modalButtons.firstChild); // insert button to left
            });
        }

        // Create/append OK/dismiss button to buttons div
        const dismissBtn = document.createElement('button');
        dismissBtn.textContent = btns ? 'Dismiss' : 'OK';
        modalButtons.insertBefore(dismissBtn, modalButtons.firstChild);

        // Highlight primary button
        modalButtons.lastChild.classList.add('primary-modal-btn');

        // Create/append checkbox (if provided) to checkbox group div
        const checkboxDiv = document.createElement('div');
        if (checkbox) { // is supplied
            checkboxDiv.classList.add('checkbox-group');
            const checkboxFn = checkbox, // assign the named function to checkboxFn
                  checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.addEventListener('change', checkboxFn);

            // Create/show label
            const checkboxLabel = document.createElement('label');
            checkboxLabel.addEventListener('click', () => {
                checkboxInput.checked = !checkboxInput.checked; checkboxFn(); });
            checkboxLabel.textContent = checkboxFn.name.charAt(0).toUpperCase() // capitalize first char
                + checkboxFn.name.slice(1) // format remaining chars
                    .replace(/([A-Z])/g, (match, letter) => ' ' + letter.toLowerCase()) // insert spaces, convert to lowercase
                    .replace(/\b(\w+)nt\b/gi, '$1n\'t') // insert apostrophe in 'nt' suffixes
                    .trim(); // trim leading/trailing spaces

            checkboxDiv.appendChild(checkboxInput); checkboxDiv.appendChild(checkboxLabel);
        }

        // Create close button
        const closeBtn = document.createElement('div');
        closeBtn.title = 'Close'; closeBtn.classList.add('modal-close-btn');
        const closeSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSVG.setAttribute('height', '10px');
        closeSVG.setAttribute('viewBox', '0 0 14 14');
        closeSVG.setAttribute('fill', 'none');
        const closeSVGpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        closeSVGpath.setAttribute('fill-rule', 'evenodd');
        closeSVGpath.setAttribute('clip-rule', 'evenodd');
        closeSVGpath.setAttribute('fill', 'black');
        closeSVGpath.setAttribute('d', 'M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976312 12.6834 -0.0976312 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976312 0.683417 -0.0976312 0.292893 0.292893C-0.0976312 0.683417 -0.0976312 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976312 12.6834 -0.0976312 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z');
        closeSVG.appendChild(closeSVGpath); closeBtn.appendChild(closeSVG);

        // Assemble/append div
        const modalElems = [closeBtn, modalTitle, modalMessage, modalButtons, checkboxDiv];
        modalElems.forEach((elem) => { modal.appendChild(elem); });
        modalContainer.appendChild(modal); document.body.appendChild(modalContainer); 

        // Enqueue alert
        let alertQueue = JSON.parse(localStorage.alertQueue);
        alertQueue.push(modalContainer.id);
        localStorage.alertQueue = JSON.stringify(alertQueue);

        // Define handlers
        const clickHandler = event => { // explicitly defined to support removal post-dismissal
            if (event.target === event.currentTarget || event.target instanceof SVGPathElement) dismissAlert(); };
        const keyHandler = event => { // to dismiss active alert
            const dismissKeys = [13, 27]; // enter/esc
            if (dismissKeys.includes(event.keyCode)) {
                for (const alertId of alertQueue) { // look to handle only if triggering alert is active
                    const alert = document.getElementById(alertId);
                    if (alert && alert.style.display !== 'none') { // active alert found
                        if (event.keyCode === 27) dismissAlert(); // if esc pressed, dismiss alert & do nothing
                        else if (event.keyCode === 13) { // else if enter pressed
                            const mainButton = alert.querySelector('.modal-buttons').lastChild; // look for main button
                            if (mainButton) { mainButton.click(); event.preventDefault(); } // click if found
                        } return;
        }}}};

        // Define alert dismisser
        const dismissAlert = () => {
            modalContainer.style.backgroundColor = 'transparent';
            modal.style.animation = 'alert-zoom-fade-out 0.075s ease-out';
            setTimeout(() => { // delay removal for fade-out

                // Remove alert
                modalContainer.remove(); // ...from DOM
                alertQueue = JSON.parse(localStorage.alertQueue);
                alertQueue.shift(); // + memory
                localStorage.alertQueue = JSON.stringify(alertQueue); // + storage

                // Remove all listeners to prevent memory leaks
                dismissElems.forEach(elem => { elem.removeEventListener('click', clickHandler); });
                document.removeEventListener('keydown', keyHandler);

                // Check for pending alerts in queue
                if (alertQueue.length > 0) {
                    const nextAlert = document.getElementById(alertQueue[0]);
                    setTimeout(() => {
                        nextAlert.style.display = '';
                        setTimeout(() => { nextAlert.classList.add('animated'); }, 100);
                    }, 500);
                }

            }, 50);
        };

        // Add listeners to dismiss alert
        const dismissElems = [modalContainer, closeSVG, dismissBtn];
        dismissElems.forEach(elem => {
            elem.addEventListener('click', clickHandler); });
        document.addEventListener('keydown', keyHandler);

        // Show alert if none active
        modalContainer.style.display = 'none';
        if (alertQueue.length === 1) {
            modalContainer.style.display = '';
            setTimeout(() => { modalContainer.classList.add('animated'); }, 100);
        }

        return modalContainer.id; // if assignment used
    },

    getRegenerateButton: function() {
        for (const formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('regenerate')) {
                return formButton;
    }}},

    history: {
        isOn: function() {
            for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (/clear chat/i.test(navLink.text)) return false;
            } return true;
        },
        isOff: function() { return !this.isOn(); }
    },

    isDarkMode: function() { return document.documentElement.classList.contains('dark'); },

    isIdle: function() {
        return new Promise(resolve => {
            const intervalId = setInterval(() => {
                if (chatgpt.getRegenerateButton()) {
                    clearInterval(intervalId); resolve();
    }}, 100);});},

    isLoaded: function() {
        return new Promise(resolve => {
            const intervalId = setInterval(() => {
                if (document.querySelector('nav button[id*="menu"]')) {
                    clearInterval(intervalId); resolve();
    }}, 100);});},

    notify: async function(msg, position, notifDuration, shadow) {
        notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
        const fadeDuration = 0.3, // sec duration of fade-out
              vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

        // Create/append notification div
        const notificationDiv = document.createElement('div'); // make div
        notificationDiv.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now();
        notificationDiv.classList.add('chatgpt-notif');
        document.body.appendChild(notificationDiv); // insert into DOM

        // Determine div position/quadrant
        notificationDiv.isTop = !position || !/low|bottom/i.test(position);
        notificationDiv.isRight = !position || !/left/i.test(position);
        notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
                                 + (notificationDiv.isRight ? 'Right' : 'Left');

        // Create/append notification style (if missing)
        const lastEditDate = 20231015;
        if (!document.querySelector(`#chatgpt-notif-style-${ lastEditDate }`)) {
            const notifStyle = document.createElement('style');
            notifStyle.id = `chatgpt-notif-style-${ lastEditDate }`;
            notifStyle.innerText = '.chatgpt-notif {'
                + 'background-color: black ; padding: 10px 13px ; border-radius: 11px ; border: 1px solid #f5f5f7 ;' // bubble style
                + 'opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ;' // visibility
                + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ;' // disable selection
                + `transform: translateX(${ !notificationDiv.isRight ? '-' : '' }35px) ;` // init off-screen for transition fx
                + ( shadow ? ( 'box-shadow: -8px 13px 25px 0 ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ) + '}'
            + '@keyframes notif-zoom-fade-out { 0% { opacity: 1 ; transform: scale(1) }' // transition out keyframes
                + '15% { opacity: 0.35 ; transform: rotateX(-27deg) scale(1.05) }'
                + '45% { opacity: 0.05 ; transform: rotateX(-81deg) }'
                + '100% { opacity: 0 ; transform: rotateX(-180deg) scale(1.15) }}';
            document.head.appendChild(notifStyle);
        } 

        // Enqueue notification
        let notifyProps = JSON.parse(localStorage.notifyProps);
        notifyProps.queue[notificationDiv.quadrant].push(notificationDiv.id);
        localStorage.notifyProps = JSON.stringify(notifyProps);

        // Position notification (defaults to top-right)
        notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
        notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

        // Reposition old notifications
        const thisQuadrantQueue = notifyProps.queue[notificationDiv.quadrant];
        if (thisQuadrantQueue.length > 1) {
            try { // to move old notifications
                for (const divId of thisQuadrantQueue.slice(0, -1)) { // exclude new div
                    const oldDiv = document.getElementById(divId),
                          offsetProp = oldDiv.style.top ? 'top' : 'bottom', // pick property to change
                          vOffset = +/\d+/.exec(oldDiv.style[offsetProp])[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${ vOffset }px`; // change prop
                }
            } catch (err) {}
        }

        // Show notification
        notificationDiv.innerText = msg; // insert msg
        setTimeout(() => {
            notificationDiv.style.opacity = 1; // show msg
            notificationDiv.style.transform = 'translateX(0)'; // bring from off-screen
            notificationDiv.style.transition = 'transform 0.15s ease, opacity 0.15s ease';
        }, 10);

        // Init delay before hiding        
        const hideDelay = fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
                        : notifDuration - fadeDuration; // otherwise delay for difference

        // Init/schedule audio feedback
        if (!/Chrome/.test(navigator.userAgent)) { // ...if not Chromium due to Google's hardcore stance on CSP + autoplay

            // Init base audio index
            let nthAudio; do nthAudio = Math.floor(Math.random() * 3) + 1; // randomize  between 1-3...
            while (nthAudio === notifyProps.lastNthAudio); // ...until distinct from prev index (for variety)
            notifyProps.lastNthAudio = nthAudio; localStorage.notifyProps = JSON.stringify(notifyProps);

            // Build audio element + src URL
            const fadeOutAudio = new Audio();
            fadeOutAudio.src = endpoints.assets + '/media/audio/notifications/bubble-pop/'
                             + `${ nthAudio }-${ notificationDiv.isRight ? 'right' : 'left' }.mp3`;

            // Schedule playback
            setTimeout(() => { fadeOutAudio.play().catch(() => {}); }, hideDelay * 1000);
        }

        // Hide notification
        setTimeout(() => { // maintain visibility for `hideDelay` secs, then transition out
            notificationDiv.style.animation = `notif-zoom-fade-out ${ fadeDuration }s ease-out`; }, hideDelay * 1000);

        // Destroy notification
        notificationDiv.addEventListener('animationend', () => {
            notificationDiv.remove(); // remove from DOM
            notifyProps = JSON.parse(localStorage.notifyProps);
            notifyProps.queue[notificationDiv.quadrant].shift(); // + memory
            localStorage.notifyProps = JSON.stringify(notifyProps); // + storage
        }, { once: true });
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

    scrollToBottom: function() {
        try { document.querySelector('button[class*="cursor"][class*="bottom"]').click(); }
        catch (err) { console.error('', err); }
    },

    send: function(msg, method='') {
        for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] !== 'string')
            return console.error(`Argument ${ i + 1 } must be a string!`);
        const textArea = document.querySelector('form textarea'),
              sendButton = document.querySelector('form button[class*="bottom"]');
        textArea.value = msg;
        textArea.dispatchEvent(new Event('input', { bubbles: true })); // enable send button
        const delaySend = setInterval(() => {
            if (!sendButton.hasAttribute('disabled')) { // send msg
                method.toLowerCase() == 'click' ? sendButton.click()
                    : textArea.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 13, bubbles: true }));
                clearInterval(delaySend);
            }
        }, 25);
    },

    startNewChat: function() {
        for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (/(new|clear) chat/i.test(navLink.text)) {
                navLink.click(); return;
    }}},

    stop: function() {
        for (const formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('stop')) {
                formButton.click(); return;
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
