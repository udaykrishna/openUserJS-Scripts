// ==UserScript==
// @name         LeetCode Notes Sugar
// @namespace    http://udaykrishna.com/
// @version      0.1
// @description  LeetCode Auto Show Description
// @author       Uday
// @match        https://leetcode.com/notes/
// @grant        none
// @license      MIT
// @icon         https://www.google.com/s2/favicons?domain=leetcode.com
// @copyright 2021, nickfever (https://openuserjs.org/users/nickfever)
// ==/UserScript==


function getReact16PlusVars(reactInternalInstance){
    var reactVars = reactInternalInstance.return;
    while(typeof(reactVars.type)=="string"){
        reactVars = reactVars.return;
    }
    return reactVars;
}

function getReactNode(domElem, traverseUp=0){
    /* Inspired from https://stackoverflow.com/a/39165137/3672229

     Traverse Up is required in cases like these where we get InBetweenComp instead of myComp

            class MyComp extends Component {
            render() {
                return (
                    <InBetweenComp>
                        <div id="target">Element actually rendered to dom-tree.</div>
                    </InBetweenComp>
                    );
                }
            }
     */
    const elemKey = Object.keys(domElem).find(key=>key.startsWith("__reactInternalInstance$"));
    const reactInternalInstance = domElem[elemKey];
    if(reactInternalInstance===null){
        // return null if no internal instance is found
        return null;
    }

    if(reactInternalInstance._currentElement){
        // < React 16
        let reactVars = reactInternalInstance._currentElement._owner;
        while(traverseUp-->0){
            reactVars = reactVars._currentElement._owner;
        }
        return reactVars._instance;
    } else {
        // React 16+

        let reactVars = getReact16PlusVars(reactInternalInstance);
        while(traverseUp-->0){
            reactVars = getReact16PlusVars(reactVars);
        }
        console.log(reactVars);
        return reactVars.stateNode;

    }

}

(function() {
    'use strict';

    // Your code here...
    document.getElementById("showDescription").click()

    var questions = document.getElementsByClassName("panel panel-default");
    for(let i=0;i<questions.length;i++){
        let reactVars = getReactNode(questions[i]);
        reactVars.redirectToProblemDesc = (e)=>{
          e.stopPropagation();
          var n = '/problems/' + reactVars.props.note.question.titleSlug + '/description';
          window.open(n,"_blank");
        }
    }

})();
