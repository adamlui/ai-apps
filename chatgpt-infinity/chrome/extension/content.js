/* NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org */
/* (c) 2023 KudoAI & contributors under the MIT license */
/* Source: https://github.com/chatgptjs/chatgpt.js */

(async () => {

    document.documentElement.setAttribute('cif-extension-installed', true) // for userscript auto-disable

    // Import libs
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'))
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add Chrome msg listener
    chrome.runtime.onMessage.addListener((request) => {
        infinityMode.fromMsg = true
        if (request.action === 'notify') notify(request.msg, request.position)
        else if (request.action === 'alert') alert(request.title, request.msg, request.btns)
        else if (request.action === 'updateToggleHTML') updateToggleHTML()
        else if (request.action === 'clickToggle') document.querySelector('#infToggleLabel').click()        
        else if (typeof window[request.action] === 'function') {
            const args = Array.isArray(request.args) ? request.args // preserve array if supplied
                       : request.args !== undefined ? [request.args] : [] // convert to array if single or no arg
            window[request.action](...args) // call expression functions
        }
        return true
    })

    // Init settings
    config.appSymbol = '∞' ; settings.save('userLanguage', (await chrome.i18n.getAcceptLanguages())[0])
    settings.save('infinityMode', false) // to reset popup toggle
    settings.load(['autoScrollDisabled', 'replyInterval', 'replyLanguage', 'toggleHidden']).then(() => {
        if (!config.replyLanguage) settings.save('replyLanguage', config.userLanguage) // init reply language if unset
        if (!config.replyInterval) settings.save('replyInterval', 7) // init refresh interval to 7 secs if unset
    })

    // Add listener to auto-disable Infinity Mode
    if (document.hidden !== undefined) { // ...if Page Visibility API supported
        document.addEventListener('visibilitychange', () => {
            if (config.infinityMode) infinityMode.deactivate()
    })}

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

    // Create sidebar toggle, add styles/classes/listener/HTML
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
    toggleLabel.addEventListener('click', () => {
        var toggleInput = document.querySelector('#infToggleInput')
        toggleInput.checked = !toggleInput.checked
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        settings.save('infinityMode', toggleInput.checked)
        infinityMode.toggle()
    })
    updateToggleHTML()

    // Insert full toggle on page load
    await chatgpt.isLoaded()
    settings.load(['extensionDisabled']).then(() => {
        if (!config.extensionDisabled) insertToggle() })

    // Monitor node changes to update toggle visibility
    const nodeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                settings.load(['extensionDisabled']).then(() => {
                    if (!config.extensionDisabled) insertToggle()
    })}})}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow ? shadow : ( chatgpt.isDarkMode() ? '' : 'shadow' ))
    }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

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

        // Hide toggle if set to hidden or extension disabled
        settings.load(['toggleHidden', 'extensionDisabled']).then(() => {
            if (config.toggleHidden || config.extensionDisabled) toggleLabel.style.display = 'none'
            return
        })

        // Clear old content
        while (toggleLabel.firstChild) toggleLabel.firstChild.remove()

        // Create elements
        const navicon = document.createElement('img') ; navicon.width = 18
        navicon.src = 'https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/media/images/icons/infinity-symbol/white/icon64.png'
        const label = document.createElement('label') ; label.className = 'switch' ; label.id = 'infToggleLabel'
        const labelText = document.createTextNode(chrome.i18n.getMessage('menuLabel_infinityMode') + ' '
            + chrome.i18n.getMessage('state_' + ( config.infinityMode ? 'enabled' : 'disabled' )))
        const input = document.createElement('input') ; input.id = 'infToggleInput'
        input.type = 'checkbox' ; input.checked = config.infinityMode ; input.disabled = true
        const span = document.createElement('span') ; span.className = 'slider'

        // Append elements
        label.appendChild(input) ; label.appendChild(span)
        toggleLabel.appendChild(navicon) ; toggleLabel.appendChild(label) ; toggleLabel.appendChild(labelText)

        // Show toggle
        toggleLabel.style.display = 'flex'
    }

    const infinityMode = {

        activate: async () => {
            if (!infinityMode.fromMsg) notify(chrome.i18n.getMessage('menuLabel_infinityMode') + ': ON')
            infinityMode.fromMsg = false
            try { document.querySelector('nav a').click() } catch (error) { return }
            setTimeout(() => {
                chatgpt.send('generate a single random q&a' + ( config.replyLanguage ? ( ' in ' + config.replyLanguage ) : '' )
                                                            + '. don\'t type anything else') }, 500)            
            await chatgpt.isIdle()
            if (config.infinityMode && !infinityMode.isActive) // double-check in case de-activated before scheduled
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
        },

        continue: async () => {
            chatgpt.send('do it again')
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(error) {}
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinityMode.isActive) // replace timer
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
        },

        deactivate: () => {
            if (!infinityMode.fromMsg) notify(chrome.i18n.getMessage('menuLabel_infinityMode') + ': OFF')
            infinityMode.fromMsg = false
            chatgpt.stop() ; clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null
            document.querySelector('#infToggleInput').checked = false // for window listener
            settings.save('infinityMode', false) // in case toggled by PV listener
        },

        toggle: () => { config.infinityMode ? infinityMode.activate() : infinityMode.deactivate() }
    }

    // Define LIVE RESTART functions

    restartOnReplyLang = () => { // eslint-disable-line no-undef
        settings.load('replyLanguage').then(() => {
            chatgpt.stop() ; document.querySelector('#infToggleLabel').click() // toggle off
            setTimeout(() => { document.querySelector('#infToggleLabel').click() }, 500) // toggle on
    })}

    restartOnReplyInt = () => { // eslint-disable-line no-undef
        settings.load('replyInterval').then(async () => {
            clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null ; await chatgpt.isIdle()
            if (config.infinityMode && !infinityMode.isActive) // double-check in case de-activated before scheduled
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
    })}

    // Define SYNC function

    syncExtension = () => { // settings + sidebar toggle visibility
        settings.load(['extensionDisabled', 'toggleHidden', 'autoScrollDisabled', 'replyInterval', 'replyLanguage'])
            .then(() => { updateToggleHTML() // hide/show sidebar toggle based on latest setting
    })}

})()
