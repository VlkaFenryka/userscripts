// ==UserScript==
// @name       [JIRA] Transition translation to EN
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

  $("#opsbar-opsbar-transitions > li span").each(function() {
    console.log($(this).textContent);
    switch ($(this).textContent) {
      case "Bearbeiten":
        $(this).textContent = "in progress";
        break;
      case "Abstimmen":
        $(this).textContent = "in consultation";
        break;
      case "Abschließen":
        $(this).textContent = "close";
        break;
      case "Zurücklegen":
        $(this).textContent = "to backlog";
        break;
      case "Schätzen":
        $(this).textContent = "to estimate";
        break;
      case "Freigabe einholen":
        $(this).textContent = "get approval";
        break;
      case "Zur Review geben":
        $(this).textContent = "to code review";
        break;
      case "Zum Testing geben":
        $(this).textContent = "to QA test";
        break;
      case "Erneut freigeben":
        $(this).textContent = "to approved";
        break;
      case "Arbeit pausieren":
        $(this).textContent = "pause work - to approve";
        break;
    }
  });
});
