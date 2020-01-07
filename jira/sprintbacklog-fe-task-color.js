// ==UserScript==
// @name       [JIRA] entity: sprintbacklog FE tasks colorized
// @include    https://thesisdigital.atlassian.net*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @version    1
// @grant      GM_addStyle
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(function() {
  if (window.jQuery) {
    console.log("jQuery is loaded (active)");
  } else {
    console.log("jQuery is NOT loaded (inactive)");
  }

  setInterval(function() {
    $(".js-issue").each(function() {
      if (
        $(this).find(".ghx-grabber")[0].style.backgroundColor ===
        "rgb(112, 143, 255)"
      ) {
        $(this).css("background-color", "#a4d1ff");
      }
    });
  }, 1000);
});
