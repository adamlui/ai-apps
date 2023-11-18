(async () => {

    // Import settings-utils.js
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'))

    // Initialize popup toggles
    settings.load('fullerWindows', 'tcbDisabled', 'widerChatbox',
                  'hiddenHeader', 'hiddenFooter', 'notifHidden', 'extensionDisabled')
        .then(() => { // restore extension/toggle states
            mainToggle.checked = !config.extensionDisabled
            fullerWinToggle.checked = config.fullerWindows
            tallerChatboxToggle.checked = !config.tcbDisabled
            widerChatboxToggle.checked = config.widerChatbox
            hiddenHeaderToggle.checked = config.hiddenHeader
            hiddenFooterToggle.checked = config.hiddenFooter
            notificationsToggle.checked = !config.notifHidden
            updateGreyness()
        })

    // Localize labels
    document.querySelectorAll('[data-locale]').forEach(elem => {
        const localeKeys = elem.dataset.locale.split(' '),
              translatedText = localeKeys.map(key => chrome.i18n.getMessage(key)).join(' ');
        elem.innerText = translatedText;
    });

    // Add main toggle click-listener
    const toggles = document.querySelectorAll('input'),
          mainToggle = toggles[0]
    mainToggle.addEventListener('change', function() {    
        settings.save('extensionDisabled', !this.checked)
        syncExtension() ; updateGreyness()
    })

    // Add Fuller Windows toggle label click-listeners
    const fullerWinToggle = toggles[1],
          fullerWinLabel = fullerWinToggle.parentNode.parentNode
    fullerWinToggle.addEventListener('change', () => {
        settings.save('fullerWindows', !config.fullerWindows)
        syncExtension()
        settings.load('notifHidden').then(() => {
            if (!config.notifHidden) { // show mode notification if enabled
                notify(chrome.i18n.getMessage('menuLabel_fullerWins') + ' ' + ( config.fullerWindows ? 'ON' : 'OFF' ))
        }})
    })
    fullerWinLabel.addEventListener('click', event => {
        if ([fullerWinLabel, document.querySelector('[data-locale*="fullerWins"]')].includes(event.target))
            fullerWinToggle.click() 
    })

    // Add Taller Chatbox toggle label click-listeners
    const tallerChatboxToggle = toggles[2],
          tallerChatboxLabel = tallerChatboxToggle.parentNode.parentNode
    tallerChatboxToggle.addEventListener('change', () => {
        settings.save('tcbDisabled', !config.tcbDisabled)
        syncExtension()
        settings.load('notifHidden').then(() => {
            if (!config.notifHidden) { // show mode notification if enabled
                notify(chrome.i18n.getMessage('menuLabel_tallerChatbox') + ' ' + (config.tcbDisabled ? 'OFF' : 'ON'))
        }})
    })
    tallerChatboxLabel.addEventListener('click', event => {
        if ([tallerChatboxLabel, document.querySelector('[data-locale*="tallerChatbox"]')].includes(event.target))
            tallerChatboxToggle.click() 
    })

    // Add Wider Chatbox toggle label click-listeners
    const widerChatboxToggle = toggles[3],
          widerChatboxLabel = widerChatboxToggle.parentNode.parentNode
    widerChatboxToggle.addEventListener('change', () => {
        settings.save('widerChatbox', !config.widerChatbox)
        syncExtension()
        settings.load('notifHidden').then(() => {
            if (!config.notifHidden) { // show mode notification if enabled
                notify(chrome.i18n.getMessage('menuLabel_widerChatbox') + ' ' + (config.widerChatbox ? 'ON' : 'OFF'))
        }})
    })
    widerChatboxLabel.addEventListener('click', event => {
        if ([widerChatboxLabel, document.querySelector('[data-locale*="widerChatbox"]')].includes(event.target))
            widerChatboxToggle.click() 
    })

    // Add Hidden Header toggle label click-listeners
    const hiddenHeaderToggle = toggles[4],
          hiddenHeaderLabel = hiddenHeaderToggle.parentNode.parentNode
    hiddenHeaderToggle.addEventListener('change', () => {
        settings.save('hiddenHeader', !config.hiddenHeader)
        syncExtension()
        settings.load('hiddenHeader').then(() => {
            if (!config.notifHidden) { // show mode notification if enabled
                notify(chrome.i18n.getMessage('menuLabel_hiddenHeader') + ' ' + (config.hiddenHeader ? 'ON' : 'OFF'))
        }})
    })
    hiddenHeaderLabel.addEventListener('click', event => {
        if ([hiddenHeaderLabel, document.querySelector('[data-locale*="hiddenHeader"]')].includes(event.target))
            hiddenHeaderToggle.click() 
    })

    // Add Hidden Footer toggle label click-listeners
    const hiddenFooterToggle = toggles[5],
          hiddenFooterLabel = hiddenFooterToggle.parentNode.parentNode
    hiddenFooterToggle.addEventListener('change', () => {
        settings.save('hiddenFooter', !config.hiddenFooter)
        syncExtension()
        settings.load('notifHidden').then(() => {
            if (!config.notifHidden) { // show mode notification if enabled
                notify(chrome.i18n.getMessage('menuLabel_hiddenFooter') + ' ' + (config.hiddenFooter ? 'ON' : 'OFF'))
        }})
    })
    hiddenFooterLabel.addEventListener('click', event => {
        if ([hiddenFooterLabel, document.querySelector('[data-locale*="hiddenFooter"]')].includes(event.target))
            hiddenFooterToggle.click() 
    })

    // Add notifications toggle label click-listeners
    const notificationsToggle = toggles[6],
          notificationsLabel = notificationsToggle.parentNode.parentNode
    notificationsToggle.addEventListener('change', function toggleNotifications() {
        settings.save('notifHidden', !config.notifHidden)
        notify(chrome.i18n.getMessage('menuLabel_modeNotifs') + ' ' + ( config.notifHidden ? 'OFF' : 'ON' ))
    })
    notificationsLabel.addEventListener('click', event => {
        if ([notificationsLabel, document.querySelector('[data-locale*="modeNotifs"]')].includes(event.target))
            notificationsToggle.click()
    })

    // Add update-check span click-listener
    const updateSpan = document.querySelector('span[title*="update" i]')
    updateSpan.addEventListener('click', () => {
        window.close() // popup
        chrome.runtime.requestUpdateCheck((status, details) => {
            alertToUpdate(status == 'update_available' ? details.version : '')
    })})

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
    const chatGPTjsHostPath = 'https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/badges/',
          chatGPTjsImg = document.querySelector('.chatgpt-js img')
    chatGPTjsImg.addEventListener('mouseover', function() {
        chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js.png' })
    chatGPTjsImg.addEventListener('mouseout', function() {
      chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js-faded.png' })

    // Define FEEDBACK functions

    function notify(msg, position) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'notify', msg: msg, position: position || 'bottom-right' })
    })}
    
    function alertToUpdate(version) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'alertToUpdate', args: version
    })})}

    // Define SYNC functions

    function syncExtension() {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'syncExtension' })
    })}

    function updateGreyness() {

        // Updated toolbar icon
        const iconDimensions = [16, 32, 48, 64, 128, 223], iconPaths = {}
        iconDimensions.forEach(dimension => {
            iconPaths[dimension] = '../icons/'
                + (config.extensionDisabled ? 'faded/' : '')
                + 'icon' + dimension + '.png'
        })
        chrome.action.setIcon({ path: iconPaths })

        // Update menu contents
        document.querySelectorAll('div.logo, div.menu-title, div.menu')
            .forEach(elem => {
                elem.classList.remove(mainToggle.checked ? 'disabled' : 'enabled')
                elem.classList.add(mainToggle.checked ? 'enabled' : 'disabled')
            })
    }

})()
