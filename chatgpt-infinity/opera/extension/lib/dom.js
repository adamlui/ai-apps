const dom = {
    create: {
        elem(elemType, attrs = {}) {
            const elem = document.createElement(elemType)
            Object.entries(attrs).forEach(([attr, val]) => elem.setAttribute(attr, val))
            return elem
        }
    }
}

window.dom = dom;
