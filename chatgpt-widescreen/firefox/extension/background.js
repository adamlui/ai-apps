// Launch ChatGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' })
})

// Sync modes to activated tabs
chrome.tabs.onActivated.addListener(activeInfo =>
    chrome.tabs.sendMessage(activeInfo.tabId, { action: 'sync.storageToUI' }))

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchSites') {
        fetch('https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@ac4e3b1/sites.json')
            .then(response => response.json())
            .then(data => {
                sendResponse({sites: data});
            })
            .catch(error => {
                console.error('Error fetching sites.json:', error);
                sendResponse({error: error.message});
            });
        return true;  // Indicates that the response is asynchronous
    }
});
        