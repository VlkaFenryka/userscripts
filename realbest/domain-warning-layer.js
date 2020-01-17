// ==UserScript==
// @name       [RB] domain warning layer
// @include    *realbest.de*
// @include    *test-realbest.*
// @include    *localhost-realbest.de:8080*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @version    1.0.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

$(function() {
  $("<div class='domain-layer'></div>").insertAfter(document.body.lastChild);

  if (document.URL.indexOf("localhost") >= 0) {
    document.querySelector(".domain-layer").classList.add("local");
    document.querySelector(".domain-layer").textContent = "LOCAL";
  } else if (document.URL.indexOf("test") >= 0) {
    document.querySelector(".domain-layer").classList.add("test");
    document.querySelector(".domain-layer").textContent = "TEST";
  } else if (document.URL.indexOf("stage") >= 0) {
    document.querySelector(".domain-layer").classList.add("stage");
    document.querySelector(".domain-layer").textContent = "STAGE";

    if (document.URL.indexOf("/feature") >= 0) {
      document.querySelector(".domain-layer").classList.add("feature");
      document.querySelector(".domain-layer").textContent += "/feature";
    }
  } else {
    document.querySelector(".domain-layer").classList.add("live");
    document.querySelector(".domain-layer").textContent = "LIVE";
  }
});
