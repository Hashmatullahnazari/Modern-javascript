//let val;
//val = document;
//val = document.all;
//val = document.all[2];
//val = document.all.length;
//val = document.head;
//val = document.body;
//val = document.doctype;
//val = document.domain;
//val = document.URL;
//val = document.characterSet;
//val = document.contentType;
//
//
//val = document.forms;
//val = document.forms[0];
//val = document.forms[0].id;
//val = document.forms[0].method;
//
//val = document.links;
//val = document.links[0];
//val = document.links[0].id;
//val = document.links[0].className;
//val = document.links[0].classList[0];
//val = document.images;
//val = document.scripts;
//val = document.scripts[2].getAttribute('src');
//
//
//let scripts = document.scripts;
//
//let scriptsArr = Array.from(scripts);
//scriptsArr.forEach(function(script){
//    console.log(script);
//});
//
//
//console.log(val);



//let val;
//
//val = document;
//val = document.all;
//val = document.all[2];
//val = document.all.length;
//val = document.head;
//val = document.body;
//val = document.doctype;
//val = document.domain;
//val = document.URL;
//val = document.characterSet;
//val = document.contentType;
//
//val = document.forms;
//val = document.forms[0];
//val = document.forms[0].id;
//val = document.forms[0].method;
//val = document.forms[0].action;
//
//val = document.links;
//val = document.links[0];
//val = document.links[0].id;
//val = document.links[0].className;
//val = document.links[0].classList[0];
//
//val = document.images;
//
//val = document.scripts;
//val = document.scripts[2].getAttribute('src');
//
//let scripts = document.scripts;
//
//let scriptsArr = Array.from(scripts);
//
//scriptsArr.forEach(function(script) {
//  console.log(script.getAttribute('src'));
//});
//
//console.log(val);



//document.getElementById()

//console.log(document.getElementById('task-title'));
//
////get things from the element
//console.log(document.getElementById('task-title').id);
//
//const taskTitle = document.getElementById('task-title');
//
//
////change styling
//document.getElementById('task-title').style.background = '#333';
//document.getElementById('task-title').style.color = '#fff';
//document.getElementById('task-title').style.padding = '5px';
////document.getElementById('task-title').style.display = 'none';
//
////change content
//document.getElementById('task-title').textContent = 'Task List';
//document.getElementById('task-title').innerText = 'My Tasks';
//document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';


//document.querySelector()

//console.log(document.querySelector('#task-title'));
//console.log(document.querySelector('.card-title'));
//console.log(document.querySelector('h5'));
//
//document.querySelector('li').style.color = 'red';
//document.querySelector('ul li').style.color = 'blue';
//
//
//document.querySelector('li:last-child').style.color = 'red';
//document.querySelector('li:nth-child(3)').style.color = 'yellow';
//document.querySelector('li:nth-child(4)').textContent = 'hello world';
//document.querySelector('li:nth-child(odd)').style.background = '#ccc';
//document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
//

////document.getElementByClassName
//
//const items = document.getElementsByClassName('collection-item');
//console.log(items);
//
//console.log('items[0]');
//items[0].style.color = 'red';
//items[3].textContent = 'hello';
//
//const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//
//console.log(listItems);
//
////document.getElementByTagName
//
//let lis = document.getElementsByTagName('li');
//console.log(lis);
//
//console.log('lis[0]');
//lis[0].style.color = 'red';
//lis[3].textContent = 'hello';
//
//
////convert html collection in to an array
//lis = Array.from(lis);
//
//lis.reverse();
//
//
//lis.forEach(function(li, index){
//    console.log(li.className);
//    li.textContent = '${index}:hello';
//});
//
//console.log(lis);

////document querySelectorall
//
//const items = document.querySelectorAll('ul.collection li.collection-item');
//
//
//items.forEach(function(item, index){
//    item.textContent ='${index} : hello';
//})
//
//
//const liOdd= document.querySelectorAll('li:nth-child(odd)');
//const liEven= document.querySelectorAll('li:nth-child(even)');
//
//liOdd.forEach(function(li, index){
//    li.style.background = '#ccc';
//});
//
//console.log(items);


//Treversing DOM

//let val;
//
//const list = document.querySelector('ul.collection');
//const listItem = document.querySelector('li.collection-item:first-child');
//
//val = listItem;
//val = list;
//
////Get child nodes
//val = list.childNodes;
//val = list.childNodes[0];
//val = list.childNodes[0].nodeName;
//val = list.childNodes[3].nodeType;
//
////Get children element nodes
//val = list.children;
//val = list.children[1];
//list.children[1].textContent = 'hello';
//
////Children of children
//list.children[3].children[0].id = 'test-link';
//val = list.children[3].children[0];
//
////first child
//val = list.firstChild;
//val = list.firstElementChild;
//
////last child
//val = list.lastChild;
//val = list.lastElementChild;
//
////cound child element
//
//val = list.childElementCount
//
//
////get parent node
//val = listItem.parentNode;
//val = listItem.parentElement;
//val = listItem.parentElement.parentElement;
//
////get nextSibling 
//val = listItem.nextSibling;
//val = listItem.nextSibling.nextSibling;
//
////get previousSibling 
//val = listItem.previousSiblingSibling;
//
//console.log(val);


////CREATE ELEMENT
//
////create element
//const li = document.createElement('li');
//
////Add class
//li.className = 'collection-item';
//
//
////id attribute
//li.id = 'new-item';
//
//
////Add attribute
//li.setAttribute('title', 'New Item');
//
//
////create text node and append
//li.appendChild(document.createTextNode('Hello World'));
//
//
////Create new link element
//const link = document.createElement('a');
//
//link.className = 'delete-item secondary-content';
//
//
//
//
////Add icon html_entity_decode
//link.innerHTML = '<i class="fa fa-remove"></i>';
//
//
//li.appendChild(link);
//
//
////Append li as child to ul
//document.querySelector('ul.collection').appendChild(li);
//
//console.log(li);

////REPLACEMENT ElEMENT
//
////create element 
//
//const newHeading = document.createElement('h2');
//
////Add id
//newHeading.id = 'task-title';
//
////New text node
//newHeading.appendChild(document.createTextNode('Task List'));
//
//
////get the old heading
//const oldHeading = document.getElementById('task-title');
//
////Parent
//const cardAction = document.querySelector('.card-action');
////replace
//cardAction.replaceChild(newHeading, oldHeading);
//
////REMOVE ELEMENT
//const lis = document.querySelectorAll('li');
//const list = document.querySelector('ul');
//
//
////Remove list item
//lis[0].remove();
//list.removeChild(lis[3]);
//
////Classes & ATTR
//const firstLi = document.querySelector('li:first-child');
//const link = firstLi.children[0];
//
//let val;
//
//val = link.className;
//val = link.classList;
//val = link.classList;
//link.classList.add('test');
//link.classList.remove('test');
//
//val = link;
//
////ATTRIBUTES
//val = link.getAttribute('href');
//val = link.setAttribute('href', 'http://google.com');
//link.setAttribute('title', 'google');
//val = link.hasAttribute('title');
//link.removeAttribute('title');
//val = link;
//
//
//
//console.log(val);


////EVEENT LISTNERS & THE EVENT Objects
//
////document.querySelector('.clear-tasks').addEventListener('click', function(e){
////    console.log('hello world');
////    
//////e.preventDefault();
////});
//
//document.querySelector('.clear-tasks').addEventListener('click', onClick);
//
//function onClick(e){
//    //console.log('clicked');
//    let val;
//    
//    val = e;
//    
//    //Event target Element 
//    val = e.target;
//    val = e.target.id;
//    val = e.target.className;
//    val = e.target.classList;
//    
//    //event type
//    val = e.type;
//    
//    //event type
//    val = e.timeStamp;
//    
//    
//     //Coords event relative to the window
//    val = e.clientY;
//    val = e.clientX;
//    
//    //Coords event relative to the element
//    val = e.offsetY;
//    val = e.offsetX;
//    
//
//    
//
//    
//
//    console.log(val);
//}

//MOUSE event

//const clearBtn = document.querySelector('.clear-tasks');
//const card = document.querySelector('.card');
//const heading = document.querySelector('h5');

////click
//clearBtn.addEventListener('click', runEvent);
//
////double click
//clearBtn.addEventListener('dbclick', runEvent);
//
//mousedown
//clearBtn.addEventListener('mousedown', runEvent);
//clearBtn.addEventListener('mouseup', runEvent);
//card.addEventListener('mouseleave', runEvent);
//card.addEventListener('mouseover', runEvent);
//card.addEventListener('mouseout', runEvent);
//card.addEventListener('mousemove', runEvent);
//card.addEventListener('mousemove', runEvent);

//event handler
//function runEvent(e){
//    console.log('EVENT TYPE:' + e.type);
//    heading.textContent = 'MouseX: ${e.offsetX} MouseY: ${e.offsetY}';
//    document.body.style.backgroundColor = 'rgb(${e.offsetX}, ${e.offsetY}, 40)';
//}


//input in form events

//const form = document.querySelector('form');
//const taskInput = document.getElementById('task');
////clear input
//taskInput.value = '';
//
//form.addEventListener('keydown', runEvent);
//
//function runEvent(e){
//    console.log('EVENT TYPE:'+ e.type);
//    
//    console.log(e.target.value);
//    
//    heading.innerText = e.target.value;
////    //get input value
////    console.log(taskInput.value);
////    e.preventDefault();
//    
//}




////EVENT BUBBLING
//
//document.querySelector('.card-title').addEventListener('click', function(){
//    console.log('card title');
//});
//
//document.querySelector('.card-content').addEventListener('click', function(){
//    console.log('card content');
//});
//
//document.querySelector('.card').addEventListener('click', function(){
//    console.log('card');
//});
//
//document.querySelector('.col').addEventListener('click', function(){
//    console.log('col');
//});


////EVENT DELEGATION
//const delItem = document.querySelector('.delete-item');
//
//delItem.addEventListener('click', deletItem);

document.body.addEventListener('click', deletItem);

function deletItem(e){
    console.log('delete item');
    console.log(e.target);
    if(e.target.parentElement.className === 'delete-remove'){
        console.log('delete item');
    }
}