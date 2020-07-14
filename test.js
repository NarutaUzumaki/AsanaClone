"use strict";

var block = document.querySelector('card');


var addButton = document.getElementById('add');
addButton.onmouseover = function(){
  addButton.style.opacity = '1';
};

addButton.onmouseout = function(){
    addButton.style.opacity = '0.5';
};


let num = 4;
addButton.onclick = function(event){
    let mainBlock = document.getElementById('boardlists');
    let div = document.createElement('div');
    if (document.getElementById(`list${num}`)) {
        div.id = `list${num + 1}`;
        num +=1;
    }else{
        div.id = `list${num}`;
    }
    div.className = 'board-list';

    div.setAttribute('ondrop','dropIt(event)');
    div.setAttribute('ondragover','allowDrop(event)');

    mainBlock.appendChild(div);

    let title = document.createElement('div');
    title.setAttribute('contenteditable', 'true');
    title.className = 'list-title';
    title.innerText = 'Custom';
    div.appendChild(title);
};

let uris = ['https://i.pinimg.com/originals/75/a4/c2/75a4c2d1dc2dbce3342109e8270ff4f3.jpg', 'https://wallpaperaccess.com/full/215112.jpg', 'https://i.pinimg.com/originals/25/2d/e9/252de9410dba461a7f27d9b7eebad0e2.jpg'];

function arrayRandElement(uris) {
    let rand = Math.floor(Math.random() * uris.length);
    return uris[rand];
}
document.body.style.backgroundImage = `url(${arrayRandElement(uris)})`;
document.body.style.backgroundAttachment = 'fixed';



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