import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/features/books/booksSlice';
import BookCard from './BookCard';

const BooksList = () => {
  const myBooks = useSelector((state) => state.books.booksLibrary);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {myBooks.map((book) => (
        <ul key={book.title} className="list-unstyled">
          <li>
            <BookCard book={book} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BooksList;
