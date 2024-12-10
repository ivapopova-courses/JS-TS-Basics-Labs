// main.js

// Book constructor
class Book{
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library{
    constructor(name, output){
        this.name = name;
        this.books = [];
        this.ouput = output;
    }
    addBook(book){
        this.books.push(book);
    }
    displayBooks(){
        this.ouput.innerHTML = `
            <div class="book">
                <div>Author</div>
                <div>Book titple</div>
            </div>
        `
    }
}

// Get Element objects:
const HTMLelements = {
    bookTitleInput : document.querySelector('#book-title'),
    bookAuthorInput : document.querySelector('#book-author'),
    addBookBtn : document.querySelector('#add-book'),
    searchTermInput : document.querySelector('#search-term'),
    searchBookBtn : document.querySelector('#search-book'),
    output : document.querySelector('#output'),
}


let library = new Library('Library Name', HTMLelements.output);

HTMLelements.addBookBtn.addEventListener('click', function() {
    const book = new Book(
        HTMLelements.bookTitleInput.value,
        HTMLelements.bookAuthorInput.value
    );
    library.addBook(book);
    library.displayBooks();
})



