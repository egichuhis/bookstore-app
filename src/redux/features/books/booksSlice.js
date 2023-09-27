import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  booksLibrary: [],
  error: '',
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => axios
  .get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PXG5axvIJFA3YdmHdF5Q/books')
  .then((response) => response.data));

export const addBooks = createAsyncThunk('book/addBooks', async (newBookDetails) => {
  const response = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PXG5axvIJFA3YdmHdF5Q/books',
    newBookDetails,
  );
  return response.data;
});

export const booksSlice = createSlice(
  {
    name: 'book',
    initialState,
    reducers: {
      addBook: (state, action) => {
        state.booksLibrary.push(action.payload);
      },
      removeBook: (state, action) => {
        state.booksLibrary = state.booksLibrary.filter(
          (book) => book.itemId !== action.payload,
        );
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.booksLibrary = Object.values(action.payload);
        state.error = '';
      });
      builder.addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.booksLibrary = [];
        state.error = action.error.message;
      });
      builder.addCase(addBooks.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(addBooks.fulfilled, (state) => {
        state.loading = false;
      });
      builder.addCase(addBooks.rejected, (state) => {
        state.loading = false;
      });
    },
  },
);

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
