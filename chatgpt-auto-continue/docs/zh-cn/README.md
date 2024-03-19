<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-white-icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-icon32.svg">
        </picture>
        &nbsp;简体中文 |
        <a href="../../#readme">English</a>
    </h6>
</div>

# <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=23 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> ChatGPT 自动继续 ⏩ &nbsp;[![](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=%E4%BD%BF%E7%94%A8%E6%AD%A4%E6%8F%92%E4%BB%B6%E8%87%AA%E5%8A%A8%E4%BB%8E%E5%A4%9A%E4%B8%AA%20ChatGPT%20%E5%93%8D%E5%BA%94%E7%BB%A7%E7%BB%AD%E5%AF%B9%E8%AF%9D%EF%BC%81&url=https://chatgptautocontinue.com&hashtags=javascript,openai,chatgpt)

[![](https://img.shields.io/greasyfork/dt/466789?label=用户&logo=weightsandbiases&logoColor=white&labelColor=464646&color=2bbbd8&style=for-the-badge)](https://greasyfork.org/scripts/466789-chatgpt-auto-continue)
[![](https://img.shields.io/badge/许可证-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/adamlui/chatgpt-auto-continue?label=提交&logo=github&logoColor=white&labelColor=464646&color=7bb7fc&style=for-the-badge)](https://github.com/adamlui/chatgpt-auto-continue/commits/main)
[![](https://img.shields.io/codefactor/grade/github/adamlui/chatgpt-auto-continue?label=代码质量&logo=codefactor&logoColor=white&labelColor=464646&color=b5fc7b&style=for-the-badge)](https://www.codefactor.io/repository/github/adamlui/chatgpt-auto-continue)
[![](https://img.shields.io/badge/供电-chatgpt.js-black?logo=gamejolt&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js?utm_source=chatgpt_auto_continue&utm_content=github_shield)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_chatgpt-auto-continue%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=漏洞&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_chatgpt-auto-continue)
[![](https://img.shields.io/badge/提及于-Awesome-fc7bb7?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/awesome-scripts/awesome-userscripts#chatgpt)
[![](https://img.shields.io/badge/网站-www.chatgptautocontinue.com-lightgrey?logo=dribbble&logoColor=white&labelColor=464646&style=for-the-badge)](https://chatgptautocontinue.com?utm_source=chatgpt_auto_continue&utm_content=github_shield)

### 聊天中断时自动继续生成 ChatGPT 响应。

<a href="https://greasyfork.org/scripts/466789-chatgpt-auto-continue"><img height=42 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#安装"><img height=42 title="如何安装" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[讨论](https://chatgptautocontinue.com/discussions) /
[审查](https://greasyfork.org/scripts/466789-chatgpt-auto-continue/feedback#post-discussion) /
[联系作者](https://github.com/adamlui)

#

<div align="center">

<img width=432 src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-continue/main/media/images/screenshots/continue-button-crossed.png"> <img width=300 src="https://raw.githubusercontent.com/adamlui/chatgpt-auto-continue/main/media/images/screenshots/zh-cn/auto-continue-on-notification-checked.png">

</div>

## 🚀 如何安装

1. 安装 Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/extensions/details/tampermonkey-beta/)) 或者 Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao))

2. 安装 [ChatGPT 自动继续](https://greasyfork.org/scripts/466789-chatgpt-auto-continue) (将加载上面安装的用户脚本管理器)

3. 正常访问 [chat.openai.com](https://chat.openai.com)，多条回复对话中断时会自动继续生成!

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

ChatGPT 自动继续 依赖于功能强大的 [chatgpt.js](https://github.com/KudoAI/chatgpt.js) 库 © 2023–2024 KudoAI 和 MIT 许可下的贡献者的代码。

</div>
</h6>

## 🧠 贡献者

该项目的存在归功于以下贡献者的代码、翻译、问题和想法:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.04.28&h=50&w=50&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/84412716?first-contrib=2023.08.02-ux-update-bug-report&h=50&w=50&mask=circle&maxage=7d "@a12930")](https://github.com/a12930)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/64159148?first-contrib=2023.08.10-observer-freeze-bug-report&h=50&w=50&mask=circle&maxage=7d "@thijsi123")](https://github.com/thijsi123)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/7357354?first-contrib=2023.10.31-observer-freeze-bug-report&h=50&w=50&mask=circle&maxage=7d "@SapitoSucio")](https://github.com/SapitoSucio)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/158176338?first-contrib=2024.3.1-button-click-fails-bug-report&h=50&w=50&mask=circle&maxage=7d "@whz-pku")](https://github.com/whz-pku)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=50&w=50&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=50&w=50&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d "ChatGPT")](https://chat.openai.com)

#

<div align="center">

<br>

<a href="https://star-history.com/#adamlui/chatgpt-auto-continue">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=adamlui/chatgpt-auto-continue&type=Timeline&theme=dark" />
        <img width=665 src="https://api.star-history.com/svg?repos=adamlui/chatgpt-auto-continue&type=Timeline" />
    </picture>
</a>

<br>_如果这个仓库对您有帮助，请考虑给它 ⭐!_

</div>

## 🤖 更多 ChatGPT 应用

如需更多史诗般的 ChatGPT 应用程序，请访问此处: https://github.com/adamlui/chatgpt-apps
<br><br>

## 📜 相关脚本

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 自动刷新 ↻](https://github.chatgptautorefresh.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

> 保持 ChatGPT 会话新鲜，消除聊天时间限制 + 网络错误 + Cloudflare 检查。<br>
[安装](https://github.chatgptautorefresh.com/tree/main/docs/zh-cn#-如何安装) / 
[自述文件](https://github.chatgptautorefresh.com/tree/main/docs/zh-cn#readme) / 
[讨论](https://chatgptautorefresh.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT无限 ∞](https://github.chatgptinfinity.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 4px"></a>

> 从无所不知的 ChatGPT (任何语言!) 生成无穷无尽的答案。<br>
[安装](https://github.chatgptinfinity.com/tree/main/docs/zh-cn#-如何安装) / 
[自述文件](https://github.chatgptinfinity.com/tree/main/docs/zh-cn#readme) / 
[讨论](https://chatgptinfinity.com/discuss)

### <img width=17 style="margin-bottom:-1px" src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon32.png"> [ChatGPT 宽屏模式](https://github.chatgptwidescreen.com) <img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" style="width: auto; height: 24px; margin:0 0 -4px 5px;" width="auto" height="24" />

> 向 ChatGPT 添加宽屏 + 全屏模式以减少滚动。<br>
[安装](https://github.chatgptwidescreen.com/tree/main/docs/zh-cn#-如何安装) / 
[自述文件](https://github.chatgptwidescreen.com/tree/main/docs/zh-cn#readme) / 
[讨论](https://chatgptwidescreen.com/discuss)

<img height=6px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png">
  
<a href="https://github.com/adamlui/userscripts">**更多用户脚本**</a> / 
<a href="#-chatgpt-自动继续--">回到顶部 ↑</a>
