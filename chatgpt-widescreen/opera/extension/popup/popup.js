(async () => {

    // Import settings-utils.js
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'))    

    // Localize labels
    let translationOccurred = false
    document.querySelectorAll('[data-locale]').forEach(elem => {
        const localeKeys = elem.dataset.locale.split(' '),
              translatedText = localeKeys.map(key => chrome.i18n.getMessage(key)).join(' ')
        if (translatedText !== elem.innerText) {
            elem.innerText = translatedText ; translationOccurred = true
    }})

    // Update lang attr if translation occurred
    if (translationOccurred)
        document.documentElement.lang = chrome.i18n.getUILanguage().split('-')[0]

    // Init master toggle
    const toggles = document.querySelectorAll('input'),
          masterToggle = toggles[0]
    settings.load('extensionDisabled').then(() => { // init toggle state, update greyness
        masterToggle.checked = !config.extensionDisabled ; updateGreyness() })
    masterToggle.addEventListener('change', () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        syncExtension() ; updateGreyness()
    })

    // Init sub-toggles
    initToggle(toggles[1], 'fullerWindows', 'menuLabel_fullerWins')
    initToggle(toggles[2], 'tcbDisabled', 'menuLabel_tallerChatbox')
    initToggle(toggles[3], 'widerChatbox', 'menuLabel_widerChatbox')
    initToggle(toggles[4], 'ncbDisabled', 'menuLabel_newChatBtn')
    initToggle(toggles[5], 'hiddenHeader', 'menuLabel_hiddenHeader')
    initToggle(toggles[6], 'hiddenFooter', 'menuLabel_hiddenFooter')
    initToggle(toggles[7], 'notifDisabled', 'menuLabel_modeNotifs')

    // Add update-check span click-listener
    const updateSpan = document.querySelector('span[title*="update" i]')
    updateSpan.addEventListener('click', () => {
        window.close() // popup
        chrome.runtime.requestUpdateCheck((status, details) =>
            alertToUpdate(status == 'update_available' ? details.version : '')
    )})

    // Add Support span click-listener
    const supportLink = document.querySelector('a[title*="support" i]'),
          supportSpan = supportLink.parentNode 
    supportSpan.addEventListener('click', event => {
        if (event.target === supportSpan) supportLink.click() // to avoid double-toggle
    })

    // Add More Add-ons span click-listener
    const moreAddOnsLink = document.querySelector('a[title*="more" i]'),
          moreAddOnsSpan = moreAddOnsLink.parentNode 
    moreAddOnsSpan.addEventListener('click', event => {
        if (event.target === moreAddOnsSpan) moreAddOnsLink.click() // to avoid double-toggle
    })

    // Add Powered by chatgpt.js hover-listener
    const chatGPTjsHostPath = 'https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/badges/',
          chatGPTjsImg = document.querySelector('.chatgpt-js img')
    chatGPTjsImg.addEventListener('mouseover', () =>
        chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js.png')
    chatGPTjsImg.addEventListener('mouseout', () =>
      chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js-faded.png')

    // Define TOGGLE INIT function

    function initToggle(toggleInput, settingKey, notifMsgKey) {

        // Init toggle state
        settings.load(settingKey).then(() =>
            toggleInput.checked = /disabled/i.test(settingKey) !== config[settingKey])

        // Add click-listener to toggle input
        toggleInput.addEventListener('change', () => {
            settings.save(settingKey, !config[settingKey]) ; syncExtension()
            settings.load('notifDisabled').then(() => { // show mode notification
                if (!config.notifDisabled || /notif/i.test(settingKey) || /notif/i.test(settingKey)) // ...if enabled or notif-related setting
                    notify(chrome.i18n.getMessage(notifMsgKey) + ' '
                        + (/disabled/i.test(settingKey) !== config[settingKey] ? 'ON' : 'OFF'))
        })})

        // Add click listener to toggle input's parent label
        const toggleLabel = toggleInput.parentNode.parentNode
        toggleLabel.addEventListener('click', event => {
            if ([toggleLabel, document.querySelector(`[data-locale*="${ notifMsgKey }"]`)].includes(event.target))
                toggleInput.click()
        })
    }

    // Define FEEDBACK functions

    function notify(msg, position) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs =>
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'notify', msg: msg, position: position || 'bottom-right' })
    )}
    
    function alertToUpdate(version) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs =>
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'alertToUpdate', args: version
    }))}

    // Define SYNC functions

    function syncExtension() {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'syncExtension' })
    })}

    function updateGreyness() {

        // Updated toolbar icon
        const iconDimensions = [16, 32, 48, 64, 128, 223], iconPaths = {}
        iconDimensions.forEach(dimension =>
            iconPaths[dimension] = '../icons/'
                + (config.extensionDisabled ? 'faded/' : '')
                + 'icon' + dimension + '.png'
        )
        chrome.action.setIcon({ path: iconPaths })

        // Update menu contents
        document.querySelectorAll('div.logo, div.menu-title, div.menu')
            .forEach(elem => {
                elem.classList.remove(masterToggle.checked ? 'disabled' : 'enabled')
                elem.classList.add(masterToggle.checked ? 'enabled' : 'disabled')
            })
    }

})()
