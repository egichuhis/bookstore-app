import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  appID: localStorage.getItem('appID') || '',
  booksLibrary: [],
  error: '',
};

export const createNewApp = createAsyncThunk('book/createNewApp', async () => {
  const response = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
  );

  const appID = response.data;
  localStorage.setItem('appID', appID);
});

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => axios
  .get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${initialState.appID}/books`)
  .then((response) => response.data));

export const postBooks = createAsyncThunk('book/postBooks', async (newBookDetails) => {
  const response = await axios.post(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${initialState.appID}/books`,
    newBookDetails,
  );
  return response.data;
});

export const booksSlice = createSlice(
  {
    name: 'book',
    initialState,
    reducers: {
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
      builder.addCase(postBooks.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(postBooks.fulfilled, (state) => {
        state.loading = false;
      });
      builder.addCase(postBooks.rejected, (state) => {
        state.loading = false;
      });
      builder.addCase(createNewApp.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(createNewApp.fulfilled, (state) => {
        state.loading = false;
      });
      builder.addCase(createNewApp.rejected, (state) => {
        state.loading = false;
      });
    },
  },
);

export default booksSlice.reducer;
