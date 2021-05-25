// ==UserScript==
// @name         Geeks-For-Geeks IDE Fix Split Screen
// @namespace    http://udaykrishna.com
// @version      0.1
// @description  Fix Split Screen on GFG IDE
// @author       uday krishna
// @match        https://ide.geeksforgeeks.org/*
// @icon         https://www.google.com/s2/favicons?domain=geeksforgeeks.org
// @grant        none
// @copyright 2021, uday krishna (https://openuserjs.org/users/nickfever)
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName("fullScreen")[0].style.marginTop="80px";
})();
