// ==UserScript==
// @name         [Personio] convert overtime to time format
// @version      1.0
// @description  transform decimal values to real times (60 based)
// @author       patrice.matzke
// @include      https://entity.personio.de*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  function convertStringToFloat(string) {
    return parseFloat(string.replace(",", "."));
  }

  function transformNumberToTime(value) {
    var sign = value < 0 ? "-" : "+";
    var min = Math.floor(Math.abs(value));
    var sec = Math.floor((Math.abs(value) * 60) % 60);
    return (
      sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec
    );
  }

  var employeeOvertimeBalance = ".employee-overtime-balance";
  var overtime = convertStringToFloat(
    document.querySelector(employeeOvertimeBalance).textContent
  );

  document.querySelector(employeeOvertimeBalance).innerHTML +=
    ' <span class="' +
    employeeOvertimeBalance.replace(".", "") +
    '--realtime">(' +
    transformNumberToTime(overtime) +
    "h)</span>";
})();
