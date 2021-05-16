// ==UserScript==
// @name         Netflix Local Time shower
// @namespace    http://udaykrishna.com/
// @version      0.1
// @description  NetFlix Show Access Time in Local Time
// @author       You
// @match        https://www.netflix.com/AccountAccess
// @icon         https://www.google.com/s2/favicons?domain=netflix.com
// @grant        none
// @require      https://momentjs.com/downloads/moment.min.js
// @license MIT
// ==/UserScript==
/* jshint esversion: 6 */
/* globals moment */
(function () {
  'use strict';
  Array.from(document.getElementsByClassName("activityDate")).forEach(
    (date) => {
      date.innerHTML = date.innerHTML.substring(0,
          19) + moment(date.innerHTML.substring(19).replace('GMT',
            '+00:00'),
          'DD/MM/YY, h:mm:ss a Z')
        .format('DD/MM/YY, h:mm:ss A (Z)').toLocaleString();
    }
  )
})();
