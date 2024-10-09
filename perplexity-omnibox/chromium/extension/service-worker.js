// Launch perplexity.ai on toolbar icon click
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({ url: 'https://www.perplexity.ai' }))

// Query perplexity.ai on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `https://www.perplexity.ai/search/new?q=${decodeURIComponent(query)}` }))
