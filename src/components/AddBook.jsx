import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import generateUniqueId from 'generate-unique-id';
import { addBook } from '../redux/features/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const bookCategories = useSelector((state) => state.categories.bookCategories);

  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    category: '',
  });

  const addNewBook = () => {
    const newBookDetails = {
      ...bookDetails,
      item_id: generateUniqueId(),
    };

    dispatch(addBook(newBookDetails));
    setBookDetails({ title: '', author: '', category: '' });
  };

  return (
    <div className="card mt-4" style={{ border: 'none' }}>
      <div className="container">
        <h4 style={{ color: 'grey', fontSize: '16.4px' }}>ADD NEW BOOK</h4>
        <div className="row">
          <div
            className="col-6 col-md-4 align-self-center"
            style={{ width: '40%' }}
          >
            <input
              type="text"
              value={bookDetails.title}
              onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })}
              placeholder="Book Title"
              style={{ width: '100%' }}
            />
          </div>
          <div
            className="col-6 col-md-4 align-self-center"
            style={{ width: '20%' }}
          >
            <input
              type="text"
              value={bookDetails.author}
              onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
              placeholder="Author"
              style={{ width: '100%' }}
            />
          </div>
          <div
            className="col-6 col-md-4 align-self-center"
            style={{ width: '20%' }}
          >
            <select
              id="categorySelect"
              name="category"
              className="w-100 p-1 text-muted"
              onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })}
            >
              <option value="" disabled selected>Category</option>
              {bookCategories.map((category) => (
                <option key={category.toLowerCase()} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div
            className="col-md-4 text-end align-self-center"
            style={{ width: '20%' }}
          >
            <button
              onClick={addNewBook}
              className="btn btn-primary btn-sm"
              type="button"
              style={{
                fontSize: 14,
                background: '#0290ff',
                paddingRight: 34,
                paddingLeft: 34,
              }}
            >
              ADD BOOK
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddBook;
