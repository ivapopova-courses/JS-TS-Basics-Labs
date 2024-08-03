// main.js

// Book constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
};

function displayBooks() {
    let libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        libraryContainer.innerHTML += `
            <div class="book">
                <h2>${books[i].title}</h2>
                <p>${books[i].author}</p>
            </div>
        `;
    }
}

function searchBook(books, searchTerm) {
    const filteredBooks = [];

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if(book.author===searchTerm || book.title===searchTerm){
            filteredBooks.push(book)
        }
    }
    return filteredBooks;
}


// Array to store books
let books = [];

let addBookButton = document.getElementById('add-book');
let searchBookButton = document.getElementById('search-book');

addBookButton.addEventListener('click', function() {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;

    if (title && author) {
        let newBook = new Book(title, author);
        books.push(newBook);
        displayBooks();
    }
});

searchBookButton.addEventListener('click', function() {
    let searchTerm = document.getElementById('search-term').value;
    let filteredBooks = searchBook(books, searchTerm);
    console.log(filteredBooks);

    let searchContainer = document.getElementById('search-results');
    for (let i = 0; i < filteredBooks.length; i++) {
        searchContainer.innerHTML += `
            <div class="book">
                <h2>${filteredBooks[i].title}</h2>
                <p>${filteredBooks[i].author}</p>
            </div>
        `;
    }
})




