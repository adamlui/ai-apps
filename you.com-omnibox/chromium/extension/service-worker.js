// Launch you.com on toolbar icon click
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({ url: 'https://you.com/' }))

// Query you.com on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `https://www.you.com/search?q=${query}&tbm=youchat` }))
