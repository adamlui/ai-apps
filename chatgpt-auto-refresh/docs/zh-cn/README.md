# <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=23 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> ChatGPT 自动刷新 ↻ &nbsp;[![](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=厌倦了%20ChatGPT%20的不断中断？%20使用此插件自动刷新您的会话%21%20&url=https://github.com/adamlui/userscripts/tree/master/chatgpt/chatgpt-auto-refresh&hashtags=greasemonkey,openai,chatgpt)

![](https://img.shields.io/greasyfork/dt/462422?label=用户&color=brightgreen)
[![](https://img.shields.io/badge/执照-MIT-green.svg)](LICENSE.md)
[![](https://img.shields.io/badge/支持-Chrome/Firefox/Edge/Opera/Brave/Vivaldi/Waterfox/LibreWolf/Ghost/QQ-989898.svg)](https://github.com/adamlui/chatgpt-auto-refresh/tree/main/greasemonkey#compatibility)
[![](https://img.shields.io/github/commit-activity/m/adamlui/chatgpt-auto-refresh?label=提交)](https://github.com/adamlui/chatgpt-auto-refresh/commits/main)
![](https://img.shields.io/snyk/vulnerabilities/github/adamlui/chatgpt-auto-refresh?label=弱点&labelColor=464646&color=gold)
[![](https://img.shields.io/codefactor/grade/github/adamlui/autoclear-chatgpt-history?label=代码质量)](https://www.codefactor.io/repository/github/adamlui/chatgpt-auto-refresh)
<a alt="chatgpt.js" href="https://chatgpt.js.org"><img height=20 src="https://i.imgur.com/AwQqCmB.png"></a>
[![](https://awesome.re/mentioned-badge.svg)](https://github.com/awesome-scripts/awesome-userscripts#chatgpt)

### 通过后台请求保持 ChatGPT 会话新鲜，以消除网络错误 + Cloudflare 检查。

###### 简体中文 | [English](../..#readme)

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#如何安装"><img title="如何安装" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[讨论](https://github.com/adamlui/chatgpt-auto-refresh/discussions) /
[审查](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[联系作者](https://github.com/adamlui)

#

![](https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/zh-cn/tm-menu-toggle.png)
![](https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/zh-cn/mode-notification-on.png)

## 它能做什么

- #### 摆脱烦人的 Cloudflare 检查:

<div align="center">
    
![](https://user-images.githubusercontent.com/10906554/229415084-97f55e6d-eb21-4ac0-bc2a-c6174a44cfe1.png)

</div>

- #### 摆脱烦人的 ChatGPT 网络错误:

<div align="center">

![](https://user-images.githubusercontent.com/10906554/229413173-7183e459-06ca-4b95-b241-8ca79b18039d.png)
![](https://user-images.githubusercontent.com/10906554/229413421-a6264dc2-a2e3-48a7-ad86-7789dbd7df54.png)
<img width=333 src="https://user-images.githubusercontent.com/10906554/229416105-931e2035-7e30-440a-bdc9-e570daf0d769.png">
    
</div>

## 好处

&nbsp;&nbsp;&nbsp;🛡️ <strong>安全的</strong> — 没有发送不必要的帐户相关请求

&nbsp;&nbsp;&nbsp;🪶 <strong>轻的</strong> — 使用的代码很少，只有必要的代码（保持会话活动）节省内存

&nbsp;&nbsp;&nbsp;⌛ <strong>省时间</strong> — 不再仅仅因为几分钟的不活动而不断复制/粘贴/刷新！

&nbsp;&nbsp;&nbsp;🤯 作品 <mark>***即使在背景选项卡中！***</mark>

## 用户反馈

<img width=535 src="https://i.imgur.com/JX3u7Yz.png">

## 如何安装

1. 安装 Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/extensions/details/tampermonkey-beta/)) 或者 Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao))

2. 安装 [ChatGPT 自动刷新](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh) (将加载上面安装的用户脚本管理器)

3. 正常访问 [chat.openai.com](https://chat.openai.com)，会话将定期自动刷新 (在后台，不会对您造成任何损失)!

<div align="center">

![自动刷新 启用](https://raw.githubusercontent.com/adamlui/chatgpt-auto-refresh/main/media/images/screenshots/zh-cn/mode-toggle-on.jpg)    

</div>

## 依赖关系

<h6>
<div align="center">
<br />

<a href="https://chatgpt.js.org">
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=546 src="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture></a>
<br /><br />

ChatGPT 自動刷新依賴於強大的 [chatgpt.js](https://github.com/chatgptjs/chatgpt.js) 庫 (c) 2023 KudoAI 和 MIT 許可下的貢獻者。

</div>
</h6>

## 兼容性

ChatGPT 自动刷新兼容以下使用 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/) 的浏览器:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Opera
- Brave
- Vivaldi
- Waterfox
- LibreWolf
- Ghost
- QQ

如果您已经测试它可以在未列出的浏览器中工作，请创建一个 [pull request](https://github.com/adamlui/chatgpt-auto-refresh/pulls) 成为贡献者！

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img height=40 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#如何安装"><img height=40 title="如何安装" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[讨论](https://github.com/adamlui/chatgpt-auto-refresh/discussions) / 
[发表评论](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[更多 ChatGPT 用户脚本](https://github.com/adamlui/userscripts/tree/master/chatgpt)

## 贡献者

该项目的存在归功于以下贡献者的代码、翻译、问题和想法:

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
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d "ChatGPT")](https://chat.openai.com)

## 更多 ChatGPT 应用

如需更多史诗般的 ChatGPT 应用程序，请访问此处：[https://github.com/adamlui/chatgpt-apps](https://github.com/adamlui/chatgpt-apps)
<br><br>

## 相关脚本

### <img width=17 style="margin-bottom:-1px" src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon32.png"> [ChatGPT 宽屏模式](https://chatgptevo.com/widescreen/github) <img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" style="width: auto; height: 24px; margin:0 0 -4px 5px;" width="auto" height="24" />

向 ChatGPT 添加宽屏 + 全窗口模式以增强查看效果 + 减少滚动。<br>
[安装](https://github.com/adamlui/chatgpt-widescreen/tree/main/docs/zh-cn#%E5%AE%89%E8%A3%85) / 
[自述文件](https://github.com/adamlui/chatgpt-widescreen/tree/main/docs/zh-cn#readme) / 
[讨论](https://chatgptevo.com/widescreen/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 自动继续 ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

自动继续生成多个 ChatGPT 响应。<br>
[安装](https://greasyfork.org/scripts/466789-chatgpt-auto-continue) / 
[自述文件](https://github.com/adamlui/chatgpt-auto-continue#readme) / 
[讨论](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT无限 ∞](https://chatgptevo.com/infinity/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 4px"></a>

从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
<br>[安装](https://greasyfork.org/scripts/465051-chatgpt-infinity) / 
[自述文件](https://github.com/adamlui/chatgpt-infinity/tree/main/docs/zh-cn#readme) / 
[讨论](https://chatgptevo.com/infinity/discussions)

#
  
<a href="https://github.com/adamlui/userscripts">**更多用户脚本**</a> / 
<a href="#-chatgpt-%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0--">回到顶部↑</a>
