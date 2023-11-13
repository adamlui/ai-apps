// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js
// Latest minified release: https://code.chatgptjs.org/chatgpt-latest.min.js

(async () => {

    // Import libs
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js')),
          { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add Chrome msg listener
    let fromMsg = false // to prevent double notifications blocked by popup
    chrome.runtime.onMessage.addListener(request => {
        fromMsg = true
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

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    // Selectively disable content or user script
    if (!window.location.href.startsWith('https://chat.openai.com')) return
    document.documentElement.setAttribute('cif-extension-installed', true) // for userscript auto-disable

    // Init settings
    settings.save('userLanguage', (await chrome.i18n.getAcceptLanguages())[0])
    settings.save('infinityMode', false) // to reset popup toggle
    settings.load(['autoScrollDisabled', 'replyInterval', 'replyLanguage', 'replyTopic', 'toggleHidden']).then(() => {
        if (!config.replyLanguage) settings.save('replyLanguage', config.userLanguage) // init reply language if unset
        if (!config.replyTopic) settings.save('replyTopic', 'ALL') // init reply topic if unset
        if (!config.replyInterval) settings.save('replyInterval', 7) // init refresh interval to 7 secs if unset
    })

    // Wait for site load + determine UI for toggle routines    
    await chatgpt.isLoaded() ; const isGizmoUI = chatgpt.isGizmoUI()

    // Add listener to auto-disable Infinity Mode
    if (document.hidden !== undefined) { // ...if Page Visibility API supported
        document.addEventListener('visibilitychange', () => {
            if (config.infinityMode) infinityMode.deactivate()
    })}

    // Stylize toggle switch (if style missing or outdated)
    const switchStyleUpdated = 20231110; // datestamp of last edit for this file's `switchStyle` 
    let switchStyle = document.getElementById('chatgpt-switch-style') // try to select existing style
    if (!switchStyle || parseInt(switchStyle.getAttribute('last-updated'), 10) < switchStyleUpdated) { // if missing or outdated
        if (!switchStyle) { // outright missing, create/id/attr/append it first
            switchStyle = document.createElement('style') ; switchStyle.id = 'chatgpt-switch-style'
            switchStyle.setAttribute('last-updated', switchStyleUpdated.toString())
            document.head.appendChild(switchStyle);
        }
        const knobWidth = isGizmoUI ? 13 : 14
        switchStyle.innerText = (
            '.switch { position: absolute ; left: 208px ;'
              + `width: ${ isGizmoUI ? 32 : 34 }px ; height: ${ isGizmoUI ? 16 : 18 }px }`
          + '.switch input { opacity: 0 ; width: 0 ; height: 0 }' // hide checkbox
          + '.slider { position: absolute ; cursor: pointer ; top: 0 ; left: 0 ; right: 0 ; bottom: 0 ;'
              + 'background-color: #ccc ; -webkit-transition: .4s ; transition: .4s ; border-radius: 28px }'
          + '.slider:before { position: absolute ; content: "" ; left: 3px ;'
              + `width: ${ knobWidth }px ; height: ${ knobWidth }px ; bottom: ${ isGizmoUI ? '0.1em' : '2px' } ;`
              + 'background-color: white ; -webkit-transition: .4s ; transition: .4s ; border-radius: 28px }'

          // Position/color ON-state
          + 'input:checked { position: absolute ; right: 3px }'
          + 'input:checked + .slider { background-color: #AD68FF ; box-shadow: 2px 1px 20px #D8A9FF }'
          + 'input:checked + .slider:before {'
              + `-webkit-transform: translateX(${ knobWidth }px) translateY(${ isGizmoUI ? 0 : 1 }px) ;`
              + `-ms-transform: translateX(${ knobWidth }px) translateY(${ isGizmoUI ? 0 : 1 }px) ;`
              + `transform: translateX(${ knobWidth }px) }`
        )
    }

    // Create nav toggle div, add styles
    const navToggleDiv = document.createElement('div')
    navToggleDiv.style.maxHeight = '44px' // prevent flex overgrowth
    navToggleDiv.style.margin = '2px 0' // add v-margins
    navToggleDiv.style.userSelect = 'none' // prevent highlighting
    navToggleDiv.style.cursor = 'pointer' // add finger cursor
    updateToggleHTML() // create children

    // Borrow classes from sidebar div
    const chatHistorySelector = 'nav[aria-label="Chat history"]'
    if (isGizmoUI) {
        chatgpt.history.isLoaded().then(setTimeout(() => { 
            const chatHistoryNav = document.querySelector(chatHistorySelector) || {},
                  navLinks = chatHistoryNav.querySelectorAll('a'),
                  firstLink = [...navLinks].find(link => link.textContent.includes(
                      chatgpt.history.isOff() ? 'ChatGPTClear' : 'ChatGPTChatGPT')) || {},
                  firstIcon = firstLink.querySelector('div:first-child'),
                  firstLabel = firstLink.querySelector('div:nth-child(2)')
            navToggleDiv.classList.add(...firstLink.classList, ...firstLabel.classList)
            navToggleDiv.querySelector('img').classList.add(...firstIcon.classList)
        }, 100))
    } else {
        for (const navLink of document.querySelectorAll(chatHistorySelector + ' a')) {
            if (/(new|clear) chat/i.test(navLink.text)) { // focus on new/clear chat button
                navToggleDiv.setAttribute('class', navLink.classList) // borrow link classes
                navLink.parentNode.style.margin = '2px 0' // add v-margins
                break // stop looping since class assignment is done
    }}}

    // Add listener to toggle switch/label/config/menu
    navToggleDiv.addEventListener('click', () => {
        const toggleInput = document.querySelector('#infToggleInput')
        toggleInput.checked = !toggleInput.checked
        setTimeout(updateToggleHTML, 200) // sync label change w/ switch movement
        settings.save('infinityMode', toggleInput.checked)
        infinityMode.toggle()
    })

    // Insert full toggle on page load
    settings.load(['extensionDisabled']).then(() => {
        if (!config.extensionDisabled) insertToggle() })

    // Monitor node changes to update toggle visibility
    const nodeObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                settings.load(['extensionDisabled']).then(() => {
                    if (!config.extensionDisabled) insertToggle()
    })}})}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || chatgpt.isDarkMode() ? '' : 'shadow' )
    }

    alertToUpdate = version => { // eslint-disable-line no-undef
        if (version) {
            alert(`${ chrome.i18n.getMessage('alert_updateAvail') }!`,
                chrome.i18n.getMessage('alert_newerVer') + ' ' + chrome.i18n.getMessage('appName')
                    + ' v' + version.toString() + ' ' + chrome.i18n.getMessage('alert_isAvail') + '!   '
                    + '<a target="_blank" rel="noopener" style="font-size: 0.7rem" '
                        + 'href="' + config.gitHubURL + '/commits/main/chrome/extension" '
                        + '>' + chrome.i18n.getMessage('link_viewChanges') + '</a>',
                function reloadChrome() { chrome.runtime.reload() } // update button
            )
        } else {
            alert(chrome.i18n.getMessage('alert_upToDate') + '!',
                chrome.i18n.getMessage('appName') + ' v' + chrome.runtime.getManifest().version
                    + ' ' + chrome.i18n.getMessage('alert_isUpToDate') + '!')
    }}

    // Define TOGGLE functions

    async function insertToggle() {
        if (isGizmoUI) await chatgpt.history.isLoaded()

        // Select sidebar elems
        const chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]') || {},
              navButtons = chatHistoryNav.querySelectorAll('a'),
              firstButton = ( isGizmoUI ? [...navButtons].find(button => button.textContent.includes(
                                  chatgpt.history.isOff() ? 'ChatGPTClear' : 'ChatGPTChatGPT'))
                                        : chatHistoryNav.querySelector('a') ) || {}
        // Hide 'Enable History' div
        if (chatgpt.history.isOff())
            try {
                const enableHistoryDiv = isGizmoUI
                  ? firstButton.parentNode.parentNode.nextElementSibling
                  : firstButton.parentNode.nextElementSibling
                enableHistoryDiv.style.display = 'none'
                if (isGizmoUI) enableHistoryDiv.parentNode.style.width = '100%'
            } catch (err) {}

        // Insert toggle
        const parentToInsertInto = isGizmoUI ? firstButton.parentNode.parentNode.parentNode : chatHistoryNav,
              childToInsertBefore = isGizmoUI ? firstButton.parentNode.parentNode.nextElementSibling : firstButton.parentNode
        if (!parentToInsertInto.contains(navToggleDiv))
            try { parentToInsertInto.insertBefore(navToggleDiv, childToInsertBefore) } catch (err) {}

        // Tweak styles
        if (isGizmoUI) {
            firstButton.parentNode.parentNode.style.paddingBottom = '0'
            navToggleDiv.style.display = 'flex' // remove forced cloaking
            navToggleDiv.style.paddingLeft = chatgpt.history.isOff() ? '20px' : '8px'
        }
    }

    function updateToggleHTML() {

        // Hide toggle if set to hidden or extension disabled
        settings.load(['toggleHidden', 'extensionDisabled']).then(() => {
            if (config.toggleHidden || config.extensionDisabled) navToggleDiv.style.display = 'none'
            else {

                // Clear old content
                while (navToggleDiv.firstChild) navToggleDiv.firstChild.remove()

                // Create elements
                const navicon = document.createElement('img'),
                      label = document.createElement('label'),
                      labelText = document.createTextNode(chrome.i18n.getMessage('menuLabel_infinityMode') + ' '
                          + chrome.i18n.getMessage('state_' + ( config.infinityMode ? 'enabled' : 'disabled' ))),
                      input = document.createElement('input'),
                      span = document.createElement('span')
                navicon.src = config.assetHostURL + 'media/images/icons/infinity-symbol/white/icon64.png'
                if (isGizmoUI) {
                    navicon.style.width = navicon.style.height = '1.25rem'
                    navicon.style.marginLeft = navicon.style.marginRight = '4px'
                } else navicon.width = 18
                label.id = 'infToggleLabel' ; label.className = 'switch'
                input.id = 'infToggleInput' ; input.type = 'checkbox' ; input.disabled = true ; input.checked = config.infinityMode
                span.className = 'slider'

                // Append elements
                label.appendChild(input) ; label.appendChild(span)
                navToggleDiv.appendChild(navicon) ; navToggleDiv.appendChild(label) ; navToggleDiv.appendChild(labelText)

                // Show toggle
                navToggleDiv.style.display = 'flex'
    }})}

    const infinityMode = {

        activate: async () => {
            if (!fromMsg) notify(chrome.i18n.getMessage('menuLabel_infinityMode') + ': ON')
            fromMsg = false
            try { chatgpt.startNewChat() } catch (error) { return }
            settings.load('replyLanguage', 'replyTopic', 'replyInterval').then(() => setTimeout(() => {
                chatgpt.send('Generate a single random question'
                    + ( config.replyLanguage ? ( ' in ' + config.replyLanguage ) : '' )
                    + ( ' on ' + ( config.replyTopic === 'ALL' ? 'ALL topics' : 'the topic of ' + config.replyTopic ))
                    + ' then answer it. Don\'t type anything else.')
            }, 500))
            await chatgpt.isIdle()
            if (config.infinityMode && !infinityMode.isActive) // double-check in case de-activated before scheduled
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
        },

        continue: async () => {
            chatgpt.send('Do it again.')
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(error) {}
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinityMode.isActive) // replace timer
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
        },

        deactivate: () => {
            if (!fromMsg) notify(chrome.i18n.getMessage('menuLabel_infinityMode') + ': OFF')
            fromMsg = false
            chatgpt.stop() ; clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null
            document.querySelector('#infToggleInput').checked = false // for window listener
            settings.save('infinityMode', false) // in case toggled by PV listener
        },

        toggle: () => { config.infinityMode ? infinityMode.activate() : infinityMode.deactivate() }
    }

    // Define LIVE RESTART functions

    restartInNewChat = () => { // eslint-disable-line no-undef
        chatgpt.stop() ; document.querySelector('#infToggleLabel').click() // toggle off
        setTimeout(() => { document.querySelector('#infToggleLabel').click() }, 750) // toggle on
    }

    resetInSameChat = async () => { // eslint-disable-line no-undef
        clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null ; await chatgpt.isIdle()
        if (config.infinityMode && !infinityMode.isActive) { // double-check in case de-activated before scheduled
            settings.load('replyInterval').then(() => {
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval) * 1000)
    })}}

    // Define SYNC function

    syncExtension = () => { // settings + sidebar toggle visibility
        settings.load(['extensionDisabled', 'toggleHidden', 'autoScrollDisabled',
                       'replyTopic', 'replyInterval', 'replyLanguage'])
            .then(() => { updateToggleHTML() // hide/show sidebar toggle based on latest setting
    })}

})()
