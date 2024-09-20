// Add on-install/update actions
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' }) // open ChatGPT
})

// Relay popup.js msgs to all content.js
chrome.runtime.onMessage.addListener(request =>
    chrome.tabs.query({}, tabs =>
        tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, { ...request }))
))
