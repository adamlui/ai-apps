<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-white-icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-icon32.svg">
        </picture>
        &nbsp;English |
        <a href="zh-cn#readme">简体中文</a>
    </h6>
</div>

# <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=23 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> ChatGPT Auto Refresh ↻ &nbsp;[![](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Tired%20of%20constant%20interruptions%20on%20ChatGPT%3F%20Auto-refresh%20your%20sessions%20w%2F%20this%20plug-in%21%20&url=https://github.com/adamlui/userscripts/tree/master/chatgpt/chatgpt-auto-refresh&hashtags=greasemonkey,openai,chatgpt)

[![](https://img.shields.io/badge/Users-10,000+-2bbbd8?logo=weightsandbiases&logoColor=white&labelColor=464646&style=for-the-badge)](https://gf.chatgptautorefresh.com)
[![](https://img.shields.io/github/stars/adamlui/chatgpt-auto-refresh?label=Stars&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/adamlui/chatgpt-auto-refresh/stargazers)
[![](https://img.shields.io/badge/License-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/adamlui/chatgpt-auto-refresh/blob/main/LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/adamlui/chatgpt-auto-refresh?label=Commits&logo=github&logoColor=white&labelColor=464646&color=7bb7fc&style=for-the-badge)](https://github.com/adamlui/chatgpt-auto-refresh/commits/main)
[![](https://img.shields.io/codefactor/grade/github/adamlui/chatgpt-auto-refresh?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&color=b5fc7b&style=for-the-badge)](https://www.codefactor.io/repository/github/adamlui/chatgpt-auto-refresh)
[![](https://img.shields.io/badge/Powered_by-chatgpt.js-black?logo=gamejolt&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js?utm_source=chatgpt_auto_refresh&utm_content=github_shield)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_chatgpt-auto-refresh%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_chatgpt-auto-refresh)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-fc7bb7?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/awesome-scripts/awesome-userscripts#chatgpt)
[![](https://img.shields.io/badge/web-www.chatgptautorefresh.com-lightgrey?logo=dribbble&logoColor=white&labelColor=464646&style=for-the-badge)](https://chatgptautorefresh.com?utm_source=chatgpt_auto_refresh&utm_content=github_shield)

### Keeps ChatGPT sessions fresh via background requests to eliminate network errors + Cloudflare checks.

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img height=42 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="-#installation"><img height=42 title="How to install" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[Discuss](https://chatgptautorefresh.com/discuss) /
[Review](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[Contact author](https://github.com/adamlui)

#

![](https://user-images.githubusercontent.com/10906554/234756105-cf367acc-644a-49ee-8586-43c51d43e359.png)
<img width=355 src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/mode-notification-on.png">
<br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 💡 What it does

- Removes **10-minute time limit** from conversations (when Chat History is disabled)

- Get rid of annoying **Cloudflare checks**:

<div align="center">
    
![](https://user-images.githubusercontent.com/10906554/229415084-97f55e6d-eb21-4ac0-bc2a-c6174a44cfe1.png)

</div>

- Get rid of annoying **ChatGPT network errors**:

<div align="center">

![](https://user-images.githubusercontent.com/10906554/229413173-7183e459-06ca-4b95-b241-8ca79b18039d.png)
![](https://user-images.githubusercontent.com/10906554/229413421-a6264dc2-a2e3-48a7-ad86-7789dbd7df54.png)
<img width=333 src="https://user-images.githubusercontent.com/10906554/229416105-931e2035-7e30-440a-bdc9-e570daf0d769.png">
    
</div>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 💊 Benefits

&nbsp;&nbsp;&nbsp;🛡️ <strong>Safe</strong> — No unnecessary account-related requests sent

&nbsp;&nbsp;&nbsp;🪶 <strong>Lightweight</strong> — Very little code used, only what's neccessary (keep session alive) saving memory

&nbsp;&nbsp;&nbsp;⌛ <strong>Time-saver</strong> — No more constant copy/paste/refresh just from minutes of inactivity!

&nbsp;&nbsp;&nbsp;🤯 <mark>Works ***even in background tabs!***</mark>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🗨️ User feedback

<img width=535 src="https://i.imgur.com/nbwAQ1e.png">

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🚀 Installation

1. Install Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/extensions/details/tampermonkey-beta/)) or Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao))

2. Install [ChatGPT Auto Refresh](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh) (will load in userscript manager installed above)

3. Visit [chat.openai.com](https://chat.openai.com) as normal, and sessions will auto-refresh at a regular interval!

<div align="center">
    
![](https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/mode-toggle-on.jpg)

</div>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## ⚡ Dependencies

<h6>
<div align="center">
<br>

<a href="https://chatgpt.js.org">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
        <img width=546 src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
    </picture>
</a>
<br><br>

ChatGPT Auto Refresh relies on code from the powerful <a href="https://github.com/KudoAI/chatgpt.js">chatgpt.js</a> library © 2023–2024 <a href="https://www.kudoai.com">KudoAI</a> & contributors under the MIT license.

</div>
</h6>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🌐 Compatibility

ChatGPT Auto Refresh is compatible w/ the following browsers using [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/):

- [Google Chrome](https://www.chrome.com)
- [Mozilla Firefox](https://www.firefox.com)
- [Microsoft Edge](https://www.microsoft.com/edge)
- [Opera](https://www.opera.com)
- [Brave](https://brave.com)
- [Vivaldi](https://vivaldi.com)
- [Waterfox](https://www.waterfox.net/)
- [LibreWolf](https://librewolf.net/)
- [Ghost](https://ghostbrowser.com/)
- [QQ](https://browser.qq.com/)

<br>

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img height=42 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="-#installation"><img height=42 title="How to install" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[Discuss](https://chatgptautorefresh.com/discuss) / 
[Leave a review](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[More ChatGPT userscripts](https://github.com/adamlui/userscripts/tree/master/chatgpt)

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🧠 Contributors

This project exists thanks to code, translations, issues & ideas from the following contributors:

<div align="center">

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.23&h=50&w=50&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/26111796?first-contrib=2023.04.02&h=50&w=50&mask=circle&maxage=7d "@Camouflager")](https://github.com/Camouflager)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/3297866?first-contrib=2023.04.04&h=50&w=50&mask=circle&maxage=7d "@ArtificialTruth")](https://github.com/ArtificialTruth)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/25640306?first-contrib=2023.04.05&h=50&w=50&mask=circle&maxage=7d "@Liumeng404")](https://github.com/Liumeng404)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/8097465?first-contrib=2023.04.08&h=50&w=50&mask=circle&maxage=7d "@mzvast")](https://github.com/mzvast)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/130675714?first-contrib=2023.04.13&h=50&w=50&mask=circle&maxage=7d "@halvabner")](https://github.com/halvabner)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/53716543?first-contrib=2023.04.15&h=50&w=50&mask=circle&maxage=7d "@Cupcc")](https://github.com/Cupcc)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/45654564?first-contrib=2023.04.16&h=50&w=50&mask=circle&maxage=7d "@gydx6")](https://github.com/gydx6)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/81360639?first-contrib=2023.04.16&h=50&w=50&mask=circle&maxage=7d "@NoahXcl")](https://github.com/NoahXcl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/2769831?first-contrib=2023.04.17&h=50&w=50&mask=circle&maxage=7d "@selfboot")](https://github.com/selfboot)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/116735067?first-contrib=2023.04.18&h=50&w=50&mask=circle&maxage=7d "@maplepicker")](https://github.com/maplepicker)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/58101940?first-contrib=2023.04.19&h=50&w=50&mask=circle&maxage=7d "@Cloudkkk")](https://github.com/Cloudkkk)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/49114216?first-contrib=2023.04.23&h=50&w=50&mask=circle&maxage=7d "@chenzhihao1040728129")](https://github.com/chenzhihao1040728129)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.27&h=50&w=50&mask=circle&maxage=7d "@Zin6969")](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/2470659?first-contrib=2023.08.03-chat-reset-issue&h=50&w=50&mask=circle&maxage=7d "@nabilfreeman")](https://github.com/nabilfreeman)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/13482553?first-contrib=2023.10.05-chat-reset-fix&h=50&w=50&mask=circle&maxage=7d "@h-h-h-h")](https://github.com/h-h-h-h)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/5162926?first-contrib=2023.11.27-ui-change-report&h=50&w=50&mask=circle&maxage=7d "@xspeed1989")](https://github.com/xspeed1989)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/37517008?first-contrib=2023.12.05-first-button-bug-report&h=50&w=50&mask=circle&maxage=7d "@Chipsum")](https://github.com/Chipsum)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/53054099?first-contrib=2023.2.3-added-eslint-plugin-userscripts&h=50&w=50&mask=circle&maxage=7d "@Yash-Singh1")](https://github.com/Yash-Singh1)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/2911588?first-contrib=2023.2.26-shortened-hungarian-menu-label&h=50&w=50&mask=circle&maxage=7d "@sanchomuzax")](https://github.com/sanchomuzax)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=50&w=50&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110?h=50&w=50&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d "ChatGPT")](https://chat.openai.com)

</div>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

<div align="center">

<br>

<a href="https://star-history.com/#adamlui/chatgpt-auto-refresh&Timeline">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=adamlui/chatgpt-auto-refresh&type=Timeline&theme=dark" />
        <img width=665 src="https://api.star-history.com/svg?repos=adamlui/chatgpt-auto-refresh&type=Timeline" />
    </picture>
</a>

<br>_Consider giving this repo a ⭐ if it helped you!_

</div>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🤖 More ChatGPT apps

For even more epic ChatGPT apps, visit: https://github.com/adamlui/chatgpt-apps
<br><br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 📜 Related scripts

### <img width=17 style="margin-bottom:-1px" src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon32.png"> [ChatGPT Widescreen Mode](https://github.chatgptwidescreen.com) <img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" style="width: auto; height: 24px; margin:0 0 -4px 5px;" width="auto" height="24" />
> Adds Widescren + Fullscreen modes to ChatGPT for enhanced viewing + reduced scrolling.
<br>[Install](https://github.com/adamlui/chatgpt-widescreen#-installation) /
[Readme](https://github.com/adamlui/chatgpt-widescreen#readme) /
[Discuss](https://chatgptwidescreen.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto-Continue ⏩](https://github.chatgptautocontinue.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>
> Automatically continue generating multiple ChatGPT responses.<br>
[Install](https://github.com/adamlui/chatgpt-auto-continue#-installation) /
[Readme](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[Discuss](https://chatgptautocontinue.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Infinity ∞](https://github.chatgptinfinity.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg"></a>
> Generate endless answers from all-knowing ChatGPT (in any language!)
<br>[Install](https://github.com/adamlui/chatgpt-infinity#-installation) / 
[Readme](https://github.com/adamlui/chatgpt-infinity#readme) / 
[Discuss](https://chatgptinfinity.com/discuss)

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">
  
<a href="https://github.com/adamlui/userscripts">**More userscripts**</a> /
<a href="#english--%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87">Back to top ↑</a>
