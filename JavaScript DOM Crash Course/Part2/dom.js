//TRAVERSING THE DOM //
var itemlist = document.querySelector('#items');

//parentNode //parentNode and parentElement are basically the same...
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);

//childNode
console.log(itemlist.childNodes);
console.log(itemlist.childElementCount);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'yellow';

/*
//FirstChild
console.log(itemlist.firstChild);
//FirstElementChild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Item 1';
*/

//lastChild
console.log(itemlist.lastChild);
//lastElementChild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'Item 4';

//Next Sibling
console.log(itemlist.nextSibling);
//Next Element Sibling
console.log(itemlist.nextElementSibling);

//previous Sibling
console.log(itemlist.previousSibling);
//Previous Element Sibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'pink';

//create Element

//create a div
var newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';
//Add id
newDiv.id = 'hello1';
//add attr
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontsize = '30px';
container.insertBefore(newDiv ,h1);
