"use strict";

let num = 4;
localStorage.setItem('test',num);
//localStorage.clear();
let mainBlock = document.getElementById('boardlists');
let div = document.createElement('div');
let content;
// for(var i in content){
//     div.innerHTML = i;
//     mainBlock.append(div);
// }
//div.innerHTML = content['div'];
if (content = JSON.parse(localStorage.getItem('savedDiv')))
{
    content = JSON.parse(localStorage.getItem('savedDiv'))
    for(var i in content){
        console.log(content[i]);
        div.innerHTML = content[i];
        mainBlock.appendChild(div);
    }
}
// content.prototype.forEach.call(function (item,i,content) {
//     div.innerHTML = content['div'];
// });

//mainBlock.append(div);



var block = document.querySelector('card');


var addButton = document.getElementById('add');
addButton.onmouseover = function(){
  addButton.style.opacity = '1';
};

addButton.onmouseout = function(){
    addButton.style.opacity = '0.5';
};


// let num = 4;
addButton.onclick = adding;

    function adding(event){
    let mainBlock = document.getElementById('boardlists');
    let div = document.createElement('div');
    if (document.getElementById(`list${parseInt(localStorage.getItem('test'))}`)) {
        div.id = `list${parseInt(localStorage.getItem('test')) + 1}`;
        localStorage.setItem('test', parseInt(localStorage.getItem('test')) + 1);
    }else{
        div.id = `list${parseInt(localStorage.getItem('test'))}`;
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

    //localStorage.setItem('savedDiv', div.outerHTML);

    console.log(div);
    // let json = JSON.stringify({'id': div.id, 'class': div.className,
    //                                     'attrOnDrop': div.getAttribute('ondrop'),
    //                                     'attrOnDragover': div.getAttribute('ondragover'),
    //                                     'title':title.getAttribute('contenteditable'),
    //                                     'titleClass':title.className,
    //                                     'titleName':title.outerHTML});
    let arr = [];
    arr.push(div.outerHTML);
    let json = JSON.stringify(arr);
    console.log(json);
    localStorage.setItem('savedDiv', json);
}
// let savedDiv = adding;
// let json = JSON.stringify(savedDiv);
// localStorage.setItem('savedDiv', json);


// var card = document.getElementsByClassName('card');
// // console.log(card);
// card.forEach(
//     element => addEventListener('dblclick', function (e) {
//         element.setAttribute('contanteditable','true');
//     }));



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