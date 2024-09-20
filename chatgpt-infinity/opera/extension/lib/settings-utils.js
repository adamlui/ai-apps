const config = {}, settings = {

    load() {
        const keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments))
        return Promise.all(keys.map(key => { // resolve promise when all keys load
            return new Promise(resolve => { // resolve promise when single key value loads
                chrome.storage.sync.get(key, result => { // load from Chrome
                    config[key] = result[key] || false ; resolve()
    })})}))},

    save(key, value) {
        const obj = {} ; obj[key] = value
        chrome.storage.sync.set(obj) // save to Chrome
        config[key] = value // save to memory
    }
}

export { config, settings }
