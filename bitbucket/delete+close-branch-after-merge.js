// ==UserScript==
// @name       [Bitbucket] delete/close branch after merge
// @include    https://bitbucket.avm.de*
// @version    1.1
// @author     patrice.matzke
// ==/UserScript==

// delete branch when merge
document.querySelector(".confirm-button").onclick = function() {
  document.querySelector("#pull-request-cleanup-checkbox").checked = true;
};
