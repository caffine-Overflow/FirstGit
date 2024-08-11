function saveToLocalStorage(event){
    event.preventDefault();

    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;

    const userDetails ={
        username,
        email,
        phone
    }
    localStorage.setItem("UserDetails",JSON.stringify(userDetails));
    showUserDetailsOnScreen(userDetails);

}
function showUserDetailsOnScreen(userDetails){
    const parentElement=document.getElementById('listOfItems');
    const childElement=document.createElement('li');
    childElement.textContent= userDetails.username+'-'+userDetails.email+'-'+userDetails.phone;
    parentElement.appendChild(childElement);
}
