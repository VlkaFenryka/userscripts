// ==UserScript==
// @name       [Bitbucket] delete/close branch after merge
// @include    https://bitbucket.avm.de*
// @version    1.1.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

// delete branch when merge
document.querySelector(".confirm-button").onclick = function() {
  document.querySelector("#pull-request-cleanup-checkbox").checked = true;
};
