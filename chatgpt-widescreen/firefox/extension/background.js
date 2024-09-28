(async () => {

    // Import APP data
    const app = await (await fetch(chrome.runtime.getURL('data/app.json'))).json()
    app.urls.assetHost = app.urls.gitHub.replace('github.com', 'cdn.jsdelivr.net/gh') + `@${app.latestAssetCommitHash}`

    // Launch ChatGPT on install
    chrome.runtime.onInstalled.addListener(details => {
        if (details.reason == 'install')
            chrome.tabs.create({ url: 'https://chatgpt.com/' })
    })

    // Sync modes to activated tabs
    chrome.tabs.onActivated.addListener(activeInfo =>
        chrome.tabs.sendMessage(activeInfo.tabId, { action: 'sync.storageToUI' }))

    // Fetch sites.json for content.js/popup.js to bypass CSP
    chrome.runtime.onMessage.addListener((req, _, sendResp) => {
        if (req.action == 'fetch.sites') {
            fetch(`${app.urls.assetHost}/sites.json`).then(async resp => {
                const respJSON = await resp.json()
                sendResp({ json: respJSON })
            })
            return true // keep channel open for the async fetch
        }
    })
  
})()
