// ==UserScript==
// @name       [STASH] delete branch after merge
// @include    https://svn.thesisdigital.de/stash*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @version    1.0.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

document.querySelector(".merge-pull-request").onclick = function() {
  document.querySelector("#delete-branch-checkbox").checked = true;
};
