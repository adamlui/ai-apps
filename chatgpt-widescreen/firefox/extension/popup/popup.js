(async () => {

    const site = /([^.]+)\.[^.]+$/.exec(await new Promise(resolve =>
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => resolve(new URL(tabs[0].url).hostname))))?.[1]

    // Import LIBS
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
        tcbDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_tallerChatbox'),
            helptip: chrome.i18n.getMessage('helptip_tallerChatbox') },
        widerChatbox: { type: 'toggle',
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
    masterToggle.checked = !config.extensionDisabled ; updateFade()
    masterToggle.onchange = () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        syncStorageToUI() ; updateFade()
    }
    
    // Create CHILD TOGGLES for matched pages
    const matchHosts = chrome.runtime.getManifest().content_scripts[0].matches
        .map(url => url.replace(/^https?:\/\/|\/.*$/g, ''))
    if (matchHosts.some(host => host.includes(site))) {
        await settings.load(sites[site].availFeatures)

        // Create/insert toggles section
        const togglesDiv = dom.create.elem('div', { class: 'menu' })
        document.querySelector('.menu-header').insertAdjacentElement('afterend', togglesDiv)

        // Create/inesrt individual toggles
        Object.keys(app.settings).forEach(key => {
            if (sites[site].availFeatures.includes(key)) {

                // Init elems
                const menuItemDiv = dom.create.elem('div', {
                    class: 'menu-item menu-area', title: app.settings[key].helptip })
                const menuLabel = dom.create.elem('label', { class: 'toggle-switch menu-icon' }),
                      menuInput = dom.create.elem('input', { type: 'checkbox' }),
                      menuSlider = dom.create.elem('span', { class: 'slider' }),
                      menuLabelSpan = document.createElement('span')
                menuLabelSpan.textContent = app.settings[key].label
                menuInput.checked = /disabled/i.test(key) ^ config[key]

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

        updateFade() // in case master toggle off
    }

    // LOCALIZE labels
    let translationOccurred = false
    document.querySelectorAll('[data-locale]').forEach(elem => {
        const localeKeys = elem.dataset.locale.split(' '),
              translatedText = localeKeys.map(key => chrome.i18n.getMessage(key)).join(' ')
        if (translatedText != elem.innerText) {
            elem.innerText = translatedText ; translationOccurred = true
    }})
    if (translationOccurred) // update <html lang> attr
        document.documentElement.lang = chrome.i18n.getUILanguage().split('-')[0]

    // Create/append FOOTER container
    const footer = document.createElement('footer')
    document.body.append(footer)

    // Create/append CHATGPT.JS footer logo
    const cjsDiv = dom.create.elem('div', { class: 'chatgpt-js' })
    const cjsLogo = dom.create.elem('img', {
        title: `${chrome.i18n.getMessage('about_poweredBy')} chatgpt.js`,
        src: `${app.urls.cjsMediaHost}/images/badges/powered-by-chatgpt.js-faded.png?main` })
    cjsLogo.onmouseover = cjsLogo.onmouseout = event => cjsLogo.src = `${
        app.urls.cjsMediaHost}/images/badges/powered-by-chatgpt.js${ event.type == 'mouseover' ? '' : '-faded' }.png`
    cjsLogo.onclick = () => chrome.tabs.create({ url: app.urls.chatgptJS })
    cjsDiv.append(cjsLogo) ; footer.append(cjsDiv)

    // Create/append SUPPORT footer button
    const supportSpan = dom.create.elem('span', {
        title: chrome.i18n.getMessage('btnLabel_getSupport'),
        class: 'menu-icon menu-area', style: 'right:30px ; padding-top: 2px' })
    const supportIcon = dom.create.elem('img', {
        width: 15, height: 13, style: 'margin-bottom: 0.04rem',
        src: `${app.urls.mediaHost}/images/icons/question-mark/icon16.png?4adfbbd` })
    supportSpan.onclick = () => chrome.tabs.create({ url: app.urls.support })
    supportSpan.append(supportIcon) ; footer.append(supportSpan)

    // Create/append RELATED APPS footer button
    const moreAppsSpan = dom.create.elem('span', {
        title:  chrome.i18n.getMessage('btnLabel_moreApps'),
        class: 'menu-icon menu-area', style: 'right:2px ; padding-top: 2px' })
    const moreAppsIcon = dom.create.svgElem('svg', { width: 16, height: 16, viewBox: '0 0 1024 1024' })
    const moreAppsIconPath = dom.create.svgElem('path', {
        d: 'M899.901 600.38H600.728v299.173c0 74.383-179.503 74.383-179.503 0V600.38H122.051c-74.384 0-74.384-179.503 0-179.503h299.173V121.703c0-74.384 179.503-74.384 179.503 0v299.174H899.9c74.385 0 74.385 179.503.001 179.503z' })   
    moreAppsSpan.onclick = () => chrome.tabs.create({ url: app.urls.relatedApps })
    moreAppsIcon.append(moreAppsIconPath) ; moreAppsSpan.append(moreAppsIcon) ; footer.append(moreAppsSpan)

    // Define FEEDBACK functions

    function notify(msg) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs =>
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'notify', msg: msg, pos: 'bottom-right' })
    )}

    // Define SYNC functions

    async function syncStorageToUI() {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        chrome.tabs.sendMessage(activeTab.id, { action: 'sync.storageToUI' })
    }
    
    function updateFade() {

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
