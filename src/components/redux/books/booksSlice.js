import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [bookList],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.bookList = [...state.bookList, newBook];
    },
    removeBook: (state, action) => {
      console.log('hello')
      const itemId = action.payload;
      console.log('fjhgvjnb',itemId);
      state.bookList = state.bookList.filter((item) => item.item_id !== itemId);
      console.log(state.bookList)
    },
  },
});

export const { removeBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;
