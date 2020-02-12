// ==UserScript==
// @name       [Jazz] button: create bitbucket branch
// @include    https://jazz.avm.de/ccm/web/projects/AVM-Entwicklung*
// @version    1.0.1
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

setTimeout(function() {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  let title = document
    .querySelector(".SummaryFieldInner")
    .textContent.trim()
    .replace(/\W+/g, "-");
  let issueID = document.querySelector("title").textContent.match(/\d+/g)[0];
  let el = document.createElement("a");
  let inputs = `<input type="checkbox" id="checkbox-html" value="html" checked>
                <label for="checkbox-html">HTML</label>
                <br>
                <input type="checkbox" id="checkbox-node-modules" value="node_modules">
                <label for="checkbox-node-modules">node_modules</label></div>`;

  el.href =
    "https://bitbucket.avm.de/plugins/servlet/create-branch?issueid=" +
    issueID +
    "&title=-" +
    encodeURI(title);
  el.classList.add("tab");
  el.target = "_blank";
  el.innerHTML = "create bitbucket branch";

  insertAfter(document.querySelector(".TabArea a:last-of-type"), el);
  document.querySelector(".TabArea").insertAdjacentHTML("beforeend", inputs);
}, 1000);
