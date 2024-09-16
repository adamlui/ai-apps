const app = {
    symbol: '∞', configKeyPrefix: 'chatGPTinfinity',
    urls: { gitHub: 'https://github.com/adamlui/chatgpt-infinity' }
}
app.urls.assetHost = app.urls.gitHub.replace('github.com', 'cdn.jsdelivr.net/gh') + '@5153489/'

export { app }
