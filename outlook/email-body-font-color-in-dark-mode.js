// ==UserScript==
// @name       [Outlook] email body font color in dark mode
// @include    https://outlook.live.com/mail/*
// @version    1.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

window.addEventListener("load", event => {
  const emailPreviewContainerSelector = '[role="listbox"] .customScrollBar';
  const emailPreviewsSelector = '.customScrollBar > div div[role="option"]';
  const emailContentSelector = ".x_content table td:first-of-type";
  const waitTime = 250;
  const idName = "content-in-dark-mode";
  let functions = {
    /**
     * @param {string} selector - DOM element which will be the target
     * @return {boolean} value - true/false
     */
    nodeExists: function(selector) {
      if (document.querySelector(selector)) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * @param {string} selector - DOM element which will be the target
     */
    setColorAndID: function(selector) {
      let content = document.querySelector(selector);
      content.style.setProperty("color", "gainsboro", "important");
      content.setAttribute("id", idName);
    },
    initialize: function() {
      let interval = setInterval(function() {
        if (functions.nodeExists(emailPreviewsSelector)) {
          clearInterval(interval);
          document
            .querySelectorAll(emailPreviewsSelector)
            .forEach(function(value, index) {
              value.addEventListener("click", event => {
                let interval = setInterval(function() {
                  if (functions.nodeExists(emailContentSelector)) {
                    clearInterval(interval);
                    functions.setColorAndID(emailContentSelector);
                  }
                }, 100);
              });
            });
        }
      }, 100);
    }
  };
  functions.initialize();
  let interval = setInterval(function() {
    if (functions.nodeExists(emailPreviewContainerSelector)) {
      document
        .querySelector(emailPreviewContainerSelector)
        .addEventListener("scroll", event => {
          clearInterval(interval);
          functions.initialize();
        });
    }
  }, 1000);
});
