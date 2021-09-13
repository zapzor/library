// Vars and containers
let myLibrary = [];

const bookDisplay = document.querySelector('.bookDisplay')
const newBookFormx = document.querySelector('.newBookForm')

const openModalButton = document.querySelector('.modalButton')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const submitBook = document.querySelector('.submitBook')

openModalButton.addEventListener('click', openModal)
overlay.addEventListener('click', openModal)
submitBook.addEventListener('click', submitForm)
// Hides and unhides modal

function openModal() {
  modal.classList.toggle('active')
  overlay.classList.toggle('active')
}

// Class for creating book objects

class Book {
  constructor() {
  this.title = document.getElementById('title').value
  this.author = document.getElementById('author').value
  this.pages = document.getElementById('pages').value
  return console.log(`Created new book: ${this.title} by ${this.author}`)
}

  addBookToLibrary() {
    myLibrary.push(this.title)


    let removeBook = document.createElement('button')
    removeBook.classList.add('removeBook')
    removeBook.addEventListener('click', () => {
      bookDisplay.innerHTML = ''
    })
    bookDisplay.appendChild(removeBook)

    let book = document.createElement('div')
    book.classList.add('card')
    book.textContent = this.title
    bookDisplay.appendChild(book)
    return console.log(`Added ${this.title} by ${this.author} to library`)
  }


  displayLibrary() {
    let text = ""
    for (let i = 0; i < myLibrary.length; i++) {
    text += myLibrary[i] + " "
    }
    return text
  }
}

function removeFromLibrary() {
  1+1

}

function submitForm() {
  thisBook = new Book()
  thisBook.addBookToLibrary()
}

