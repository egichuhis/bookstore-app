import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import generateUniqueId from 'generate-unique-id';
import { postBooks, fetchBooks } from '../redux/features/books/booksSlice';

const widthBookTitle = { width: '40%' };
const widthBookTitleInput = { width: '100%' };
const widthBookAuthor = { width: '20%' };
const addBtnStyle = {
  fontSize: 14,
  background: '#0290ff',
  paddingRight: 34,
  paddingLeft: 34,
};

const AddBook = () => {
  const dispatch = useDispatch();

  const bookCategories = useSelector((state) => state.categories.bookCategories);
  const appID = localStorage.getItem('appID');
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    category: '',
  });

  const addNewBook = async () => {
    const newBookDetails = {
      ...bookDetails,
      item_id: generateUniqueId(),
    };

    await dispatch(postBooks(newBookDetails));
    setBookDetails({ title: '', author: '', category: '' });
    dispatch(fetchBooks(appID));
  };

  return (
    <div className="card mt-4 border-0 mb-3">
      <div className="container">
        <h4 className="text-muted fs-5">ADD NEW BOOK</h4>
        <div className="row">
          <div
            className="col-6 col-md-4 align-self-center w-40"
            style={widthBookTitle}
          >
            <input
              type="text"
              value={bookDetails.title}
              onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })}
              placeholder="Book Title"
              style={widthBookTitleInput}
            />
          </div>
          <div
            className="col-6 col-md-4 align-self-center"
            style={widthBookAuthor}
          >
            <input
              type="text"
              value={bookDetails.author}
              onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
              placeholder="Author"
              style={widthBookTitleInput}
            />
          </div>
          <div
            className="col-6 col-md-4 align-self-center"
            style={widthBookAuthor}
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
            style={widthBookAuthor}
          >
            <button
              onClick={addNewBook}
              className="btn btn-primary btn-sm text-light"
              type="button"
              style={addBtnStyle}
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
