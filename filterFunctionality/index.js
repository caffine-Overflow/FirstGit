// Access form
const form = document.querySelector("form");

// Create description input
const description = document.createElement("input");
description.id = "description";
description.type = "text";
description.placeholder = "Describe the fruit";

// Add description input before the submit button
const button = form.querySelector("button[type='submit']");
form.insertBefore(description, button);

// Access form elements and fruit list
const fruitItem = document.getElementById("fruit-to-add");
const describe = document.getElementById("description");
const fruitList = document.querySelector(".fruits");

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Create new list item
    const newLi = document.createElement("li");
    newLi.className = "fruit";

    // Add fruit name
    const fruitItemText = document.createTextNode(fruitItem.value);
    newLi.appendChild(fruitItemText);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = "delete-btn";
    deleteButton.textContent = 'x';
    newLi.appendChild(deleteButton);

    // Add description
    const describeText = document.createElement('p');
    describeText.textContent = describe.value;
    describeText.style.fontStyle = "italic";
    newLi.appendChild(describeText);

    // Append the new list item to the fruit list
    fruitList.appendChild(newLi);

    // Clear input fields
    fruitItem.value = "";
    describe.value = "";
});

// Filter functionality
const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(event) {
    const textEntered = event.target.value.toLowerCase();
    const fruitItems = document.querySelectorAll(".fruit");

    for(let i=0;i<fruitItems.length;i++){
        const fruitName = fruitItems[i].firstChild.textContent.toLowerCase();
        const descriptionText = fruitItems[i].lastChild.textContent.toLowerCase();

        if (fruitName.indexOf(textEntered) === -1 && descriptionText.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = 'none';
        } else {
            fruitItems[i].style.display = 'flex';
        }
    
    };
});