(async () => {

    const site = /([^.]+)\.[^.]+$/.exec(await new Promise(resolve =>
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => resolve(new URL(tabs[0].url).hostname))))?.[1]

    // Import settings.js
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    settings.site = site // to load/save active tab's settings

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
    masterToggle.onchange = () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        syncStorageToUI() ; updateGreyness()
    }

    // Init sub-toggles
    initToggle(toggles[1], 'fullerWindows', 'menuLabel_fullerWins')
    initToggle(toggles[2], 'tcbDisabled', 'menuLabel_tallerChatbox')
    initToggle(toggles[3], 'widerChatbox', 'menuLabel_widerChatbox')
    initToggle(toggles[4], 'ncbDisabled', 'menuLabel_newChatBtn')
    initToggle(toggles[5], 'hiddenHeader', 'menuLabel_hiddenHeader')
    initToggle(toggles[6], 'hiddenFooter', 'menuLabel_hiddenFooter')
    initToggle(toggles[7], 'notifDisabled', 'menuLabel_modeNotifs')

    // Add Support span click-listener
    const supportLink = document.querySelector('a[title*="support" i]'),
          supportSpan = supportLink.parentNode 
    supportSpan.onclick = event => {
        if (event.target === supportSpan) supportLink.click() } // to avoid double-toggle

    // Add More Add-ons span click-listener
    const moreAddOnsLink = document.querySelector('a[title*="more" i]'),
          moreAddOnsSpan = moreAddOnsLink.parentNode 
    moreAddOnsSpan.onclick = event => {
        if (event.target === moreAddOnsSpan) moreAddOnsLink.click() } // to avoid double-toggle

    // Add Powered by chatgpt.js hover-listener
    const chatGPTjsHostPath = 'https://media.chatgptjs.org/images/badges/',
          chatGPTjsImg = document.querySelector('.chatgpt-js img')
    chatGPTjsImg.onmouseover = () => chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js.png'
    chatGPTjsImg.onmouseout = () => chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js-faded.png'

    // Define TOGGLE INIT function

    function initToggle(toggleInput, settingKey, notifMsgKey) {

        // Init toggle state
        settings.load(settingKey).then(() =>
            toggleInput.checked = /disabled/i.test(settingKey) != config[settingKey])

        // Add click-listener to toggle input
        toggleInput.onchange = () => {
            settings.save(settingKey, !config[settingKey]) ; syncStorageToUI()
            notify(`${chrome.i18n.getMessage(notifMsgKey)} ${
                /disabled/i.test(settingKey) != config[settingKey] ? 'ON' : 'OFF' }`)
        }

        // Add click listener to toggle input's parent label
        const toggleLabel = toggleInput.parentNode.parentNode
        toggleLabel.onclick = event => {
            if ([toggleLabel, document.querySelector(`[data-locale*="${notifMsgKey}"]`)].includes(event.target))
                toggleInput.click()
        }
    }

    // Define FEEDBACK functions

    function notify(msg, position) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs =>
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'notify', msg: msg, position: position || 'bottom-right' })
    )}

    // Define SYNC functions

    async function syncStorageToUI() {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        chrome.tabs.sendMessage(activeTab.id, { action: 'sync.storageToUI' })
    }
    
    function updateGreyness() {

        // Update toolbar icon
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
