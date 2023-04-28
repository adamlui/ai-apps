# <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=23 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> ChatGPT 自动刷新 ↻ &nbsp;[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=厌倦了%20ChatGPT%20的不断中断？%20使用此插件自动刷新您的会话%21%20&url=https://github.com/adamlui/userscripts/tree/master/chatgpt/chatgpt-auto-refresh&hashtags=greasemonkey,openai,chatgpt)

![用户数](https://img.shields.io/greasyfork/dt/462422?label=用户&color=brightgreen)
[![执照](https://img.shields.io/badge/执照-MIT-green.svg)](https://github.com/adamlui/chatgpt-auto-refresh/blob/main/greasemonkey/LICENSE.md)
[![支持](https://img.shields.io/badge/支持-Chrome/Firefox/Edge/Opera/Brave/Vivaldi/LibreWolf/QQ-989898.svg)](https://github.com/adamlui/chatgpt-auto-refresh/tree/main/greasemonkey#compatibility)
[![提交](https://img.shields.io/github/commit-activity/w/adamlui/chatgpt-auto-refresh?label=提交)](https://github.com/adamlui/chatgpt-auto-refresh/commits/main)
[![代码质量](https://img.shields.io/codefactor/grade/github/adamlui/autoclear-chatgpt-history?label=代码质量)](https://www.codefactor.io/repository/github/adamlui/chatgpt-auto-refresh)
<a alt="chatgpt.js" href="https://chatgpt.js.org"><img height=20 src="https://i.imgur.com/AwQqCmB.png"></a>
[![在 Awesome Userscripts 中提到](https://awesome.re/mentioned-badge.svg)](https://github.com/awesome-scripts/awesome-userscripts#chatgpt)

### 通过后台请求保持 ChatGPT 会话新鲜，以消除网络错误 + Cloudflare 检查。

###### 简体中文 | [English](../README.md)

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img alt="安装这个脚本" src="https://raw.githubusercontent.com/adamlui/userscripts/master/install-button.svg"></a><a href="#如何安装"><img alt="如何安装" title="如何安装" src="https://github.com/adamlui/userscripts/raw/master/help-button.svg"></a>
<br>
[讨论](https://github.com/adamlui/chatgpt-auto-refresh/discussions) /
[审查](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[联系作者](https://github.com/adamlui)

#

![image](https://user-images.githubusercontent.com/10906554/234756105-cf367acc-644a-49ee-8586-43c51d43e359.png)
![image](https://user-images.githubusercontent.com/10906554/227314471-cfd8362b-0662-479d-bb2e-5c13e2f622b0.png)

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

## 依赖关系

<h6>
<div align="center">
<br />

<a href="https://chatgpt.js.org">
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=546 alt="chatgpt.js" src="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture></a>
<br /><br />

ChatGPT 自动刷新依赖于强大的 [chatgpt.js](https://github.com/chatgptjs/chatgpt.js) 库 (c) 2023 刘展鹏 (Adam Lui), chatgpt.js 和 MIT 许可下的贡献者的代码。

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
- LibreWolf
- QQ

如果您已经测试它可以在未列出的浏览器中工作，请创建一个 [pull request](https://github.com/adamlui/chatgpt-auto-refresh/pulls) 成为贡献者！

<a href="https://greasyfork.org/scripts/462422-chatgpt-auto-refresh"><img alt="安装这个脚本" height=40 src="https://raw.githubusercontent.com/adamlui/userscripts/master/install-button.svg"></a><a href="#如何安装"><img alt="如何安装" height=40 title="如何安装" src="https://github.com/adamlui/userscripts/raw/master/help-button.svg"></a>
<br>
[讨论](https://github.com/adamlui/chatgpt-auto-refresh/discussions) / 
[发表评论](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh/feedback#post-discussion) /
[更多 ChatGPT 用户脚本](https://github.com/adamlui/userscripts/tree/master/chatgpt)

## 作者链接

[![在 GitHub 上关注@adamlui](https://img.shields.io/github/followers/adamlui?label=关注@adamlui&style=social "GitHub")](https://github.com/adamlui)
[![在 YouTube 上关注@adamluitube](https://img.shields.io/youtube/channel/subscribers/UCgBMqK7SRL5R__3qM-YAcSg?label=关注@adamluitube&style=social)](https://www.youtube.com/AdamLuiTube?sub_confirmation=1)
<a href="https://elonsucks.org/@adam" target="_blank"><img align="bottom" src="https://img.shields.io/mastodon/follow/109387703022229926?domain=https%3A%2F%2Felonsucks.org&label=%E5%85%B3%E6%B3%A8@adam&style=social" alt="在 Mastodon 上关注@adam" title="Mastodon"></a>
[![在推特上关注@adamllui](https://img.shields.io/twitter/follow/adamllui?label=关注@adamllui&style=social)](https://twitter.com/adamllui)

## 更多 ChatGPT 应用

如需更多史诗般的 ChatGPT 应用程序，请访问此处：[https://github.com/adamlui/chatgpt-apps](https://github.com/adamlui/chatgpt-apps)
<br><br>

## 相关脚本

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> [ChatGPT 宽屏模式🖥️](https://github.com/adamlui/chatgpt-widescreen/blob/main/greasemonkey) &nbsp;<img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" alt="ChatGPT&#0032;Widescreen&#0032;Mode - Add&#0032;widescreen&#0032;&#0043;&#0032;full&#0032;window&#0032;modes&#0032;to&#0032;ChatGPT | Product Hunt" style="width: auto; height: 24px; margin:0 0 -4px 3px;" width="auto" height="24" />

向 ChatGPT 添加宽屏 + 全窗口模式以减少滚动。<br>
[安装](https://greasyfork.org/scripts/461473-chatgpt-widescreen-mode) / 
[自述文件](https://github.com/adamlui/chatgpt-widescreen#readme) / 
[讨论](https://chatgptevo.com/widescreen/discussions)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com/greasemonkey) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" alt="BraveGPT - Bring&#0032;the&#0032;magic&#0032;of&#0032;ChatGPT&#0032;to&#0032;Brave&#0032;Search&#0033; | Product Hunt" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

在 Brave Search 侧边栏中显示 ChatGPT 答案。<br>
[安装](https://greasyfork.org/scripts/462440-bravegpt) / 
[自述文件](https://github.bravegpt.com/#readme) / 
[讨论](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT无限 ∞](https://chatgptevo.com/infinity/github)

从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
<br>[安装](https://greasyfork.org/scripts/465051-chatgpt-infinity) / 
[自述文件](https://github.com/adamlui/chatgpt-infinity/blob/main/docs/zh-cn/README.md) / 
[讨论](https://chatgptevo.com/infinity/discussions)

#
  
<a href="https://github.com/adamlui/userscripts">**更多用户脚本**</a> / 
<a href="#-chatgpt-%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0--">回到顶部↑</a>
