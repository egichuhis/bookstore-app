import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookCategories: ['Fiction', 'Romance', 'History', 'Science', 'Fantasy'],
};

export const categoriesSlice = createSlice(
  {
    name: 'categories',
    initialState,
    reducers: {
      checkStatus: (state) => {
        state.categories = 'Under construction';
      },
    },
  },
);

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
