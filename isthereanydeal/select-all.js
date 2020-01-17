// ==UserScript==
// @name       [ITAD] select all functionality
// @include    https://isthereanydeal.com/waitlist/*
// @version    1.0.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

let newNode = document.createElement("a");
newNode.classList.add("js-select-all");
newNode.textContent = "select all";
newNode.style.margin = "0 20px 0 0";
document
  .querySelector("#contentFilters + div")
  .insertBefore(
    newNode,
    document.querySelector("#contentFilters + div").firstElementChild
  );
document.querySelector(".js-select-all").addEventListener("click", function() {
  document.querySelectorAll(".chbox").forEach(function(value, index) {
    value.click();
  });
});
