(async () => {

    // Import settings.js
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))

    // Import APP data
    const app = await (await fetch(chrome.runtime.getURL('app.json'))).json()

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
    const masterToggle = document.querySelector('input')
    settings.load('extensionDisabled').then(() => { // init toggle state, update greyness
        masterToggle.checked = !config.extensionDisabled ; updateFade() })
    masterToggle.onchange = () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        infinityModeToggle.checked = false // always disable Infinity Mode on main toggle
        syncStorageToUI() ; updateFade()
    }

    // Locate settings elements
    const menuItems = document.querySelectorAll('.menu-item'),
          infinityModeDiv = menuItems[0], infinityModeToggle = infinityModeDiv.querySelector('input'),
          autoStartDiv = menuItems[1], autoStartToggle = autoStartDiv.querySelector('input'),
          toggleVisDiv = menuItems[2], toggleVisToggle = toggleVisDiv.querySelector('input'),
          autoScrollDiv = menuItems[3], autoScrollToggle = autoScrollDiv.querySelector('input'),
          replyLangDiv = menuItems[4], replyLangLabel = replyLangDiv.querySelector('span'),
          replyTopicDiv = menuItems[5], replyTopicLabel = replyTopicDiv.querySelector('span'),
          replyIntervalDiv = menuItems[6], replyIntervalLabel = replyIntervalDiv.querySelector('span')

    // Sync toggle states + menu labels
    const re_all = new RegExp('^(' + chrome.i18n.getMessage('menuLabel_all') + '|all|any|every)$', 'i')
    settings.load(['autoScrollDisabled', 'autoStart', 'infinityMode', 'replyInterval',
                   'replyLanguage', 'replyTopic', 'toggleHidden', 'userLanguage'])
        .then(() => { // restore toggle states
            infinityModeToggle.checked = config.infinityMode
            autoStartToggle.checked = config.autoStart
            toggleVisToggle.checked = !config.toggleHidden
            autoScrollToggle.checked = !config.autoScrollDisabled
            replyLangLabel.innerText += ` — ${config.replyLanguage}`
            replyTopicLabel.innerText += ' — '
                + ( re_all.test(config.replyTopic) ? chrome.i18n.getMessage('menuLabel_all')
                                                   : toTitleCase(config.replyTopic) )
            replyIntervalLabel.innerText += ` — ${config.replyInterval}s`
        })

    // Add 'Infinity Mode' click-listeners
    infinityModeToggle.onchange = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            if (new URL(tabs[0].url).hostname != 'chatgpt.com') return // do nothing if not on ChatGPT
            chrome.tabs.sendMessage(tabs[0].id, { action: 'clickToggle' }) // else click sidebar toggle
        })
        notify(`${chrome.i18n.getMessage('menuLabel_infinityMode')} ${ infinityModeToggle.checked ? 'ON' : 'OFF' }`)
    }
    infinityModeDiv.onclick = event => {
        if ([infinityModeDiv, document.querySelector('[data-locale*="infinityMode"]')].includes(event.target))
            infinityModeToggle.click() 
    }

    // Add 'Auto-Start' click-listeners
    autoStartToggle.onchange = () => {
        settings.save('autoStart', !config.autoStart) ; syncStorageToUI()        
        notify(`${chrome.i18n.getMessage('menuLabel_autoStart')} ${ config.autoStart ? 'ON' : 'OFF' }`)
    }
    autoStartDiv.onclick = event => {
        if ([autoStartDiv, document.querySelector('[data-locale*="autoStart"]')].includes(event.target))
            autoStartToggle.click() 
    }

    // Add 'Toggle Visibility' click-listeners
    toggleVisToggle.onchange = () => {
        settings.save('toggleHidden', !config.toggleHidden) ; syncStorageToUI()
        notify(`${chrome.i18n.getMessage('menuLabel_toggleVis')} ${ !config.toggleHidden ? 'ON' : 'OFF' }`)
    }
    toggleVisDiv.onclick = event => {
        if ([toggleVisDiv, document.querySelector('[data-locale*="toggleVis"]')].includes(event.target))
            toggleVisToggle.click() 
    }

    // Add 'Auto-Scroll' click-listeners
    autoScrollToggle.onchange = () => {
        settings.save('autoScrollDisabled', !config.autoScrollDisabled) ; syncStorageToUI()        
        notify(`${chrome.i18n.getMessage('menuLabel_autoScroll')} ${ !config.autoScrollDisabled ? 'ON' : 'OFF' }`)
    }
    autoScrollDiv.onclick = event => {
        if ([autoScrollDiv, document.querySelector('[data-locale*="autoScroll"]')].includes(event.target))
            autoScrollToggle.click() 
    }

    // Add 'Reply Language' click-listener
    replyLangDiv.onclick = () => {
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
                chrome.tabs.query({ active: true, currentWindow: true }, tabs => { // check active tab
                    if (new URL(tabs[0].url).hostname == 'chatgpt.com' && config.infinityMode) { // reboot active session
                        chrome.tabs.sendMessage(tabs[0].id, { action: 'restartInNewChat' }) }
                })
                break
    }}}

    // Add 'Reply Topic' click-listener
    replyTopicDiv.onclick = () => {
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
            chrome.tabs.query({ active: true, currentWindow: true }, tabs => { // check active tab
                if (new URL(tabs[0].url).hostname == 'chatgpt.com' && config.infinityMode) { // reboot active session
                    chrome.tabs.sendMessage(tabs[0].id, { action: 'restartInNewChat' }) }
            })
    }}

    // Add 'Reply Interval' click-listener
    replyIntervalDiv.onclick = () => {
        while (true) {
            const replyInterval = prompt(`${chrome.i18n.getMessage('prompt_updateReplyInt')}:`, config.replyInterval)
            if (replyInterval === null) break // user cancelled so do nothing
            else if (!isNaN(parseInt(replyInterval, 10)) && parseInt(replyInterval, 10) > 4) { // valid int set
                settings.save('replyInterval', parseInt(replyInterval, 10))
                window.close() // popup
                siteAlert(chrome.i18n.getMessage('alert_replyIntUpdated') + '!',
                    chrome.i18n.getMessage('appName') + ' ' + chrome.i18n.getMessage('alert_willReplyEvery')
                    + ' ' + replyInterval + ' ' + chrome.i18n.getMessage('unit_seconds') + '.')
                chrome.tabs.query({ active: true, currentWindow: true }, tabs => { // check active tab
                    if (new URL(tabs[0].url).hostname != 'chatgpt.com' && config.infinityMode) // reboot active session
                        chrome.tabs.sendMessage(tabs[0].id, { action: 'resetInSameChat' })
                })
                break
    }}}

    // Add Support span click-listener
    const supportLink = document.querySelector('a[title*="support" i]'),
          supportSpan = supportLink.parentNode 
    supportSpan.onclick = event => {
        if (event.target == supportSpan) supportLink.click() } // to avoid double-toggle

    // Add More Add-ons span click-listener
    const moreAddOnsLink = document.querySelector('a[title*="more" i]'),
          moreAddOnsSpan = moreAddOnsLink.parentNode 
    moreAddOnsSpan.onclick = event => {
        if (event.target == moreAddOnsSpan) moreAddOnsLink.click() } // to avoid double-toggle

    // Add Powered by chatgpt.js hover-listener
    const chatGPTjsHostPath = `${app.urls.cjsMediaHost}/images/badges/`,
          chatGPTjsImg = document.querySelector('.chatgpt-js img')
    chatGPTjsImg.onmouseover = chatGPTjsImg.onmouseout = event => chatGPTjsImg.src = `${
        chatGPTjsHostPath}powered-by-chatgpt.js${ event.type == 'mouseover' ? '' : '-faded' }.png`

    // Define FEEDBACK functions

    function notify(msg, position) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'notify', msg: msg, position: position || 'bottom-right' })
    })}

    function siteAlert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'alert', title: title, msg: msg, btns: btns, checkbox: checkbox, width: width
    })})}

    // Define MENU label function

    function toTitleCase(str) {
        const words = str.toLowerCase().split(' ')
        for (let i = 0 ; i < words.length ; i++)
            words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        return words.join(' ')
    }

    // Define SYNC functions

    function syncStorageToUI() { chrome.runtime.sendMessage({ action: 'sync.storageToUI' }) }

    function updateFade() {

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
    }

})()
