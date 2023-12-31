import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/booksSlice';
import categoriesReducer from './features/categories/categoriesSlice';

export const store = configureStore(
  {
    reducer: {
      books: booksReducer,
      categories: categoriesReducer,
    },
  },
);

export default store;
