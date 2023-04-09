/* Monitor active tab URL to toggle extension on matches */

// Auto-enable on install/update
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ 'chatGPTws_extensionDisabled': false })
})

// Extract content script matches from manifest
var matches = chrome.runtime.getManifest().content_scripts.map(
    (contentScript) => contentScript.matches.map(
        (match) => match.replace(/\*$/, ''))).flat()

// Add listener
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (matches.some((url) => tab.url.includes(url))) {
            chrome.tabs.sendMessage(tab.id, { type: 'toggleExtension' })
}})})
