/* Monitor active tab URL to toggle extension on chat.openai.com */

// Add install/update actions
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.local.set({ 'chatGPTws_extensionDisabled': false }) // auto-enable
    if (details.reason == 'install') chrome.tabs.create({ url: 'https://chat.openai.com/' }) // open ChatGPT
})

// Sync extension toggle state when ChatGPT tab active
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes('https://chat.openai.com')) {
            chrome.tabs.sendMessage(tab.id, { type: 'toggleExtension' })
}})})