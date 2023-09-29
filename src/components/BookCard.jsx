import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Chart from './charts/DonutChart';
import { fetchBooks, deleteBook } from '../redux/features/books/booksSlice';

const authorName = { color: '#4386bf', fontSize: 14 };
const bookBtns = {
  width: 'fit-content',
  height: 'auto',
  color: '#4386bf',
  fontSize: 14,
  border: 'none',
  background: 'white',
};

const chartW = { width: 65 };

const addBtnStyle = {
  fontSize: 14,
  background: '#0290ff',
  paddingRight: 34,
  paddingLeft: 34,
};

const BookCard = ({ book, bookId }) => {
  const dispatch = useDispatch();
  const { title, author, category } = book;
  const appID = localStorage.getItem('appID');

  const removeBook = async () => {
    await dispatch(deleteBook(bookId));
    dispatch(fetchBooks(appID));
  };

  return (
    <div className="card mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0">
              <div
                className="card-body"
              >
                <h6 className="text-muted card-subtitle mb-2">{category}</h6>
                <h4 className="card-title">{title}</h4>
                <h6
                  className="card-subtitle mb-2"
                  style={authorName}
                >
                  {author}
                </h6>
                <div className="d-flex flex-row justify-content-start gap-4">
                  <button
                    type="button"
                    className="mb-2"
                    style={bookBtns}
                  >
                    Comments
                  </button>
                  <button
                    onClick={() => removeBook(bookId)}
                    type="button"
                    className="mb-2"
                    style={bookBtns}
                  >
                    Remove
                  </button>

                  <button
                    type="button"
                    className="mb-2"
                    style={bookBtns}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 align-self-center">
            <div className="card border-0">
              <div
                className="card-body"
              >
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-end">
                    <div style={chartW}>
                      <Chart />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <h6 className="text-muted mb-2">Completed</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card border-0">
              <div
                className="card-body"
              >
                <h6 className="text-muted card-subtitle mb-2">CURRENT CHAPTER</h6>
                <h4 className="card-title fs-5">
                  Chapter 17
                </h4>
                <button
                  className="btn btn-primary btn-sm text-light"
                  type="button"
                  style={addBtnStyle}
                >
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
  bookId: PropTypes.string.isRequired,
};

export default BookCard;
