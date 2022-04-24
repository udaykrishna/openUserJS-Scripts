// ==UserScript==
// @name         Geeks-For-Geeks IDE Fix Split Screen
// @namespace    http://udaykrishna.com
// @version      0.2
// @description  Fix Split Screen on GFG IDE
// @author       uday krishna
// @match        https://ide.geeksforgeeks.org/*
// @icon         https://www.google.com/s2/favicons?domain=geeksforgeeks.org
// @grant        unsafeWindow
// @run-at       document-end
// @copyright 2021, uday krishna (https://openuserjs.org/users/nickfever)
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    var $ = unsafeWindow.$;
    $(document).off('keyup').on('keyup', function (event) {
        if (event.keyCode == 27 && $("#splitScreen span").hasClass('glyphicon-resize-small')) {
            $(".editorBlock")[0].style.height = "500px";
            $(".normalScreen").append($(".mainleftDiv"));
            $(".normalScreen").append($(".mainRightDiv"));
            $(".leftDiv").empty();
            $(".rightDiv").empty();
            $(".fullScreen").hide();
            $(".screen").show();
            $("#splitScreen span").removeClass('glyphicon-resize-small');
            $("#splitScreen span").addClass('glyphicon-resize-full');
            $(".inputDiv").css('margin-left', '');
            $(".editorBlock")[0].height = "500px";

        } else if (event.keyCode == 27 && $("body").hasClass("fullScreen")) {
            unsafeWindow.toggleFullScreen();
            event.preventDefault();
        }
        //event.stopPropagation();
    });
    $("#splitScreen").unbind('click');
    $("#splitScreen").click(function (event) {
        console.log("yooo");
        console.log($(window).width());
        if ($(window).width() > 768) {
            console.log("yooo1");
            if ($("#splitScreen span").hasClass('glyphicon-resize-full')) {
                console.log("yooo2, "+$("#splitScreen span").hasClass('glyphicon-resize-full'));
                $(".leftDiv").append($(".mainleftDiv"));
                $(".rightDiv").append($('.mainRightDiv'));
                $(".screen").hide();
                $(".fullScreen").show();
                $("#splitScreen span").removeClass('glyphicon-resize-full');
                $("#splitScreen span").addClass('glyphicon-resize-small');
                $("body").css('overflow-x', 'hidden');
                $(".inputDiv").css('margin-left', '-75px');
                $(".fullScreen").css("margin-top","100px");
                $(".editorBlock")[0].style.height = "40vw";
            } else if ($("#splitScreen span").hasClass('glyphicon-resize-small')) {
                console.log("yooo3, "+$("#splitScreen span").hasClass('glyphicon-resize-small'));
                $(".normalScreen").append($(".mainleftDiv"));
                $(".normalScreen").append($(".mainRightDiv"));
                $(".leftDiv").empty();
                $(".rightDiv").empty();
                $(".fullScreen").hide();
                $(".screen").show();
                $("#splitScreen span").removeClass('glyphicon-resize-small');
                $("#splitScreen span").addClass('glyphicon-resize-full');
                $(".inputDiv").css('margin-left', '');
                $(".editorBlock")[0].style.height = "500px";
                $(".fullScreen").css("margin-top","0px");
            }

            //event.stopPropagation();
        }
    });

})();
