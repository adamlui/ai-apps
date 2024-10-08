(async () => {

    // Init APP data
    const app = { latestAssetCommitHash: '698e2e7' }
    Object.assign(app, await (await fetch(chrome.runtime.getURL('app.json'))).json())
    app.urls.assetHost = app.urls.gitHub.replace('github.com', 'cdn.jsdelivr.net/gh') + `@${app.latestAssetCommitHash}`
    Object.assign(app, { settings: {
        fullerWindows: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_fullerWins'),
            helptip: chrome.i18n.getMessage('helptip_fullerWins') },
        tcbDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_tallerChatbox'),
            helptip: chrome.i18n.getMessage('helptip_tallerChatbox') },
        widerChatbox: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_widerChatbox'),
            helptip: chrome.i18n.getMessage('helptip_widerChatbox') },
        ncbDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_newChatBtn'),
            helptip: chrome.i18n.getMessage('helptip_newChatBtn') },
        hiddenHeader: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_hiddenHeader'),
            helptip: chrome.i18n.getMessage('helptip_hiddenHeader') },
        hiddenFooter: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_hiddenFooter'),
            helptip: chrome.i18n.getMessage('helptip_hiddenFooter') },
        notifDisabled: { type: 'toggle',
            label: chrome.i18n.getMessage('menuLabel_modeNotifs'),
            helptip: chrome.i18n.getMessage('helptip_modeNotifs') }
    }})
    chrome.storage.sync.set({ app })

    // Init SITES data
    const sites = Object.assign(Object.create(null), await (await fetch(`${app.urls.assetHost}/data/sites.json`)).json())
    chrome.storage.sync.set({ sites })

    // Launch ChatGPT on install
    chrome.runtime.onInstalled.addListener(details => {
        if (details.reason == 'install')
            chrome.tabs.create({ url: 'https://chatgpt.com/' })
    })

    // Sync modes/settings to activated tabs
    chrome.tabs.onActivated.addListener(activeInfo =>
        chrome.tabs.sendMessage(activeInfo.tabId, { action: 'sync.storageToUI' }))
  
})()
