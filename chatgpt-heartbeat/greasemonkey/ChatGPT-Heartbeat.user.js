// ==UserScript==
// @name        ChatGPT Heartbeat
// @namespace   Violentmonkey Scripts
// @match       *://chat.openai.com/*
// @match       *://freegpt.one/*
// @version     2023.4.27
// @grant       none
// @run-at      document-body
// @author      github.com @XiaoYingYo
// @require     https://greasyfork.org/scripts/464779-module-jquery/code/module_jquery.js
// @require     https://greasyfork.org/scripts/464780-global-module/code/global_module.js
// @icon        https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64      https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @downloadURL  https://raw.githubusercontent.com/XiaoYingYo/MonkeyUserScripts/main/chatgpt/chatgpt-heartbeat/chatgpt-heartbeat.js
// @description 2023-3-6 13:25:06
// ==/UserScript==

var global_module = window["global_module"];
var $ = window["$$$"];

let GlobalVariable = {};
let cookiescache = {};

unsafeWindow.ResetIframeFun = null;

MaskLayer = {
    show: function (hide) {
        if (MaskLayerIsExist()) {
            if (!hide) {
                try {
                    let openIframe = GlobalVariable["openIframe"];
                    let MainElement = GlobalVariable["MainElement"];
                    $(openIframe).show();
                    $(MainElement).show();
                    $("div#_MaskLayer_").eq(0).show();
                } catch (e) { }
            }
            return;
        }
        let f = "";
        if (hide) {
            f = "display:none!important;";
        }
        let html = "<div id='_MaskLayer_' style='" + f + "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999999999;'><div style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 20px; font-weight: bold;'>ChatGPT Checking whether you are a man-machine, please wait a moment, we are providing you with a better user experience in automation<br>If you stay here for a long time, please refresh the page directly!<br><br>ChatGPT 正在检测您是不是人机,请稍等,我们正在自动化为您提供更好的用户体验<br>如果您久留,请直接刷新页面!" + getRefreshIcon() + "</div></div>";
        $("body").eq(0).append(html);
    },
    hide: function () {
        $("div#_MaskLayer_").eq(0).remove();
    },
}

function getRefreshIcon() {
    return `<button onclick="ResetIframeFun();" style="display: flex; justify-content: center; align-items: center; border: 1px solid black; padding: 5px; border-radius: 5px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 12a8 8 0 1 0 4.83 7.15" />
    <path d="M4 4v4h4" />
    <path d="M4 16v4h4" />
    <path d="M16 11.5a4.5 4.5 0 0 0 -4.5 4.5" />
    <path d="M16 4.5a7.5 7.5 0 0 0 -7.5 7.5" />
    <path d="M16 4.5h4v4" />
    <path d="M16 19.5h4v4" />
    </svg><span style="margin-left: 5px;">Retry</span></button>`;
}

GlobalVariable["NetworkErrorClass"] = "flex flex-col items-start gap-4 whitespace-pre-wrap flex flex-row gap-2 text-red-500";

unsafeWindow["ChatGPTHeartbeat.user.function"] = {};

unsafeWindow["ChatGPTHeartbeat.user.function"]["PostMessage"] = function (message) {
    let code = message.code;
    let data = message.data;
    if (code == 0001) {
        let primaryBtn = GlobalVariable["primaryBtn"];
        let openIframe = GlobalVariable["openIframe"];
        let MainElement = GlobalVariable["MainElement"];
        if (primaryBtn != null) {
            global_module.clickElement($(primaryBtn)[0]);
            primaryBtn = null;
        } else {
            (async function () {
                let NetworkErrorElement = await FindNetworkErrorElement(false);
                if (NetworkErrorElement == null) {
                    return;
                }
                let primaryBtn = await FindPrimaryBtn(NetworkErrorElement);
                if (primaryBtn == null) {
                    return;
                }
                global_module.clickElement($(primaryBtn)[0]);
            })();
        };
        if (openIframe != null) {
            let id = $(openIframe).attr("id");
            $("iframe#" + id).remove();
            openIframe = null;
        }
        if (MainElement != null) {
            $(MainElement).show();
            MainElement = null;
        }
        MaskLayer.hide();
    }
}

function errorToLog() {
    // This can force a large number of errors related to the oil monkey script on the page. In fact, these errors are basically caused by conflicts with ChatGPT's official JS files, and in fact they do not affect the normal use of the oil monkey script and ChatGPT.
    // 这样可以强制在页面上 存在大量与油猴脚本的错误,其实这些错误基本都是与ChatGPT官方的JS文件有所冲突导致的,实际上都不影响油猴脚本和ChatGPT的正常使用
    console.error = function () {
        console.log(arguments);
    };
}

function MaskLayerIsExist() {
    return $("div#_MaskLayer_").length > 0;
}

async function MaskLayerDisappear() {
    return await new Promise((resolve) => {
        let interval = setInterval(() => {
            if (!MaskLayerIsExist()) {
                clearInterval(interval);
                resolve();
            }
        }, 500);
    });
}

async function OpenNewChatGPTIniframe(force) {
    let that = this;
    GlobalVariable["MainElement"] = await global_module.waitForElement("main[class^='relative ']", null, null, 100, -1);
    if (!force) {
        await FindPrimaryBtn();
        $(GlobalVariable["MainElement"]).hide();
    }
    that.createiframe = function () {
        let that = this;
        let iframe = document.createElement("iframe");
        iframe.src = "/";
        iframe.id = "_ChatGPTIframe_";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.display = force ? "none" : "block";
        $(GlobalVariable["MainElement"]).after(iframe);
        that.reset = async function () {
            iframe.remove();
            await new Promise(async (resolve) => { setTimeout(resolve, 1000); });
            that.createiframe();
        }
        unsafeWindow.ResetIframeFun = that.reset;
        let interval = setInterval(() => {
            try {
                let href = $(iframe)[0].contentWindow.location.href;
                if (href == null) {
                    that.reset();
                }
            } catch (e) {
                let ee = e.toString();
                if (ee.indexOf("Blocked a frame with origin") != -1 && ee.indexOf("from accessing a cross-origin frame") != -1) {
                    clearInterval(interval);
                    that.reset();
                }
            }
        }, 5000);
        GlobalVariable["openIframe"] = iframe;
    };
    if (document.getElementById("_ChatGPTIframe_") == null) {
        that.createiframe();
    }
}

async function FindPrimaryBtn(NetworkErrorElement) {
    return new Promise(async (resolve) => {
        if (NetworkErrorElement == null) {
            NetworkErrorElement = GlobalVariable["NetworkErrorElement"];
        }
        if (NetworkErrorElement == null) {
            resolve(null);
            return null;
        }
        let dialogeleclasss = ["w-full", "group w-full"];
        let dialogeleclass = "";
        let LastMessageParent = null;
        let length = dialogeleclasss.length;
        for (let i = 0; i < length; i++) {
            LastMessageParent = $(NetworkErrorElement).parents("div[class^='" + dialogeleclasss[i] + "']").eq(0);
            if (LastMessageParent.length > 0) {
                dialogeleclass = dialogeleclasss[i];
                break;
            }
        }
        let w_full = "div[class^='" + dialogeleclass + "']";
        let LastMessageElement = $(LastMessageParent).prev(w_full).eq(0);
        let buttons = $(LastMessageElement).find("button");
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons.eq(i);
            let classStr = button.attr("class");
            let title = button.attr("title") || "";
            let svg = button.find("svg").eq(0);
            let svg_stroke = svg.attr("stroke-linejoin") || "";
            if (classStr.indexOf("rounded-md") != -1 && title == "" && svg_stroke == "round") {
                button.click();
                break;
            }
        }
        let primaryBtn = await global_module.waitForElement("button[class*='btn-primary']", null, null, 100, -1, LastMessageElement);
        primaryBtn = $(primaryBtn).eq(0);
        GlobalVariable["primaryBtn"] = primaryBtn;
        resolve(primaryBtn);
    });
}

async function FindAndDealWith() {
    return new Promise(async (resolve) => {
        // await MaskLayerDisappear();
        let NetworkErrorElement = await FindNetworkErrorElement(true);
        let Check = await PassTest();
        if (Check) {
            resolve();
            return;
        }
        // Explain that this NetworkErrorElement does not prompt a network error, but other related red warnings. In order to prevent repeated discovery of NetworkErrorElement, its `class` feature should be changed so that it does not meet the conditions.
        // 说明这个 NetworkErrorElement 并不是提示网络错误,而是其他相关的红色警告,为了防止重复找到 NetworkErrorElement,应该改变它的`类`特征,使它不符合条件成立
        if (NetworkErrorElement != null) {
            NetworkErrorElement.attr("class", NetworkErrorElement.attr("class").replace("-red-", "-"));
        }
        MaskLayer.show(false);
        OpenNewChatGPTIniframe(false);
        resolve();
    });
}

async function FindNetworkErrorElement(wait) {
    let timeOut = 1000;
    if (wait) {
        timeOut = -1;
    }
    let Element = await global_module.waitForElement("div[class*='" + GlobalVariable["NetworkErrorClass"] + "']", null, null, 500, timeOut);
    if (Element == null) {
        return null;
    }
    GlobalVariable["NetworkErrorElement"] = Element;
    return Element;
}

function isChatGPT() {
    let meta = $("meta[property='og:title']");
    if (meta.length == 0) {
        return false;
    }
    let content = meta.attr("content");
    if (content == "ChatGPT") {
        return true;
    }
    return false;
}

async function PassTest() {
    let CheckURLObj = {
        "freegpt.one": "/",
        "chat.openai.com": "/chat",
    }
    let CheckURL = CheckURLObj[location.host];
    return new Promise(async (resolve) => {
        let res = null;
        try {
            res = await Promise.race([
                fetch(CheckURL, {
                    method: 'GET',
                    cache: 'no-cache',
                }),
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(null);
                    }, 5000);
                })
            ]);
            if (res == null) {
                resolve(false);
                return false;
            }
            let status = res.status;
            if (status != 200) {
                resolve(false);
                return false;
            }
            let html = await res.text();
            if (html.indexOf(">Redirecting...</p>") != -1) {
                resolve(false);
                return false;
            }
            resolve(true);
            return true;
        } catch (e) {
            console.log(e);
            resolve(false);
            return false;
        }
    });
}

async function CheckInspection() {
    while (true) {
        let Check = await PassTest();
        if (!Check) {
            if (!MaskLayerIsExist()) {
                MaskLayer.show(true);
                OpenNewChatGPTIniframe(true);
            }
            await MaskLayerDisappear();
        }
        await new Promise((resolve) => setTimeout(resolve, 8888));
    }
}

async function Main() {
    if (!isChatGPT()) {
        return;
    }
    if (window != window.parent) {
        unsafeWindow.parent["ChatGPTHeartbeat.user.function"].PostMessage({ "code": 0001, "data": {} });
    }
    CheckInspection();
    $(document).ready(async function () {
        errorToLog();
    });
    while (true) {
        await FindAndDealWith();
        await new Promise((resolve) => setTimeout(resolve, 3000));
    }
}

Main();
