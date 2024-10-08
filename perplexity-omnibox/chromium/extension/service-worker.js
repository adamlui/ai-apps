chrome.omnibox.onInputEntered.addListener(query => {
    chrome.tabs.update({ url: `https://www.perplexity.ai/search/new?q=${query}` })
})
