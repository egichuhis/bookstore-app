import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, createNewApp } from '../redux/features/books/booksSlice';
import BookCard from './BookCard';

const BooksList = () => {
  const myBooks = useSelector((state) => state.books.booksLibrary);
  const appID = useSelector((state) => state.books.appID);
  const dispatch = useDispatch();

  useEffect(() => {
    const createAppAndFetchBooks = async () => {
      await dispatch(createNewApp());
      dispatch(fetchBooks());
    };

    if (appID.length > 0) {
      dispatch(fetchBooks());
    } else {
      createAppAndFetchBooks();
    }
  }, [dispatch, appID.length]);

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
