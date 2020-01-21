// ==UserScript==
// @name       [Bitbucket] create branch name from GET
// @include    https://bitbucket.avm.de/plugins/servlet/create-branch*
// @version    1.0.1
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

let selectors = {
  buttonBranchFrom: "#branch-from-selector",
  buttonRepository: "#repository-selector",
  createBranch: "#create-branch-submit",
  inputBranchName: "#branch-name",
  optionRespository:
    "#inline-dialog-repository-selector-dialog [title='FRITZ!OS / appls.html']",
  optionBranch:
    "#branch-from-selector-dialog [data-id='refs/heads/shared/HtmlDev/avm5next']"
};
const refLength = 80

document.querySelector(selectors.buttonRepository).click();
document.querySelector(selectors.optionRespository).click();
document.querySelector(selectors.buttonBranchFrom).click();
setTimeout(() => {
  document.querySelector(selectors.optionBranch).click();
}, 100);

if (window.location.search.length > 0) {
  const url = new URL(window.location.href);
  const issueID = url.searchParams.get("issueid");
  const title = url.searchParams.get("title");
  let branchName = `p/pmatzke/JZ-${issueID}-${title}`
  document.querySelector(
    selectors.inputBranchName
  ).value = branchName.substring(0, refLength);
  setTimeout(() => {
    document.querySelector(selectors.createBranch).click();
  }, 100);
  setTimeout(() => {
    close();
  }, 1000);
}
