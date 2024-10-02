(async () => {

    const site = /([^.]+)\.[^.]+$/.exec(new URL((await chrome.tabs.query(
        { active: true, currentWindow: true }))[0].url).hostname)?.[1]

    // Import LIBS
    await import(chrome.runtime.getURL('lib/dom.js'))
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))

    // Ipmort APP data
    const app = await (await fetch(chrome.runtime.getURL('app.json'))).json()

    // Import ICONS
    const { icons } = await import(chrome.runtime.getURL('components/icons.js'))
    icons.appProps = app // for src's using urls.mediaHost

    // Define FUNCTIONS

    async function sendMsgToActiveTab(req) {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        return await chrome.tabs.sendMessage(activeTab.id, req)
    }

    function notify(msg) { sendMsgToActiveTab({ action: 'notify', msg: msg, pos: 'bottom-right' })}

    const sync = {
        fade() {

            // Update toolbar icon
            const iconDimensions = [16, 32, 48, 64, 128], iconPaths = {}
            iconDimensions.forEach(dimension => {
                iconPaths[dimension] = '../icons/'
                    + (config.extensionDisabled ? 'faded/' : '')
                    + 'icon' + dimension + '.png'
            })
            chrome.action.setIcon({ path: iconPaths })
    
            // Update menu contents
            document.querySelectorAll('div.logo, div.menu-title, div.menu')
                .forEach(elem => {
                    elem.classList.remove(masterToggle.checked ? 'disabled' : 'enabled')
                    elem.classList.add(masterToggle.checked ? 'enabled' : 'disabled')
                })
        },

        storageToUI() { return sendMsgToActiveTab({ action: 'sync.storageToUI' })}
    }

    // Run MAIN routine

    // Init MASTER TOGGLE
    const masterToggle = document.querySelector('input')
    await settings.load('extensionDisabled')
    masterToggle.checked = !config.extensionDisabled ; sync.fade()
    masterToggle.onchange = () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        Object.keys(sync).forEach(key => sync[key]()) // sync fade + storage to UI
    }

    // Create CHILD toggles on chatgpt.com
    if (site == 'chatgpt') {
        await settings.load(settings.availKeys)

        // Init SETTINGS props
        Object.assign(app, { settings: {
            notifDisabled: { type: 'toggle',
                label: chrome.i18n.getMessage('menuLabel_modeNotifs') }
        }})

        // Create/insert toggles section
        const togglesDiv = dom.create.elem('div', { class: 'menu' })
        document.querySelector('.menu-header').insertAdjacentElement('afterend', togglesDiv)

        // Create/insert settings toggles
        Object.keys(app.settings).forEach(key => {

            // Init elems
            const menuItemDiv = dom.create.elem('div', { class: 'menu-item menu-area' }),
                  menuLabel = dom.create.elem('label', { class: 'menu-icon' }),
                  menuLabelSpan = document.createElement('span')
            let menuInput, menuSlider
            menuLabelSpan.textContent = app.settings[key].label
            if (app.settings[key].type == 'toggle') {
                menuInput = dom.create.elem('input', { type: 'checkbox' })
                menuInput.checked = /disabled|hidden/i.test(key) ^ config[key]
                menuSlider = dom.create.elem('span', { class: 'slider' })
                menuLabel.append(menuInput, menuSlider)
                menuLabel.classList.add('toggle-switch')
            }

            // Assemble/append elems
            menuItemDiv.append(menuLabel, menuLabelSpan)
            togglesDiv.append(menuItemDiv)

            // Add listeners
            if (app.settings[key].type == 'toggle') {
                menuItemDiv.onclick = () => menuInput.click()
                menuInput.onclick = menuSlider.onclick = event => // prevent double toggle
                    event.stopImmediatePropagation()
                menuInput.onchange = () => {
                    settings.save(key, !config[key]) ; sync.storageToUI()
                    notify(`${app.settings[key].label} ${chrome.i18n.getMessage(`state_${
                        /disabled|hidden/i.test(key) != config[key] ? 'on' : 'off'}`).toUpperCase()}`)
                }
            }
        })

        sync.fade() // in case master toggle off
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
        src: `${app.urls.cjsMediaHost}/images/badges/powered-by-chatgpt.js-faded.png` })
    cjsLogo.onmouseover = cjsLogo.onmouseout = event => cjsLogo.src = `${
        app.urls.cjsMediaHost}/images/badges/powered-by-chatgpt.js${ event.type == 'mouseover' ? '' : '-faded' }.png`
    cjsLogo.onclick = () => chrome.tabs.create({ url: app.urls.chatgptJS })
    cjsDiv.append(cjsLogo) ; footer.append(cjsDiv)

    // Create/append SUPPORT footer button
    const supportSpan = dom.create.elem('span', {
        title: chrome.i18n.getMessage('btnLabel_getSupport'),
        class: 'menu-icon menu-area', style: 'right:30px ; padding-top: 2px' })
    const supportIcon = icons.create({ name: 'questionMark', width: 15, height: 13, style: 'margin-bottom: 0.04rem' })
    supportSpan.onclick = () => { chrome.tabs.create({ url: app.urls.support }) ; close() }
    supportSpan.append(supportIcon) ; footer.append(supportSpan)

    // Create/append RELATED APPS footer button
    const moreAppsSpan = dom.create.elem('span', {
        title:  chrome.i18n.getMessage('btnLabel_moreApps'),
        class: 'menu-icon menu-area', style: 'right:2px ; padding-top: 2px' })
    const moreAppsIcon = icons.create({ name: 'plus', size: 16 })
    moreAppsSpan.onclick = () => { chrome.tabs.create({ url: app.urls.relatedApps }) ; close() }
    moreAppsSpan.append(moreAppsIcon) ; footer.append(moreAppsSpan)

})()
