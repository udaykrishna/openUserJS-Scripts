// ==UserScript==
// @name         Martin Fowler site readability
// @namespace    http://udaykrishna.com/
// @version      0.1
// @description  make martinfowler look cleaner!
// @author       nickfever
// @match        https://martinfowler.com/*
// @icon         https://www.google.com/s2/favicons?domain=martinfowler.com
// @grant        none
// @copyright 2021, nickfever (https://openuserjs.org/users/nickfever)
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

     // Fix Headers and footers
    const FULL_WIDTH = "100%";
    const MARGIN_AUTO = "auto";
    var header = document.getElementById("banner")
    var footer = document.getElementById("page-footer");
    [header, footer].forEach(elem=>{
        elem.style.margin=MARGIN_AUTO;
        elem.style.maxWidth=FULL_WIDTH;
    });

    // Fix Content
    const BODY_WIDTH = "75%";
    const BODY_MARGIN = "0px auto 0px auto";

    var body = document.getElementsByTagName("body")[0];
    var main = document.getElementsByTagName("main")[0];
    [body, main].forEach(elem=>{
        elem.style.margin = BODY_MARGIN;
        elem.style.maxWidth = BODY_WIDTH;
    });


})();
