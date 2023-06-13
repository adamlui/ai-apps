// Add install/update actions
chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.set({ 'chatGPTws_extensionDisabled': false }) // auto-enable
    if (details.reason == 'install') chrome.tabs.create({ url: 'https://chat.openai.com/' }) // open ChatGPT
})

// Add auto-alert on update available
chrome.runtime.onUpdateAvailable.addListener((details) => {
    alert(`${ chrome.i18n.getMessage('alert_updateAvail') }!`,
        chrome.i18n.getMessage('alert_newerVer') + ' ' + chrome.i18n.getMessage('appName')
            + ' v' + details.version + ' ' + chrome.i18n.getMessage('alert_isAvail') + '!' + '!&nbsp;&nbsp;&nbsp;'
            + '<br><a target="_blank" href="https://github.com/adamlui/chatgpt-widescreen/commits/main/chrome/extension" '
            + 'style="font-size: 0.7rem">' + chrome.i18n.getMessage('link_viewChanges') + '</a>',
        function update() { chrome.runtime.reload() } // update button
    )
})

// Sync extension toggle state when ChatGPT tab active
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes('https://chat.openai.com')) {
            chrome.tabs.sendMessage(tab.id, { action: 'syncExtension' })
}})})

function alert(title = '', msg = '', btns = '') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { 
            action: 'alert', title: title, msg: msg, btns: btns })
})}