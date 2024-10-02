// This library is a condensed version of chatgpt.js v3.3.2
// © 2023–2024 KudoAI & contributors under the MIT license.
// --------------------------------------------------------
// Source: https://github.com/KudoAI/chatgpt.js
// User guide: https://chatgptjs.org/userguide
// Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js

// Init feedback properties
localStorage.alertQueue = JSON.stringify([]);
localStorage.notifyProps = JSON.stringify({ queue: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }});

const chatgpt = {

    getContinueButton() { return document.querySelector('button:has([d^="M4.47189"])'); },
    getScrollToBottomButton() { return document.querySelector('button:has([d^="M12 21C11.7348"])'); },
    isDarkMode() { return document.documentElement.classList.toString().includes('dark'); },

    notify(msg, position, notifDuration, shadow) {
        notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
        const fadeDuration = 0.35, // sec duration of fade-out
              vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

        // Create/append notification div
        const notificationDiv = document.createElement('div'); // make div
        notificationDiv.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now();
        notificationDiv.classList.add('chatgpt-notif');
        notificationDiv.innerText = msg; // insert msg
        document.body.append(notificationDiv); // insert into DOM

        // Create/append close button
        const closeBtn = document.createElement('div');
        closeBtn.title = 'Dismiss'; closeBtn.classList.add('notif-close-btn', 'no-mobile-tap-outline');
        const closeSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSVG.setAttribute('height', '8px');
        closeSVG.setAttribute('viewBox', '0 0 14 14');
        closeSVG.setAttribute('fill', 'none');
        closeSVG.style.height = closeSVG.style.width = '8px'; // override SVG styles on non-OpenAI sites
        const closeSVGpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        closeSVGpath.setAttribute('fill-rule', 'evenodd');
        closeSVGpath.setAttribute('clip-rule', 'evenodd');
        closeSVGpath.setAttribute('fill', 'white');
        closeSVGpath.setAttribute('d', 'M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976312 12.6834 -0.0976312 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976312 0.683417 -0.0976312 0.292893 0.292893C-0.0976312 0.683417 -0.0976312 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976312 12.6834 -0.0976312 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z');
        closeSVG.append(closeSVGpath); closeBtn.append(closeSVG); notificationDiv.append(closeBtn);

        // Determine div position/quadrant
        notificationDiv.isTop = !position || !/low|bottom/i.test(position);
        notificationDiv.isRight = !position || !/left/i.test(position);
        notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
                                 + (notificationDiv.isRight ? 'Right' : 'Left');

        // Create/append/update notification style (if missing or outdated)
        const thisUpdated = 20231110; // datestamp of last edit for this file's `notifStyle` 
        let notifStyle = document.querySelector('#chatgpt-notif-style'); // try to select existing style
        if (!notifStyle || parseInt(notifStyle.getAttribute('last-updated'), 10) < thisUpdated) { // if missing or outdated
            if (!notifStyle) { // outright missing, create/id/attr/append it first
                notifStyle = document.createElement('style'); notifStyle.id = 'chatgpt-notif-style';
                notifStyle.setAttribute('last-updated', thisUpdated.toString());
                document.head.append(notifStyle);
            }
            notifStyle.innerText = ( // update prev/new style contents
                '.chatgpt-notif {'
                    + '.no-mobile-tap-outline { outline: none ; -webkit-tap-highlight-color: transparent }'
                    + 'background-color: black ; padding: 10px 13px 10px 18px ; border-radius: 11px ; border: 1px solid #f5f5f7 ;' // bubble style
                    + 'opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ;' // visibility
                    + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ;'
                    + `transform: translateX(${ !notificationDiv.isRight ? '-' : '' }35px) ;` // init off-screen for transition fx
                    + ( shadow ? ( 'box-shadow: -8px 13px 25px 0 ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ) + '}'
                + '.notif-close-btn { cursor: pointer ; float: right ; position: relative ; right: -4px ; margin-left: -3px ;'
                    + 'display: grid }' // top-align for non-OpenAI sites
                + '@keyframes notif-zoom-fade-out { 0% { opacity: 1 ; transform: scale(1) }' // transition out keyframes
                    + '15% { opacity: 0.35 ; transform: rotateX(-27deg) scale(1.05) }'
                    + '45% { opacity: 0.05 ; transform: rotateX(-81deg) }'
                    + '100% { opacity: 0 ; transform: rotateX(-180deg) scale(1.15) }}'
            );
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
        setTimeout(() => {
            notificationDiv.style.opacity = chatgpt.isDarkMode() ? 0.8 : 0.67; // show msg
            notificationDiv.style.transform = 'translateX(0)'; // bring from off-screen
            notificationDiv.style.transition = 'transform 0.15s ease, opacity 0.15s ease';
        }, 10);

        // Init delay before hiding        
        const hideDelay = fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
                        : notifDuration - fadeDuration; // otherwise delay for difference

        // Add notification dismissal to timeout schedule + button clicks
        const dismissNotif = () => {
            notificationDiv.style.animation = `notif-zoom-fade-out ${ fadeDuration }s ease-out`;
            clearTimeout(dismissFuncTID);
        };
        const dismissFuncTID = setTimeout(dismissNotif, hideDelay * 1000); // maintain visibility for `hideDelay` secs, then dismiss     
        closeSVG.onclick = dismissNotif; // add to close button clicks

        // Destroy notification
        notificationDiv.onanimationend = () => {
            notificationDiv.remove(); // remove from DOM
            notifyProps = JSON.parse(localStorage.notifyProps);
            notifyProps.queue[notificationDiv.quadrant].shift(); // + memory
            localStorage.notifyProps = JSON.stringify(notifyProps); // + storage
        };

        return notificationDiv;
    },

    randomFloat() {
    // * Generates a random, cryptographically secure value between 0 (inclusive) & 1 (exclusive)
        const crypto = window.crypto || window.msCrypto;
        return crypto?.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF || Math.random();
    },

    renderHTML(node) {
        const reTags = /<([a-z\d]+)\b([^>]*)>([\s\S]*?)<\/\1>/g,
              reAttributes = /(\S+)=['"]?((?:.(?!['"]?\s+\S+=|[>']))+.)['"]?/g,
              nodeContent = node.childNodes;

        // Preserve consecutive spaces + line breaks
        if (!chatgpt.renderHTML.preWrapSet) {
            node.style.whiteSpace = 'pre-wrap'; chatgpt.renderHTML.preWrapSet = true;
            setTimeout(() => { chatgpt.renderHTML.preWrapSet = false; }, 100);
        }

        // Process child nodes
        for (const childNode of nodeContent) {

            // Process text node
            if (childNode.nodeType == Node.TEXT_NODE) {
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

                    const renderedNode = chatgpt.renderHTML(tagNode); // render child elements of newly created node

                    // Insert newly rendered node
                    const beforeTextNode = document.createTextNode(text.substring(0, elem.index)),
                          afterTextNode = document.createTextNode(text.substring(elem.index + tagContent.length));

                    // Replace text node with processed nodes
                    node.replaceChild(beforeTextNode, childNode);
                    node.insertBefore(renderedNode, beforeTextNode.nextSibling);
                    node.insertBefore(afterTextNode, renderedNode.nextSibling);
                }

            // Process element nodes recursively
            } else if (childNode.nodeType == Node.ELEMENT_NODE) chatgpt.renderHTML(childNode);
        }

        return node; // if assignment used
    },

    scrollToBottom() { try { chatgpt.getScrollBtn().click(); } catch (err) { console.error(err.message); }}

};

// Create alias functions
const cjsFuncAliases = [
    ['actAs', 'actas', 'act', 'become', 'persona', 'premadePrompt', 'preMadePrompt', 'prePrompt', 'preprompt', 'roleplay', 'rolePlay', 'rp'],
    ['activateAutoRefresh', 'activateAutoRefresher', 'activateRefresher', 'activateSessionRefresher',
        'autoRefresh', 'autoRefresher', 'autoRefreshSession', 'refresher', 'sessionRefresher'],
    ['continue', 'continueChat', 'continueGenerating', 'continueResponse'],
    ['deactivateAutoRefresh', 'deactivateAutoRefresher', 'deactivateRefresher', 'deactivateSessionRefresher'],
    ['detectLanguage', 'getLanguage'],
    ['executeCode', 'codeExecute'],
    ['exists', 'isAvailable', 'isExistent', 'isPresent'],
    ['exportChat', 'chatExport', 'export'],
    ['getFooterDiv', 'getFooter'],
    ['getHeaderDiv', 'getHeader'],
    ['getLastPrompt', 'getLastQuery', 'getMyLastMsg', 'getMyLastQuery'],
    ['getContinueButton', 'getContinueGeneratingButton'],
    ['getScrollToBottomButton', 'getScrollButton'],
    ['getStopButton', 'getStopGeneratingButton'],
    ['getTextarea', 'getTextArea', 'getChatbar', 'getChatBar', 'getChatbox', 'getChatBox'],
    ['isFullScreen', 'isFullscreen', 'isfullscreen'],
    ['isLoaded', 'isloaded'],
    ['logOut', 'logout', 'logOff', 'logoff', 'signOut', 'signout', 'signOff', 'signoff'],
    ['minify', 'codeMinify', 'minifyCode'],
    ['new', 'newChat', 'startNewChat'],
    ['obfuscate', 'codeObfuscate', 'obfuscateCode'],
    ['printAllFunctions', 'showAllFunctions'],
    ['refactor', 'codeRefactor', 'refactorCode'],
    ['refreshReply', 'regenerate', 'regenerateReply'],
    ['refreshSession', 'sessionRefresh'],
    ['renderHTML', 'renderHtml', 'renderLinks', 'renderTags'],
    ['reviewCode', 'codeReview'],
    ['send', 'sendChat', 'sendMsg'],
    ['sendInNewChat', 'sendNewChat'],
    ['sentiment', 'analyzeSentiment', 'sentimentAnalysis'],
    ['startNewChat', 'new', 'newChat'],
    ['stop', 'stopChat', 'stopGenerating', 'stopResponse'],
    ['suggest', 'suggestion', 'recommend'],
    ['toggleAutoRefresh', 'toggleAutoRefresher', 'toggleRefresher', 'toggleSessionRefresher'],
    ['toggleScheme', 'toggleMode'],
    ['translate', 'translation', 'translator'],
    ['unminify', 'unminifyCode', 'codeUnminify'],
    ['writeCode', 'codeWrite']
];
const cjsFuncSynonyms = [
    ['account', 'acct'],
    ['activate', 'turnOn'],
    ['analyze', 'check', 'evaluate', 'review'],
    ['ask', 'send', 'submit'],
    ['button', 'btn'],
    ['continue', 'resume'],
    ['chats', 'history'],
    ['chat', 'conversation', 'convo'],
    ['clear', 'delete', 'remove'],
    ['data', 'details'],
    ['deactivate', 'deActivate', 'turnOff'],
    ['execute', 'interpret', 'interpreter', 'run'],
    ['firefox', 'ff'],
    ['generating', 'generation'],
    ['minify', 'uglify'],
    ['refactor', 'rewrite'],
    ['regenerate', 'regen'],
    ['render', 'parse'],
    ['reply', 'response'],
    ['sentiment', 'attitude', 'emotion', 'feeling', 'opinion', 'perception'],
    ['speak', 'say', 'speech', 'talk', 'tts'],
    ['summarize', 'tldr'],
    ['unminify', 'beautify', 'prettify', 'prettyPrint']
];
const camelCaser = (words) => {
    return words.map((word, index) => index === 0 || word == 's' ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(''); };
for (const prop in chatgpt) {

    // Create new function for each alias
    for (const subAliases of cjsFuncAliases) {
        if (subAliases.includes(prop)) {
            if (subAliases.some(element => element.includes('.'))) {
                const nestedFunction = subAliases.find(element => element.includes('.')).split('.')[1];
                for (const nestAlias of subAliases) {
                    if (/^(\w+)/.exec(nestAlias)[1] !== prop) { // don't alias og function
                        chatgpt[nestAlias] = chatgpt[prop][nestedFunction]; // make new function, reference og one
            }}} else { // alias direct functions
                for (const dirAlias of subAliases) {
                    if (dirAlias !== prop) { // don't alias og function
                        chatgpt[dirAlias] = chatgpt[prop]; // make new function, reference og one
            }}}
    }}

    do { // create new function per synonym per word per function
        var newFunctionsCreated = false;
        for (const funcName in chatgpt) {
            if (typeof chatgpt[funcName] == 'function') {
                const funcWords = funcName.split(/(?=[A-Zs])/); // split function name into constituent words
                for (const funcWord of funcWords) {
                    const synonymValues = [].concat(...cjsFuncSynonyms // flatten into single array w/ word's cjsFuncSynonyms
                        .filter(arr => arr.includes(funcWord.toLowerCase())) // filter in relevant synonym sub-arrays
                        .map(arr => arr.filter(synonym => synonym !== funcWord.toLowerCase()))); // filter out matching word
                    for (const synonym of synonymValues) { // create function per synonym
                        const newFuncName = camelCaser(funcWords.map(word => (word == funcWord ? synonym : word)));
                        if (!chatgpt[newFuncName]) { // don't alias existing functions
                            chatgpt[newFuncName] = chatgpt[funcName]; // make new function, reference og one
                            newFunctionsCreated = true;
    }}}}}} while (newFunctionsCreated); // loop over new functions to encompass all variations
}

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
