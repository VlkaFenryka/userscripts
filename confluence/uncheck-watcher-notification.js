// ==UserScript==
// @name       [Confluence] uncheck watcher notification
// @include    https://wiki.avm.de/pages*
// @version    1.0.1
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

let selector = "#notifyWatchers"

setTimeout(() => {
    if (document.querySelector(selector).checked) {
        document.querySelector(selector).checked = false
    }
}, 1000);

