import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const BooksList = () => {
  const myBooks = useSelector((state) => state.books.booksLibrary);

  return (
    <div>
      {myBooks.map((book) => (
        <ul key={book.id} className="list-unstyled">
          <li>
            <BookCard book={book} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BooksList;
