// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    document.documentElement.setAttribute('cwm-extension-installed', true) // for userscript auto-disable

    const site = /([^.]+)\.[^.]+$/.exec(location.hostname)[1]

    // Import LIBS
    await import(chrome.runtime.getURL('lib/chatgpt.js'))
    await import(chrome.runtime.getURL('lib/dom.js'))
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    settings.site = site // to load/save active tab's settings

    // Import DATA
    const { app } = await chrome.storage.sync.get('app'),
          { sites } = await chrome.storage.sync.get('sites')

    // Init CONFIG
    await settings.load('extensionDisabled', ...sites[site].availFeatures)

    // Add CHROME MSG listener for background/popup requests to sync modes/settings
    chrome.runtime.onMessage.addListener(req => {
        if (req.action == 'notify') notify(req.msg, req.pos)
        else if (req.action == 'alert') siteAlert(req.title, req.msg, req.btns)
        else if (req.action == 'sync.storageToUI') sync.storageToUI()
    })

    // Define FEEDBACK functions

    function notify(msg, pos = '', notifDuration = '', shadow = '') {
        if (config.notifDisabled && !msg.includes(chrome.i18n.getMessage('menuLabel_modeNotifs'))) return

        // Strip state word to append colored one later
        const foundState = [ chrome.i18n.getMessage('state_on').toUpperCase(),
                             chrome.i18n.getMessage('state_off').toUpperCase()
              ].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${app.symbol} ${msg}`, pos, notifDuration, shadow || chatgpt.isDarkMode() ? '' : 'shadow')
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
            const parentLvls = site == 'chatgpt' ? 3 : 2
            for (let i = 0 ; i < parentLvls ; i++) chatbar = chatbar?.parentNode
            return chatbar
        },

        tweak() {
            const chatbarDiv = chatbar.get() ; if (!chatbarDiv) return
            if (site == 'chatgpt') {
                const inputArea = chatbarDiv.querySelector(sites.chatgpt.selectors.input)
                if (inputArea) {
                    const widths = { chatbar: chatbarDiv.getBoundingClientRect().width }
                    const visibleBtnTypes = [...btns.types, 'send'].filter(type =>
                           !(type == 'fullWindow' && !sites[site].hasSidebar)
                        && !(type == 'newChat' && config.ncbDisabled))
                    visibleBtnTypes.forEach(btnType =>
                        widths[btnType] = btns[btnType]?.getBoundingClientRect().width
                                       || document.querySelector(`${sites.chatgpt.selectors.btns.send}, ${
                                                                    sites.chatgpt.selectors.btns.stop}`)?.getBoundingClientRect().width || 0 )
                    const totalBtnWidths = visibleBtnTypes.reduce((sum, btnType) => sum + widths[btnType], 0)
                    inputArea.parentNode.style.width = `${ widths.chatbar - totalBtnWidths -60 }px` // expand to close gap w/ buttons
                    inputArea.style.width = '100%' // rid h-scrollbar
                }
            } else if (site == 'poe') {
                const attachFileBtn = chatbarDiv.querySelector(sites.poe.selectors.btns.attachFile),
                      clearBtn = document.querySelector(sites.poe.selectors.btns.clear)
                if (attachFileBtn && !attachFileBtn.style.cssText) { // left-align attach file button
                    attachFileBtn.style.cssText = 'position: absolute ; left: 1rem ; bottom: 0.35rem'
                    document.querySelector(sites.poe.selectors.input).style.padding = '0 13px 0 40px' // accommodate new btn pos
                }
                btns.newChat.style.top = clearBtn ? '-1px' : 0
                btns.newChat.style.marginRight = clearBtn ? '2px' : '1px'
            }
        },

        reset() { // all tweaks for popup master toggle-off
            const chatbarDiv = chatbar.get() ; if (!chatbarDiv) return
            if (site == 'chatgpt') {
                const inputArea = chatbarDiv.querySelector(sites.chatgpt.selectors.input)
                if (inputArea) inputArea.style.width = inputArea.parentNode.style.width = 'initial'
            } else if (site == 'poe') {
                const attachFileBtn = chatbarDiv.querySelector(sites.poe.selectors.btns.attachFile)
                if (attachFileBtn) attachFileBtn.style.cssText = ''
            }
        }
    }

    // Define BUTTON props/functions

    const btns = {
        types: [ 'fullScreen', 'fullWindow', 'wideScreen', 'newChat' ], // right-to-left

        svgElems: {
            fullScreen: {
                off: [
                    dom.create.svgElem('path', { stroke: 'none', d: 'm10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z' }),
                    dom.create.svgElem('path', { stroke: 'none', d: 'm20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z' }),
                    dom.create.svgElem('path', { stroke: 'none', d: 'm24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z' }),
                    dom.create.svgElem('path', { stroke: 'none', d: 'M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z' }) ],
                on: [
                    dom.create.svgElem('path', { stroke: 'none', d: 'm14,14-4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z' }),
                    dom.create.svgElem('path', { stroke: 'none', d: 'm22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z' }),
                    dom.create.svgElem('path', { stroke: 'none', d: 'm20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z' }),
                    dom.create.svgElem('path', { stroke: 'none', d: 'm10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z' }) ]
            },

            fullWin: [
                dom.create.svgElem('rect', { fill: 'none', x: '3', y: '3', width: '17', height: '17', rx: '2', ry: '2' }),
                dom.create.svgElem('line', { x1: '9', y1: '3', x2: '9', y2: '21' })
            ],

            newChat: [ dom.create.svgElem('path', { stroke: 'none', d: 'M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z' }) ],

            wideScreen: {
                off: [
                    dom.create.svgElem('path', { stroke: 'none', 'fill-rule': 'evenodd',
                        d: 'm28,11 0,14 -20,0 0,-14 z m-18,2 16,0 0,10 -16,0 0,-10 z' }) ],
                on: [
                    dom.create.svgElem('path', { stroke: 'none', 'fill-rule': 'evenodd',
                        d: 'm26,13 0,10 -16,0 0,-10 z m-14,2 12,0 0,6 -12,0 0,-6 z' }) ]
            }
        },

        create() {
            const validBtnTypes = btns.types.filter(type => !(type == 'fullWindow' && !sites[site].hasSidebar))
            const bOffset = site == 'poe' ? -1.5 : -13, rOffset = site == 'poe' ? -6 : -4
            validBtnTypes.forEach(async (btnType, idx) => {
                btns[btnType] = document.createElement('div')
                btns[btnType].id = btnType + '-btn' // for toggle.tooltip()
                btns[btnType].style.cssText = 'position: relative ; top: 0 ;'
                                            + `right: ${ rOffset + idx * bOffset }px` // position left of prev button
                btns[btnType].style.cursor = 'pointer' // add finger cursor
                if (site == 'poe') btns[btnType].style.position = 'relative' // override static pos
                if (/chatgpt|perplexity/.test(site)) { // assign classes + tweak styles
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
                    if (btnType == 'newChat') {
                        document.querySelector(sites[site].selectors.btns.newChat)?.click()
                        tooltipDiv.style.opacity = 0
                    } else toggle.mode(btnType)
                }
            })
            btns.updateColor()
        },

        insert() {
            if (!btns.wideScreen) btns.create()

            // Init chatbar
            const chatbarDiv = chatbar.get()
            if (!chatbarDiv || chatbarDiv.contains(btns.wideScreen)) return // if chatbar missing or buttons aren't, exit
    
            // Insert buttons
            const btnTypesToInsert = btns.types.slice().reverse() // to left-to-right for insertion order
                .filter(type => !(type == 'fullWindow' && !sites[site].hasSidebar))
            const parentToInsertInto = site == 'perplexity' ? chatbarDiv.lastChild // Pro spam toggle parent
                                     : chatbarDiv,
                  elemToInsertBefore = site == 'chatgpt' ? chatbarDiv.lastChild
                                     : site == 'perplexity' ? parentToInsertInto.firstChild // Pro spam toggle
                                     : chatbarDiv.children[1]
            btnTypesToInsert.forEach(btnType => {
                btns.updateSVG(btnType) // update icon
                parentToInsertInto.insertBefore(btns[btnType], elemToInsertBefore)
            })
            parentToInsertInto.insertBefore(tooltipDiv, elemToInsertBefore) // add tooltips

            setTimeout(() => chatbar.tweak(), 1)
        },

        remove() {
            const chatbarDiv = chatbar.get(),
                  parentToRemoveFrom = site == 'perplexity' ? chatbarDiv?.lastChild : chatbarDiv
            if (parentToRemoveFrom?.contains(btns.wideScreen)) { // remove all buttons
                const btnsToRemove = [btns.newChat, btns.wideScreen, btns.fullScreen, tooltipDiv]
                if (typeof btns.fullWindow != 'undefined') btnsToRemove.push(btns.fullWindow)
                btnsToRemove.forEach(btn => btn.remove())
            }
        },

        updateColor() {
            btns.color = (
                site == 'chatgpt' ? (
                    document.querySelector('.dark.bg-black') || chatgpt.isDarkMode() ? 'white' : '#202123' )
              : site == 'perplexity' ? (
                    document.documentElement.dataset.colorScheme == 'dark' ? 'oklch(var(--dark-text-color-100)/var(--tw-text-opacity))'
                                                                           : 'oklch(var(--text-color-100)/var(--tw-text-opacity))' )
              : 'currentColor' )

            if (btns.wideScreen?.style.fill != btns.color)
                btns.types.forEach(btnType => {
                    if (btns[btnType]) btns[btnType].style.fill = btns[btnType].style.stroke = btns.color })
        },

        updateSVG(mode, state = '') {
            if (!btns.wideScreen) btns.create()
    
            // Pick appropriate button/elements
            const [btn, ONelems, OFFelems] = (
                mode == 'fullScreen' ? [btns.fullScreen, btns.svgElems.fullScreen.on, btns.svgElems.fullScreen.off]
              : mode == 'fullWindow' ? [btns.fullWindow, btns.svgElems.fullWin, btns.svgElems.fullWin]
              : mode == 'wideScreen' ? [btns.wideScreen, btns.svgElems.wideScreen.on, btns.svgElems.wideScreen.off]
                                     : [btns.newChat, btns.svgElems.newChat, btns.svgElems.newChat])
            // Set SVG attributes
            const btnSVG = btn?.querySelector('svg') || dom.create.svgElem('svg', { height: 18 })
            btnSVG.setAttribute('height', 18) // prevent shrinking
            if (mode == 'fullWindow') { // stylize full-window button
                btnSVG.setAttribute('stroke-width', '2')
                const btnSize = site == 'perplexity' ? 18 : 'poe' ? '2em' : 17
                btnSVG.setAttribute('height', btnSize) ; btnSVG.setAttribute('width', btnSize)
            }
            btnSVG.setAttribute('viewBox', (
                mode == 'newChat' ? '11 6 ' : mode == 'fullWindow' ? '-2 -0.5 ' : '8 8 ' ) // move to XY coords to crop whitespace
            + ( mode == 'newChat' ? '13 13' : mode == 'fullWindow' ? '24 24' : '20 20' ) // shrink to fit size) // set pre-tweaked viewbox
            )
            btnSVG.style.pointerEvents = 'none' // prevent triggering tooltips twice
            if (site == 'chatgpt') // override button resizing
                btnSVG.style.height = btnSVG.style.width = '1.3rem'
    
            // Update SVG elements
            while (btnSVG.firstChild) btnSVG.firstChild.remove()
            const svgElems = config[mode] || state.toLowerCase() == 'on' ? ONelems : OFFelems
            svgElems.forEach(elem => btnSVG.append(elem))
    
            // Update SVG
            if (!btn.contains(btnSVG)) btn.append(btnSVG)
        }
    }

    // Define UPDATE functions

    const update = {

        style: {

            chatbar() {
                chatbarStyle.innerText = (
                    site == 'chatgpt' ? ( config.widerChatbox ? ''
                        : `main form { max-width: ${chatbar.nativeWidth}px !important ; margin: auto }` )
                  : site == 'poe' ? ( !config.widerChatbox ? ''
                        : '[class*=footerInner] { width: 100% }' )
                  : '' )
            },

            tweaks() {
                tweaksStyle.innerText = (
                    '.chatgpt-notif, [class*="-modal"] { font-family: system-ui !important }'
                  + `[class*="-modal"] { color: ${ chatgpt.isDarkMode() ? 'white' : 'black' }}`
                  + '[class*="modal-close-btn"] svg { height: 10px }'
                  + '[class*="-modal"] h2 { font-size: 24px ; font-weight: 600 }'
                  + '[class*="-modal"] p { font-size: 16px }'
                  + '[class*="-modal"] button {'
                      + 'font-size: 0.77rem ; text-transform: uppercase ;' // shrink/uppercase labels
                      + `border: 2px dashed ${ chatgpt.isDarkMode() ? 'white' : 'black' } !important ; border-radius: 0 !important ;` // thiccen/square/dash borders
                      + 'transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out ;' // smoothen hover fx
                      + 'cursor: pointer !important ;' // add finger cursor
                      + 'padding: 5px !important ; min-width: 102px }' // resize
                  + '[class*="-modal"] button:hover {' // add zoom, re-scheme
                      + 'transform: scale(1.055) ;'
                      + ( chatgpt.isDarkMode() ? 'background-color: #2cff00 !important ; box-shadow: 2px 1px 54px #38ff00 !important ; color: black !important'
                                               : 'background-color: #c7ff006b !important ; box-shadow: 2px 1px 30px #97ff006b !important' ) + '}'
                  + ( /chatgpt|openai/.test(site) ? (
                          ( '[id$="-btn"]:hover { opacity: 80% !important }' ) // dim chatbar btns on hover
                          + 'main { overflow: clip !important }' // prevent h-scrollbar on sync.mode('fullWindow) => delayed chatbar.tweak()
                    ) : site == 'poe' ? 'button[class*="Voice"] { margin: 0 -3px 0 -8px }' : '' )) // h-pad mic btn for even spread
                  + ( config.tcbDisabled == false ? tcbStyle : '' ) // expand text input vertically
                  + ( config.hiddenHeader ? hhStyle : '' ) // hide header
                  + ( config.hiddenFooter ? hfStyle : '' ) // hide footer
                  + `#newChat-btn { display: ${ config.ncbDisabled == true ? 'none' : 'flex' }}`
            },

            wideScreen() {
                wideScreenStyle.innerText = (
                    site == 'chatgpt' ? (
                        '.text-base { max-width: 100% !important }' // widen outer container
                      + '.text-base:nth-of-type(2) { max-width: 97% !important }' // widen inner container
                  ) : site == 'perplexity' ? (
                        `${sites.perplexity.selectors.header} ~ div,` // outer container
                      + `${sites.perplexity.selectors.header} ~ div > div` // inner container
                          + '{ max-width: 100% }' // ...widen them
                      + '.col-span-8 { width: 154% }' // widen inner-left container
                      + '.col-span-4 { width: 13.5% ; position: absolute ; right: 0 }' // narrow right-bar
                  ) : site == 'poe' ? (
                        '[class*="ChatMessagesView"] { width: 100% !important }' // widen outer container
                      + '[class^="Message"] { max-width: 100% !important }' ) // widen speech bubbles
                  : '' )
            }
        },

        tooltip(btnType) { // text & position
            const visibleBtnTypes = btns.types.filter(type => !(type == 'fullWindow' && !sites[site].hasSidebar))
            const ctrAddend = ( site == 'perplexity' ? ( location.pathname == '/' ? 100 : 106 )
                              : site == 'poe' ? 45 : 13 ) +25,
                  spreadFactor = site == 'perplexity' ? 26.85 : site == 'poe' ? 34 : 30.55,
                  iniRoffset = spreadFactor * ( visibleBtnTypes.indexOf(btnType) +1 ) + ctrAddend
            tooltipDiv.innerText = chrome.i18n.getMessage('tooltip_' + btnType + (
                !/full|wide/i.test(btnType) ? '' : (config[btnType] ? 'OFF' : 'ON')))
            tooltipDiv.style.right = `${ // x-pos
                iniRoffset - tooltipDiv.getBoundingClientRect().width /2 }px`
            tooltipDiv.style.bottom = ( // y-pos
                site == 'perplexity' ? ( location.pathname != '/' ? '58px' :
                    ( !document.querySelector(sites.perplexity.selectors.btns.login) ? 'revert-layer' : '52.5vh' ))
                                     : '50px' )
        }
    }

    // Define TOGGLE functions

    const toggle = {

        mode(mode, state = '') {
            switch (state.toUpperCase()) {
                case 'ON' : activateMode(mode) ; break
                case 'OFF' : deactivateMode(mode) ; break
                default : ( mode == 'wideScreen' ? document.head.contains(wideScreenStyle)
                          : mode == 'fullWindow' ? isFullWin() : chatgpt.isFullScreen() ) ? deactivateMode(mode)
                                                                                          : activateMode(mode)
            }

            function activateMode(mode) {
                if (mode == 'wideScreen') { document.head.append(wideScreenStyle) ; sync.mode('wideScreen') }
                else if (mode == 'fullWindow') {
                    const sidebarToggle = document.querySelector(sites[site].selectors.btns.sidebarToggle)
                    if (sidebarToggle) sidebarToggle.click()
                    else { document.head.append(fullWinStyle) ; sync.mode('fullWindow') }
                } else if (mode == 'fullScreen') document.documentElement.requestFullscreen()
            }
        
            function deactivateMode(mode) {
                if (mode == 'wideScreen') {
                    wideScreenStyle.remove() ; sync.mode('wideScreen')
                } else if (mode == 'fullWindow') {
                    const sidebarToggle = document.querySelector(sites[site].selectors.btns.sidebarToggle)
                    if (sidebarToggle) sidebarToggle.click()
                    else { fullWinStyle.remove() ; sync.mode('fullWindow') }
                } else if (mode == 'fullScreen') {
                    if (config.f11) siteAlert(chrome.i18n.getMessage('alert_pressF11'), `${chrome.i18n.getMessage('alert_f11reason')}.`)
                    else document.exitFullscreen().catch(err => console.error(app.symbol + ' » Failed to exit fullscreen', err))
                }
            }
        },

        tooltip(event) {
            update.tooltip(event.currentTarget.id.replace(/-btn$/, ''))
            tooltipDiv.style.opacity = event.type == 'mouseover' ? 1 : 0
        }
    }

    // Define SYNC functions

    const sync = {
        
        async storageToUI() { // from popup.js toggle + service worker actve-tab listeners
            const extensionWasDisabled = config.extensionDisabled
            await settings.load('extensionDisabled', ...sites[site].availFeatures)
            if (!extensionWasDisabled && config.extensionDisabled) { // outright disable modes/tweaks/btns
                wideScreenStyle.remove() ; fullWinStyle.remove()
                tweaksStyle.innerText = '' ; btns.remove() ; chatbar.reset()
            } else if (!config.extensionDisabled) { // sync modes/tweaks/btns
                if (config.wideScreen ^ document.head.contains(wideScreenStyle)) { supressNotifs() ; toggle.mode('wideScreen') }
                if ((config.fullWindow && sites[site].hasSidebar) ^ isFullWin()) { supressNotifs() ; toggle.mode('fullWindow') }
                sync.fullerWin() // sync Fuller Windows
                update.style.tweaks() // sync TCB/NCB/HH/HF
                update.style.chatbar() // sync WCB
                chatbar.tweak() // update chatgpt.com chatbar inner width + apply poe.com btn alignment (once)
                btns.insert()
            }

            function supressNotifs() {
                if (!config.notifDisabled) { 
                    settings.save('notifDisabled', true) // suppress notifs for cleaner UI
                    setTimeout(() => settings.save('notifDisabled', false), 55) // ...temporarily
                }
            }
        },

        fullerWin() {
            if (config.fullWindow && config.fullerWindows && !config.wideScreen) { // activate fuller windows
                document.head.append(wideScreenStyle) ; btns.updateSVG('wideScreen', 'on')
            } else if (!config.fullWindow) { // de-activate fuller windows
                fullWinStyle.remove() // to remove style too so sidebar shows
                if (!config.wideScreen) { // disable widescreen if result of fuller window
                    wideScreenStyle.remove() ; btns.updateSVG('wideScreen', 'off')
            }}
        },

        async mode(mode) { // setting + icon + tooltip + chatbar
            const state = ( mode == 'wideScreen' ? !!document.getElementById('wideScreen-mode')
                          : mode == 'fullWindow' ? isFullWin()
                                                 : chatgpt.isFullScreen() )
            settings.save(mode, state) ; btns.updateSVG(mode) ; update.tooltip(mode)
            if (!config.extensionDisabled) { // tweak UI
                if (mode == 'fullWindow') sync.fullerWin()
                if (site == 'chatgpt') setTimeout(() => chatbar.tweak(), // update inner width
                    mode == 'fullWindow' && ( config.wideScreen || config.fullerWindows )
                        && config.widerChatbox ? 111 : 0) // delay if toggled to/from active WCB to avoid inaccurate width
                notify(`${chrome.i18n.getMessage('mode_' + mode)} ${
                          chrome.i18n.getMessage(`state_${ state ? 'on' : 'off' }`).toUpperCase()}`)
            }
            config.modeSynced = true ; setTimeout(() => config.modeSynced = false, 100) // prevent repetition
        }
    }

    function isFullWin() {
        return site == 'poe' ? !!document.getElementById('fullWindow-mode')
            : !sites[site].hasSidebar // false if sidebar non-existent
           || /\d+/.exec(getComputedStyle(document.querySelector(sites[site].selectors.sidebar))?.width || '')[0] < 100
    }
    
    // Run MAIN routine

    // Init UI props
    if (site == 'chatgpt') {
        sites.chatgpt.hasSidebar = await Promise.race([
            dom.elemIsLoaded(sites.chatgpt.selectors.btns.sidebarToggle), // true if sidebar toggle loads
            dom.elemIsLoaded(sites.chatgpt.selectors.btns.login).then(() => false), // false if login button loads
            new Promise(resolve => setTimeout(() => resolve(null), 3000)) // null if 3s passed
        ])
        sites.chatgpt.selectors.footer = await Promise.race([
            new Promise(resolve => { // class of footer container
                const footerDiv = chatgpt.getFooterDiv()
                if (footerDiv) resolve(dom.cssSelectorize(footerDiv.classList))
                else new MutationObserver((_, obs) => {
                    const footerDiv = chatgpt.getFooterDiv()
                    if (footerDiv) { obs.disconnect() ; resolve(dom.cssSelectorize(footerDiv.classList)) }
                }).observe(document.body, { childList: true, subtree: true })
            }),
            new Promise(resolve => setTimeout(() => resolve(null), 500)) // null if 500ms passed
        ])
    }

    // Init FULL-MODE states
    config.fullScreen = chatgpt.isFullScreen()
    if (sites[site].selectors.btns.sidebarToggle) // site has native FW state
         config.fullWindow = isFullWin() // ...so match it
    else await settings.load('fullWindow') // otherwise load CWM's saved state

    // Create/stylize TOOLTIP div
    const tooltipDiv = dom.create.elem('div', { class: 'cwm-tooltip' })
    document.head.append(dom.create.style('.cwm-tooltip {'
        + 'background-color: rgba(0, 0, 0, 0.71) ; padding: 5px ; border-radius: 6px ; border: 1px solid #d9d9e3 ;' // bubble style
        + 'font-size: 0.85rem ; color: white ;' // font style
        + 'box-shadow: 4px 6px 16px 0 rgb(0 0 0 / 38%) ;' // drop shadow
        + 'position: absolute ; bottom: 58px ; opacity: 0 ; transition: opacity 0.1s ; z-index: 9999 ;' // visibility
        + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }' // disable select
    ))

    // Create/apply general style TWEAKS
    const tweaksStyle = dom.create.style(),
          tcbStyle = ( // heighten chatbox
              site == 'chatgpt' ? `div[class*="prose"]:has(${sites.chatgpt.selectors.input})`
                                : sites[site].selectors.input )
                  + '{ max-height: 68vh }',
          hhStyle = sites[site].selectors.header + '{ display: none !important }' // hide header
                  + ( site == 'chatgpt' ? 'main { padding-top: 12px }' : '' ), // increase top-padding
          hfStyle = sites[site].selectors.footer + '{ visibility: hidden ;' // hide footer text
                                                 + '  height: 3px ; overflow: clip }' // reduce height

    update.style.tweaks() ; document.head.append(tweaksStyle)

    // Create WIDESCREEN style
    const wideScreenStyle = dom.create.style()
    wideScreenStyle.id = 'wideScreen-mode' // for sync.mode()
    if (!chatbar.get()) await dom.elemIsLoaded(sites[site].selectors.input)
    if (site == 'chatgpt') // store native chatbar width for Wider Chatbox style
        chatbar.nativeWidth = /\d+/.exec(getComputedStyle(document.querySelector('main form')).width)[0]
    update.style.wideScreen()

    // Create FULL-WINDOW style
    const fullWinStyle = dom.create.style()
    fullWinStyle.id = 'fullWindow-mode' // for sync.mode()
    fullWinStyle.innerText = sites[site].selectors.sidebar + '{ display: none }'

    // Create/append CHATBAR style
    const chatbarStyle = dom.create.style()
    update.style.chatbar() ; document.head.append(chatbarStyle)

    // Insert BUTTONS
    if (!config.extensionDisabled) {
        btns.insert() 

    // Restore PREV SESSION's state
        if (config.wideScreen) toggle.mode('wideScreen', 'ON')
        if (config.fullWindow && sites[site].hasSidebar) {
            if (sites[site].selectors.btns.sidebarToggle) // site has own FW config
                sync.mode('fullWindow') // ...so sync w/ it
            else toggle.mode('fullWindow', 'on') // otherwise self-toggle
        }
    }

    // Monitor NODE CHANGES to maintain button visibility + update colors
    let isTempChat = false
    const nodeObserver = new MutationObserver(([mutation]) => {
        if (!config.extensionDisabled) btns.insert() // again or they constantly disappear
        if (site == 'chatgpt') { // Update button colors on ChatGPT scheme or temp chat toggle
            const chatbarIsBlack = !!document.querySelector('div[class*="bg-black"]:not([id$="-btn"])')
            if (chatbarIsBlack != isTempChat // temp chat toggled
                || mutation.target == document.documentElement && mutation.attributeName == 'class') { // scheme toggled
                    btns.updateColor() ; isTempChat = chatbarIsBlack }            
        }
    })
    nodeObserver.observe(
        document.querySelector(site == 'poe' ? 'head' : 'body'),
        { attributes: true, subtree: true }
    )

    // Monitor SIDEBAR to update full-window setting for sites w/ native toggle
    if (sites[site].selectors.btns.sidebarToggle && !!sites[site].hasSidebar) {
        const sidebarObserver = new MutationObserver(async () => {
            await new Promise(resolve => setTimeout(resolve, site == 'perplexity' ? 500 : 0))
            if ((config.fullWindow ^ isFullWin()) && !config.modeSynced) sync.mode('fullWindow')
        })
        setTimeout(() => { // delay half-sec before observing to avoid repeated toggles from nodeObserver
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
        if (site == 'chatgpt') chatbar.tweak() // update chatgpt.com chatbar inner width
    })

    // Add KEY LISTENER to enable flag on F11 + stop generating text on ESC
    document.addEventListener('keydown', event => {
        if ((event.key == 'F11' || event.keyCode == 122) && !config.fullScreen) config.f11 = true
        else if ((event.key == 'Escape' || event.keyCode == 27) && !chatgpt.isIdle()) chatgpt.stop()
    })

})()
