// Vars and containers
const myLibrary = [];
const bookDisplay = document.querySelector('.bookDisplay');

// Hides and reveals modal

// Class for creating book objects

class Book {
  constructor() {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
  }

  addToLibrary() {
    myLibrary.push(this.title);

    const book = document.createElement('div');
    book.classList.add('card');
    book.textContent = this.title;
    bookDisplay.appendChild(book);

    const removeBook = document.createElement('button');
    removeBook.classList.add('removeBook');
    removeBook.textContent = 'Remove';
    book.appendChild(removeBook);
    removeBook.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
  }
}

const modalModule = (() => {
  const form = document.querySelector('.form');
  const openModalButton = document.querySelector('.modalButton');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');

  function openModal() {
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
  }
  openModalButton.addEventListener('click', openModal);
  overlay.addEventListener('click', openModal);

  function submitForm() {
    const thisBook = new Book();
    thisBook.addToLibrary();
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  });
})();
