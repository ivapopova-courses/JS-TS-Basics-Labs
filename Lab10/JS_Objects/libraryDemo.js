function Book(title, author) {
    this.title = title;
    this.author = author;
}


function addBook(library ) {
    let title = 'New Book Title';
    let author = 'Author';
    let book = new Book(title, author);

    library.push(book);
}

let book1 = new Book('Book Title1', 'Author 1');
let library = [];

addBook(library);
addBook(library);
addBook(library);


console.log(library);