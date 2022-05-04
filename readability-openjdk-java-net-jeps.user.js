// ==UserScript==
// @name         fix jeps styling
// @namespace    https://udaykrishna.com/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://openjdk.java.net/jeps/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=java.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var setFontSize = (elem, size)=>{elem.style.fontSize=size;}

    var body = document.getElementsByTagName("body")[0];
    body.style.width="100%";

    var mainId = document.getElementById("main");
    mainId.style.margin="0px 15% 0px 5%";
    mainId.style.textAlign="justify";
    //mainId.style.position="absolute";
    mainId.style.width="60%";
    mainId.style.fontSize="12pt";

    var sideBar = document.getElementById("sidebar");
    sideBar.style.width="15%";
    sideBar.style.fontSize="12pt";

    var footer = document.getElementById("footer");
    footer.style.width="100vw";

    Array.from(document.getElementsByTagName("h1")).forEach((elem)=>{setFontSize(elem,"14pt")})
    Array.from(document.getElementsByTagName("h2")).forEach((elem)=>{setFontSize(elem,"13pt")})
    Array.from(document.getElementsByTagName("h3")).forEach((elem)=>{setFontSize(elem,"12pt")})
    Array.from(document.getElementsByTagName("h4")).forEach((elem)=>{setFontSize(elem,"12pt")})
    Array.from(document.getElementsByTagName("h5")).forEach((elem)=>{setFontSize(elem,"12pt")})
    Array.from(document.getElementsByTagName("h6")).forEach((elem)=>{setFontSize(elem,"12pt")})

})();
