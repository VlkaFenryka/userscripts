// ==UserScript==
// @name       [STASH] hide whitespace in diff
// @include    https://svn.thesisdigital.de/stash*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @version    1.0.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

console.log(document.querySelector('[data-key="ignoreWhitespace"]'));
$(function() {
  if (
    jQuery('[data-key="ignoreWhitespace"]')[0].attributes[3].value === "false"
  ) {
    jQuery('[data-key="ignoreWhitespace"]').click();
  }
});
