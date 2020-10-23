// ==UserScript==
// @name       [Feedbro] font-size for browser extension
// @include    moz-extension://b97c1fd5-1b6f-4558-93f2-969d3a9b0f7e/reader.html
// @version    1.0.0
// @author     https://github.com/VlkaFenryka
// ==/UserScript==

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

addStyle(`
  * {
    font-size: 1.1rem !important;
  }
`);
