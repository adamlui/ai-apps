/* Monitor active tab URL to toggle extension on chat.openai.com */

// Auto-enable on install/update
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ 'chatGPTws_extensionDisabled': false })
})

// Sync extension toggle state when ChatGPT tab active
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes('https://chat.openai.com')) {
            chrome.tabs.sendMessage(tab.id, { type: 'toggleExtension' })
}})})