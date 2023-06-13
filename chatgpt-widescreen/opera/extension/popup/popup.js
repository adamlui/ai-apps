(async () => {

    // Import settings-utils.js
    var { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'))

    // Initialize popup toggles
    settings.load('fullerWindow', 'tcbDisabled', 'notifHidden', 'extensionDisabled')
        .then(function() { // restore extension/toggle states
            mainToggle.checked = !config.extensionDisabled
            fullerWinToggle.checked = config.fullerWindow
            tallerChatboxToggle.checked = !config.tcbDisabled
            notificationsToggle.checked = !config.notifHidden
            updateGreyness()
        })

    // Get international msg's
    document.querySelectorAll('[data-locale]').forEach(elem => {
        elem.innerText = chrome.i18n.getMessage(elem.dataset.locale) })

    // Add main toggle click-listener
    var toggles = document.querySelectorAll('input')
    var mainToggle = toggles[0]
    mainToggle.addEventListener('change', function() {    
        settings.save('extensionDisabled', !this.checked)
        syncExtension() ; updateGreyness()
    })

    // Add Fuller Windows toggle label click-listeners
    var fullerWinToggle = toggles[1]
    var fullerWinLabel = fullerWinToggle.parentNode.parentNode
    fullerWinToggle.addEventListener('change', () => {
        settings.save('fullerWindow', !config.fullerWindow)
        settings.load('notifHidden').then(() => {
            if (!config.notifHidden) { // show mode notification if enabled
                notify(chrome.i18n.getMessage('menuLabel_fullerWins') + ' ' + ( config.fullerWindow ? 'ON' : 'OFF' ))
        }})
    })
    fullerWinLabel.addEventListener('click', (event) => {
        if ([fullerWinLabel, document.querySelector('[data-locale*="fullerWins"]')].includes(event.target))
            fullerWinToggle.click() 
    })

    // Add Taller Chatbox toggle label click-listeners
    var tallerChatboxToggle = toggles[2]
    var tallerChatboxLabel = tallerChatboxToggle.parentNode.parentNode
    tallerChatboxToggle.addEventListener('change', () => {
        settings.save('tcbDisabled', !config.tcbDisabled)
        syncExtension()
        settings.load('notifHidden').then(() => {
            if (!config.notifHidden) { // show mode notification if enabled
                notify(chrome.i18n.getMessage('menuLabel_tallerChatbox') + ' ' + (config.tcbDisabled ? 'OFF' : 'ON'))
        }})
    })
    tallerChatboxLabel.addEventListener('click', (event) => {
        if ([tallerChatboxLabel, document.querySelector('[data-locale*="tallerChatbox"]')].includes(event.target))
            tallerChatboxToggle.click() 
    })

    // Add notifications toggle label click-listeners
    var notificationsToggle = toggles[3]
    var notificationsLabel = notificationsToggle.parentNode.parentNode
    notificationsToggle.addEventListener('change', function toggleNotifications() {
        settings.save('notifHidden', !config.notifHidden)
        notify(chrome.i18n.getMessage('menuLabel_modeNotifs') + ' ' + ( config.notifHidden ? 'OFF' : 'ON' ))
    })
    notificationsLabel.addEventListener('click', (event) => {
        if ([notificationsLabel, document.querySelector('[data-locale*="modeNotifs"]')].includes(event.target))
            notificationsToggle.click()
    })

    // Add update-check span click-listener
    var updateSpan = document.querySelector('span[title*="update" i]')
    updateSpan.addEventListener('click', (event) => {
        window.close() // popup
        chrome.runtime.requestUpdateCheck((status, version) => {
            if (status === 'update_available') {
                alert(`${ chrome.i18n.getMessage('alert_updateAvail') }!`,
                    chrome.i18n.getMessage('alert_newerVer') + ' ' + chrome.i18n.getMessage('appName')
                        + ' v' + version.toString() + ' ' + chrome.i18n.getMessage('alert_isAvail') + '!&nbsp;&nbsp;&nbsp;'
                        + '<a target="_blank" href="https://github.com/adamlui/chatgpt-widescreen/commits/main/chrome/extension" '
                        + 'style="font-size: 0.7rem">' + chrome.i18n.getMessage('link_viewChanges') + '</a>',
                    function update() { chrome.runtime.reload() } // update button
                )
            } else { // alert to no update found
                alert(chrome.i18n.getMessage('alert_upToDate') + '!',
                    chrome.i18n.getMessage('appName') + ' v' + chrome.runtime.getManifest().version
                        + ' ' + chrome.i18n.getMessage('alert_isUpToDate') + '!'
                )
            }
    })})

    // Add Support span click-listener
    var supportLink = document.querySelector('a[title*="support" i]')
    var supportSpan = supportLink.parentNode 
    supportSpan.addEventListener('click', (event) => {
        if (event.target == supportSpan) supportLink.click() // to avoid double-toggle
    })

    // Add More Add-ons span click-listener
    var moreAddOnsLink = document.querySelector('a[title*="more" i]')
    var moreAddOnsSpan = moreAddOnsLink.parentNode 
    moreAddOnsSpan.addEventListener('click', (event) => {
        if (event.target == moreAddOnsSpan) moreAddOnsLink.click() // to avoid double-toggle
    })

    // Add Powered by chatgpt.js hover-listener
    var chatGPTjsHostPath = 'https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/badges/'
    var chatGPTjsImg = document.querySelector('.chatgpt-js img')
    chatGPTjsImg.addEventListener('mouseover', function() {
        chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js.png' })
    chatGPTjsImg.addEventListener('mouseout', function() {
      chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js-faded.png' })

    // Define script functions

    function notify(msg, position) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'notify', msg: msg, position: position ? position : 'bottom-right' })
    })}

    function alert(title = '', msg = '', btns = '') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'alert', title: title, msg: msg, btns: btns })
    })}

    function syncExtension() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'syncExtension' })
    })}

    function updateGreyness() {

        // Updated toolbar icon
        var dimensions = [16, 32, 48, 64, 128, 223], iconPaths = {}
        dimensions.forEach((dimension) => {
            iconPaths[dimension] = '../icons/'
                + (config.extensionDisabled ? 'faded/' : '')
                + 'icon' + dimension + '.png'
        })
        chrome.action.setIcon({ path: iconPaths })

        // Update menu contents
        document.querySelectorAll('div.logo, div.menu-title, div.menu')
            .forEach((elem) => {
                elem.classList.remove(mainToggle.checked ? 'disabled' : 'enabled')
                elem.classList.add(mainToggle.checked ? 'enabled' : 'disabled')
            })
    }

})()
