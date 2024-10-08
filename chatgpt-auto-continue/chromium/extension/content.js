// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    document.documentElement.setAttribute('chatgpt-auto-continue-extension-installed', true) // for userscript auto-disable

    // Import LIBS
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Import APP data
    const { app } = await chrome.storage.sync.get('app')

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(req => {        
        if (req.action == 'notify') notify(req.msg, req.pos)
        else if (req.action == 'sync.storageToUI')  syncStorageToUI()
    })

    // Init CONFIG
    await settings.load(settings.availKeys)

    // Define FUNCTIONS

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

    async function syncStorageToUI() { // from popup.js toggle + service worker actve-tab listeners
        await settings.load(settings.availKeys) }

    // Run MAIN routine

    // Add/update TWEAKS style
    const tweaksStyleUpdated = 20241002 // datestamp of last edit for this file's `tweaksStyle`
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
              + 'font-size: 0.77rem ; text-transform: uppercase ;' // shrink/uppercase labels
              + `border: 2px dashed ${ chatgpt.isDarkMode() ? 'white' : 'black' } !important ; border-radius: 0 !important ;` // thiccen/square/dash borders
              + 'transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out ;' // smoothen hover fx
              + 'cursor: pointer !important ;' // add finger cursor
              + 'padding: 5px !important ; min-width: 102px }' // resize
          + '.chatgpt-modal button:hover {' // add zoom, re-scheme
              + 'transform: scale(1.055) ;'
              + ( chatgpt.isDarkMode() ? 'background-color: #2cff00 !important ; box-shadow: 2px 1px 54px #38ff00 !important ; color: black !important'
                                       : 'background-color: #c7ff006b !important ; box-shadow: 2px 1px 30px #97ff006b !important' ) + '}'
          + '.modal-buttons { margin-left: -13px !important }'
          + '* { scrollbar-width: thin }' // make FF scrollbar skinny to not crop toggle
          + '.sticky div:active, .sticky div:focus {' // post-GPT-4o UI sidebar button container
              + 'transform: none !important }' // disable distracting click zoom effect
        )
    }

    // Observe DOM for need to continue generating response
    (function checkContinueBtn() {
        const continueBtn = chatgpt.getContinueBtn()
        if (continueBtn) {
            continueBtn.click()
            notify(chrome.i18n.getMessage('notif_chatAutoContinued'), 'bottom-right')
            try { chatgpt.scrollToBottom() } catch(err) {}
            setTimeout(checkContinueBtn, 5000)
        } else setTimeout(checkContinueBtn, 500)
    })()

    // NOTIFY of status on load
    if (!config.notifDisabled) notify(`${chrome.i18n.getMessage('mode_autoContinue')}: ${
                                         chrome.i18n.getMessage('state_on').toUpperCase()}`)

})()
