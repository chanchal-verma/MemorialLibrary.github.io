function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}

class Book {
    constructor(name, author, isbn) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {

        const books = store.getBooks();

        books.forEach(function (book) {
            UI.addBookToList(book);
        });
    }
    static addBookToList(book) {
        const bookList = document.getElementById("bookList");
        const row = document.createElement('tr');
        row.innerHTML = `
              <td>${book.name}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td><a class="btn btn-danger deleteBook">X</a></td>
        `;
        bookList.appendChild(row);
    }

    static deleteBook(element) {
        if (element.classList.contains('deleteBook')) {
            element.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.getElementById('bookName').value = "";
        document.getElementById('bookAuthor').value = "";
        document.getElementById('isbn').value = "";

    }
}


class store {
    static getBooks() {
      
        let books;
        if (localStorage.getItem('books') == null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;

    }

    static addBook(book) {
        const books = store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn, index) {
        const books = store.getBooks();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#issueBook').addEventListener('submit', function (element) {
    element.preventDefault();

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let isbn = document.getElementById('isbn').value;
    let error = false;

    if (name.length == '') {
        document.getElementById('name').innerHTML = "**This field can't be empty**";
        error = true;
    }
    else if (name.length < 2) {
        document.getElementById('name').innerHTML = "**Please enter a correct book name**";
        error = true;
    }
    else {
        document.getElementById('name').innerHTML = "";
    }


    if (author.length == '') {
        document.getElementById('author').innerHTML = "**This field can't be empty**"
        error = true;
    }
    else if (author.length < 2) {
        document.getElementById('author').innerHTML = "**Please enter a correct author name**";
        error = true;
    }
    else {
        document.getElementById('author').innerHTML = "";
    }


    if (isbn.length == '') {
        document.getElementById('ISBNN').innerHTML = "**This field can't be empty**"
        error = true;
    }
    else if (isbn.length != 6) {
        document.getElementById('ISBNN').innerHTML = "**Please enter a correct isbn number**";
        error = true;
    }
    else {
        document.getElementById('ISBNN').innerHTML = "";
    }


    if (error == true) {
        return false;
    }


    const book = new Book(name, author, isbn);

    UI.addBookToList(book);

    store.addBook(book)

    UI.clearFields();
});

document.querySelector('#bookList').addEventListener('click', function (element) {
    UI.deleteBook(element.target);

    store.removeBook(element.target.parentElement.previousElementSibling.textContent);
});

