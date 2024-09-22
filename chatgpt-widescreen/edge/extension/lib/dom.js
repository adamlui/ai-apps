const create = {
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
}

function cssSelectorize(classList) {
    return classList.toString()
        .replace(/([:[\]\\])/g, '\\$1') // escape special chars :[]\
        .replace(/^| /g, '.') // prefix w/ dot, convert spaces to dots
}

export { create, cssSelectorize }
