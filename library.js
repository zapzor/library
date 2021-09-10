// Vars and containers
let myLibrary = [];
const bookDisplay = document.querySelector("#bookDisplay");

class Book {
  constructor(title, author) {
  this.title = title;
  this.author = author;
  return `Created new book: ${this.title} by ${this.author}`
}

  addBookToLibrary() {
    myLibrary.push(this.title);
    return `Added ${this.title} by ${this.author} to the library.`;
  }
}

displayLibrary = function () {
  bookDisplay.textContent = myLibrary
}

const hobbit = new Book('The Hobbit', 'J.R.R Tolkien');
const foobar = new Book('foo', 'bar');
const barfoo = new Book('bar', 'foo');

hobbit.addBookToLibrary()
foobar.addBookToLibrary()
barfoo.addBookToLibrary()
