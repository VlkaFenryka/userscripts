// ==UserScript==
// @name       [Jazz] button: create bitbucket branch
// @include    https://jazz.avm.de/ccm/web/projects/AVM-Entwicklung*
// @version    1.0.2
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

setTimeout(function() {
  let title = document
    .querySelector(".SummaryFieldInner")
    .textContent.trim()
    .replace(/\W+/g, "-");
  let issueID = document.querySelector("title").textContent.match(/\d+/g)[0];
  let html = `<a href="https://bitbucket.avm.de/plugins/servlet/create-branch?issueid=${issueID}&title=-${encodeURI(
    title
  )}&html=true&node_modules=false" class="tab js-bitbucket-branch-create-button" target="_blank">create bitbucket branch</a>
<input type="checkbox" id="checkbox-html" class="js-checkbox-html" checked>
<label for="checkbox-html">HTML</label>
<br>
<input type="checkbox" id="checkbox-node-modules" class="js-checkbox-node-modules">
<label for="checkbox-node-modules">node_modules</label></div>`;

  document.querySelector(".TabArea").insertAdjacentHTML("beforeend", html);

  document
    .querySelector(".js-bitbucket-branch-create-button")
    .addEventListener("click", function(event) {
      event.preventDefault();
      this.href = this.href.replace(
        /html=(\w+)/gm,
        `html=${document.querySelector(".js-checkbox-html").checked}`
      );
      this.href = this.href.replace(
        /node_modules=(\w+)/gm,
        `node_modules=${
          document.querySelector(".js-checkbox-node-modules").checked
        }`
      );
    });
}, 2000);
