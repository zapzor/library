let myLibrary = [];

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

const hobbit = new Book('The Hobbit', 'J.R.R Tolkien');
