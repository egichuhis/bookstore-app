import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, createNewApp } from '../redux/features/books/booksSlice';
import BookCard from './BookCard';

const BooksList = () => {
  const myBooksResponse = useSelector((state) => state.books.booksLibrary);
  const dispatch = useDispatch();
  const appID = localStorage.getItem('appID') || '';

  useEffect(() => {
    const createAppAndFetchBooks = async () => {
      await dispatch(createNewApp());
      dispatch(fetchBooks(appID));
    };

    if (appID.length > 0) {
      dispatch(fetchBooks(appID));
    } else {
      createAppAndFetchBooks();
    }
  }, [dispatch, appID]);

  const Books = myBooksResponse[0] || {};

  return (
    <div>
      {Object.keys(Books).map((key) => (
        <ul key={key} className="list-unstyled">
          <li>
            <BookCard book={Books[key][0]} bookId={key} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BooksList;
