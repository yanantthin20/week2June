//EVENTS //
 button = document.getElementById('button').addEventListener('click',buttonClick);
function buttonClick(e){
    //console.log('Button clicked');
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = 'pink';
}/*{
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.classList);

    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    
    console.log(e.offsetX);
    console.log(e.offsetY);

    console.log(e.altKey);//return true or false
    console.log(e.ctrlKey);
    console.log(e.shiftKey);

}*/

var button = document.getElementById('button');
//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);

var box = document.getElementById('box');

//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseover',runEvent);

//box.addEventListener('mouseout',runEvent);
//box.addEventListener('mouseleave',runEvent);

var itemInput = document.querySelector('input[type="text"]');

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur',runEvent);

itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste',runEvent);
itemInput.addEventListener('input', runEvent);
var select = document.querySelector('select');
select.addEventListener('change',runEvent);

var form = document.querySelector('form');
form.addEventListener('submit',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    console.log(e.target.value);
}

box.addEventListener('mousemove',runEvent1);

function runEvent1(e){
    //output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+' </h3>';
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}


var form = document.querySelector('form');

//itemInput.addEventListener('keydown',runEvent2);
//itemInput.addEventListener('keyup',runEvent2);
//itemInput.addEventListener('keypress',runEvent2);

function runEvent2(e){
    console.log('EVENT TYPE: '+e.type);
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}


