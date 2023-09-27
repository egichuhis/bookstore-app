import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksLibrary: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice(
  {
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action) => {
        state.booksLibrary.push(action.payload);
      },
      removeBook: (state, action) => {
        state.booksLibrary.pop(action.payload);
      },
    },
  },
);

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;