import { useState } from 'react'
import './App.css'
import Books from './components/books/Books.jsx'
import NewBook from './components/newBoock/NewBoock.jsx';
import booksInitial from './data/books.jsx';
import Login from './components/auth/login/Login';


function App() {

  const [books, setBooks] = useState(booksInitial);
  const handleBookAdded = (enteredBook) => {
    console.log(enteredBook);
    const bookData = {
      ...enteredBook,
      id: Math.random().toString(),
      bookRating: Array(enteredBook.rating).fill("*"),  
    };
    setBooks((prevBooks) => {
      return [...prevBooks, bookData];
    });
  };

  return (
    <>
    <h1>Books!</h1>
    <h2>Quiero leer libros!</h2>
    <NewBook onBookAdded={handleBookAdded}/>
    <Books
      books={books}
    />
    <div>
      <Login />
    </div>
  </>
)
}
export default App;