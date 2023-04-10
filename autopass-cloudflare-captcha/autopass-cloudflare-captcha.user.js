// ==UserScript==
// @name         Autopass Cloudflare CAPTCHA
// @namespace    Violentmonkey Scripts
// @match        https://challenges.cloudflare.com/*
// @match        https://chat.openai.com/*
// @match        https://freegpt.one/*
// @version      2023.3.24 10:47:30
// @grant        none
// @run-at       document-start
// @author       github.com @XiaoYingYo
// @require      https://raw.githubusercontent.com/XiaoYingYo/ScriptModule/main/module_jquery.js
// @require      https://raw.githubusercontent.com/XiaoYingYo/ScriptModule/main/module.js
// @icon         https://www.google.com/s2/favicons?sz=48&domain=cloudflare.com
// @icon64       https://www.google.com/s2/favicons?sz=64&domain=cloudflare.com
// @description  2023-3-6 13:25:06
// @downloadURL  https://github.com/adamlui/userscripts/raw/master/autopass-cloudflare-captcha/autopass-cloudflare-captcha.user.js
// ==/UserScript==

global_module = window["global_module"];
var $ = window["$$$"];

async function VerifyYouAreHuman_01() {
    let dom = await global_module.waitForElement("input[value='Verify you are human'][type='button']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function VerifyYouAreHuman_02() {
    let dom = await global_module.waitForElement("input[type='checkbox']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
    dom = await global_module.waitForElement("span[class='mark']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function VerifyYouAreHuman_03() {
    let dom = await global_module.waitForElement("input[value='Verify you are human'][type='button']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function main() {
    let ray_id = $("div[class='ray-id']");
    let hrefdom = $("a[href*='cloudflare.com'][target='_blank']");
    if (ray_id.length > 0 && hrefdom.length > 0) {
        VerifyYouAreHuman_01();
        return;
    }
    if (window.location.host == "challenges.cloudflare.com" && $("div[id='success']").length > 0 && $("div[id='fail']").length > 0 && $("div[id='expired']").length > 0) {
        VerifyYouAreHuman_02();
        return;
    }
    if ($('div[class="logo"]').length > 0) {
        VerifyYouAreHuman_03();
        return;
    }
}

$(document).ready(() => main())
