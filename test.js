"use strict";

// let kek = `sho nado, ${5+3}`;
// alert(kek);
var block = document.querySelector('card');

// function changeColor() {
//     block.style.backgroundColor = "green";
// }

block.onmousedown = function(event) {

    let shiftX = event.clientX - block.getBoundingClientRect().left;
    let shiftY = event.clientY - block.getBoundingClientRect().top;

    block.style.position = 'absolute';
    block.style.zIndex = 1000;
    document.body.append(block);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        block.style.left = pageX - shiftX + 'px';
        block.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    block.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        block.onmouseup = null;
    };

};

block.ondragstart = function() {
    return false;
};

function allowDrop(ev) {
    ev.preventDefault();
}
function dragStart(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}
function dropIt(ev) {
    ev.preventDefault();
    let sourceId = ev.dataTransfer.getData("text/plain");
    let sourceIdEl=document.getElementById(sourceId);
    let sourceIdParentEl=sourceIdEl.parentElement;

    let targetEl=document.getElementById(ev.target.id);
    let targetParentEl=targetEl.parentElement;

    if (targetParentEl.id!==sourceIdParentEl.id){
        if (targetEl.className === sourceIdEl.className ){
            targetParentEl.appendChild(sourceIdEl);
        }else{
            targetEl.appendChild(sourceIdEl);
        }

    }else{
        let holder=targetEl;

        let holderText=holder.textContent;
        targetEl.textContent=sourceIdEl.textContent;
        sourceIdEl.textContent=holderText;
    }
}