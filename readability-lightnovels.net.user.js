// ==UserScript==
// @name         readability-lightnovels.net
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  center lightnovels.net text!
// @author       uday krishna
// @include      /^https:\/\/readlightnovels\.net\/[\w-_%]+\/.*/
// @icon         https://readlightnovels.net/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let content_blocks = Array.from(document.querySelectorAll(".chapter-content *:not(li):not(ul):not(img)"));
    content_blocks.forEach((block)=>{
        block.style.width="40%";
        block.style.marginLeft="auto"
        block.style.marginRight="auto"
    });
})();
