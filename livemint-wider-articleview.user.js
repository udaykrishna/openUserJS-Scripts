// ==UserScript==
// @name         Mint increase doc width
// @namespace    http://udaykrishna.com/
// @version      0.1
// @description  Mint increase article width!
// @author       uday krishna
// @match        https://www.livemint.com/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?domain=livemint.com
// @license MIT
// @copyright 2021, uday krishna (https://openuserjs.org/users/nickfever)
// ==/UserScript==

(function () {
  'use strict';

  var mainSec = document.getElementsByClassName("mainSec")[0]
  mainSec.style.width = "75%"
})();
