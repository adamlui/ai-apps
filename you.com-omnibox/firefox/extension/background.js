// Launch you.com on toolbar icon click
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({ url: 'https://you.com/' }))
