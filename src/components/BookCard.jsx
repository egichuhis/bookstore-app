import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Chart from './charts/DonutChart';
import { fetchBooks, deleteBook } from '../redux/features/books/booksSlice';

const BookCard = ({ book, bookId }) => {
  const dispatch = useDispatch();
  const { title, author, category } = book;
  const removeBook = async () => {
    await dispatch(deleteBook(bookId));
    dispatch(fetchBooks());
  };

  console.log(book);

  return (
    <div className="card mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ border: 'none' }}>
              <div
                className="card-body"
              >
                <h6 className="text-muted card-subtitle mb-2">{category}</h6>
                <h4 className="card-title">{title}</h4>
                <h6
                  className="card-subtitle mb-2"
                  style={{ color: '#4386bf', fontSize: 14 }}
                >
                  {author}
                </h6>
                <div className="d-flex flex-row justify-content-start gap-4">
                  <button
                    type="button"
                    className="mb-2"
                    style={{
                      width: 'fit-content',
                      height: 'auto',
                      color: '#4386bf',
                      fontSize: 14,
                      border: 'none',
                      background: 'white',
                    }}
                  >
                    Comments
                  </button>
                  <button
                    onClick={removeBook(bookId)}
                    type="button"
                    className="mb-2"
                    style={{
                      width: 'fit-content',
                      height: 'auto',
                      color: '#4386bf',
                      fontSize: 14,
                      border: 'none',
                      background: 'white',
                    }}
                  >
                    Remove
                  </button>

                  <button
                    type="button"
                    className="mb-2"
                    style={{
                      width: 'fit-content',
                      height: 'auto',
                      color: '#4386bf',
                      fontSize: 14,
                      border: 'none',
                      background: 'white',
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 align-self-center">
            <div className="card" style={{ border: 'none' }}>
              <div
                className="card-body"
              >
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-end">
                    <div style={{ width: 65 }}>
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
            <div className="card" style={{ border: 'none' }}>
              <div
                className="card-body"
              >
                <h6 className="text-muted card-subtitle mb-2">CURRENT CHAPTER</h6>
                <h4 className="card-title" style={{ fontSize: 16 }}>
                  Chapter 17
                </h4>
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  style={{ fontSize: 14, background: '#0290ff', marginTop: 19 }}
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
};

export default BookCard;
