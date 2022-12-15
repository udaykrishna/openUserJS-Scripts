// ==UserScript==
// @name         SEBI downloader
// @namespace    http://udaykrishna.com/
// @version      0.5
// @description  easy interface to download stuff from sebi
// @author       Nickfever
// @match        https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpiFilter=yes
// @match        https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gov.in
// @grant        none
// @license      MIT
// ==/UserScript==

function parseFieldsInPage(fields){
    let data = {};
    let keys = new Set()
    for(let i=0;i<fields.length;++i){
        let key = fields[i].getElementsByClassName("title")[0].textContent;
        let value = fields[i].getElementsByClassName("value")[0].textContent;
        data[key]=value;
        keys.add(key);
    }
    return {keys:keys, data:data};
}

function union(seta, setb){
    for(let e of setb) seta.add(e);
    return seta;
}

function getList(nodes){
    let list = []
    let keys = new Set();
    for(let i=0;i<nodes.length;++i){
        let res = parseFieldsInPage(nodes[i].childNodes);
        keys = union(keys, res.keys);
        list.push(res.data)
    }
    return {keys:keys, list:list};
}

function sleep(ms){
    return new Promise(r=>setTimeout(r, ms));
}

async function waitForLoading(ms, maxintervals, decrement){
    while(maxintervals>0 && document.getElementById("ajax_cat").innerText=="Please wait. Loading..."){
        await sleep(ms);
        maxintervals -= decrement;
    }
}

async function getAllData(){
    //searchAllIntm();
    searchFormFpiAlp('A1')
    await waitForLoading(500, 1, 0);
    let allDocs = [];
    let keys = new Set();
    while(true){
        let elements = document.getElementsByClassName("card-table-left");
        if(elements.length==0) break;
        let res = getList(elements);
        searchFormFpi('n','-1');
        allDocs.push(...res.list);
        keys = union(keys, res.keys);
        await waitForLoading(500, 1, 0);
    }
    return {keys:keys, data:allDocs};
}


function quote(text, padChar){
    return padChar+text+padChar;
}


function getCSVLine(data, refArr){
    let line=[];
    for(let col of refArr){
        let val = data[col];
        val=val===undefined?"":val;
        line.push(quote(val, "\""));
    }
    return line.join(",")+"\n";
}

async function extractCSV(){
    let res = await getAllData();
    //console.log(res)
    let refArr = Array.from(res.keys);
    let csvFmt=refArr.map((x)=>quote(x,"\"")).join(",")+"\n";
    for(let entry of res.data){
        csvFmt += getCSVLine(entry, refArr);
    }
    return csvFmt.substring(0,csvFmt.length-1);
}

function pushAsDownload(filename, csvFmt){
    let dummy = document.createElement("a");
    dummy.href = URL.createObjectURL(new Blob([csvFmt], {type:"text/csv"}));
    dummy.download=filename;
    document.body.appendChild(dummy);
    dummy.click();
    document.body.removeChild(dummy);
}


async function downloadCSV(){
    document.getElementById("downloader_widget_loading_nf").style.display="block";
    let filename=document.getElementById("downloader_widget_filename_input_nf").value;
    filename = filename.endsWith(".csv")?filename:filename+".csv";
    let csvFmt = await extractCSV();
    pushAsDownload(filename, csvFmt);
    document.getElementById("downloader_widget_loading_nf").style.display="None";
}

function attachDownloader(){
    let section = document.getElementsByClassName("main_section mirsd-section")[0];
    let downloader = document.createElement("div");
    downloader.style="padding:50px;"
    downloader.innerHTML = `
  <div style="margin:15px;color:#f5f3f3">  .  </div>
  <div style="margin:15px;color:#f5f3f3">  .  </div>
  <div style="background-color:#f5f3f3; width:100%;" class="two-column two-column-intermediaries sm-two-column bottom_space2 search-inter small-two-column">
  <span class="lable_text"><input class="form_control" type="text" value="" id="downloader_widget_filename_input_nf" placeholder="filename for download eg: investment_adviser.csv"></span>
  <div class="go_area go-area" style="text-align:center;" id="downloader_widget_button_nf"><a class="go-search go_search" href="#">Download All Records</a></div>
  </div>
  `;
    section.appendChild(downloader);
    document.getElementById("downloader_widget_button_nf").addEventListener("click", downloadCSV, false);
    let loading = document.createElement("div");
    loading.id="downloader_widget_loading_nf";
    loading.innerHTML=`<div><img src="https://www.sebi.gov.in/images/slider/loading.gif" align="absmiddle"><span style="padding: 0 0 0 15px;">Please wait. downloading...</span></div>`;
    loading.style = "border-style:outset;border-color:black;background:#f5f3f3;z-index:3;display:None;top:50%;width:50%;margin:auto;position:fixed;paddingRight:15px;border-width:5px"
    section.appendChild(loading);
}



(function() {
    'use strict';
    attachDownloader();
})();
