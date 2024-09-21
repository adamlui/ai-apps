// Launch ChatGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' })
})

// Relay popup.js msgs to all content.js
chrome.runtime.onMessage.addListener(request =>
    chrome.tabs.query({}, tabs =>
        tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, { ...request }))
))

// Sync modes to activated tabs
chrome.tabs.onActivated.addListener(activeInfo =>
    chrome.tabs.sendMessage(activeInfo.tabId, { action: 'sync.extension' }))
