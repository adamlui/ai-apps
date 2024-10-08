chrome.omnibox.onInputEntered.addListener(query => {
    chrome.tabs.create({ url: `https://www.perplexity.ai/search/new?q=${query}` })
})
