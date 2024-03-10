// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license
// Source: https://github.com/KudoAI/chatgpt.js
// Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js

(async () => {

    // Import libs
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js')),
          { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add Chrome msg listener
    let fromMsg = false // to prevent double notifications blocked by popup
    chrome.runtime.onMessage.addListener(request => {
        fromMsg = true
        if (request.action == 'notify') notify(request.msg, request.position)
        else if (request.action == 'alert') alert(request.title, request.msg, request.btns)
        else if (request.action == 'updateToggleHTML') updateToggleHTML()
        else if (request.action == 'clickToggle') document.querySelector('#infToggleLabel').click()        
        else if (typeof window[request.action] == 'function') {
            const args = Array.isArray(request.args) ? request.args // preserve array if supplied
                       : request.args !== undefined ? [request.args] : [] // convert to array if single or no arg
            window[request.action](...args) // call expression functions
        }
        return true
    })

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    // Selectively disable content or user script
    if (!window.location.hostname == 'chat.openai.com') return
    document.documentElement.setAttribute('cif-extension-installed', true) // for userscript auto-disable

    // Init settings
    settings.save('userLanguage', (await chrome.i18n.getAcceptLanguages())[0])
    settings.save('infinityMode', false) // to reset popup toggle
    settings.load(['autoScrollDisabled', 'replyInterval', 'replyLanguage', 'replyTopic', 'toggleHidden']).then(() => {
        if (!config.replyLanguage) settings.save('replyLanguage', config.userLanguage) // init reply language if unset
        if (!config.replyTopic) settings.save('replyTopic', 'ALL') // init reply topic if unset
        if (!config.replyInterval) settings.save('replyInterval', 7) // init refresh interval to 7 secs if unset
    })

    await chatgpt.isLoaded()

    // Add listener to auto-disable Infinity Mode
    if (document.hidden !== undefined) { // ...if Page Visibility API supported
        document.addEventListener('visibilitychange', () => {
            if (config.infinityMode) infinityMode.deactivate()
    })}

    // Create nav toggle div, add styles
    const navToggleDiv = document.createElement('div')
    navToggleDiv.style.maxHeight = '44px' // prevent flex overgrowth
    navToggleDiv.style.margin = '2px 0' // add v-margins
    navToggleDiv.style.userSelect = 'none' // prevent highlighting
    navToggleDiv.style.cursor = 'pointer' // add finger cursor
    updateToggleHTML() // create children

    // Borrow classes from sidebar div
    const chatHistorySelector = 'nav[aria-label="Chat history"]',
          re_firstBtnText = chatgpt.history.isOff() ? /ChatGPTClear/ : /ChatGPT(ChatGPT|New)/
    chatgpt.history.isLoaded().then(setTimeout(() => { 
        const chatHistoryNav = document.querySelector(chatHistorySelector) || {},
              navLinks = chatHistoryNav.querySelectorAll('a'),
              firstLink = [...navLinks].find(link => re_firstBtnText.test(link.textContent)),
              firstIcon = firstLink.querySelector('div:first-child'),
              firstLabel = firstLink.querySelector('div:nth-child(2)')
        navToggleDiv.classList.add(...firstLink.classList, ...firstLabel.classList)
        navToggleDiv.querySelector('img')?.classList.add(...firstIcon.classList)
    }, 100))

    // Add listener to toggle switch/label/config/menu
    navToggleDiv.addEventListener('click', () => {
        const toggleInput = document.querySelector('#infToggleInput')
        toggleInput.checked = !toggleInput.checked
        settings.save('infinityMode', toggleInput.checked)
        updateToggleHTML()
        infinityMode.toggle()
    })

    // Insert full toggle on page load
    settings.load(['extensionDisabled']).then(() => {
        if (!config.extensionDisabled) insertToggle() })

    // Monitor node changes to update toggle visibility
    const nodeObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type == 'childList' && mutation.addedNodes.length) {
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
        await chatgpt.history.isLoaded()

        // Select sidebar elems
        const chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]') || {},
              navButtons = chatHistoryNav.querySelectorAll('a'),
              firstButton = [...navButtons].find(button => re_firstBtnText.test(button.textContent))

        // Hide 'Enable History' div + sibling gradient div
        if (chatgpt.history.isOff())
            try {
                const enableHistoryDiv = firstButton.parentNode.parentNode.nextElementSibling,
                      gradientDiv = enableHistoryDiv.nextElementSibling
                enableHistoryDiv.parentNode.style.width = '100%'
                for (const div of [enableHistoryDiv, gradientDiv]) div.style.display = 'none'
            } catch (err) {}

        // Insert toggle
        const parentToInsertInto = firstButton.parentNode.parentNode.parentNode,
              childToInsertBefore = firstButton.parentNode.parentNode.nextElementSibling
        if (!parentToInsertInto.contains(navToggleDiv))
            try { parentToInsertInto.insertBefore(navToggleDiv, childToInsertBefore) } catch (err) {}

        // Tweak styles
        firstButton.parentNode.parentNode.style.paddingBottom = '0'
        parentToInsertInto.style.backgroundColor = ( // hide transparency revealing chat log
            chatgpt.isDarkMode() ? '#0d0d0d' : '#f9f9f9' )
        if (chatgpt.history.isOff() && !config.toggleHidden)
            navToggleDiv.style.display = 'flex' // remove forced cloaking in private mode
        navToggleDiv.style.paddingLeft = chatgpt.history.isOff() ? '20px' : '8px'
        document.querySelector('#infToggleFavicon').src = `${ // update navicon color in case scheme changed
            config.assetHostURL }media/images/icons/infinity-symbol/${
            chatgpt.isDarkMode() ? 'white' : 'black' }/icon32.png`
    }

    function updateToggleHTML() {

        // Hide toggle if set to hidden or extension disabled
        settings.load(['toggleHidden', 'extensionDisabled']).then(() => {
            if (config.toggleHidden || config.extensionDisabled) navToggleDiv.style.display = 'none'
            else {

                // Create/size/position navicon
                const navicon = document.querySelector('#infToggleFavicon') || document.createElement('img')
                navicon.id = 'infToggleFavicon'
                navicon.style.width = navicon.style.height = '1.25rem'
                navicon.style.marginLeft = navicon.style.marginRight = '4px'

                // Create/ID/disable/hide/update checkbox
                const toggleInput = document.querySelector('#infToggleInput') || document.createElement('input')
                toggleInput.id = 'infToggleInput' ; toggleInput.type = 'checkbox' ; toggleInput.disabled = true
                toggleInput.style.display = 'none' ; toggleInput.checked = config.infinityMode

                // Create/ID/stylize switch
                const switchSpan = document.querySelector('#infSwitchSpan') || document.createElement('span')
                switchSpan.id = 'infSwitchSpan'
                const switchStyles = {
                    position: 'relative', left: `${ chatgpt.browser.isMobile() ? 211 : 152 }px`,
                    backgroundColor: toggleInput.checked ? '#ccc' : '#AD68FF', // init opposite  final color
                    width: '32px', height: '16px', '-webkit-transition': '0.4s', transition: '0.4s',  borderRadius: '28px'
                }
                Object.assign(switchSpan.style, switchStyles)

                // Create/stylize knob, append to switch
                const knobSpan = document.querySelector('#infToggleKnobSpan') || document.createElement('span')
                knobSpan.id = 'infToggleKnobSpan'
                const knobWidth = 13
                const knobStyles = {
                    position: 'absolute', left: '3px', bottom: '0.1em',
                    width: `${ knobWidth }px`, height: `${ knobWidth }px`, content: '""', borderRadius: '28px',
                    transform: toggleInput.checked ? // init opposite final pos
                        'translateX(0)' : `translateX(${ knobWidth }px) translateY(0)`,
                    backgroundColor: 'white',  '-webkit-transition': '0.4s', transition: '0.4s'
                }
                Object.assign(knobSpan.style, knobStyles) ; switchSpan.append(knobSpan)

                // Create/stylize/fill label
                const toggleLabel = document.querySelector('#infToggleLabel') || document.createElement('label')
                toggleLabel.id = 'infToggleLabel'
                toggleLabel.style.marginLeft = '-41px' // left-shift to navicon
                toggleLabel.style.cursor = 'pointer' // add finger cursor on hover
                toggleLabel.style.width = `${ chatgpt.browser.isMobile() ? 201 : 148 }px` // to truncate overflown text
                toggleLabel.style.overflow = 'hidden' // to truncate overflown text
                toggleLabel.style.textOverflow = 'ellipsis' // to truncate overflown text
                toggleLabel.innerText = chrome.i18n.getMessage('menuLabel_infinityMode') + ' '
                                      + chrome.i18n.getMessage('state_' + ( toggleInput.checked ? 'enabled' : 'disabled' ))
                // Append elements
                for (const elem of [navicon, toggleInput, switchSpan, toggleLabel]) navToggleDiv.append(elem)

                // Update visual state
                navToggleDiv.style.display = config.toggleHidden ? 'none' : 'flex'
                setTimeout(() => {
                    if (toggleInput.checked) {
                        switchSpan.style.backgroundColor = '#AD68FF'
                        switchSpan.style.boxShadow = '2px 1px 9px #D8A9FF'
                        knobSpan.style.transform = `translateX(${ knobWidth }px) translateY(0)`
                    } else {
                        switchSpan.style.backgroundColor = '#CCC'
                        switchSpan.style.boxShadow = 'none'
                        knobSpan.style.transform = 'translateX(0)'
                    }
                }, 1) // min delay to trigger transition fx
    }})}

    const infinityMode = {

        activate: async () => {
            if (!fromMsg) notify(chrome.i18n.getMessage('menuLabel_infinityMode') + ': ON')
            fromMsg = false
            if (chatgpt.browser.isMobile() && chatgpt.sidebar.isOn()) chatgpt.sidebar.hide()
            try { chatgpt.startNewChat() } catch (err) { return }
            settings.load('replyLanguage', 'replyTopic', 'replyInterval').then(() => setTimeout(() => {
                chatgpt.send('Generate a single random question'
                    + ( config.replyLanguage ? ( ' in ' + config.replyLanguage ) : '' )
                    + ( ' on ' + ( config.replyTopic == 'ALL' ? 'ALL topics' : 'the topic of ' + config.replyTopic ))
                    + ' then answer it. Don\'t type anything else.')
            }, 500))
            await chatgpt.isIdle()
            if (config.infinityMode && !infinityMode.isActive) // double-check in case de-activated before scheduled
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
        },

        continue: async () => {
            chatgpt.send('Do it again.')
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(err) {}
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinityMode.isActive) // replace timer
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
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
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
    })}}

    // Define SYNC function

    syncExtension = () => { // settings + sidebar toggle visibility
        settings.load(['extensionDisabled', 'toggleHidden', 'autoScrollDisabled',
                       'replyTopic', 'replyInterval', 'replyLanguage'])
            .then(() => { insertToggle() ; updateToggleHTML() // hide/show sidebar toggle based on latest setting
    })}

})()
