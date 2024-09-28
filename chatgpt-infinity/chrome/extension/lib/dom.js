const dom = {

    create: {
        elem(elemType, attrs = {}) {
            const elem = document.createElement(elemType)
            Object.entries(attrs).forEach(([attr, val]) => elem.setAttribute(attr, val))
            return elem
        },

        style(content) {
            const style = document.createElement('style')
            if (content) style.innerText = content
            return style
        }
    }
}

window.dom = dom;
