<h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://media.bravegpt.com/images/bravegpt-logo-dark-mode-730x135.png">
    <img width=322 height-58 src="https://media.bravegpt.com/images/bravegpt-logo-light-mode-730x135.png">
  </picture>
  <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 156px; height: 34px; margin:0 0 11px 5px;" width="156" height="34" /></a>
  <a href="https://twitter.com/intent/tweet?text=This%20add-on%20adds%20%23ChatGPT%20answers%20right%20besides%20Brave%20Search%20results%21&url=https://www.bravegpt.com&hashtags=greasemonkey,javascript,ai"><img style="margin:0 0 14px 5px;" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
  
</h1>

![](https://img.shields.io/greasyfork/dt/462440?label=Installs&logo=docusign&logoColor=white&labelColor=464646&color=2bbbd8&style=for-the-badge)
[![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](../LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/bravegpt?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/bravegpt/commits/main)
[![](https://img.shields.io/codefactor/grade/github/kudoai/bravegpt?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/bravegpt)
[![](https://img.shields.io/badge/Powered_by-chatgpt.js-black?logo=gamejolt&logoColor=white&labelColor=464646&style=for-the-badge)](https://chatgpt.js.org)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/awesome-scripts/awesome-userscripts#chatgpt)

<h3><b>BraveGPT</b> brings the magic of ChatGPT to search results (powered by GPT-4!)</h3>

<a href="https://greasyfork.org/en/scripts/462440-bravegpt"><img height=42 src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#installation"><img height=42 title="How to install" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[Discuss](https://github.bravegpt.com/discussions) / 
[Review](https://greasyfork.org/en/scripts/462440-bravegpt/feedback#post-discussion) / 
[Contact author](https://github.com/adamlui)

#

<img src="https://raw.githubusercontent.com/kudoai/bravegpt/master/media/images/screenshots/brave-ai.png">

## Installation

1. Install Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd), [Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)) or Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao))

2. Install [BraveGPT](https://greasyfork.org/en/scripts/462440-bravegpt) (will load in userscript manager installed above)

3. Visit [search.brave.com](https://search.brave.com), type your search, engage bot!

<div align="center">

![](https://user-images.githubusercontent.com/10906554/227480635-2ab5270e-d3f1-4857-8d6c-c4abd5eb6956.gif)

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

BraveGPT relies on code from the powerful [chatgpt.js](https://github.com/kudoai/chatgpt.js) library (c) 2023 KudoAI & contributors under the MIT license
<br>...and the [KaTeX](https://github.com/KaTeX/KaTeX) library (c) 2013–2020 Khan Academy & contributors under the MIT license.

</div>
</h6>

## Compatibility

**BraveGPT** is compatible w/ the following browsers using [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/):

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Opera
- Brave
- Vivaldi
- LibreWolf
- Ghost
- QQ

If you've tested it to work in a browser not listed, create a [pull request](https://github.bravegpt.com/pulls) to become a contributor!

## Proxy Mode

Proxy API Mode (disabled by default) returns text responses using GPT-4, without the need for a chat.openai.com account.

When disabled, a ChatGPT account is required to fetch responses, but they are faster stream-type ones (like in demo).

If OpenAI API is acting unreliable, enable Proxy Mode like this:

<div align='center'>

![](https://user-images.githubusercontent.com/10906554/229068389-795e517f-a95c-4c2f-829c-3fa83a6dbf73.png)
![](https://user-images.githubusercontent.com/10906554/229728672-3fec6a2d-c4fe-4738-871d-56c1d97cb2c5.png)

</div>

<br>

<a href="https://greasyfork.org/en/scripts/462440-bravegpt"><img src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/install-button.svg"></a><a href="#installation"><img title="How to install" src="https://github.com/adamlui/userscripts/raw/master/media/images/buttons/help-button.svg"></a>
<br>
[Discuss](https://github.bravegpt.com/discussions) /
[Leave a review](https://greasyfork.org/en/scripts/462440-bravegpt/feedback#post-discussion) /
[More ChatGPT userscripts](https://github.com/adamlui/userscripts/tree/master/chatgpt)

## Social links

<a href="https://technodon.org/@bravegpt" target="_blank"><img src="https://img.shields.io/mastodon/follow/110077227154250890?domain=https%3A%2F%2Ftechnodon.org&style=social" title="Follow @bravegpt on Mastodon">
[![](https://img.shields.io/github/followers/kudoai?label=Follow%20%40kudoai&style=social "Follow @kudoai on GitHub")](https://github.com/kudoai)
[![](https://img.shields.io/youtube/channel/subscribers/UCdwQlbPJW3RbkLcHh_DGb0g?label=Follow%20%40kudoailabs&style=social "Follow @kudoailabs on YouTube")](https://www.youtube.com/@kudoailabs?sub_confirmation=1)
<br><a href="https://elonsucks.org/@adam" target="_blank"><img align="bottom" src="https://img.shields.io/mastodon/follow/109387703022229926?domain=https%3A%2F%2Felonsucks.org&style=social" title="Follow @adam on Mastodon"></a>
[![](https://img.shields.io/badge/Follow%20@adamllui-2.1k-blue?logo=x&style=social "Follow @adamllui on X")](https://x.com/adamllui)
[![](https://img.shields.io/youtube/channel/subscribers/UCgBMqK7SRL5R__3qM-YAcSg?label=Follow%20%40adamluitube&style=social "Follow @adamluitube on YouTube")](https://www.youtube.com/AdamLuiTube?sub_confirmation=1)
[![](https://img.shields.io/badge/Follow%20in%2fadamlui-441-blue?logo=linkedin&style=social "Follow in/adamlui on LinkedIn")](https://linkedin.com/in/adamlui)
[![](https://img.shields.io/github/followers/adamlui?label=Follow%20%40adamlui&style=social "Follow @adamlui on GitHub")](https://github.com/adamlui)

## Contributors

This app exists thanks to code, translations, issues & ideas from the following contributors:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.23&h=50&w=50&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/68170410?first-contrib=2023.02.19-unproxied-buggy-report-lead-to-proxied-mode&h=50&w=50&mask=circle&maxage=7d "@Delamcode")](https://github.com/Delamcode)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/7660254?first-contrib=2023.03.01-stick-w-gm-api-recommendation&h=50&w=50&mask=circle&maxage=7d "@Quoid")](https://github.com/Quoid)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/47604048?first-contrib=2023.04.01-proxy-ip-bug-report&h=50&w=50&mask=circle&maxage=7d "@Nord1cWarr1or")](https://github.com/Nord1cWarr1or)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/69060894?first-contrib=2023.05.16-katex-idea&h=50&w=50&mask=circle&maxage=7d "@afkvido")](https://github.com/afkvido)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.23-css-readability&h=50&w=50&mask=circle&maxage=7d "@AliAlSarre")](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/95589456?first-contrib=2023.09.05-brave-ui-update&h=50&w=50&mask=circle&maxage=7d "@Cozy888")](https://github.com/Cozy888)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=50&w=50&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=50&w=50&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d "ChatGPT")](https://chat.openai.com)

## More ChatGPT apps

For even more epic ChatGPT apps, go here: https://github.com/adamlui/chatgpt-apps
<br><br>

## Related scripts

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto Refresh ↻](https://github.com/adamlui/chatgpt-auto-refresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Keeps ChatGPT sessions fresh to eliminate network errors + Cloudflare checks.
<br>
[Install](https://github.com/adamlui/chatgpt-auto-refresh#-installation) /
[Readme](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[Discuss](https://chatgptautorefresh.com/discuss)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Display ChatGPT answers in DuckDuckGo sidebar.
<br>
[Install](https://github.ddgpt.com/#installation) /
[Readme](https://github.ddgpt.com/#readme) /
[Discuss](https://github.ddgpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png"></picture> [ChatGPT Widescreen Mode 🖥️](https://chatgptwidescreen.com) <img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" style="width: auto; height: 24px; margin:0 0 -4px 3px;" width="auto" height="24" />

Adds Widescren + Fullscreen modes to ChatGPT for reduced scrolling.
<br>
[Install](https://github.com/adamlui/chatgpt-widescreen#installation) /
[Readme](https://github.com/adamlui/chatgpt-widescreen#readme) /
[Discuss](https://chatgptwidescreen.com/discuss)

<img height=6px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png">

<a href="https://github.com/adamlui/userscripts">**More userscripts**</a> /
<a href="#----------------">Back to top ↑</a>
