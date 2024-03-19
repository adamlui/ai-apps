<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-white-icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-icon32.svg">
        </picture>
        &nbsp;简体中文 |
        <a href="../..#readme">English</a>
    </h6>
</div>

# <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=23 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> ChatGPT 自动刷新 ↻ &nbsp;[![](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=厌倦了%20ChatGPT%20的不断中断？%20使用此插件自动刷新您的会话%21%20&url=https://github.com/adamlui/userscripts/tree/master/chatgpt/chatgpt-auto-refresh&hashtags=greasemonkey,openai,chatgpt)

[![](https://img.shields.io/badge/用户-10,000+-2bbbd8?logo=weightsandbiases&logoColor=white&labelColor=464646&style=for-the-badge)](https://gf.chatgptautorefresh.com)
[![](https://img.shields.io/github/stars/adamlui/chatgpt-auto-refresh?label=星星&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/adamlui/chatgpt-auto-refresh/stargazers)
[![](https://img.shields.io/badge/许可证-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/adamlui/chatgpt-auto-refresh?label=提交&logo=github&logoColor=white&labelColor=464646&color=7bb7fc&style=for-the-badge)](https://github.com/adamlui/chatgpt-auto-refresh/commits/main)
[![](https://img.shields.io/codefactor/grade/github/adamlui/chatgpt-auto-refresh?label=代码质量&logo=codefactor&logoColor=white&labelColor=464646&color=b5fc7b&style=for-the-badge)](https://www.codefactor.io/repository/github/adamlui/chatgpt-auto-refresh)
[![](https://img.shields.io/badge/供电-chatgpt.js-black?logo=gamejolt&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js?utm_source=chatgpt_auto_refresh&utm_content=github_shield)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_chatgpt-auto-refresh%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=漏洞&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_chatgpt-auto-refresh)
[![](https://img.shields.io/badge/提及于-Awesome-fc7bb7?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/awesome-scripts/awesome-userscripts#chatgpt)
[![](https://img.shields.io/badge/网站-www.chatgptautorefresh.com-lightgrey?logo=dribbble&logoColor=white&labelColor=464646&style=for-the-badge)](https://chatgptautorefresh.com?utm_source=chatgpt_auto_refresh&utm_content=github_shield)

### 通过后台请求保持 ChatGPT 会话新鲜，以消除网络错误 + Cloudflare 检查。

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img height=42 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#-如何安装"><img height=42 title="如何安装" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[讨论](https://chatgptautorefresh.com/discuss) /
[审查](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[联系作者](https://github.com/adamlui)

#

![](https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/zh-cn/tm-menu-toggle.png)
![](https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/zh-cn/mode-notification-on.png)
<br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 💡 它能做什么

- 取消对话 **10 分钟的时间限制**（禁用聊天历史记录时）

- 摆脱烦人的 **Cloudflare 检查**:

<div align="center">
    
![](https://user-images.githubusercontent.com/10906554/229415084-97f55e6d-eb21-4ac0-bc2a-c6174a44cfe1.png)

</div>

- 摆脱烦人的 **ChatGPT 网络错误**:

<div align="center">

![](https://user-images.githubusercontent.com/10906554/229413173-7183e459-06ca-4b95-b241-8ca79b18039d.png)
![](https://user-images.githubusercontent.com/10906554/229413421-a6264dc2-a2e3-48a7-ad86-7789dbd7df54.png)
<img width=333 src="https://user-images.githubusercontent.com/10906554/229416105-931e2035-7e30-440a-bdc9-e570daf0d769.png">
    
</div>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 💊 好处

&nbsp;&nbsp;&nbsp;🛡️ <strong>安全的</strong> — 没有发送不必要的帐户相关请求

&nbsp;&nbsp;&nbsp;🪶 <strong>轻的</strong> — 使用的代码很少，只有必要的代码（保持会话活动）节省内存

&nbsp;&nbsp;&nbsp;⌛ <strong>省时间</strong> — 不再仅仅因为几分钟的不活动而不断复制/粘贴/刷新！

&nbsp;&nbsp;&nbsp;🤯 作品 <mark>***即使在背景选项卡中！***</mark>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🗨️ 用户反馈

<img width=535 src="https://i.imgur.com/nbwAQ1e.png">

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🚀 如何安装

1. 安装 Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/extensions/details/tampermonkey-beta/)) 或者 Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao))

2. 安装 [ChatGPT 自动刷新](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh) (将加载上面安装的用户脚本管理器)

3. 正常访问 [chat.openai.com](https://chat.openai.com)，会话将定期自动刷新 (在后台)!

<div align="center">

![自动刷新 启用](https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/zh-cn/mode-toggle-on.jpg)

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

</div>

## ⚡ 依赖关系

<h6>
<div align="center">
<br>

<a href="https://chatgpt.js.org/#/zh-cn/">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
        <img width=546 src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
    </picture>
</a>
<br><br>

ChatGPT 自動刷新依賴於強大的 <a href="https://github.com/KudoAI/chatgpt.js">chatgpt.js</a> 庫 © 2023–2024 <a href="https://www.kudoai.com">KudoAI</a> 和 MIT 許可下的貢獻者。

</div>
</h6>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🌐 兼容性

ChatGPT 自动刷新兼容以下使用 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/) 的浏览器:

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

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img height=42 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#-如何安装"><img height=42 title="如何安装" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[讨论](https://chatgptautorefresh.com/discuss) / 
[发表评论](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[更多 ChatGPT 用户脚本](https://github.com/adamlui/userscripts/tree/master/chatgpt)

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🧠 贡献者

该项目的存在归功于以下贡献者的代码、翻译、问题和想法:
<br><br>

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

<br>_如果这个仓库对您有帮助，请考虑给它一个 ⭐！_

</div>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 🤖 更多 ChatGPT 应用

如需更多精彩的 ChatGPT 应用程序，请访问：https://github.com/adamlui/chatgpt-apps

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">

## 📜 相关脚本

### <img width=17 style="margin-bottom:-1px" src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon32.png"> [ChatGPT 宽屏模式](https://github.chatgptwidescreen.com) <img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" style="width: auto; height: 24px; margin:0 0 -4px 5px;" width="auto" height="24" />
> 向 ChatGPT 添加宽屏 + 全窗口模式以增强查看效果 + 减少滚动。<br>
[安装](https://github.com/adamlui/chatgpt-widescreen/tree/main/docs/zh-cn#-如何安装) /
[自述文件](https://github.com/adamlui/chatgpt-widescreen/tree/main/docs/zh-cn#readme) /
[讨论](https://chatgptwidescreen.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 自动继续 ⏩](https://github.chatgptautocontinue.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>
> 自动继续生成多个 ChatGPT 响应。<br>
[安装](https://github.com/adamlui/chatgpt-auto-continue/tree/main/docs/zh-cn#-如何安装) /
[自述文件](https://github.com/adamlui/chatgpt-auto-continue/tree/main/docs/zh-cn#readme) /
[讨论](https://chatgptautocontinue.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT无限 ∞](https://github.chatgptinfinity.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 4px"></a>
> 从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
<br>[安装](https://github.com/adamlui/chatgpt-infinity/tree/main/docs/zh-cn#-如何安装) /
[自述文件](https://github.com/adamlui/chatgpt-infinity/tree/main/docs/zh-cn#readme) /
[讨论](https://chatgptinfinity.com/discuss)

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/separators/aqua.png">
  
<a href="https://github.com/adamlui/userscripts">**更多用户脚本**</a> /
<a href="#%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87--english">回到顶部↑</a>
