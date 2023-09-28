<h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://media.duckduckgpt.com/images/ddgpt-logo-dark-mode-371x65.png">
    <img src="https://media.duckduckgpt.com/images/ddgpt-logo-light-mode-371x65.png">
  </picture>
<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 156px; height: 34px; margin:0 0 11px 5px;" width="156" height="34" /></a>
  <a href="https://twitter.com/intent/tweet?text=Want%20%23ChatGPT%20answers%20right%20alongside%20DuckDuckGo%20results%3F%20This%20%23userscript%20does%20just%20that%21&url=https://duckduckgpt.com&hashtags=greasemonkey,javascript,ai"><img style="margin:0 0 14px 5px;" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
</h1>

![](https://img.shields.io/greasyfork/dt/459849?label=Installs&logo=docusign&logoColor=white&labelColor=464646&color=2bbbd8&style=for-the-badge)
[![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](../LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/duckduckgpt?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/duckduckgpt/commits/main)
[![](https://img.shields.io/codefactor/grade/github/kudoai/duckduckgpt?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/duckduckgpt)
[![](https://img.shields.io/badge/Powered_by-chatgpt.js-black?logo=gamejolt&logoColor=white&labelColor=464646&style=for-the-badge)](https://chatgpt.js.org)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/awesome-scripts/awesome-userscripts#chatgpt)

<h3><b>DuckDuckGPT</b> brings the magic of ChatGPT to search results (powered by GPT-4!)</h3>

<a href="https://greasyfork.org/scripts/459849-duckduckgpt"><img height=42 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#installation"><img height=42 title="How to install" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[Discuss](https://github.duckduckgpt.com/discussions) /
[Review](https://duckduckgpt.com/userscript/review) /
[Contact author](https://github.com/adamlui)

#

<img src="https://raw.githubusercontent.com/kudoai/duckduckgpt/main/media/images/screenshots/how-to-becum-rich-demo.png">

## Installation

1. Install Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/extensions/details/tampermonkey-beta/)) or Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao))

2. Install [DuckDuckGPT](https://greasyfork.org/scripts/459849-duckduckgpt) (will load in userscript manager installed above)

3. Visit [duckduckgo.com](https://duckduckgo.com), type your search, engage bot!

<div align="center">

![ddgpt-demo](https://user-images.githubusercontent.com/10906554/220238659-9b59de4f-31d0-468a-a41d-528ac924732f.gif)
  
</div>

## Dependencies

<h6>
<div align="center">
<br />

<a href="https://chatgpt.js.org">
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=455 style="margin: 0 0 -13px 18px" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture></a>
<a href="https://katex.org">
    <img width=175 style="margin: 0 0 -13px 24px" src="https://i.imgur.com/3FBdSCi.png">
</a>
<br /><br />

DuckDuckGPT relies on code from the powerful [chatgpt.js](https://github.com/kudoai/chatgpt.js) library (c) 2023 KudoAI & contributors under the MIT license
<br>...and the [KaTeX](https://github.com/KaTeX/KaTeX) library (c) 2013–2020 Khan Academy & contributors under the MIT license.

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
- Ghost
- QQ

If you've tested it to work in a browser not listed, simply create a [pull request](https://github.duckduckgpt.com/pulls) to become a contributor!

## Proxy Mode

Proxy API Mode (disabled by default) returns text responses using GPT-4, without the need for a chat.openai.com account.

When disabled, a ChatGPT account is required to fetch responses, but they are faster stream-type ones (like in demo).

If OpenAI API is acting unreliable, enable Proxy Mode like this:

<div align='center'>

![](https://user-images.githubusercontent.com/10906554/229062641-abff9d17-21cc-49b2-a98e-7793c231c4f2.png)
![](https://user-images.githubusercontent.com/10906554/229728672-3fec6a2d-c4fe-4738-871d-56c1d97cb2c5.png)

</div>

<br>

<a href="https://greasyfork.org/scripts/459849-duckduckgpt"><img src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#installation"><img title="How to install" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[Discuss](https://github.duckduckgpt.com/discussions) /
[Leave a review](https://duckduckgpt.com/userscript/review) /
[More ChatGPT userscripts](https://github.com/adamlui/userscripts/tree/master/chatgpt)

## Social links

[![](https://img.shields.io/mastodon/follow/109876284007792895?domain=https%3A%2F%2Ftechnodon.org&style=social "Follow @duckduckgpt on Mastodon")](https://technodon.org/@duckduckgpt)
[![](https://img.shields.io/github/followers/kudoai?label=Follow%20%40kudoai&style=social "Follow @kudoai on GitHub")](https://github.com/kudoai)
[![](https://img.shields.io/youtube/channel/subscribers/UCdwQlbPJW3RbkLcHh_DGb0g?label=Follow%20%40kudoailabs&style=social "Follow @kudoailabs on YouTube")](https://www.youtube.com/@kudoailabs?sub_confirmation=1)
<br>[![](https://img.shields.io/mastodon/follow/109387703022229926?domain=https%3A%2F%2Felonsucks.org&style=social "Follow @adam on Mastodon")](https://elonsucks.org/@adam)
[![](https://img.shields.io/badge/Follow%20@adamllui-2.1k-blue?logo=x&style=social "Follow @adamllui on X")](https://x.com/intent/user?screen_name=adamllui)
[![](https://img.shields.io/badge/Follow%20@adamlui-637-blue?logo=medium&style=social "Follow @adamlui on Medium")](https://adamlui.com)
[![](https://img.shields.io/youtube/channel/subscribers/UCgBMqK7SRL5R__3qM-YAcSg?label=Follow%20%40adamluitube&style=social "Follow @adamluitube on YouTube")](https://www.youtube.com/AdamLuiTube?sub_confirmation=1)
[![](https://img.shields.io/badge/Follow%20in%2fadamlui-484-blue?logo=linkedin&style=social "Follow in/adamlui on LinkedIn")](https://linkedin.com/in/adamlui)
[![](https://img.shields.io/github/followers/adamlui?label=Follow%20%40adamlui&style=social "Follow @adamlui on GitHub")](https://github.com/adamlui)

## Contributors

This app exists thanks to code, translations, issues & ideas from the following contributors:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.02.11&h=50&w=50&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/68170410?first-contrib=2023.02.19-unproxied-buggy-report-lead-to-proxied-mode&h=50&w=50&mask=circle&maxage=7d "@Delamcode")](https://github.com/Delamcode)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/7660254?first-contrib=2023.03.01-stick-w-gm-api-recommendation&h=50&w=50&mask=circle&maxage=7d "@Quoid")](https://github.com/Quoid)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/47604048?first-contrib=2023.04.01-proxy-ip-bug-report&h=50&w=50&mask=circle&maxage=7d "@Nord1cWarr1or")](https://github.com/Nord1cWarr1or)
[![@luetage](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/13988217?first-contrib=2023.04.21-ddg-dark-theme-bug-report&h=50&w=50&mask=circle&maxage=7d "@luetage")](https://github.com/luetage)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/69060894?first-contrib=2023.05.16-katex-idea&h=50&w=50&mask=circle&maxage=7d "@afkvido")](https://github.com/afkvido)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.23-css-readability&h=50&w=50&mask=circle&maxage=7d "@AliAlSarre")](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/44784663?first-contrib=2023.05.26-ddg-centered-mode-bug-report&h=50&w=50&mask=circle&maxage=7d "@wznmickey")](https://github.com/wznmickey)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/96403800?first-contrib=2023.06.24-reply-language-idea&h=50&w=50&mask=circle&maxage=7d "@gitttt54")](https://github.com/gitttt54)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/12557024?first-contrib=2023.06.29-fatter-sidebar-idea&h=50&w=50&mask=circle&maxage=7d "@mozzribo")](https://github.com/mozzribo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=50&w=50&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=50&w=50&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d "ChatGPT")](https://chat.openai.com)

## More ChatGPT apps

For even more epic ChatGPT apps, go here: https://github.com/adamlui/chatgpt-apps
<br><br>

## Related scripts

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Infinity ∞](https://chatgptinfinity.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 4px"></a>

Generate endless answers from all-knowing ChatGPT (in any language!)
<br>
[Install](https://github.com/adamlui/chatgpt-infinity#installation) /
[Readme](https://github.com/adamlui/chatgpt-infinity#readme) /
[Discuss](https://chatgptinfinity.com/discuss)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Display ChatGPT answers in Brave Search sidebar.
<br>
[Install](https://github.bravegpt.com/#installation) /
[Readme](https://github.bravegpt.com/#readme) /
[Discuss](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> [ChatGPT Widescreen Mode 🖥️](https://chatgptwidescreen.com) <img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" style="width: auto; height: 24px; margin:0 0 -4px 3px;" width="auto" height="24" />

Adds Widescren + Fullscreen modes to ChatGPT for enhanced viewing.
<br>
[Install](https://github.com/adamlui/chatgpt-widescreen#installation) /
[Readme](https://github.com/adamlui/chatgpt-widescreen#readme) /
[Discuss](https://chatgptwidescreen.com/discuss)

<img height=6px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png">

<a href="https://github.com/adamlui/userscripts">**More userscripts**</a> / 
<a href="#--------------">Back to top ↑</a>
