// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license
// Source: https://github.com/KudoAI/chatgpt.js
// Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js

(async () => {

    // Import LIBS
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js')),
          { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add CHROME MSG listener
    let fromMsg = false // to prevent double notifications blocked by popup
    chrome.runtime.onMessage.addListener(request => {
        fromMsg = true
        if (request.action == 'notify') notify(request.msg, request.position)
        else if (request.action == 'alert') siteAlert(request.title, request.msg, request.btns)
        else if (request.action == 'updateToggleHTML') updateToggleHTML()
        else if (request.action == 'clickToggle') document.getElementById('infinity-toggle-label').click()        
        else if (typeof window[request.action] == 'function') {
            const args = Array.isArray(request.args) ? request.args // preserve array if supplied
                       : request.args !== undefined ? [request.args] : [] // convert to array if single or no arg
            window[request.action](...args) // call expression functions
        }
        return true
    })

    // Selectively DISABLE content or user script
    if (!/chat(?:gpt|\.openai)\.com/.test(window.location.hostname)) return
    document.documentElement.setAttribute('cif-extension-installed', true) // for userscript auto-disable

    // Init SETTINGS
    settings.save('userLanguage', (await chrome.i18n.getAcceptLanguages())[0])
    settings.save('infinityMode', false) // to reset popup toggle
    settings.load(['autoScrollDisabled', 'replyInterval', 'replyLanguage', 'replyTopic', 'toggleHidden']).then(() => {
        if (!config.replyLanguage) settings.save('replyLanguage', config.userLanguage) // init reply language if unset
        if (!config.replyTopic) settings.save('replyTopic', 'ALL') // init reply topic if unset
        if (!config.replyInterval) settings.save('replyInterval', 7) // init refresh interval to 7 secs if unset
    })

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {

        // Strip state word to append colored one later
        const foundState = ['ON', 'OFF'].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration, shadow || chatgpt.isDarkMode() ? '' : 'shadow')
        const notifs = document.querySelectorAll('.chatgpt-notif'),
              notif = notifs[notifs.length -1]

        // Append styled state word
        if (foundState) {
            const styledState = document.createElement('span')
            styledState.style.cssText = `color: ${
                foundState == 'OFF' ? '#ef4848 ; text-shadow: rgba(255, 169, 225, 0.44) 2px 1px 5px'
                                    : '#5cef48 ; text-shadow: rgba(255, 250, 169, 0.38) 2px 1px 5px' }`
            styledState.append(foundState) ; notif.append(styledState)
        }
    }

    function siteAlert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    // Define UI functions

    async function insertToggle() {

        // Insert toggle
        const toggleParent = document.querySelector('nav')
        if (!toggleParent.contains(navToggleDiv))
            toggleParent.insertBefore(navToggleDiv, toggleParent.children[1])

        // Tweak styles
        navToggleDiv.style.flexGrow = 'unset' // overcome OpenAI .grow
        navToggleDiv.style.paddingLeft = '8px'
        document.getElementById('infinity-toggle-knob-span').style.boxShadow = (
            'rgba(0, 0, 0, .3) 0 1px 2px 0' + ( chatgpt.isDarkMode() ? ', rgba(0, 0, 0, .15) 0 3px 6px 2px' : '' ))
        toggleParent.style.paddingTop = '13px'
        const navicon = document.getElementById('infinity-toggle-navicon')
        if (navicon) navicon.src = `${ // update navicon color in case scheme changed
            config.assetHostURL }media/images/icons/infinity-symbol/${
            chatgpt.isDarkMode() ? 'white' : 'black' }/icon32.png`
    }

    function updateToggleHTML() {

        // Hide toggle if set to hidden or extension disabled
        settings.load(['toggleHidden', 'extensionDisabled']).then(() => {
            if (config.toggleHidden || config.extensionDisabled) navToggleDiv.style.display = 'none'
            else {

                // Create/size/position navicon
                const navicon = document.getElementById('infinity-toggle-navicon') || document.createElement('img')
                navicon.id = 'infinity-toggle-navicon'
                navicon.style.width = navicon.style.height = '1.25rem'
                navicon.style.marginLeft = '2px' ; navicon.style.marginRight = '4px'

                // Create/ID/disable/hide/update checkbox
                const toggleInput = document.getElementById('infinity-toggle-input') || document.createElement('input')
                toggleInput.id = 'infinity-toggle-input' ; toggleInput.type = 'checkbox' ; toggleInput.disabled = true
                toggleInput.style.display = 'none' ; toggleInput.checked = config.infinityMode

                // Create/ID/stylize switch
                const switchSpan = document.getElementById('infinity-switch-span') || document.createElement('span')
                switchSpan.id = 'infinity-switch-span'
                const switchStyles = {
                    position: 'relative', left: `${ chatgpt.browser.isMobile() ? 211 : !firstLink ? 160 : isGPT4oUI ? 147 : 154 }px`,
                    backgroundColor: toggleInput.checked ? '#ccc' : '#AD68FF', // init opposite  final color
                    bottom: `${ !firstLink ? -0.15 : !isGPT4oUI ? 0.05 : 0 }em`,
                    width: '30px', height: '15px', '-webkit-transition': '.4s', transition: '0.4s',  borderRadius: '28px'
                }
                Object.assign(switchSpan.style, switchStyles)

                // Create/stylize knob, append to switch
                const knobSpan = document.getElementById('infinity-toggle-knob-span') || document.createElement('span')
                knobSpan.id = 'infinity-toggle-knob-span'
                const knobWidth = 12
                const knobStyles = {
                    position: 'absolute', left: '3px', bottom: '1.25px',
                    width: `${knobWidth}px`, height: `${knobWidth}px`, content: '""', borderRadius: '28px',
                    transform: toggleInput.checked ? // init opposite final pos
                        'translateX(0)' : 'translateX(13px) translateY(0)',
                    backgroundColor: 'white',  '-webkit-transition': '0.4s', transition: '0.4s'
                }
                Object.assign(knobSpan.style, knobStyles) ; switchSpan.append(knobSpan)

                // Create/stylize/fill label
                const toggleLabel = document.getElementById('infinity-toggle-label') || document.createElement('label')
                toggleLabel.id = 'infinity-toggle-label'
                if (!firstLink) { // add font size/weight since no firstLink to borrow from
                    toggleLabel.style.fontSize = '0.875rem' ; toggleLabel.style.fontWeight = 600 }
                toggleLabel.style.marginLeft = `-${ !firstLink ? 23 : 41 }px` // left-shift to navicon
                toggleLabel.style.cursor = 'pointer' // add finger cursor on hover
                toggleLabel.style.width = `${ chatgpt.browser.isMobile() ? 201 : isGPT4oUI ? 145 : 148 }px` // to truncate overflown text
                toggleLabel.style.overflow = 'hidden' // to truncate overflown text
                toggleLabel.style.textOverflow = 'ellipsis' // to truncate overflown text
                toggleLabel.innerText = chrome.i18n.getMessage('menuLabel_infinityMode') + ' '
                                      + chrome.i18n.getMessage('state_' + ( toggleInput.checked ? 'enabled' : 'disabled' ))
                // Append elements
                for (const elem of [navicon, toggleInput, switchSpan, toggleLabel]) navToggleDiv.append(elem)

                // Update visual state
                navToggleDiv.style.display = config.toggleHidden ? 'none' : 'flex'
                setTimeout(() => {
                    switchSpan.style.backgroundColor = toggleInput.checked ? '#ad68ff' : '#ccc'
                    switchSpan.style.boxShadow = toggleInput.checked ? '2px 1px 9px #d8a9ff' : 'none'
                    knobSpan.style.transform = toggleInput.checked ? 'translateX(13px) translateY(0)' : 'translateX(0)'
                }, 1) // min delay to trigger transition fx
    }})}

    const infinityMode = {

        async activate() {
            if (!fromMsg) notify(chrome.i18n.getMessage('menuLabel_infinityMode') + ': ON')
            fromMsg = false
            if (chatgpt.browser.isMobile() && chatgpt.sidebar.isOn()) chatgpt.sidebar.hide()
            if (!new URL(document.location).pathname.startsWith('/g/')) // not on GPT page
                try { chatgpt.startNewChat() } catch (err) { return } // start new chat
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

        async continue() {
            chatgpt.send('Do it again.')
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(err) {}
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinityMode.isActive) // replace timer
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
        },

        async deactivate() {
            if (!fromMsg) notify(chrome.i18n.getMessage('menuLabel_infinityMode') + ': OFF')
            fromMsg = false
            chatgpt.stop() ; clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null
            document.getElementById('infinity-toggle-input').checked = false // for window listener
            settings.save('infinityMode', false) // in case toggled by PV listener
        },

        async toggle() { config.infinityMode ? infinityMode.activate() : infinityMode.deactivate() }
    }

    // Define LIVE RESTART functions

    restartInNewChat = () => { // eslint-disable-line no-undef
        chatgpt.stop() ; document.getElementById('infinity-toggle-label').click() // toggle off
        setTimeout(() => { document.getElementById('infinity-toggle-label').click() }, 750) // toggle on
    }

    resetInSameChat = async () => { // eslint-disable-line no-undef
        clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null ; await chatgpt.isIdle()
        if (config.infinityMode && !infinityMode.isActive) { // double-check in case de-activated before scheduled
            settings.load('replyInterval').then(() => {
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
    })}}

    // Define SYNC function

    syncExtension = () => { // settings + sidebar toggle visibility
        settings.load(['autoScrollDisabled', 'autoStart', 'extensionDisabled',
                       'replyInterval', 'replyLanguage', 'replyTopic', 'toggleHidden'])
            .then(() => { insertToggle() ; updateToggleHTML() // hide/show sidebar toggle based on latest setting
    })}

    // Init UI flags
    await Promise.race([chatgpt.isLoaded(), new Promise(resolve => setTimeout(resolve, 5000))]) // initial UI loaded
    await chatgpt.sidebar.isLoaded()
    const isGPT4oUI = document.documentElement.className.includes(' '),
            firstLink = chatgpt.getNewChatLink()

    // Add LISTENER to auto-disable Infinity Mode
    if (document.hidden !== undefined) // ...if Page Visibility API supported
        document.onvisibilitychange = () => {
            if (config.infinityMode) {                
                if (document.getElementById('infinity-toggle-label')) // ensure toggle state is accurate
                    document.getElementById('infinity-toggle-label').click()
                else infinityMode.deactivate()
        }}

    // Add/update TWEAKS style
    const tweaksStyleUpdated = 20240724 // datestamp of last edit for this file's `tweaksStyle`
    let tweaksStyle = document.getElementById('tweaks-style') // try to select existing style
    if (!tweaksStyle || parseInt(tweaksStyle.getAttribute('last-updated'), 10) < tweaksStyleUpdated) { // if missing or outdated
        if (!tweaksStyle) { // outright missing, create/id/attr/append it first
            tweaksStyle = document.createElement('style') ; tweaksStyle.id = 'tweaks-style'
            tweaksStyle.setAttribute('last-updated', tweaksStyleUpdated.toString())
            document.head.append(tweaksStyle)
        }
        tweaksStyle.innerText = (
            ( chatgpt.isDarkMode() ? '.chatgpt-modal > div { border: 1px solid white }' : '' )
          + '.chatgpt-modal button {'
              + 'font-size: 0.77rem ; text-transform: uppercase ;'
              + 'border-radius: 0 !important ; padding: 5px !important ; min-width: 102px }'
          + '.chatgpt-modal button:hover { transform: scale(1.055) }'
          + '.modal-buttons { margin-left: -13px !important }'
          + '* { scrollbar-width: thin }' // make FF scrollbar skinny to not crop toggle
          + '.sticky div:active, .sticky div:focus {' // post-GPT-4o UI sidebar button container
              + 'transform: none !important }' // disable distracting click zoom effect
        )
    }

    // Create NAV TOGGLE div, add styles
    const navToggleDiv = document.createElement('div')
    navToggleDiv.style.height = '37px'
    navToggleDiv.style.margin = '2px 0' // add v-margins
    navToggleDiv.style.userSelect = 'none' // prevent highlighting
    navToggleDiv.style.cursor = 'pointer' // add finger cursor
    updateToggleHTML() // create children

    if (firstLink) { // borrow/assign classes from sidebar div
        const firstIcon = firstLink.querySelector('div:first-child'),
                firstLabel = firstLink.querySelector('div:nth-child(2)')
        navToggleDiv.classList.add(...firstLink.classList, ...firstLabel.classList)
        navToggleDiv.querySelector('img')?.classList.add(...firstIcon.classList)
    }

    settings.load(['extensionDisabled']).then(() => { if (!config.extensionDisabled) insertToggle() })

    // Add LISTENER to toggle switch/label/config/menu
    navToggleDiv.onclick = () => {
        const toggleInput = document.getElementById('infinity-toggle-input')
        toggleInput.checked = !toggleInput.checked
        settings.save('infinityMode', toggleInput.checked)
        updateToggleHTML()
        infinityMode.toggle()
    }

    // Auto-start if enabled
    settings.load('autoStart').then(() => { if (config.autoStart) {
        const navToggle = document.getElementById('infinity-toggle-input')
        if (navToggle) navToggle.parentNode.click()
        else { // activate via infinityMode funcs obj
            infinityMode.activate()
            settings.save('infinityMode', true) // so popup.js updates toggle
    }}})

    // Monitor <html> to maintain SIDEBAR TOGGLE VISIBILITY on node changes
    const nodeObserver = new MutationObserver(mutations => { mutations.forEach(mutation => {
        if (mutation.type == 'childList' && mutation.addedNodes.length)
            settings.load(['extensionDisabled']).then(() => { if (!config.extensionDisabled) insertToggle()
    })})}) ; nodeObserver.observe(document.documentElement, { childList: true, subtree: true })    

})()
