// Save books to the localStorage
const saveBooks = function (books) {
    localStorage.setItem("books", JSON.stringify(books));
}

// Get books from the localStorage
const getBooks = function () {
    let booksJSON = localStorage.getItem("books");

    if (booksJSON !== null) {
        return JSON.parse(booksJSON);
    } else {
        return [];
    }
}

// Generate book DOM
const generateBookDom = function (book) {

    // Creating the row for the book
    const row = document.createElement("div");
    row.classList.add("row");

    // Adding all the elements
    const bookStatus = document.createElement("button");
    bookStatus.textContent = "Read";
    bookStatus.classList.add("read-status");
    if(book.status) {
        bookStatus.classList.toggle("toggle-read");
        book.status = !book.status;
        console.log(book);
    }
    // Changing the read status on click of read button
    bookStatus.addEventListener("click", function (e) {
        bookStatus.classList.toggle("toggle-read");
        book.readStatus = !book.readStatus;
        console.log(books);
    });

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.name;
    bookTitle.classList.add("book-title");

    const separator1 = document.createElement("span");
    separator1.textContent = "-";
    separator1.classList.add("separator");

    const bookAuthor = document.createElement("span");
    bookAuthor.textContent = `Author: ${book.author}`;
    bookAuthor.classList.add("book-author");

    const separator2 = document.createElement("span");
    separator2.textContent = "-";
    separator2.classList.add("separator");
    separator2.classList.add("last");

    const bookLength = document.createElement("span");
    bookLength.textContent = `Pages: ${book.pages} pages`;
    bookLength.classList.add("book-length");

    const bookRemove = document.createElement("button");
    bookRemove.textContent = "Remove";
    bookRemove.classList.add("btn-remove");

    row.appendChild(bookStatus);
    row.appendChild(bookTitle);
    row.appendChild(separator1);
    row.appendChild(bookAuthor);
    row.appendChild(separator2);
    row.appendChild(bookLength);
    row.appendChild(bookRemove);
    bookRemove.addEventListener("click", function (e) {
        removeBook(book.id);
        saveBooks(books);
        renderBooks(books);
        console.log(books);
    });

    return row;
}

// Generate add book form
const generateAddBookForm = function () {
    const addTitle = document.createElement("h2");
    const titleField = document.createElement("label");
    const authorField = document.createElement("label");
    const pagesField = document.createElement("label");
    const readStatusField = document.createElement("label");

    // Container for three buttons
    const btnContainer = document.createElement("div");
    const addBookButton = document.createElement("button");
    const resetButtton = document.createElement("button");
    const cancelButton = document.createElement("button");

    // Setting the title text
    addTitle.textContent = "Add a book!";
    addTitle.classList.add("addBookTitle");

    // Setting input fields
    titleField.innerHTML = `Title: <input type="text" class="addBookInputs">`;
    authorField.innerHTML = `Author: <input type="text" class="addBookInputs">`;
    pagesField.innerHTML = `Pages: <input type="text" class="addBookInputs">`;
    titleField.classList.add("addBookFields");
    authorField.classList.add("addBookFields");
    pagesField.classList.add("addBookFields");


    // Setting the checkbox
    readStatusField.innerHTML = `Read it already? <input type="checkbox">`;
    readStatusField.classList.add("addBookStatus");

    // Setting the three buttons
    addBookButton.textContent = "Add this book!";
    resetButtton.textContent = "Reset form";
    cancelButton.textContent = "Cancel";

    addBookButton.classList.add("addButtons");
    resetButtton.classList.add("addButtons");
    cancelButton.classList.add("addButtons");

    btnContainer.appendChild(addBookButton);
    btnContainer.appendChild(resetButtton);
    btnContainer.appendChild(cancelButton);
    btnContainer.classList.add("addButtonsContainer");

    // Returning values
    let fields = [addTitle, titleField, authorField, pagesField,
        readStatusField, btnContainer, cancelButton, resetButtton, addBookButton];

    return fields;
}

// Remove books from the localStorage
const removeBook = function (id) {
    const bookIndex = books.findIndex(function (book) {
        return book.id === id;
    });

    if (bookIndex > -1) {
        books.splice(bookIndex, 1);
    }

}

// Render books to the page
const renderBooks = function (books) {
    document.querySelector(".ListOfBooks").innerHTML = '';

    books.forEach(function (book) {
        // Appending the elements to the DOM
        document.querySelector(".ListOfBooks").appendChild(generateBookDom(book));
    });

    // document.querySelector(".ListOfBooks").prepend(generateBookDom(books[books.length - 1]));


}

