// ==UserScript==
// @name       [Jazz] button: create bitbucket branch
// @include    https://jazz.avm.de/ccm/web/projects/AVM-Entwicklung*
// @version    1.0.3
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
  )}&repo=html" class="tab js-bitbucket-branch-create-button" target="_blank">create bitbucket branch</a>
<fieldset>
<input type="radio" id="checkbox-html" class="js-checkbox-html" name="repo" value="html" checked>
<label for="checkbox-html">HTML</label>
<br>
<input type="radio" id="checkbox-node-modules" class="js-checkbox-node-modules" name="repo" value="node_modules">
<label for="checkbox-node-modules">node_modules</label>
</fieldset>`;

  document.querySelector(".TabArea").insertAdjacentHTML("beforeend", html);

  document
    .querySelector(".js-bitbucket-branch-create-button")
    .addEventListener("click", function(event) {
      event.preventDefault();
      let repoValue = "";
      switch (true) {
        case document.querySelector(".js-checkbox-html").checked:
          repoValue = "html";
          break;
        case document.querySelector(".js-checkbox-node-modules").checked:
          repoValue = "node_modules";
          break;
      }

      this.href = this.href.replace(/repo=(\w+)/gm, `repo=${repoValue}`);
    });
}, 2000);
