// ==UserScript==
// @name       [Confluence] uncheck watcher notification
// @include    https://wiki.avm.de/pages*
// @version    1.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

let selector = "#notifyWatchers"

if (document.querySelector(selector).checked) {
    document.querySelector(selector).checked = false
}
