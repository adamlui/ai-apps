(async () => {

    const site = /([^.]+)\.[^.]+$/.exec(await new Promise(resolve =>
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => resolve(new URL(tabs[0].url).hostname))))?.[1]

    // Import SETTINGS.JS
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    settings.site = site // to load/save active tab's settings

    // Import DATA
    const app = await (await fetch(chrome.runtime.getURL('app.json'))).json()
    app.urls.assetHost = app.urls.gitHub.replace('github.com', 'cdn.jsdelivr.net/gh') + `@${app.latestAssetCommitHash}`
    const sites = Object.assign(Object.create(null), await (await fetch(`${app.urls.assetHost}/sites.json`)).json())

    // Init SETTINGS props
    Object.assign(app, { settings: {
        fullerWindows: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_fullerWins'),
            helptip: chrome.i18n.getMessage('helptip_fullerWins') },
        tcbDisabled: { type: 'toggle', symbol: '↕️',
            label: chrome.i18n.getMessage('menuLabel_tallerChatbox'),
            helptip: chrome.i18n.getMessage('helptip_tallerChatbox') },
        widerChatbox: { type: 'toggle', symbol: '↔️',
            label: chrome.i18n.getMessage('menuLabel_widerChatbox'),
            helptip: chrome.i18n.getMessage('helptip_widerChatbox') },
        ncbDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_newChatBtn'),
            helptip: chrome.i18n.getMessage('helptip_newChatBtn') },
        hiddenHeader: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_hiddenHeader'),
            helptip: chrome.i18n.getMessage('helptip_hiddenHeader') },
        hiddenFooter: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_hiddenFooter'),
            helptip: chrome.i18n.getMessage('helptip_hiddenFooter') },
        notifDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_modeNotifs'),
            helptip: chrome.i18n.getMessage('helptip_modeNotifs') }
    }})

    // Init MASTER TOGGLE
    const masterToggle = document.querySelector('.main-toggle input')
    await settings.load('extensionDisabled')
    masterToggle.checked = !config.extensionDisabled ; updateGreyness()
    masterToggle.onchange = () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        syncStorageToUI() ; updateGreyness()
    }
    
    // Create CHILD TOGGLES for matched pages
    const matchHosts = chrome.runtime.getManifest().content_scripts[0].matches
        .map(url => url.replace(/^https?:\/\/|\/.*$/g, ''))
    if (matchHosts.some(host => host.includes(site))) {
        settings.load(sites[site].availFeatures)

        // Create/insert toggles section
        const togglesDiv = document.createElement('div') ; togglesDiv.className = 'menu'
        document.querySelector('.menu-header').insertAdjacentElement('afterend', togglesDiv)

        // Create/inesrt individual toggles
        Object.keys(app.settings).forEach(async key => {
            if (sites[site].availFeatures.includes(key)) {
                await settings.load(key)

                // Init elems
                const menuItemDiv = document.createElement('div')
                menuItemDiv.classList.add('menu-item', 'menu-area')
                const menuLabel = document.createElement('label')
                menuLabel.classList.add('toggle-switch', 'menu-icon')
                const menuInput = document.createElement('input')
                menuInput.type = 'checkbox' ; menuInput.checked = /disabled/i.test(key) ^ config[key]
                const menuSlider = document.createElement('span')
                menuSlider.className = 'slider'
                const menuLabelSpan = document.createElement('span')
                menuLabelSpan.textContent = app.settings[key].label

                // Assemble/append elems
                menuLabel.append(menuInput, menuSlider)
                menuItemDiv.append(menuLabel, menuLabelSpan)
                togglesDiv.append(menuItemDiv)

                // Add listeners
                menuItemDiv.onclick = () => menuInput.click()
                menuInput.onclick = menuSlider.onclick = event => // prevent double toggle
                    event.stopImmediatePropagation()
                menuInput.onchange = () => {
                    settings.save(key, !config[key]) ; syncStorageToUI()
                    notify(`${app.settings[key].label} ${/disabled/i.test(key) != config[key] ? 'ON' : 'OFF' }`)
                }
            }
        })

        updateGreyness() // in case master toggle off
    }


    // LOCALIZE labels
    let translationOccurred = false
    document.querySelectorAll('[data-locale]').forEach(elem => {
        const localeKeys = elem.dataset.locale.split(' '),
              translatedText = localeKeys.map(key => chrome.i18n.getMessage(key)).join(' ')
        if (translatedText != elem.innerText) {
            elem.innerText = translatedText ; translationOccurred = true
    }})

    // Update lang attr if translation occurred
    if (translationOccurred)
        document.documentElement.lang = chrome.i18n.getUILanguage().split('-')[0]

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
