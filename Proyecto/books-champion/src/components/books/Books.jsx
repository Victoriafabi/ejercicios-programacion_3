import React, { useState } from 'react'
import BookItem from '../bookltem/BookItem';
import BookSearch from '../bookSearch/BookSearch'

const Books = ({ books }) => {

  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const filteredBooks = books
    .filter(book => search ? (book.bookTitle.toLowerCase().includes(search.toLowerCase()) || book.bookAuthor.toLowerCase().includes(search.toLowerCase())) : book)
    .map(((book) => (
      <BookItem
        key={book.id}
        id={book.id}
        bookTitle={book.bookTitle}
        author={book.bookAuthor}
        rating={book.bookRating}
        pages={book.pageCount}
        imageUrl={book.imageUrl}
      />
    )));

  return (
    <div className="d-flex justify-content-center flex-wrap my-5">
      <div className='container max-w-50 d-flex justify-content-center flex-wrap'>
        <BookSearch onSearch={handleSearch} search={search} />
      </div>
      <div className='container d-flex justify-content-center flex-wrap'>
        {filteredBooks.length ? filteredBooks : <p>No se encontraron libros</p>}
      </div>
    </div>
  )
}

export default Books