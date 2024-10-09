// Launch search.brave.com on toolbar icon click
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({ url: 'https://search.brave.com' }))

// Query Brave AI on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `https://search.brave.com/search?q=${decodeURIComponent(query)}&summary=1` }))
