// Relay popup.js msgs to all content.js
chrome.runtime.onMessage.addListener(request =>
    chrome.tabs.query({}, tabs =>
        tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, { ...request }))
))
