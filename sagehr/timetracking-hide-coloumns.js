// ==UserScript==
// @name       [SageHR] TimeTracking hide columns
// @include    https://mp.avm.de/HRPortal/de-DE/Time/TimeTracking*
// @version    1.0
// @author     patrice.matzke
// ==/UserScript==

document.querySelector('[data-bind="value: columnOptions.DG"]').click();
document.querySelector('[data-bind="value: columnOptions.Additional"]').click();
document.querySelector('[data-bind="value: columnOptions.CostUnit"]').click();
document
  .querySelector('[data-bind="value: columnOptions.CostSponsor"]')
  .click();
document.querySelector('[data-bind="value: columnOptions.NewComment"]').click();
