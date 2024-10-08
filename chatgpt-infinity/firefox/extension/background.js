(async () => {

    // Init APP data
    const app = { latestAssetCommitHash: '190b1ee' },
          assetHostURL = `https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@${app.latestAssetCommitHash}`
    Object.assign(app, await (await fetch(`${assetHostURL}/app.json`)).json())
    Object.assign(app, { settings: {
        autoStart: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_autoStart') },
        toggleHidden: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_toggleVis') },
        autoScrollDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_autoScroll') },
        replyLanguage: { type: 'prompt', symbol: '🌐',
            label: chrome.i18n.getMessage('menuLabel_replyLang') },
        replyTopic: { type: 'prompt', symbol: '🧠',
            label: chrome.i18n.getMessage('menuLabel_replyTopic') },
        replyInterval: { type: 'prompt', symbol: '⌚',
            label: chrome.i18n.getMessage('menuLabel_replyInt') }
    }})
    chrome.storage.sync.set({ app })

    // Launch ChatGPT on install
    chrome.runtime.onInstalled.addListener(details => {
        if (details.reason == 'install')
            chrome.tabs.create({ url: 'https://chatgpt.com/' })
    })

    // Sync settings to activated tabs
    chrome.tabs.onActivated.addListener(activeInfo =>
        chrome.tabs.sendMessage(activeInfo.tabId, {
            action: 'sync.storageToUI',
            sender: 'background.js' // for content.js to reset config.infinityMode
    }))

})()
