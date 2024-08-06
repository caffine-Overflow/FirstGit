// access form and ul
const form=document.querySelector("form");
const fruitList=document.querySelector('.fruits');
//add event listner
form.addEventListener("submit",function(event){
    event.preventDefault();
    const fruitToAdd=document.getElementById("fruit-to-add");
//create a new list
    const newLi=document.createElement('li');
    const newLiText=document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    newLi.className="fruit";
//create a delete btn for new list 
    const deleteButton=document.createElement('button');
    const deleteButtonText=document.createTextNode('x');
    deleteButton.appendChild(deleteButtonText);
    deleteButton.className="delete-btn";
    newLi.appendChild(deleteButton)
    fruitList.appendChild(newLi);
//create edit button
const editButton=document.createElement('button');
const editButtonText=document.createTextNode('Edit');
editButton.appendChild(editButtonText);
editButton.className='edit-btn';
newLi.appendChild(editButton);
fruitList.appendChild(newLi);

})
//delete button working
fruitList.addEventListener("click",function(event){
    if(event.target.classList.contains('delete-btn')){
    const fruitToDel=event.target.parentElement;
    fruitList.removeChild(fruitToDel);
    }
})




