const config = {}, settings = {
    browserwideKeys: [ 'extensionDisabled', 'fullScreen' ], // to not load/save per-site

    load() {
        const keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments))
        return Promise.all(keys.map(key => // resolve promise when all keys load
            new Promise(resolve => // resolve promise when single key value loads
                chrome.storage.sync.get( // load from Chrome
                    !this.browserwideKeys.includes(key) ? `${this.site}_${key}` : key,
                    result => { config[key] = result[`${this.site}_${key}`] || result[key] || false ; resolve() }
    ))))},

    save(key, val) {
        chrome.storage.sync.set({ // save to Chrome
            [ !this.browserwideKeys.includes(key) ? `${this.site}_${key}` : key ] : val })
        config[key] = val // save to memory
    }
}

export { config, settings }
