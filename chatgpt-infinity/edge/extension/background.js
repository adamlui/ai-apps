// Add install/update actions
chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.set({ 'chatGPTinf_extensionDisabled': false }) // auto-enable
    if (details.reason == 'install') chrome.tabs.create({ url: 'https://chat.openai.com/' }) // open ChatGPT
})

// Add auto-alert on update available
chrome.runtime.onUpdateAvailable.addListener((details) => { alertToUpdate(details.version) })

// Sync extension state/settings when ChatGPT tab active
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes('https://chat.openai.com')) {
            chrome.tabs.sendMessage(tab.id, { action: 'syncExtension' })
}})})

function alertToUpdate(version) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { 
            action: 'alertToUpdate', args: version
})})}
