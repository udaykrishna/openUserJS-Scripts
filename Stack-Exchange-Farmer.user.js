// ==UserScript==
// @name         Stack-Exchange-Farmer
// @namespace    https://udaykrishna.com/
// @version      0.1
// @description  Farm with ease
// @author       You
// @match        https://stackoverflow.com/
// @match        https://*.stackexchange.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackexchange.com
// @grant        none
// @license      MIT
// ==/UserScript==
function getPosts(){
    return Array.from(document.getElementsByClassName("s-post-summary"));
}

function addSirenStyle(){
    let sirenAnimationstyle=document.createElement("style");
    sirenAnimationstyle.innerHTML=`
  .red-shade-1 {
      fill:#F25B22;
      animation: revolve-shade-1 1.5s ease-in infinite;
  }
  .red-shade-2 {
      fill:#D55120;
      animation: revolve-shade-2 1.5s ease-in infinite;
  }
  @keyframes revolve-shade-1{
      0% {fill: #F25B22;}
      50% {fill: #1158dd;}
      100% {fill: #F25B22;}
  }
  @keyframes revolve-shade-2{
      0% {fill: #D55120;}
      50% {fill: #1c57e1;}
      100% {fill: #D55120;}
  }`;
    sirenAnimationstyle.type="text/css";
    document.head.appendChild(sirenAnimationstyle);
}

function getSiren(){
    let siren = document.createElement("div");
    let sirenSVG = document.createElement("svg");
    siren.innerHTML=`<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path class="red-shade-1" style="fill:#F25B22;" d="M256,308.784c14.568,0,26.392,11.824,26.392,26.392S270.568,361.567,256,361.567
	s-26.392-11.824-26.392-26.392S241.432,308.784,256,308.784z"/>
<polygon style="fill:#7E8488;" points="435.464,108.206 435.464,182.103 398.515,182.103 113.485,182.103 76.536,182.103
	76.536,108.206 "/>
<polygon style="fill:#AFB6BB;" points="504.082,55.423 504.082,108.206 435.464,108.206 76.536,108.206 7.918,108.206 7.918,55.423
	"/>
<path class="red-shade-1" style="fill:#F25B22;" d="M113.485,182.103h285.031v232.247c0,23.33-18.896,42.227-42.227,42.227H155.711
	c-23.33,0-42.227-18.896-42.227-42.227V182.103z M256,308.784c-14.568,0-26.392,11.824-26.392,26.392s11.824,26.392,26.392,26.392
	s26.392-11.824,26.392-26.392S270.568,308.784,256,308.784z"/>
<path class="red-shade-2" style="fill:#D55120;" d="M269.797,357.578c-4.024,2.486-8.722,3.989-13.797,3.989c-14.568,0-26.392-11.824-26.392-26.392
	c0-5.58,1.757-10.738,4.716-15.002c-31.008-39.094-52.167-86.34-59.691-138.07h-61.149v232.247c0,23.33,18.896,42.227,42.227,42.227
	h200.577c20.37,0,37.35-14.411,41.333-33.596C349.328,412.089,305.628,389.207,269.797,357.578z"/>
<polygon style="fill:#686E71;" points="76.536,108.206 76.536,182.103 113.485,182.103 256,182.103 256,108.206 "/>
<polygon style="fill:#9DA4A9;" points="256,55.423 7.918,55.423 7.918,108.206 76.536,108.206 256,108.206 "/>
<path d="M512,47.505H0v68.619h68.619v73.897h36.948v224.33c0,27.649,22.495,50.144,50.144,50.144h200.577
	c27.649,0,50.144-22.495,50.144-50.144v-224.33h36.948v-73.897H512V47.505z M390.598,414.351c0,18.919-15.392,34.309-34.309,34.309
	H155.711c-18.918,0-34.309-15.391-34.309-34.309v-224.33h269.196V414.351z M427.546,174.186H84.454v-58.062h343.093V174.186z
	 M496.165,100.289H15.835V63.34h480.33V100.289z"/>
<g>
	<rect x="139.876" y="137.237" style="fill:#FFFFFF;" width="232.247" height="15.835"/>
	<rect x="387.959" y="137.237" style="fill:#FFFFFF;" width="21.113" height="15.835"/>
	<rect x="102.928" y="137.237" style="fill:#FFFFFF;" width="21.113" height="15.835"/>
	<path style="fill:#FFFFFF;" d="M263.918,301.798V190.03l-15.835-0.027v111.795c-15.112,3.585-26.392,17.184-26.392,33.377
		c0,18.919,15.392,34.309,34.309,34.309s34.309-15.391,34.309-34.309C290.309,318.982,279.029,305.383,263.918,301.798z M256,353.65
		c-10.186,0-18.474-8.288-18.474-18.474c0-10.186,8.288-18.474,18.474-18.474c10.186,0,18.474,8.288,18.474,18.474
		C274.474,345.361,266.186,353.65,256,353.65z"/>
	<rect x="142.515" y="219.052" style="fill:#FFFFFF;" width="15.835" height="137.237"/>
	<rect x="142.515" y="372.124" style="fill:#FFFFFF;" width="15.835" height="26.392"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
    siren.appendChild(sirenSVG);
    siren.style = `width:20px; float:right`;
    return siren;
}

function markAsFarmable(node){
    let stats = node.getElementsByClassName("s-post-summary--stats");
    if (stats.length==0) return;
    stats[0].prepend(getSiren());
    let qLinkList = node.getElementsByClassName("s-link");
    if(qLinkList.length==0) return;
    let link = qLinkList[0];
    if(document.URL.match(/\w+\.stackexchange\.com/gm)!=null) link.style="background: #FFCC00; color:#515151; padding: 0 5px 0 5px";
    else link.style.color="#ffcb00";
    //stats[0].style.border="0.5px dashed red";
}

function isFarmable(node){
    let stats = node.getElementsByClassName("s-post-summary--stats-item");
    if(stats.length<3) return false;

    let ansCount = stats[1].getElementsByClassName("s-post-summary--stats-item-number");
    if(ansCount.length==0||Number(ansCount[0].innerText)>0) return false;

    let repList = node.getElementsByClassName("s-user-card--rep");
    if(repList.length==0) return false;
    let repScoreStr = repList[0].innerText;
    let repScore=0;
    if(repScoreStr.charAt(repScoreStr.length-1).toLowerCase()=='k'){
        repScore = Number(repScoreStr.substr(0, repScoreStr.length-1))*1000;
    } else if (repScoreStr.charAt(repScoreStr.length-1).toLowerCase()=='m'){
        repScore = Number(repScoreStr.substr(0, repScoreStr.length-1))*1000000;
    } else {
        repScore = Number(repScoreStr.substr(0, repScoreStr.length));
    }
    return repScore>=15;
}

function setup(){
    addSirenStyle();
    let posts = getPosts();
    posts.forEach(post=>{
        if(isFarmable(post)) markAsFarmable(post);
    });
}

(function() {
    'use strict';
    setup();
})();
