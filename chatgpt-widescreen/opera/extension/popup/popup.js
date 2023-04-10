(async function() {

    // Import settings-utils.js
    var { config, settings } = await import(chrome.runtime.getURL("lib/settings-utils.js"))

    // Initialize popup
    settings.load('wideScreen', 'fullWindow', 'notifHidden', 'fullerWindow', 'extensionDisabled')
        .then(function() { // restore extension/toggle states
            mainToggle.checked = !config.extensionDisabled
            fullerWinToggle.checked = config.fullerWindow
            notificationsToggle.checked = !config.notifHidden
            updateGreyness()
        })    

    // Add main toggle click-listener
    var toggles = document.querySelectorAll('input')
    var mainToggle = toggles[0]
    mainToggle.addEventListener('change', function() {    
        settings.save('extensionDisabled', !this.checked)
        toggleExtension() ; updateGreyness()
    })

    // Add Fuller Windows toggle label click-listeners
    var fullerWinToggle = toggles[1]
    var fullerWinLabel = fullerWinToggle.parentNode.parentNode
    fullerWinToggle.addEventListener('change', function toggleFullerWin() {
        settings.save('fullerWindow', !config.fullerWindow)
        settings.load('notifHidden').then(function() {
            if (!config.notifHidden) { // show mode notification if enabled
                notify('Fuller Windows ' + ( config.fullerWindow ? 'ON' : 'OFF' ), 'bottom-right')
        }})

    })
    fullerWinLabel.addEventListener('click', (event) => {
        if (event.target == fullerWinLabel) fullerWinToggle.click() // to avoid double-toggle
    })

    // Add notifications toggle label click-listeners
    var notificationsToggle = toggles[2]
    var notificationsLabel = notificationsToggle.parentNode.parentNode
    notificationsToggle.addEventListener('change', function toggleNotifications() {
        settings.save('notifHidden', !config.notifHidden)
        notify('Mode Notifications ' + ( config.notifHidden ? 'OFF' : 'ON' ), 'bottom-right' )
    })
    notificationsLabel.addEventListener('click', (event) => {
        if (event.target == notificationsLabel) notificationsToggle.click() // to avoid double-toggle
    })

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
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { 
                type: 'notify', msg: msg, position: position ? position : 'bottom-right' 
    })})}

    function toggleExtension() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: 'toggleExtension' }
    )})}

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
