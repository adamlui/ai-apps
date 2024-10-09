// Launch phind.com on toolbar icon click
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({ url: 'https://www.phind.com' }))

// Query phind.com on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `https://www.phind.com/search?q=${decodeURIComponent(query)}` }))
