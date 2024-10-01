// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    document.documentElement.setAttribute('cif-extension-installed', true) // for userscript auto-disable

    // Import LIBS/DATA
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js')),
          { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    await import(chrome.runtime.getURL('lib/dom.js'))
    const app = await (await fetch(chrome.runtime.getURL('app.json'))).json()

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(req => {
        
        if (req.action == 'notify') notify(req.msg, req.pos)
        else if (req.action == 'alert') siteAlert(req.title, req.msg, req.btns)
        else if (req.action.startsWith('infinity')) {
            infinity.muted = true // prevent top-right notif blocked by popup
            infinity[/\.(\w+)/.exec(req.action)[1]](req.options)
        } else if (req.action == 'sync.storageToUI') {
            if (req.src == 'service-worker.js') // disable Infinity mode 1st to not transfer between tabs
                settings.save('infinityMode', false)
            syncStorageToUI()
        }
    })

    // Init ENV info
    const env = { browser: { isMobile: chatgpt.browser.isMobile() }}

    // Init CONFIG
    settings.save('userLanguage', (await chrome.i18n.getAcceptLanguages())[0])
    await settings.load(settings.availKeys)
    if (!config.replyLanguage) settings.save('replyLanguage', config.userLanguage) // init reply language if unset
    if (!config.replyTopic) settings.save('replyTopic', 'ALL') // init reply topic if unset
    if (!config.replyInterval) settings.save('replyInterval', 7) // init refresh interval to 7 secs if unset

    // Define FEEDBACK functions

    function notify(msg, pos = '', notifDuration = '', shadow = '') {

        // Strip state word to append colored one later
        const foundState = [ chrome.i18n.getMessage('state_on').toUpperCase(),
                             chrome.i18n.getMessage('state_off').toUpperCase()
              ].find(word => msg.includes(word))
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

    const navToggle = {
        async insert() {

            // Insert toggle
            const toggleParent = document.querySelector('nav')
            if (!toggleParent.contains(navToggleDiv))
                 toggleParent.insertBefore(navToggleDiv, toggleParent.children[1])
    
            // Tweak styles
            const knobSpan = document.getElementById('infinity-toggle-knob-span'),
                  navicon = document.getElementById('infinity-toggle-navicon')
            navToggleDiv.style.flexGrow = 'unset' // overcome OpenAI .grow
            navToggleDiv.style.paddingLeft = '8px'
            if (knobSpan) knobSpan.style.boxShadow = (
                'rgba(0, 0, 0, .3) 0 1px 2px 0' + ( chatgpt.isDarkMode() ? ', rgba(0, 0, 0, .15) 0 3px 6px 2px' : '' ))
            if (navicon) navicon.src = `${ // update navicon color in case scheme changed
                app.urls.mediaHost}/images/icons/infinity-symbol/`
              + `${ chatgpt.isDarkMode() ? 'white' : 'black' }/icon32.png?${app.latestAssetCommitHash}`
        },

        update() {
            if (config.extensionDisabled || config.toggleHidden) navToggleDiv.style.display = 'none'
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
                navToggleDiv.style.display = 'flex'
                setTimeout(() => {
                    switchSpan.style.backgroundColor = toggleInput.checked ? '#ad68ff' : '#ccc'
                    switchSpan.style.boxShadow = toggleInput.checked ? '2px 1px 9px #d8a9ff' : 'none'
                    knobSpan.style.transform = toggleInput.checked ? 'translateX(13px) translateY(0)' : 'translateX(0)'
                }, 1) // min delay to trigger transition fx
            }
        }
    }

    // Define INFINITY MODE functions

    const infinity = {

        async activate() {
            settings.save('infinityMode', true)
            const activatePrompt = 'Generate a single random question'
                + ( config.replyLanguage ? ( ' in ' + config.replyLanguage ) : '' )
                + ( ' on ' + ( config.replyTopic == 'ALL' ? 'ALL topics' : 'the topic of ' + config.replyTopic ))
                + ' then answer it. Don\'t type anything else.'
            if (!infinity.muted) notify(`${chrome.i18n.getMessage('menuLabel_infinityMode')}: ${
                                           chrome.i18n.getMessage('state_on').toUpperCase()}`)
            else infinity.muted = false
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
            if (config.infinityMode && !infinity.isActive) // double-check in case de-activated before scheduled
                infinity.isActive = setTimeout(infinity.continue, parseInt(config.replyInterval, 10) * 1000)
        },

        async continue() {
            if (!config.autoScrollDisabled) try { chatgpt.scrollToBottom() } catch(err) {}
            chatgpt.send('Do it again.')
            await chatgpt.isIdle() // before starting delay till next iteration
            if (infinity.isActive) // replace timer
                infinity.isActive = setTimeout(infinity.continue, parseInt(config.replyInterval, 10) * 1000)
        },

        async deactivate() {
            settings.save('infinityMode', false)
            if (!infinity.muted) notify(`${chrome.i18n.getMessage('menuLabel_infinityMode')}: ${
                                           chrome.i18n.getMessage('state_off').toUpperCase()}`)
            else infinity.muted = false
            chatgpt.stop() ; clearTimeout(infinity.isActive) ; infinity.isActive = null
            document.getElementById('infinity-toggle-input').checked = false // for window listener
        },

        async restart(options = { target: 'new' }) {
            if (options.target == 'new') {
                chatgpt.stop() ; document.getElementById('infinity-toggle-label').click() // toggle off
                setTimeout(() => { document.getElementById('infinity-toggle-label').click() }, 750) // toggle on
            } else {
                clearTimeout(infinity.isActive) ; infinity.isActive = null ; await chatgpt.isIdle()
                if (config.infinityMode && !infinity.isActive) { // double-check in case de-activated before scheduled
                    await settings.load('replyInterval')
                    infinity.isActive = setTimeout(infinity.continue, parseInt(config.replyInterval, 10) * 1000)
                }
            }

        },

        toggle() { infinity[config.infinityMode ? 'activate' : 'deactivate']() }
    }

    // Define SYNC function

    async function syncStorageToUI() { // from popup.js toggle + service worker actve-tab listeners
        await settings.load(settings.availKeys)
        navToggle.update() // based on config.toggleHidden + config.infinityMode
    }

    // Init BROWSER/UI props
    await Promise.race([chatgpt.isLoaded(), new Promise(resolve => setTimeout(resolve, 5000))]) // initial UI loaded
    await chatgpt.sidebar.isLoaded()
    const ui = { firstLink: chatgpt.getNewChatLink() }

    // Add LISTENER to auto-disable Infinity Mode
    if (document.hidden != undefined) // ...if Page Visibility API supported
        document.onvisibilitychange = () => { if (config.infinityMode) { infinity.deactivate() ; syncStorageToUI() }}

    // Add/update TWEAKS style
    const tweaksStyleUpdated = 20240930 // datestamp of last edit for this file's `tweaksStyle`
    let tweaksStyle = document.getElementById('tweaks-style') // try to select existing style
    if (!tweaksStyle || parseInt(tweaksStyle.getAttribute('last-updated'), 10) < tweaksStyleUpdated) { // if missing or outdated
        if (!tweaksStyle) { // outright missing, create/id/attr/append it first
            tweaksStyle = dom.create.elem('style', { id: 'tweaks-style', 'last-updated': tweaksStyleUpdated.toString() })
            document.head.append(tweaksStyle)
        }
        tweaksStyle.innerText = (
            ( chatgpt.isDarkMode() ? '.chatgpt-modal > div { border: 1px solid white }' : '' )
          + '.chatgpt-modal button {'
              + 'font-size: 0.77rem ; text-transform: uppercase ;' // shrink/uppercase labels
              + `border: 2px dashed ${ chatgpt.isDarkMode() ? 'white' : 'black' } !important ; border-radius: 0 !important ;` // thiccen/square/dash borders
              + 'transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out ;' // smoothen hover fx
              + 'padding: 5px !important ; min-width: 102px }' // resize
          + '.chatgpt-modal button:hover {' // add zoom, re-scheme
              + 'transform: scale(1.055) ;'
              + ( chatgpt.isDarkMode() ? 'background-color: #2cff00 !important ; box-shadow: 2px 1px 54px #38ff00 !important ; color: black !important'
                                       : 'background-color: #c7ff006b !important ; box-shadow: 2px 1px 30px #97ff006b !important' ) + '}'
          + '.modal-buttons { margin-left: -13px !important }'
          + '* { scrollbar-width: thin }' // make FF scrollbar skinny to not crop toggle
        )
    }

    // Create NAV TOGGLE div, add styles
    const navToggleDiv = document.createElement('div')
    navToggleDiv.style.height = '37px'
    navToggleDiv.style.margin = '2px 0' // add v-margins
    navToggleDiv.style.userSelect = 'none' // prevent highlighting
    navToggleDiv.style.cursor = 'pointer' // add finger cursor
    navToggle.update() // create children

    if (ui.firstLink) { // borrow/assign CLASSES from sidebar div
        const firstIcon = ui.firstLink.querySelector('div:first-child'),
              firstLabel = ui.firstLink.querySelector('div:nth-child(2)')
        navToggleDiv.classList.add(...ui.firstLink.classList, ...(firstLabel?.classList || []))
        navToggleDiv.querySelector('img')?.classList.add(...(firstIcon?.classList || []))
    }

    navToggle.insert()

    // Add LISTENER to toggle switch/label/config/menu
    navToggleDiv.onclick = () => {
        const toggleInput = document.getElementById('infinity-toggle-input')
        toggleInput.checked = !toggleInput.checked
        settings.save('infinityMode', toggleInput.checked)
        syncStorageToUI() ; infinity.toggle()
    }

    // Auto-start if enabled
    await settings.load('autoStart')
    if (config.autoStart) {
        const navToggleInput = document.getElementById('infinity-toggle-input')
        if (navToggleInput) navToggleInput.parentNode.click()
        else infinity.activate()
    }

    // Monitor <html> to maintain NAV TOGGLE VISIBILITY on node changes
    new MutationObserver(mutations => mutations.forEach(mutation => {
        if (mutation.type == 'childList' && mutation.addedNodes.length && !config.toggleHidden)
            navToggle.insert()
    })).observe(document.documentElement, { childList: true, subtree: true })

    // Disable distracting SIDEBAR CLICK-ZOOM effect
    if (!document.querySelector('[sidebar-click-zoom-observed]')) {
        new MutationObserver(mutations => mutations.forEach(({ target }) => {
            if (target.closest('[class*="sidebar"]') // include sidebar divs
                && !target.id.endsWith('-knob-span') // exclude our navToggle
                && target.style.transform != 'none' // click-zoom occurred
            ) target.style.transform = 'none'
        })).observe(document.body, { attributes: true, subtree: true, attributeFilter: [ 'style' ]})      
        document.documentElement.setAttribute('sidebar-click-zoom-observed', true)
    }

})()
