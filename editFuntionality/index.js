function saveToLocalStorage(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username,
        email,
        phone
    };

    // Use a unique key for each user to avoid overwriting previous entries
    const userKey = email; // Assuming email is unique for each user
    localStorage.setItem(userKey, JSON.stringify(userDetails));

    showUserDetailsOnScreen(userDetails);

    // Reset input fields
    event.target.reset();


}

function showUserDetailsOnScreen(userDetails) {
    const parentElement = document.getElementById('listOfItems');

    // Create a new list item element
    const childElement = document.createElement('li');
    childElement.textContent = userDetails.username + ' - ' + userDetails.email + ' - ' + userDetails.phone;

    // Create a delete button for the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    //create a edit button 
    const editButton=document.createElement('button');
    editButton.textContent="Edit";

    // Append the delete button and edit button to the list item
    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);

    // Append the list item to the unordered list
    parentElement.appendChild(childElement);


    // Add an event listener to handle the delete functionality
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem(userDetails.email); // Remove the item from localStorage
        parentElement.removeChild(childElement); // Remove the list item from the DOM
    });

    // add event listener to handle edit functionality
    editButton.addEventListener('click',()=>{
        localStorage.removeItem(userDetails.email);
        parentElement.removeChild(childElement);

        document.getElementById('username').value = userDetails.username;
        document.getElementById('email').value = userDetails.email;
        document.getElementById('phone').value = userDetails.phone;
    })
}