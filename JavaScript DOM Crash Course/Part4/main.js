var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit event
form.addEventListener('submit',addItem);

//Delete event
itemlist.addEventListener('click',removeItem);

// Filter Event
filter.addEventListener('keyup',filterItems);

//Add Item
function addItem(e){
    e.preventDefault();
    console.log(1);

    //Get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    itemlist.appendChild(li);
}


//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

//filter item
function filterItems(e){
    var text = e.target.value.toLowerCase();
    //get lis
    var items=itemlist.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLocaleLowerCase().indexOf(text)!=-1){
            item.style.display = 'block'; 
        }else{
            item.style.display = 'none';
        }
    });
}