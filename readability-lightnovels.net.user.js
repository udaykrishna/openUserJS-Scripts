// ==UserScript==
// @name         readability-lightnovels.net
// @namespace    http://udaykrishna.com
// @version      0.3
// @description  center lightnovels.net text, mark last reading position and get into view when refreshed.
// @author       uday krishna
// @include      /^https:\/\/readlightnovels\.net\/[\w-_%]+\/.*/
// @icon         https://readlightnovels.net/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let content_blocks = Array.from(document.querySelectorAll(".chapter-content *:not(li):not(ul):not(img)"));

    for(let i=1;i<=content_blocks.length;i++){
      let block = content_blocks[i-1];
      block.style.width="40%";
      block.style.marginLeft="auto";
      block.style.marginRight="auto";
      let to_add = `<span id="#${i}" style="position: absolute;left:20%" aria-hidden="true"><a href="#${i}"># ${i}</a></span>\n`;
        block.innerHTML = to_add+block.innerHTML;
    };

    if (window.location.hash.length > 0){
      document.getElementById(window.location.hash).scrollIntoView()
    };
})();
