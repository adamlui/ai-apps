// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    document.documentElement.setAttribute('cif-extension-installed', true) // for userscript auto-disable

    // Import LIBS
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js')),
          { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    await import(chrome.runtime.getURL('lib/dom.js'))

    // Import DATA
    const app = await (await fetch(chrome.runtime.getURL('app.json'))).json()
    app.urls.assetHost = app.urls.gitHub.replace('github.com', 'cdn.jsdelivr.net/gh') + `@${app.latestAssetCommitHash}`

    // Add CHROME MSG listener
    let fromMsg = false // to prevent double notifications blocked by popup
    chrome.runtime.onMessage.addListener(req => {
        fromMsg = true
        if (req.action == 'notify') notify(req.msg, req.pos)
        else if (req.action == 'alert') siteAlert(req.title, req.msg, req.btns)
        else if (req.action == 'resetInSameChat') resetInSameChat()
        else if (req.action == 'restartInNewChat') restartInNewChat()
        else if (req.action == 'updateToggleHTML') updateToggleHTML()
        else if (req.action == 'clickToggle') document.getElementById('infinity-toggle-label').click()        
        else if (req.action == 'sync.storageToUI') syncStorageToUI()
    })

    // Init ENV info
    const env = { browser: { isMobile: chatgpt.browser.isMobile() }}

    // Init SETTINGS
    settings.save('userLanguage', (await chrome.i18n.getAcceptLanguages())[0])
    settings.save('infinityMode', false) // to reset popup toggle
    await settings.load(settings.availKeys)
    if (!config.replyLanguage) settings.save('replyLanguage', config.userLanguage) // init reply language if unset
    if (!config.replyTopic) settings.save('replyTopic', 'ALL') // init reply topic if unset
    if (!config.replyInterval) settings.save('replyInterval', 7) // init refresh interval to 7 secs if unset

    // Define FEEDBACK functions

    function notify(msg, pos = '', notifDuration = '', shadow = '') {

        // Strip state word to append colored one later
        const foundState = ['ON', 'OFF'].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${app.symbol} ${msg}`, pos, notifDuration, shadow || chatgpt.isDarkMode() ? '' : 'shadow')
        const notif = document.querySelector('.chatgpt-notif:last-child')

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
        return chatgpt.alert(title, msg, btns, checkbox, width )}

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
        const navicon = document.getElementById('infinity-toggle-navicon')
        if (navicon) navicon.src = `${ // update navicon color in case scheme changed
            app.urls.assetHost }/media/images/icons/infinity-symbol/${
            chatgpt.isDarkMode() ? 'white' : 'black' }/icon32.png`
    }

    async function updateToggleHTML() {

        // Hide toggle if set to hidden or extension disabled
        await settings.load(['toggleHidden', 'extensionDisabled'])
        if (config.toggleHidden || config.extensionDisabled) navToggleDiv.style.display = 'none'
        else {

            // Create/size/position navicon
            const navicon = document.getElementById('infinity-toggle-navicon')
                         || dom.create.elem('img', { id: 'infinity-toggle-navicon' })
            navicon.style.width = navicon.style.height = '1.25rem'
            navicon.style.marginLeft = '2px' ; navicon.style.marginRight = '4px'

            // Create/ID/disable/hide/update checkbox
            const toggleInput = document.getElementById('infinity-toggle-input')
                             || dom.create.elem('input', { id: 'infinity-toggle-input', type: 'checkbox', disabled: true })
            toggleInput.style.display = 'none' ; toggleInput.checked = config.infinityMode

            // Create/ID/stylize switch
            const switchSpan = document.getElementById('infinity-switch-span')
                            || dom.create.elem('span', { id: 'infinity-switch-span' })
            const switchStyles = {
                position: 'relative', left: `${ env.browser.isMobile ? 211 : !ui.firstLink ? 160 : 154 }px`,
                backgroundColor: toggleInput.checked ? '#ccc' : '#AD68FF', // init opposite  final color
                bottom: `${ !ui.firstLink ? -0.15 : 0 }em`,
                width: '30px', height: '15px', '-webkit-transition': '.4s', transition: '0.4s',  borderRadius: '28px'
            }
            Object.assign(switchSpan.style, switchStyles)

            // Create/stylize knob, append to switch
            const knobSpan = document.getElementById('infinity-toggle-knob-span')
                          || dom.create.elem('span', { id: 'infinity-toggle-knob-span' })
            const knobStyles = {
                position: 'absolute', left: '3px', bottom: '1.25px',
                width: '12px', height: '12px', content: '""', borderRadius: '28px',
                transform: toggleInput.checked ? // init opposite final pos
                    'translateX(0)' : 'translateX(13px) translateY(0)',
                backgroundColor: 'white',  '-webkit-transition': '0.4s', transition: '0.4s'
            }
            Object.assign(knobSpan.style, knobStyles) ; switchSpan.append(knobSpan)

            // Create/stylize/fill label
            const toggleLabel = document.getElementById('infinity-toggle-label')
                             || dom.create.elem('label', { id: 'infinity-toggle-label' })
            if (!ui.firstLink) { // add font size/weight since no ui.firstLink to borrow from
                toggleLabel.style.fontSize = '0.875rem' ; toggleLabel.style.fontWeight = 600 }
            toggleLabel.style.marginLeft = `-${ !ui.firstLink ? 23 : 41 }px` // left-shift to navicon
            toggleLabel.style.cursor = 'pointer' // add finger cursor on hover
            toggleLabel.style.width = `${ env.browser.isMobile ? 201 : 148 }px` // to truncate overflown text
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
        }
    }

    const infinityMode = {

        async activate() {
            const activatePrompt = 'Generate a single random question'
                + ( config.replyLanguage ? ( ' in ' + config.replyLanguage ) : '' )
                + ( ' on ' + ( config.replyTopic == 'ALL' ? 'ALL topics' : 'the topic of ' + config.replyTopic ))
                + ' then answer it. Don\'t type anything else.'
            if (!fromMsg) notify(`${chrome.i18n.getMessage('menuLabel_infinityMode')}: ON`)
            fromMsg = false
            if (env.browser.isMobile && chatgpt.sidebar.isOn()) chatgpt.sidebar.hide()
            if (!new URL(location).pathname.startsWith('/g/')) // not on GPT page
                try { chatgpt.startNewChat() } catch (err) { return } // start new chat
            await new Promise(resolve => setTimeout(resolve, 500)) // sleep 500ms
            await settings.load('replyLanguage', 'replyTopic', 'replyInterval')
            chatgpt.send(activatePrompt)
            await new Promise(resolve => setTimeout(resolve, 3000)) // sleep 3s
            if (!document.querySelector('[data-message-author-role]') // new chat reset due to OpenAI bug
                && config.infinityMode) // ...and toggle still active
                    chatgpt.send(activatePrompt) // ...so prompt again
            await new Promise(resolve => { // when stop btn missing
                // ...instead of await chatgpt.isIdle() since method waits for chat to start
                // but prev 3s sleep to fight OpenAI reset bug can be longer than start/stop
                new MutationObserver((_, obs) => {
                    if (!chatgpt.getStopBtn()) { obs.disconnect(); resolve() }
                }).observe(document.body, { childList: true, subtree: true })
            })
            if (config.infinityMode && !infinityMode.isActive) // double-check in case de-activated before scheduled
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
        },

        async continue() {
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(err) {}
            chatgpt.send('Do it again.')
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinityMode.isActive) // replace timer
                infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
        },

        async deactivate() {
            if (!fromMsg) notify(`${chrome.i18n.getMessage('menuLabel_infinityMode')}: OFF`)
            fromMsg = false
            chatgpt.stop() ; clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null
            document.getElementById('infinity-toggle-input').checked = false // for window listener
            settings.save('infinityMode', false) // in case toggled by PV listener
        },

        async toggle() { config.infinityMode ? infinityMode.activate() : infinityMode.deactivate() }
    }

    // Define LIVE RESTART functions

    function restartInNewChat() {
        chatgpt.stop() ; document.getElementById('infinity-toggle-label').click() // toggle off
        setTimeout(() => { document.getElementById('infinity-toggle-label').click() }, 750) // toggle on
    }

    async function resetInSameChat() {
        clearTimeout(infinityMode.isActive) ; infinityMode.isActive = null ; await chatgpt.isIdle()
        if (config.infinityMode && !infinityMode.isActive) { // double-check in case de-activated before scheduled
            await settings.load('replyInterval')
            infinityMode.isActive = setTimeout(infinityMode.continue, parseInt(config.replyInterval, 10) * 1000)
        }
    }

    // Define SYNC function

    async function syncStorageToUI() { // from popup.js toggle + service worker actve-tab listeners
        await settings.load(settings.availKeys)
        insertToggle() ; updateToggleHTML() // hide/show sidebar toggle based on latest setting
    }

    // Init BROWSER/UI props
    await Promise.race([chatgpt.isLoaded(), new Promise(resolve => setTimeout(resolve, 5000))]) // initial UI loaded
    await chatgpt.sidebar.isLoaded()
    const ui = { firstLink: chatgpt.getNewChatLink() }

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
            tweaksStyle = dom.create.elem('style', { id: 'tweaks-style', 'last-updated': tweaksStyleUpdated.toString() })
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

    if (ui.firstLink) { // borrow/assign CLASSES from sidebar div
        const firstIcon = ui.firstLink.querySelector('div:first-child'),
              firstLabel = ui.firstLink.querySelector('div:nth-child(2)')
        navToggleDiv.classList.add(...ui.firstLink.classList, ...(firstLabel?.classList || []))
        navToggleDiv.querySelector('img')?.classList.add(...(firstIcon?.classList || []))
    }

    await settings.load(['extensionDisabled']) ; if (!config.extensionDisabled) insertToggle()

    // Add LISTENER to toggle switch/label/config/menu
    navToggleDiv.onclick = () => {
        const toggleInput = document.getElementById('infinity-toggle-input')
        toggleInput.checked = !toggleInput.checked
        settings.save('infinityMode', toggleInput.checked)
        updateToggleHTML()
        infinityMode.toggle()
    }

    // Auto-start if enabled
    await settings.load('autoStart')
    if (config.autoStart) {
        const navToggle = document.getElementById('infinity-toggle-input')
        if (navToggle) navToggle.parentNode.click()
        else { // activate via infinityMode funcs obj
            infinityMode.activate()
            settings.save('infinityMode', true) // so popup.js updates toggle
        }
    } 

})()
