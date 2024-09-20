// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license
// Source: https://github.com/KudoAI/chatgpt.js
// Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js

(async () => {

    const site = /([^.]+)\.[^.]+$/.exec(location.hostname)[1]

    // Import LIBS
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js')),
          { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'))
    
    // Init ENV info
    const env = {
        browser: { isBrave: chatgpt.browser.isBrave() },
        scriptManager: (() => { try { return GM_info.scriptHandler } catch (err) { return 'other' }})()
    }

    // Import DATA
    const app = await (await fetch(chrome.runtime.getURL('app.json'))).json()
    app.urls.assetHost = app.urls.gitHub.replace('github.com', 'cdn.jsdelivr.net/gh') + `@${app.latestAssetCommitHash}`
    const sites = Object.assign(Object.create(null), await (await fetch(`${app.urls.assetHost}/sites.json`)).json())

    // Init CONFIG
    await settings.load(...sites[site].availFeatures)

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(request => {
        if (request.action == 'notify') notify(request.msg, request.position)
        else if (request.action == 'alert') siteAlert(request.title, request.msg, request.btns)
        else if (request.action == 'sync.extension') sync.extension(request.site)
        return true
    })

    // Define FACTORY functions

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

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {

        // Strip state word to append colored one later
        const foundState = ['ON', 'OFF'].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${app.symbol} ${msg}`, position, notifDuration, shadow || chatgpt.isDarkMode() ? '' : 'shadow')
        const notif = document.querySelector('.chatgpt-notif:last-child')

        // Append styled state word
        if (foundState) {
            const styledState = document.createElement('span')
            styledState.style.cssText = `color: ${
                foundState == 'OFF' ? '#ef4848 ; text-shadow: rgba(255, 169, 225, 0.44) 2px 1px 5px'
                                    : '#5cef48 ; text-shadow: rgba(255, 250, 169, 0.38) 2px 1px 5px' }`
            styledState.append(foundState) ; notif.append(styledState)
        }
    }

    function siteAlert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(title, msg, btns, checkbox, width )}
    
    // Define CHATBAR functions
    
    const chatbar = {

        get() {
            let chatbar = document.querySelector(sites[site].selectors.input)
            const parentLvls = /chatgpt|openai/.test(site) ? 3 : 2
            for (let i = 0 ; i < parentLvls ; i++) chatbar = chatbar?.parentNode
            return chatbar
        },

        async isLoaded(timeout = null) {
            const timeoutPromise = timeout ? new Promise(resolve => setTimeout(() => resolve(false), timeout)) : null
            const isLoadedPromise = new Promise(resolve => {
                if (document.querySelector(sites[site].selectors.input)) resolve(true)
                else new MutationObserver((_, obs) => {
                    if (document.querySelector(sites[site].selectors.input)) {
                        obs.disconnect() ; resolve(true) }
                }).observe(document.body, { childList: true, subtree: true })
            })
            return await ( timeoutPromise ? Promise.race([isLoadedPromise, timeoutPromise]) : isLoadedPromise )
        },

        tweak() {
            const chatbarDiv = chatbar.get() ; if (!chatbarDiv) return
            if (/chatgpt|openai/.test(site)) {
                const inputArea = chatbarDiv.querySelector(sites[site].selectors.input)
                if (inputArea) {
                    const widths = { chatbar: chatbarDiv.getBoundingClientRect().width }
                    const visibleBtnTypes = ['fullScreen', 'fullWindow', 'wideScreen', 'newChat', 'send']
                        .filter(type => !(type == 'fullWindow' && !sites[site].hasSidebar)
                                     && !(type == 'newChat' && config.ncbDisabled))
                    visibleBtnTypes.forEach(btnType =>
                        widths[btnType] = btns[btnType]?.getBoundingClientRect().width
                                       || document.querySelector(sites[site].selectors.btns.send)?.getBoundingClientRect().width)
                    const totalBtnWidths = visibleBtnTypes.reduce((sum, btnType) => sum + widths[btnType], 0)
                    inputArea.parentNode.style.width = `${ widths.chatbar - totalBtnWidths -43 }px` // expand to close gap w/ buttons
                    inputArea.style.width = '100%' // rid h-scrollbar
                }
            } else if (site == 'poe') {
                const attachFileBtn = chatbarDiv.querySelector('button[class*="File"]'),
                      clearBtn = document.querySelector('[class*="ChatBreakButton"]')
                if (attachFileBtn) { // left-align attach file button
                    attachFileBtn.style.cssText = 'position: absolute ; left: 1rem ; bottom: 0.35rem'
                    document.querySelector(sites[site].selectors.input).style.padding = '0 13px 0 40px' // accommodate new btn pos
                }
                btns.newChat.style.top = clearBtn ? '-1px' : 0
                btns.newChat.style.marginRight = clearBtn ? '2px' : '1px'
            }
        }
    }

    // Define BUTTON props/functions

    const btns = {

        svgElems: {
            fullScreen: {
                off: [
                    create.svgElem('path', { stroke: 'none', d: 'm10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z' }),
                    create.svgElem('path', { stroke: 'none', d: 'm20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z' }),
                    create.svgElem('path', { stroke: 'none', d: 'm24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z' }),
                    create.svgElem('path', { stroke: 'none', d: 'M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z' }) ],
                on: [
                    create.svgElem('path', { stroke: 'none', d: 'm14,14-4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z' }),
                    create.svgElem('path', { stroke: 'none', d: 'm22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z' }),
                    create.svgElem('path', { stroke: 'none', d: 'm20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z' }),
                    create.svgElem('path', { stroke: 'none', d: 'm10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z' }) ]
            },

            fullWin: [
                create.svgElem('rect', { fill: 'none', x: '3', y: '3', width: '17', height: '17', rx: '2', ry: '2' }),
                create.svgElem('line', { x1: '9', y1: '3', x2: '9', y2: '21' })
            ],

            newChat: [ create.svgElem('path', { stroke: 'none', d: 'M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z' }) ],

            wideScreen: {
                off: [
                    create.svgElem('path', { stroke: 'none', 'fill-rule': 'evenodd',
                        d: 'm28,11 0,14 -20,0 0,-14 z m-18,2 16,0 0,10 -16,0 0,-10 z' }) ],
                on: [
                    create.svgElem('path', { stroke: 'none', 'fill-rule': 'evenodd',
                        d: 'm26,13 0,10 -16,0 0,-10 z m-14,2 12,0 0,6 -12,0 0,-6 z' }) ]
            }
        },

        insert() {

            // Create/store buttons if not done before
            if (!btns.wideScreen) {
                const validBtnTypes = ['fullScreen', 'fullWindow', 'wideScreen', 'newChat']
                    .filter(type => !(type == 'fullWindow' && !sites[site].hasSidebar))
                const bOffset = site == 'poe' ? -1.5 : -13, rOffset = site == 'poe' ? -6 : -4
                validBtnTypes.forEach(async (btnType, idx) => {
                    btns[btnType] = document.createElement(site == 'poe' ? 'div' // create div to avoid Poe button styles
                                                                         : 'button') // create button elsewhere
                    btns[btnType].id = btnType + '-btn' // for toggle.tooltip()
                    btns.updateSVG(btnType) // insert icon
                    btns[btnType].style.cssText = 'position: relative ; top: 0 ;'
                                                + `right: ${ rOffset + idx * bOffset }px` // position left of prev button
                    btns[btnType].style.cursor = 'pointer' // add finger cursor
                    if (site == 'poe') btns[btnType].style.position = 'relative' // override static pos
                    if (/chatgpt|openai|perplexity/.test(site)) { // assign classes + tweak styles
                        const sendBtn = await new Promise(resolve => {
                            const sendBtn = document.querySelector(sites[site].selectors.btns.send)
                            if (sendBtn) resolve(sendBtn)
                            else new MutationObserver((_, obs) => {
                                const sendBtn = document.querySelector(sites[site].selectors.btns.send)
                                if (sendBtn) { obs.disconnect() ; resolve(sendBtn) }
                            }).observe(document.body, { childList: true, subtree: true })
                        })
                        btns[btnType].setAttribute('class', sendBtn.classList.toString() || '')
                        btns[btnType].style.backgroundColor = 'transparent' // remove dark mode overlay
                        btns[btnType].style.borderColor = 'transparent' // remove dark mode overlay
                    } else if (site == 'poe') // lift buttons slightly
                        btns[btnType].style.marginBottom = ( btnType == 'newChat' ? '0.45' : '0.2' ) + 'rem'

                    // Add hover/click listeners
                    btns[btnType].onmouseover = btns[btnType].onmouseout = toggle.tooltip
                    btns[btnType].onclick = () => {
                        if (btnType == 'newChat')
                            document.querySelector(sites[site].selectors.btns.newChat)?.click()
                        else toggle.mode(btnType)
                    }
                })
                btns.updateColor()
            }

            // Init chatbar
            const chatbarDiv = chatbar.get()
            if (!chatbarDiv || chatbarDiv.contains(btns.wideScreen)) return // if chatbar missing or buttons aren't, exit
    
            // Insert buttons
            const btnsToInsert = [ btns.newChat, btns.wideScreen, btns.fullWindow, btns.fullScreen, tooltipDiv]
                .filter(btn => btn) // filter out undefined btns.fullWindow if not initted as guest on chatgpt.com
            const parentToInsertInto = site == 'perplexity' ? chatbarDiv.lastChild // Pro spam toggle parent
                                     : chatbarDiv,
                  elemToInsertBefore = /openai|chatgpt/.test(site) ? chatbarDiv.lastChild
                                     : site == 'perplexity' ? parentToInsertInto.firstChild // Pro spam toggle
                                     : chatbarDiv.children[1]
            btnsToInsert.forEach(btn => parentToInsertInto.insertBefore(btn, elemToInsertBefore))

            setTimeout(() => chatbar.tweak(), 1)
        },

        remove() {
            const chatbarDiv = chatbar.get(),
                  parentToRemoveFrom = site == 'perplexity' ? chatbarDiv?.lastChild : chatbarDiv
            if (parentToRemoveFrom?.contains(btns.wideScreen)) { // remove all buttons
                const btnsToRemove = [btns.newChat, btns.wideScreen, btns.fullScreen, tooltipDiv]
                if (typeof btns.fullWindow != 'undefined') btnsToRemove.push(btns.fullWindow)
                btnsToRemove.forEach(btn => parentToRemoveFrom.removeChild(btn))
            }
        },

        updateColor() {
            const prevColor = btns.color
            btns.color = (
                /chatgpt|openai/.test(site) ? (
                    document.querySelector('.dark.bg-black') || chatgpt.isDarkMode() ? 'white' : '#202123' )
              : site == 'perplexity' ? (
                    document.documentElement.dataset.colorScheme == 'dark' ? 'oklch(var(--dark-text-color-100)/var(--tw-text-opacity))'
                                                                           : 'oklch(var(--text-color-100)/var(--tw-text-opacity))' )
              : 'currentColor' )
            if (btns.color != prevColor)
                ['newChat', 'wideScreen', 'fullWindow', 'fullScreen'].forEach(btnType => {
                    if (btns[btnType]) btns[btnType].style.fill = btns[btnType].style.stroke = btns.color })
        },

        updateSVG(mode, state = '') {
    
            // Pick appropriate button/elements
            const [btn, ONelems, OFFelems] = (
                mode == 'fullScreen' ? [btns.fullScreen, btns.svgElems.fullScreen.on, btns.svgElems.fullScreen.off]
              : mode == 'fullWindow' ? [btns.fullWindow, btns.svgElems.fullWin, btns.svgElems.fullWin]
              : mode == 'wideScreen' ? [btns.wideScreen, btns.svgElems.wideScreen.on, btns.svgElems.wideScreen.off]
                                     : [btns.newChat, btns.svgElems.newChat, btns.svgElems.newChat])
            // Set SVG attributes
            const btnSVG = btn?.querySelector('svg') || document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            btnSVG.setAttribute('height', 18) // prevent shrinking
            if (mode == 'fullWindow') { // stylize full-window button
                btnSVG.setAttribute('stroke', btns.color)
                btnSVG.setAttribute('fill', 'none')
                btnSVG.setAttribute('stroke-width', '2')
                const btnSize = site == 'perplexity' ? 18 : 'poe' ? '2em' : 17
                btnSVG.setAttribute('height', btnSize) ; btnSVG.setAttribute('width', btnSize)
            }
            btnSVG.setAttribute('viewBox', (
                mode == 'newChat' ? '11 6 ' : mode == 'fullWindow' ? '-2 -0.5 ' : '8 8 ' ) // move to XY coords to crop whitespace
            + ( mode == 'newChat' ? '13 13' : mode == 'fullWindow' ? '24 24' : '20 20' ) // shrink to fit size) // set pre-tweaked viewbox
            )
            btnSVG.style.pointerEvents = 'none' // prevent triggering tooltips twice
            if (/chatgpt|openai/.test(site)) // override button resizing
                btnSVG.style.height = btnSVG.style.width = '1.3rem'
    
            // Update SVG elements
            while (btnSVG.firstChild) { btnSVG.removeChild(btnSVG.firstChild) }
            const svgElems = config[mode] || state.toLowerCase() == 'on' ? ONelems : OFFelems
            svgElems.forEach(elem => btnSVG.append(elem))
    
            // Update SVG
            if (!btn.contains(btnSVG)) btn.append(btnSVG)
        }
    }

    // Define UPDATE functions

    const update = {

        style: {
            tweaks() {
                tweaksStyle.innerText = (
                    '.chatgpt-notif { font-family: system-ui !important }' // chatgpt.alert()'s
                + ( /chatgpt|openai/.test(site) ? (
                        ( '[id$="-btn"]:hover { opacity: 80% !important }' ) // dim chatbar btns on hover
                        + 'div:has(+ main) { display: none !important }' // hide ugly double temp chat header
                    ) : site == 'poe' ? 'button[class*="Voice"] { margin: 0 -3px 0 -8px }' : '' )) // h-pad mic btn for even spread
                + ( !config.tcbDisabled && sites[site].availFeatures.includes('tcbDisabled') ? tcbStyle : '' ) // expand text input vertically
                + ( config.hiddenHeader && sites[site].availFeatures.includes('hiddenHeader') ? hhStyle : '' ) // hide header
                + ( config.hiddenFooter && sites[site].availFeatures.includes('hiddenFooter') ? hfStyle : '' ) // hide footer
                + `#newChat-btn { display: ${ config.ncbDisabled && sites[site].availFeatures.includes('ncbDisabled') ? 'none' : 'flex' }}`
            },

            wideScreen() {
                wideScreenStyle.innerText = (
                    /chatgpt|openai/.test(site) ? (
                        '.text-base { max-width: 100% !important }' // widen outer container
                      + '.text-base:nth-of-type(2) { max-width: 97% !important }' // widen inner container
                      + '#__next > div > div.flex { width: 100px }'  // prevent sidebar shrinking when zoomed
                  ) : site == 'perplexity' ? (
                        `${sites[site].selectors.header} ~ div,` // outer container
                      + `${sites[site].selectors.header} ~ div > div` // inner container
                          + '{ max-width: 100% }' // ...widen them
                      + '.col-span-8 { width: 154% }' // widen inner-left container
                      + '.col-span-4 { width: 13.5% ; position: absolute ; right: 0 }' // narrow right-bar
                  ) : site == 'poe' ? (
                        '[class*="ChatMessagesView"] { width: 100% !important }' // widen outer container
                      + '[class^="Message"] { max-width: 100% !important }' ) // widen speech bubbles
                  : '' )
              if (config.widerChatbox) wideScreenStyle.innerText += wcbStyle    
            }
        },

        tooltip(btnType) { // text & position
            const visibleBtnTypes = ['fullScreen', 'fullWindow', 'wideScreen', 'newChat']
                .filter(type => !(type == 'fullWindow' && !sites[site].hasSidebar))
            const ctrAddend = ( site == 'perplexity' ? ( location.pathname == '/' ? 100 : 106 )
                              : site == 'poe' ? 45 : 13 ) +25,
                  spreadFactor = site == 'perplexity' ? 26.85 : site == 'poe' ? 34 : 30.5,
                  iniRoffset = spreadFactor * ( visibleBtnTypes.indexOf(btnType) +1 ) + ctrAddend
            tooltipDiv.innerText = chrome.i18n.getMessage('tooltip_' + btnType + (
                !/full|wide/i.test(btnType) ? '' : (config[btnType] ? 'OFF' : 'ON')))
            tooltipDiv.style.right = `${ // h-position
                iniRoffset - tooltipDiv.getBoundingClientRect().width /2 }px`
            tooltipDiv.style.bottom = `${ // v-position
                site == 'perplexity' ? ( location.pathname == '/' ? ( env.browser.isBrave ? 253 : 51 ) : 58 ) : 50 }px`
        }
    }

    // Define TOGGLE functions

    const toggle = {
        mode(mode, state = '') {
            switch (state.toUpperCase()) {
                case 'ON' : activateMode(mode) ; break
                case 'OFF' : deactivateMode(mode) ; break
                default : config[mode] ? deactivateMode(mode) : activateMode(mode)
            }

            function activateMode(mode) {
                if (mode == 'wideScreen') { document.head.append(wideScreenStyle) ; sync.mode('wideScreen') }
                else if (mode == 'fullWindow') {
                    if (site == 'perplexity')
                        document.querySelector(sites[site].selectors.btns.sidebarToggle)?.click()
                    else {
                        document.head.append(fullWinStyle)
                        if (site == 'poe') sync.mode('fullWindow') ; else chatgpt.sidebar.hide()
                    }
                } else if (mode == 'fullScreen') document.documentElement.requestFullscreen()
            }
        
            function deactivateMode(mode) {
                if (mode == 'wideScreen')
                    try { document.head.removeChild(wideScreenStyle) ; sync.mode('wideScreen') } catch (err) {}
                else if (mode == 'fullWindow') {
                    try { document.head.removeChild(fullWinStyle) } catch (err) {}
                    if (/chatgpt|openai/.test(site)) chatgpt.sidebar.show()
                    else if (site == 'perplexity') document.querySelector(sites[site].selectors.btns.sidebarToggle)?.click()
                    else if (site == 'poe') sync.mode('fullWindow') // since not sidebarObserve()'d
                } else if (mode == 'fullScreen') {
                    if (config.f11)
                        siteAlert(chrome.i18n.getMessage('alert_pressF11'), chrome.i18n.getMessage('alert_f11reason') + '.')
                    document.exitFullscreen().catch(err => console.error(app.symbol + ' » Failed to exit fullscreen', err))
                }
            }
        },

        tooltip(event) {
            update.tooltip(event.currentTarget.id.replace(/-btn$/, ''))
            tooltipDiv.style.opacity = event.type == 'mouseover' ? '1' : '0'    
        }
    }

    // Define SYNC functions

    const sync = {
        
        async extension(srcSite) {
            const extensionWasDisabled = config.extensionDisabled
            await settings.load('extensionDisabled', ...sites[site].availFeatures)
            if (srcSite && srcSite != site) return // since popup child toggle on diff site clicked                    
            if (!extensionWasDisabled && config.extensionDisabled) { // outright disable modes/tweaks/btns
                try { document.head.removeChild(wideScreenStyle) } catch (err) {}
                try { document.head.removeChild(fullWinStyle) } catch (err) {}
                tweaksStyle.innerText = '' ; btns.remove()
            } else if (!config.extensionDisabled) { // sync modes/tweaks/btns
                toggle.mode('wideScreen', config.wideScreen && !document.head.contains(wideScreenStyle) ? 'ON' : 'OFF')
                toggle.mode('fullWindow', config.fullWindow && sites[site].hasSidebar && !isFullWin() ? 'ON' : 'OFF')
                update.style.tweaks() // sync tweaks
                update.style.wideScreen() // sync wider chatbox
                btns.insert()
                if (/openai|chatgpt/.test(site)) chatbar.tweak() // in case NCB visibility changed
            }
        },

        fullerWin(fullWinState) {
            if (fullWinState && config.fullerWindows && !config.wideScreen) { // activate fuller windows
                document.head.append(wideScreenStyle) ; btns.updateSVG('wideScreen', 'on')
            } else if (!fullWinState) { // de-activate fuller windows
                try { document.head.removeChild(fullWinStyle) } catch (err) {} // to remove style too so sidebar shows
                if (!config.wideScreen) { // disable widescreen if result of fuller window
                    try { document.head.removeChild(wideScreenStyle) } catch (err) {}                
                    btns.updateSVG('wideScreen', 'off')
        }}},

        mode(mode) { // setting + icon + tooltip
            const state = ( mode == 'wideScreen' ? !!document.getElementById('wideScreen-mode')
                          : mode == 'fullWindow' ? isFullWin()
                                                 : chatgpt.isFullScreen() )
            settings.save(mode, state) ; btns.updateSVG(mode) ; update.tooltip(mode)
            if (mode == 'wideScreen' && /openai|chatgpt/.test(site)) chatbar.tweak()
            if (mode == 'fullWindow') sync.fullerWin(state)
            settings.load('notifDisabled').then(() => {
                if (!config.notifDisabled) // notify synced state
                    notify(`${ chrome.i18n.getMessage('mode_' + mode) } ${ state ? 'ON' : 'OFF' }`)
            })
            config.modeSynced = true ; setTimeout(() => config.modeSynced = false, 100) // prevent repetition
        }
    }

    // Define UTILITY functions

    function isFullWin() {
        return site == 'poe' ? !!document.getElementById('fullWindow-mode')
            : !sites[site].hasSidebar // false if sidebar non-existent
           || /\d+/.exec(getComputedStyle(document.querySelector(sites[site].selectors.sidebar)).width)[0] < 100
    }

    function cssSelectorize(classList) {
        return classList.toString()
            .replace(/([:[\]\\])/g, '\\$1') // escape special chars :[]\
            .replace(/^| /g, '.') // prefix w/ dot, convert spaces to dots
    }
    
    // Run MAIN routine

    document.documentElement.setAttribute('cwm-extension-installed', true) // for userscript auto-disable

    // Init UI props
    if (/openai|chatgpt/.test(site)) {
        const obsConfig = { childList: true, subtree: true }
        sites[site].hasSidebar = await Promise.race([
            new Promise(resolve => { // true if sidebar toggle loads
                if (document.querySelector('[d^="M8.85719"]')) resolve(true)
                else new MutationObserver((_, obs) => {
                    if (document.querySelector('[d^="M8.85719"]')) { obs.disconnect() ; resolve(true) }
                }).observe(document.body, obsConfig)
            }),
            new Promise(resolve => { // false if login button loads
                if (document.querySelector('[data-testid*="login"]')) resolve(false)
                else new MutationObserver((_, obs) => {
                    if (document.querySelector('[data-testid*="login"]')) { obs.disconnect() ; resolve(false) }
                }).observe(document.body, obsConfig)
            }),
            new Promise(resolve =>  // null if 3s passed
                setTimeout(() => resolve(null), 3000))
        ])
        sites[site].selectors.footer = await Promise.race([
            new Promise(resolve => { // class of footer container
                const footerDiv = chatgpt.getFooterDiv()
                if (footerDiv) resolve(cssSelectorize(footerDiv.classList))
                else new MutationObserver((_, obs) => {
                    const footerDiv = chatgpt.getFooterDiv()
                    if (footerDiv) { obs.disconnect() ; resolve(cssSelectorize(footerDiv.classList)) }
                }).observe(document.body, obsConfig)
            }),
            new Promise(resolve =>  // null if 500ms passed
                setTimeout(() => resolve(null), 500))
        ])
    }

    // Save FULL-WINDOW + FULL SCREEN states
    config.fullWindow = /chatgpt|openai/.test(site) ? isFullWin() : settings.load('fullWindow')
    config.fullScreen = chatgpt.isFullScreen()

    // Create/stylize TOOLTIP div
    const tooltipDiv = document.createElement('div')
    tooltipDiv.classList.add('cwm-tooltip')
    document.head.append(create.style('.cwm-tooltip {'
        + 'background-color: rgba(0, 0, 0, 0.71) ; padding: 5px ; border-radius: 6px ; border: 1px solid #d9d9e3 ;' // bubble style
        + 'font-size: 0.85rem ; color: white ;' // font style
        + 'box-shadow: 4px 6px 16px 0 rgb(0 0 0 / 38%) ;' // drop shadow
        + 'position: absolute ; bottom: 58px ; opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 ;' // visibility
        + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }' // disable select
    ))

    // Create/apply general style TWEAKS
    const tweaksStyle = create.style(),
          tcbStyle = ( // heighten chatbox
              /openai|chatgpt/.test(site) ? `div[class*="prose"]:has(${sites[site].selectors.input})`
                                          : sites[site].selectors.input )
              + '{ max-height: 68vh }',
          hhStyle = sites[site].selectors.header + '{ display: none !important }' // hide header
                  + ( /chatgpt|openai/.test(site) ? 'main { padding-top: 12px }' : '' ), // increase top-padding
          hfStyle = sites[site].selectors.footer + '{ visibility: hidden ;' // hide footer text
                                                 + '  height: 3px }' // reduce height

    update.style.tweaks() ; document.head.append(tweaksStyle)

    // Create WIDESCREEN style
    const wideScreenStyle = create.style()
    wideScreenStyle.id = 'wideScreen-mode' // for sync.mode()
    if (!chatbar.get()) await chatbar.isLoaded()
    const wcbStyle = ( // Wider Chatbox for update.style.wideScreen()
        /chatgpt|openai/.test(site) ? 'main form { max-width: 96% !important }'
      : site == 'poe' ? '[class*=footerInner] { width: 100% }' : '' )
    update.style.wideScreen()

    // Create FULL-WINDOW style
    const fullWinStyle = create.style()
    fullWinStyle.id = 'fullWindow-mode' // for sync.mode()
    fullWinStyle.innerText = sites[site].selectors.sidebar + '{ display: none }'

    // Insert BUTTONS
    settings.load('extensionDisabled').then(async () => {
        if (!config.extensionDisabled) { await chatbar.isLoaded() ; btns.insert() }})

    // Monitor NODE CHANGES to auto-toggle once + maintain button visibility + update colors
    let isTempChat = false, prevSessionChecked = false
    const schemeObserver = new MutationObserver(([mutation]) => {

        // Load keys, check to restore prev session's state
        settings.load(['extensionDisabled', ...sites[site].availFeatures])
            .then(() => { if (!config.extensionDisabled) {
                if (!prevSessionChecked) { // restore prev session's state
                    if (config.wideScreen) toggle.mode('wideScreen', 'ON')
                    if (config.fullWindow && sites[site].hasSidebar) { toggle.mode('fullWindow', 'ON')
                        if (/chatgpt|openai/.test(site)) { // sidebar observer doesn't trigger
                            sync.fullerWin(true) // so sync Fuller Windows...
                            if (!config.notifDisabled) // ... + notify
                                notify(chrome.i18n.getMessage('mode_fullWindow') + ' ON')
                    }}
                    prevSessionChecked = true
                }
                btns.insert() // again or they constantly disappear
            } prevSessionChecked = true // even if extensionDisabled, to avoid double-toggle
        })

        // Update button colors on ChatGPT scheme or temp chat toggle
        if (/chatgpt|openai/.test(site)) {
            const chatbarIsBlack = !!document.querySelector('div[class*="bg-black"]')
            if (chatbarIsBlack != isTempChat // temp chat toggled
                || mutation.target == document.documentElement && mutation.attributeName == 'class') { // scheme toggled
                    btns.updateColor() ; isTempChat = chatbarIsBlack }            
        }
    })
    schemeObserver.observe( // <html> for page scheme toggles
        document.documentElement, { attributes: true })
    schemeObserver.observe( // for chatbar changes
        document.querySelector(/openai|chatgpt|perplexity/.test(site) ? 'main' : 'head'),
        { attributes: true, subtree: true }
    )

    // Monitor SIDEBAR to update full-window setting
    if (sites[site].selectors.btns.sidebarToggle && !!sites[site].hasSidebar) {
        const sidebarObserver = new MutationObserver(() => {
            settings.load(['extensionDisabled']).then(async () => {
                if (!config.extensionDisabled) {
                    await new Promise(resolve => setTimeout(resolve, site == 'perplexity' ? 500 : 0))
                    const fullWinState = isFullWin()
                    if ((config.fullWindow && !fullWinState) || (!config.fullWindow && fullWinState))
                        if (!config.modeSynced) sync.mode('fullWindow')
        }})})
        setTimeout(() => { // delay half-sec before observing to avoid repeated toggles from schemeObserver
            let obsTarget = document.querySelector(sites[site].selectors.sidebar)
            if (site == 'perplexity') obsTarget = obsTarget.parentNode
            sidebarObserver.observe(obsTarget, { attributes: true })
        }, 500)
    }

    // Add RESIZE LISTENER to update full screen setting/button + disable F11 flag
    window.addEventListener('resize', () => {
        const fullScreenState = chatgpt.isFullScreen()
        if (config.fullScreen && !fullScreenState) { sync.mode('fullScreen') ; config.f11 = false } // exiting full screen
        else if (!config.fullScreen && fullScreenState) sync.mode('fullScreen') // entering full screen
    })

    // Add KEY LISTENER to enable flag on F11 + stop generating text on ESC
    document.addEventListener('keydown', event => {
        if ((event.key == 'F11' || event.keyCode == 122) && !config.fullScreen) config.f11 = true
        else if ((event.key == 'Escape' || event.keyCode == 27) && !chatgpt.isIdle()) chatgpt.stop()
    })

})()
