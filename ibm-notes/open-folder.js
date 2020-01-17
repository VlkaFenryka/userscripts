// ==UserScript==
// @name         [IBM notes] folder opened
// @version      1.0.0
// @author       https://github.com/VlkaFenryka
// @include      https://mail-notes.avm.de/mail/pmatzke.nsf
// ==/UserScript==

(function() {
  "use strict";

  window.addEventListener("load", event => {
    setTimeout(function() {
      // open main folder
      document
        .querySelector("#s_MainFrame")
        .contentWindow.document.querySelector(
          "#e-mailoutline-row-Ordner12-elem-OUTLINEELEM40"
        )
        .click();
      // open Ticket folder
      document
        .querySelector("#s_MainFrame")
        .contentWindow.document.querySelector(
          "[data-in-outlineelem-id='OUTLINEELEM71']"
        )
        .click();
      // open day at a glance panel
      document
        .querySelector("#s_MainFrame")
        .contentWindow.document.querySelector(
          "#e-actions-mailview-inbox-show-text"
        )
        .click();
    }, 1000);
  });
})();
