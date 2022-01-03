// ==UserScript==
// @name         readability-lightnovels.net
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /^https:\/\/readlightnovels\.net\/[\w-_%]+\/.*/
// @icon         https://www.google.com/s2/favicons?domain=readlightnovels.net
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
