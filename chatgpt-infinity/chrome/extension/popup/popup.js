(async () => {

    const site = /([^.]+)\.[^.]+$/.exec(await new Promise(resolve =>
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => resolve(new URL(tabs[0].url).hostname))))?.[1]

    // Import LIBS
    await import(chrome.runtime.getURL('lib/dom.js'))
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))

    // Import APP data
    const app = await (await fetch(chrome.runtime.getURL('app.json'))).json()

    // Define FUNCTIONS

    async function sendMsgToActiveTab(req) {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        chrome.tabs.sendMessage(activeTab.id, req)
    }

    function notify(msg) {
        sendMsgToActiveTab({ action: 'notify', msg: msg, pos: 'bottom-right' })}

    function siteAlert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        sendMsgToActiveTab({
            action: 'alert', title: title, msg: msg, btns: btns, checkbox: checkbox, width: width })
    }

    const sync = {
        fade() {

            // Updated toolbar icon
            const iconDimensions = [16, 32, 64, 128], iconPaths = {}
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

        storageToUI() { sendMsgToActiveTab({ action: 'sync.storageToUI' })}
    }

    function toTitleCase(str) {
        const words = str.toLowerCase().split(' ')
        for (let i = 0 ; i < words.length ; i++)
            words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        return words.join(' ')
    }

    // Run MAIN routine

    // Init MASTER TOGGLE
    const masterToggle = document.querySelector('input')
    await settings.load('extensionDisabled')
    masterToggle.checked = !config.extensionDisabled ; sync.fade()
    masterToggle.onchange = () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        //infinityModeToggle.checked = false // always disable Infinity Mode on main toggle
        sync.storageToUI() ; sync.fade()
    }

    // Create CHILD toggles on chatgpt.com
    if (site == 'chatgpt') {
        await settings.load('userLanguage', 'infinityMode', ...settings.availKeys)

        // Init SETTINGS props
        const re_all = new RegExp(`^(${chrome.i18n.getMessage('menuLabel_all')}|all|any|every)$`, 'i')
        Object.assign(app, { settings: {
            autoStart: { type: 'toggle',
                label: chrome.i18n.getMessage('menuLabel_autoStart') },
            toggleHidden: { type: 'toggle',
                label: chrome.i18n.getMessage('menuLabel_toggleVis') },
            autoScrollDisabled: { type: 'toggle',
                label: chrome.i18n.getMessage('menuLabel_autoScroll') },
            replyLanguage: { type: 'modal', symbol: '🌐',
                label: chrome.i18n.getMessage('menuLabel_replyLang'),
                status: config.replyLanguage },
            replyTopic: { type: 'modal', symbol: '🧠',
                label: chrome.i18n.getMessage('menuLabel_replyTopic'),
                status: re_all.test(config.replyTopic) ? chrome.i18n.getMessage('menuLabel_all') : toTitleCase(config.replyTopic) },
            replyInterval: { type: 'modal', symbol: '⌚',
                label: chrome.i18n.getMessage('menuLabel_replyInt'),
                status: `${config.replyInterval}s` }
        }})

        // Create/insert toggles section
        const togglesDiv = dom.create.elem('div', { class: 'menu' })
        document.querySelector('.menu-header').insertAdjacentElement('afterend', togglesDiv)

        // Create/insert Infinity Mode toggle
        const menuItemDiv = dom.create.elem('div', { class: 'menu-item menu-area' }),
              menuLabel = dom.create.elem('label', { class: 'toggle-switch menu-icon' }),
              menuLabelSpan = document.createElement('span'),
              menuInput = dom.create.elem('input', { type: 'checkbox' }),
              menuSlider = dom.create.elem('span', { class: 'slider' })
        menuInput.checked = config.infinityMode
        menuLabelSpan.textContent = chrome.i18n.getMessage('menuLabel_infinityMode')
        menuLabel.append(menuInput, menuSlider) ; menuItemDiv.append(menuLabel, menuLabelSpan) ; togglesDiv.append(menuItemDiv)
        menuItemDiv.onclick = () => menuInput.click()
        menuInput.onclick = menuSlider.onclick = event => // prevent double toggle
            event.stopImmediatePropagation()
        menuInput.onchange = () => {
            settings.save('infinityMode', !config.infinityMode) ; sync.storageToUI()
            sendMsgToActiveTab({ action: 'clickToggle' })
            notify(`${chrome.i18n.getMessage('menuLabel_infinityMode')} ${ config.infinityMode ? 'ON' : 'OFF' }`)
        }

        // Create/inesrt individual toggles
        Object.keys(app.settings).forEach(key => {

            // Init elems
            const menuItemDiv = dom.create.elem('div', { class: 'menu-item menu-area' }),
                  menuLabel = dom.create.elem('label', { class: 'menu-icon' }),
                  menuLabelSpan = document.createElement('span')
            let menuInput, menuSlider
            menuLabelSpan.textContent = app.settings[key].label
            if (app.settings[key].type == 'toggle') {
                menuInput = dom.create.elem('input', { type: 'checkbox' })
                menuInput.checked = /disabled/i.test(key) ^ config[key]
                menuSlider = dom.create.elem('span', { class: 'slider' })
                menuLabel.append(menuInput, menuSlider)
                menuLabel.classList.add('toggle-switch')
            } else { // modal settings
                menuLabel.innerText = app.settings[key].symbol
                menuLabel.classList.add('menu-prompt')
                menuLabelSpan.innerText +=  `— ${app.settings[key].status}`
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
                    notify(`${app.settings[key].label} ${/disabled/i.test(key) != config[key] ? 'ON' : 'OFF' }`)
                }
            } else menuItemDiv.onclick = () => {
                if (key == 'replyLanguage') {
                    while (true) {
                        let replyLanguage = prompt(`${chrome.i18n.getMessage('prompt_updateReplyLang')}:`, config.replyLanguage)
                        if (replyLanguage === null) break // user cancelled so do nothing
                        else if (!/\d/.test(replyLanguage)) {
                            replyLanguage = ( // auto-case for menu/alert aesthetics
                                [2, 3].includes(replyLanguage.length) || replyLanguage.includes('-') ? replyLanguage.toUpperCase()
                                : replyLanguage.charAt(0).toUpperCase() + replyLanguage.slice(1).toLowerCase() )
                            settings.save('replyLanguage', replyLanguage || config.userLanguage)
                            window.close() // popup
                            siteAlert(chrome.i18n.getMessage('alert_replyLangUpdated') + '!',
                                chrome.i18n.getMessage('appName') + ' ' + chrome.i18n.getMessage('alert_willReplyIn') + ' '
                                + ( replyLanguage || chrome.i18n.getMessage('alert_yourSysLang') ) + '.')
                            if (config.infinityMode) // reboot active session
                                sendMsgToActiveTab({ action: 'restartInNewChat' })
                            break
                        }
                    }
                } else if (key == 'replyTopic') {
                    const replyTopic = prompt(chrome.i18n.getMessage('prompt_updateReplyTopic')
                        + ' (' + chrome.i18n.getMessage('prompt_orEnter') + ' \'ALL\'):', config.replyTopic)
                    if (replyTopic !== null) { // user didn't cancel
                        const str_replyTopic = replyTopic.toString()
                        settings.save('replyTopic', !replyTopic || re_all.test(str_replyTopic) ? 'ALL' : str_replyTopic)
                        window.close() // popup
                        siteAlert(chrome.i18n.getMessage('alert_replyTopicUpdated') + '!',
                            chrome.i18n.getMessage('appName') + ' ' + chrome.i18n.getMessage('alert_willAnswer') + ' '
                                + ( !replyTopic || re_all.test(str_replyTopic) ? chrome.i18n.getMessage('alert_onAllTopics')
                                                                            : chrome.i18n.getMessage('alert_onTopicOf')
                                                                                + ' ' + str_replyTopic ) + '!')
                        if (config.infinityMode) // reboot active session
                            sendMsgToActiveTab({ action: 'restartInNewChat' })
                    }
                } else if (key == 'replyInterval') {
                    while (true) {
                        const replyInterval = prompt(`${chrome.i18n.getMessage('prompt_updateReplyInt')}:`, config.replyInterval)
                        if (replyInterval === null) break // user cancelled so do nothing
                        else if (!isNaN(parseInt(replyInterval, 10)) && parseInt(replyInterval, 10) > 4) { // valid int set
                            settings.save('replyInterval', parseInt(replyInterval, 10))
                            window.close() // popup
                            siteAlert(chrome.i18n.getMessage('alert_replyIntUpdated') + '!',
                                chrome.i18n.getMessage('appName') + ' ' + chrome.i18n.getMessage('alert_willReplyEvery')
                                + ' ' + replyInterval + ' ' + chrome.i18n.getMessage('unit_seconds') + '.')
                            if (config.infinityMode) // reboot active session
                                sendMsgToActiveTab({ action: 'resetInSameChat' })
                            break
                        }
                    }
                }
            }
        })

        sync.fade() // in ccase master toggle off
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
        src: `${app.urls.mediaHost}/images/icons/question-mark/icon16.png?e10f556` })
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

})()
