// ==UserScript==
// @name         Martin Fowler site readability
// @namespace    http://udaykrishna.com/
// @version      0.1
// @description  make martinfowler look cleaner!
// @author       You
// @match        https://martinfowler.com/*
// @icon         https://www.google.com/s2/favicons?domain=martinfowler.com
// @grant        none
// @copyright 2021, nickfever (https://openuserjs.org/users/nickfever)
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    const maxWidth = "75%";
    const margin = "0px auto 0px auto";
    var body = document.getElementsByTagName("body")[0];
    var main = document.getElementsByTagName("main")[0];
    main.style.margin = margin;
    body.style.margin = margin;
    body.style.maxWidth = maxWidth;
    main.style.maxWidth = maxWidth;

})();
