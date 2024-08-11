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
}

function showUserDetailsOnScreen(userDetails) {
    const parentElement = document.getElementById('listOfItems');

    // Create a new list item element
    const childElement = document.createElement('li');
    childElement.textContent = userDetails.username + ' - ' + userDetails.email + ' - ' + userDetails.phone;

    // Create a delete button for the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    // Append the delete button to the list item
    childElement.appendChild(deleteButton);

    // Append the list item to the unordered list
    parentElement.appendChild(childElement);

    // Add an event listener to handle the delete functionality
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem(userDetails.email); // Remove the item from localStorage
        parentElement.removeChild(childElement); // Remove the list item from the DOM
    });
}

