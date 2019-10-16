let books = getBooks();

// Grabbing the DOM elements
const addContainer = document.querySelector('.add-book');
const btnAdd = document.querySelector('.btn-add');
const btnRead = document.querySelector('.read-status');
const btnRemove = document.querySelector('.btn-remove');

// Rendering the books
renderBooks(books);

// Generating form for Adding new book
btnAdd.addEventListener("click", function(e) {
    let domElems = generateAddBookForm();

    // Appending them to DOM and hiding the add-button
    btnAdd.parentNode.removeChild(btnAdd);
    addContainer.appendChild(domElems[0]);
    addContainer.appendChild(domElems[1]);
    addContainer.appendChild(domElems[2]);
    addContainer.appendChild(domElems[3]);
    addContainer.appendChild(domElems[4]);
    addContainer.appendChild(domElems[5]);

    // Listening for cancel event
    domElems[6].addEventListener("click", function(e) {
        while(addContainer.firstChild) {
            addContainer.removeChild(addContainer.firstChild);
        }
        addContainer.appendChild(btnAdd);
    });

    // Resetting the form on reset button
    domElems[7].addEventListener("click", function(e) {
        domElems[1].control.value = "";
        domElems[2].control.value = "";
        domElems[3].control.value = "";

        let checked = domElems[4].firstElementChild.checked;
        if(checked) {
            domElems[4].firstElementChild.checked = false;
        } else {
            domElems[4].firstElementChild.checked = false;
        }
    });

    // Adding a new book
    domElems[8].addEventListener("click", function(e) {
        books.push({
            id: uuidv4(),
            name: domElems[1].childNodes[1].value,
            author: domElems[2].childNodes[1].value,
            pages: domElems[3].childNodes[1].value,
            status: domElems[4].firstElementChild.checked
        });
        console.log(domElems[1].childNodes.value);
        saveBooks(books);
        renderBooks(books);
    });
});



