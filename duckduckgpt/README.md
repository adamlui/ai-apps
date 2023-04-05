<h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://media.duckduckgpt.com/images/ddgpt-logo-dark-mode-371x65.png">
    <img alt="DuckDuckGPT" src="https://media.duckduckgpt.com/images/ddgpt-logo-light-mode-371x65.png">
  </picture>
<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" alt="DuckDuckGPT - Bring&#0032;the&#0032;magic&#0032;of&#0032;ChatGPT&#0032;to&#0032;DuckDuckGo | Product Hunt" style="width: 156px; height: 34px; margin:0 0 11px 5px;" width="156" height="34" /></a>
  <a href="https://twitter.com/intent/tweet?text=Want%20%23ChatGPT%20answers%20right%20alongside%20DuckDuckGo%20results%3F%20This%20%23userscript%20does%20just%20that%21&url=https://duckduckgpt.com&hashtags=greasemonkey,javascript,ai"><img alt="Tweet" style="margin:0 0 14px 5px;" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
</h1>

![usercount](https://img.shields.io/greasyfork/dt/459849?label=Users)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![support](https://img.shields.io/badge/Support-Chrome/Firefox/Edge/Opera/Brave/Vivaldi/LibreWolf/QQ-989898.svg)](#compatibility)
[![commits](https://img.shields.io/github/commit-activity/w/kudoai/duckduckgpt?label=Commits)](https://github.com/kudoai/duckduckgpt/commits/main)
[![code-quality](https://img.shields.io/codefactor/grade/github/kudoai/duckduckgpt?label=Code%20Quality)](https://www.codefactor.io/repository/github/kudoai/duckduckgpt)
<a alt="chatgpt.js" href="https://github.com/chatgptjs/chatgpt.js"><img height=20 src="https://i.imgur.com/IlqFZJI.png"></a>
[![Mentioned in Awesome Userscripts](https://awesome.re/mentioned-badge.svg)](https://github.com/awesome-scripts/awesome-userscripts#duckduckgo)

<h3><b>DuckDuckGPT</b> brings the magic of ChatGPT to search results.</h3>

<a href="https://greasyfork.org/en/scripts/459849-duckduckgpt"><img alt="Install this script" src="https://raw.githubusercontent.com/adamlui/userscripts/master/install-button.svg"></a><a href="#installation"><img alt="How to install" title="How to install" src="https://github.com/adamlui/userscripts/raw/master/help-button.svg"></a>
<br>
[Discuss](https://github.duckduckgpt.com/discussions) /
[Review](https://duckduckgpt.com/userscript/review) /
[Contact author](https://github.com/adamlui)

#

<img src="https://i.imgur.com/emsmP6p.png">

## Installation

1. Install Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)) or Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao))

2. Install [DuckDuckGPT](https://greasyfork.org/en/scripts/459849-duckduckgpt) (will load in userscript manager installed above)

3. Visit [duckduckgo.com](https://duckduckgo.com), type your search, engage bot!

<div align="center">

![ddgpt-demo](https://user-images.githubusercontent.com/10906554/220238659-9b59de4f-31d0-468a-a41d-528ac924732f.gif)
  
</div>

## Dependencies

<h6>
<div align="center">
<br />

<a href="https://github.com/chatgptjs/chatgpt.js">
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=546 alt="chatgpt.js" src="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture></a>
<br /><br />

DuckDuckGPT relies on code from the powerful [chatgpt.js](https://github.com/chatgptjs/chatgpt.js) library (c) 2023 Adam Lui, 冯不游 & chatgpt.js under the MIT license.

</div>
</h6>

## Compatibility 

**DuckDuckGPT** is compatible w/ the following browsers using [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/):

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Opera
- Brave
- Vivaldi
- LibreWolf
- QQ

If you've tested it to work in a browser not listed, simply create a [pull request](https://github.duckduckgpt.com/pulls) to become a contributor!

## Proxy Mode

Proxy API Mode (disabled by default) returns text responses, without the need for a chat.openai.com account.

When disabled, a ChatGPT account is required to fetch responses, but they are faster stream-type ones (like in demo).

If OpenAI API is acting unreliable, enable Proxy Mode like this:

<div align='center'>

![image](https://user-images.githubusercontent.com/10906554/229062641-abff9d17-21cc-49b2-a98e-7793c231c4f2.png)
![image](https://user-images.githubusercontent.com/10906554/229728672-3fec6a2d-c4fe-4738-871d-56c1d97cb2c5.png)

</div>

<br>

<a href="https://greasyfork.org/en/scripts/459849-duckduckgpt"><img alt="Install this script" src="https://raw.githubusercontent.com/adamlui/userscripts/master/install-button.svg"></a><a href="#installation"><img alt="How to install" title="How to install" src="https://github.com/adamlui/userscripts/raw/master/help-button.svg"></a>
<br>
[Discuss](https://github.duckduckgpt.com/discussions) /
[Leave a review](https://duckduckgpt.com/userscript/review) /
[More ChatGPT userscripts](https://github.com/adamlui/chatgpt-userscripts)

## Social links

<a href="https://technodon.org/@duckduckgpt" target="_blank"><img align="bottom" src="https://img.shields.io/mastodon/follow/109876284007792895?domain=https%3A%2F%2Ftechnodon.org&style=social" alt="Follow @duckduckgpt on Mastodon" title="Mastodon"></a>
[![Follow @adamlui on GitHub](https://img.shields.io/github/followers/adamlui?label=Follow%20%40adamlui&style=social "GitHub")](https://github.com/adamlui)
[![Follow @adamluitube on YouTube](https://img.shields.io/youtube/channel/subscribers/UCgBMqK7SRL5R__3qM-YAcSg?label=Follow%20%40adamluitube&style=social)](https://www.youtube.com/AdamLuiTube?sub_confirmation=1)
<a href="https://elonsucks.org/@adam" target="_blank"><img align="bottom" src="https://img.shields.io/mastodon/follow/109387703022229926?domain=https%3A%2F%2Felonsucks.org&style=social" alt="Follow @adam on Mastodon" title="Mastodon">
[![Follow @adamllui on Twitter](https://img.shields.io/twitter/follow/adamllui?style=social)](https://twitter.com/adamllui)
<br><br>

## Related scripts

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto Refresh ↻](https://github.com/adamlui/chatgpt-auto-refresh/tree/main/greasemonkey) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome Userscripts" style="margin:0 0 -2px 5px"></a>

Keeps ChatGPT sessions fresh to eliminate network errors + Cloudflare checks.
<br>[Install](https://greasyfork.org/en/scripts/462422-chatgpt-auto-refresh) / 
[Readme](https://github.com/adamlui/chatgpt-auto-refresh/tree/main/greasemonkey/README.md) / 
[Discuss](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com/greasemonkey) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" alt="BraveGPT - Bring&#0032;the&#0032;magic&#0032;of&#0032;ChatGPT&#0032;to&#0032;Brave&#0032;Search&#0033; | Product Hunt" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Display ChatGPT answers in Brave Search sidebar.
<br>[Install](https://greasyfork.org/en/scripts/462440-bravegpt) / 
[Readme](https://bravegpt.com/greasemonkey/README.md) / 
[Discuss](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> [ChatGPT Widescreen Mode 🖥️](https://github.com/adamlui/chatgpt-widescreen/tree/main/greasemonkey) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome Userscripts" style="margin:0 0 -2px 3px"></a>

Adds Widescreen + Full-Window modes to ChatGPT for enhanced viewing.
<br>[Install](https://greasyfork.org/en/scripts/461473-chatgpt-widescreen-mode) / 
[Readme](https://github.com/adamlui/chatgpt-widescreen/blob/main/greasemonkey/README.md) / 
[Discuss](https://github.com/adamlui/chatgpt-widescreen/discussions)

#

<a href="https://github.com/adamlui/userscripts">**More userscripts**</a> / 
<a href="#--------------">Back to top ↑</a>
