// ==UserScript==
// @name       [Bitbucket] create branch name from GET
// @include    https://bitbucket.avm.de/plugins/servlet/create-branch*
// @version    1.0.2
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

let selectors = {
    branchOverviewSearchInput: "#paged-table-input-for-branch-list",
    buttonBranchFrom: "#branch-from-selector",
    buttonBranchOverview: "#repository-nav-branches",
    buttonRepository: "#repository-selector",
    createBranch: "#create-branch-submit",
    inputBranchName: "#branch-name",
    optionBranch: "#branch-from-selector-dialog",
    optionBranchNodeHtml: "[data-id='refs/heads/shared/HtmlDev/avm5next']",
    optionBranchNodeModules: "[data-id='refs/heads/stable/master-2']",
    optionRespository: "#inline-dialog-repository-selector-dialog",
    optionRespositoryHtml: "[title='FRITZ!OS / appls.html']",
    optionRespositoryNodeModules: "[title='FRITZ!OS / appls.html.webpack']"
};
const refLength = 80;
const id = "pma";

if (window.location.search.length > 0) {
    const url = new URL(window.location.href);
    const issueID = url.searchParams.get("issueid");
    const title = url.searchParams.get("title");
    const repo = url.searchParams.get("repo");
    let branchName = `p/pmatzke/JZ-${issueID}-${title}`;
    document.querySelector(selectors.inputBranchName).value = branchName.substring(0, refLength);
    let repoSelector = "";
    let branchSelector = "";
    switch (repo) {
        case "html":
            repoSelector = selectors.optionRespositoryHtml;
            branchSelector = selectors.optionBranchNodeHtml;
            break;
        case "node_modules":
            repoSelector = selectors.optionRespositoryNodeModules;
            branchSelector = selectors.optionBranchNodeModules;
            break;
    }
    document.querySelector(selectors.buttonRepository).click();
    document.querySelector(`${selectors.optionRespository} ${repoSelector}`).click();
    setTimeout(() => {
        document.querySelector(selectors.buttonBranchFrom).click();
    }, 100);
    setTimeout(() => {
        document.querySelector(`${selectors.optionBranch} ${branchSelector}`).click();
    }, 200);
    setTimeout(() => {
        document.querySelector(selectors.createBranch).click();
    }, 300);
    setTimeout(() => {
        document.querySelector(selectors.buttonBranchOverview).click();
    }, 400);
}
