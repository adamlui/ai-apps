const config = {
    keyPrefix: 'chatgptWidescreen', appSymbol: '🖥️',
    gitHubURL: 'https://github.com/adamlui/chatgpt-widescreen' }

const settings = {

    load: function() {
        const keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments))
        return Promise.all(keys.map(key => // resolve promise when all keys load
            new Promise(resolve => // resolve promise when single key value loads
                chrome.storage.local.get(`${ config.keyPrefix }_${ key }`, result => { // load from Chrome
                    config[key] = result[`${ config.keyPrefix }_${ key }`] || false ; resolve()
    }))))},

    save: function(key, value) {
        const obj = {} ; obj[`${ config.keyPrefix }_${ key }`] = value
        chrome.storage.local.set(obj) // save to Chrome
        config[key] = value // save to memory
    }
}

export { config, settings }
