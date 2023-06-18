const configPrefix = 'chatGPTinf_'
const config = {}
const settings = {

    load: function() {
        const keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments))
        return Promise.all(keys.map(function(key) { // resolve promise when all keys load
            return new Promise(function(resolve) { // resolve promise when single key value loads
                chrome.storage.local.get(configPrefix + key, function(result) { // load from Chrome
                    config[key] = result[configPrefix + key] === true // save to memory
                    resolve()
    })})}))},

    save: function(key, value) {
        const obj = {} ; obj[configPrefix + key] = value
        chrome.storage.local.set(obj) // save to Chrome
        config[key] = value // save to memory
    }

}

export { config, settings }
