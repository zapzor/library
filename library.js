let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push[`${title} by ${author}, ${pages} pages, ${read}`]
  }
