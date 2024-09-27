(async () => {

    const site = /([^.]+)\.[^.]+$/.exec(await new Promise(resolve =>
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => resolve(new URL(tabs[0].url).hostname))))?.[1]

    // Import SETTINGS.JS
    await import(chrome.runtime.getURL('lib/dom.js'))
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

    // Create/append FOOTER container
    const footer = document.createElement('footer')
    document.body.append(footer)

    // Create/append CHATGPT.JS footer logo
    const cjsDiv = document.createElement('div'),
          cjsAnchor = document.createElement('a'),
          cjsLogo = document.createElement('img')
    cjsDiv.classList = 'chatgpt-js'
    Object.assign(cjsAnchor, {
        title: `${chrome.i18n.getMessage('about_poweredBy')} chatgpt.js`,
        href: 'https://chatgpt.js.org', target: '_blank', rel: 'noopener'
    })
    cjsLogo.src='https://media.chatgptjs.org/images/badges/powered-by-chatgpt.js-faded.png?main'
    cjsAnchor.append(cjsLogo) ; cjsDiv.append(cjsAnchor)
    footer.append(cjsDiv)

    // Create/append SUPPORT footer button
    const supportSpan = document.createElement('span'),
          supportAnchor = document.createElement('a'),
          supportIcon = document.createElement('img')
    Object.assign(supportSpan, {
        title: chrome.i18n.getMessage('btnLabel_getSupport'),
        className: 'menu-icon menu-area', style: 'right:30px ; padding-top: 2px'
    })
    Object.assign(supportAnchor, {
        title: chrome.i18n.getMessage('btnLabel_getSupport'),
        href: 'https://support.chatgptwidescreen.com', target: '_blank', rel: 'noopener'
    })
    Object.assign(supportIcon, {
        width: 15, height: 13, style: 'margin-bottom: 0.04rem',
        src: 'https://media.chatgptwidescreen.com/images/icons/question-mark/icon16.png?4adfbbd'
    })
    supportAnchor.append(supportIcon) ; supportSpan.append(supportAnchor)
    footer.append(supportSpan)

    // Create/append RELATED APPS footer button
    const moreAppsSpan = document.createElement('span'),
          moreAppsAnchor = document.createElement('a'),
          moreAppsIcon = dom.create.svgElem('svg', { width: 16, height: 16, viewBox: '0 0 1024 1024' }),
          moreAppsIconPath = dom.create.svgElem('path', {
              d: 'M899.901 600.38H600.728v299.173c0 74.383-179.503 74.383-179.503 0V600.38H122.051c-74.384 0-74.384-179.503 0-179.503h299.173V121.703c0-74.384 179.503-74.384 179.503 0v299.174H899.9c74.385 0 74.385 179.503.001 179.503z' })
    Object.assign(moreAppsSpan, {
        title:  chrome.i18n.getMessage('btnLabel_moreApps'),
        className: 'menu-icon menu-area', style: 'right:2px ; padding-top: 2px'
    })
    Object.assign(moreAppsAnchor, {
        title:  chrome.i18n.getMessage('btnLabel_moreApps'),
        href: 'https://github.com/adamlui/chatgpt-userscripts',
        target: '_blank', rel: 'noopener'
    })
    moreAppsIcon.append(moreAppsIconPath) ; moreAppsAnchor.append(moreAppsIcon) ; moreAppsSpan.append(moreAppsAnchor)
    footer.append(moreAppsSpan)

    // Update lang attr if translation occurred
    if (translationOccurred)
        document.documentElement.lang = chrome.i18n.getUILanguage().split('-')[0]

    // Add Support span click-listener
    const supportLink = document.querySelector('a[title*="support" i]')
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
