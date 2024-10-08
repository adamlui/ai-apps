(async () => {

    // Init APP data
    const app = { latestAssetCommitHash: 'e4d1d02' },
          assetHostURL = `https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@${app.latestAssetCommitHash}`
    Object.assign(app, await (await fetch(`${assetHostURL}/app.json`)).json())
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