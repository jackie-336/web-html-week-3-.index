// Change the text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textContent').textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('toggleStylesButton').addEventListener('click', function() {
    const textContentElement = document.getElementById('textContent');
    textContentElement.classList.toggle('highlight');
});

// Add a new element to the page when the button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a newly added element!";
    document.getElementById('newElementContainer').appendChild(newElement);
});