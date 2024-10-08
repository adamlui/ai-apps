(async () => {

    // Init APP data
    const app = { latestAssetCommitHash: '5f9fa6a' }
    Object.assign(app, await (await fetch(chrome.runtime.getURL('app.json'))).json())
    Object.assign(app, { settings: {
        notifDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_modeNotifs') }
    }})
    chrome.storage.sync.set({ app })

    // Launch ChatGPT on install
    chrome.runtime.onInstalled.addListener(details => {
        if (details.reason == 'install')
            chrome.tabs.create({ url: 'https://chatgpt.com/' })
    })

    // Sync settings to activated tabs
    chrome.tabs.onActivated.addListener(activeInfo =>
        chrome.tabs.sendMessage(activeInfo.tabId, { action: 'sync.storageToUI' }))
    
})()