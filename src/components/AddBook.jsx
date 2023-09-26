import React from 'react';

const AddBook = () => (
  <div className="card mt-4" style={{ border: 'none' }}>
    <div className="container">
      <h4 style={{ color: 'grey', fontSize: '16.4px' }}>ADD NEW BOOK</h4>
      <div className="row">
        <div
          className="col-6 col-md-4 align-self-center"
          style={{ width: '50%' }}
        >
          <input type="text" placeholder="Book Title" style={{ width: '100%' }} />
        </div>
        <div className="col-md-4 align-self-center" style={{ width: '25%' }}>
          <select style={{ width: '100%' }}>
            <optgroup label="Author" placeholder="Author">
              <option value={12} selected="">
                Oprah Winfrey
              </option>
              <option value={13}>Jeffery Archer</option>
              <option value={14}>James Paterson</option>
            </optgroup>
          </select>
        </div>
        <div
          className="col-md-4 text-end align-self-center"
          style={{ width: '25%' }}
        >
          <button
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

export default AddBook;
