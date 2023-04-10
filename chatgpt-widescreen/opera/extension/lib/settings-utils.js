var configKeyPrefix = 'chatGPTws_'
var config = {}
var settings = {

    load: function() {
        var keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments))
        return Promise.all(keys.map(function(key) { // resolve promise when all keys load
            return new Promise(function(resolve) { // resolve promise when single key value loads
                chrome.storage.local.get(configKeyPrefix + key, function(result) { // load from Chrome
                    config[key] = result[configKeyPrefix + key] === true // save to memory
                    resolve()
    })})}))},

    save: function(key, value) {
        var obj = {} ; obj[configKeyPrefix + key] = value
        chrome.storage.local.set(obj) // save to Chrome
        config[key] = value // save to memory
    }

}

export { config, settings }
