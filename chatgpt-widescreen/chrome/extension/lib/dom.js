const dom = {
    create: {
        style(content) {
            const style = document.createElement('style')
            if (content) style.innerText = content
            return style
        },

        svgElem(type, attrs) {
            const elem = document.createElementNS('http://www.w3.org/2000/svg', type)
            for (const attr in attrs) elem.setAttributeNS(null, attr, attrs[attr])
            return elem
        }
    },

    cssSelectorize(classList) {
        return classList.toString()
            .replace(/([:[\]\\])/g, '\\$1') // escape special chars :[]\
            .replace(/^| /g, '.') // prefix w/ dot, convert spaces to dots
    },

    async elemIsLoaded(selector, timeout = null) {
        const timeoutPromise = timeout ? new Promise(resolve => setTimeout(() => resolve(false), timeout)) : null
        const isLoadedPromise = new Promise(resolve => {
            if (document.querySelector(selector)) resolve(true)
            else new MutationObserver((_, obs) => {
                if (document.querySelector(selector)) {
                    obs.disconnect() ; resolve(true) }
            }).observe(document.body, { childList: true, subtree: true })
        })
        return await ( timeoutPromise ? Promise.race([isLoadedPromise, timeoutPromise]) : isLoadedPromise )
    }
}

window.dom = dom;
