import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookList: [],
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/h8QLbOhMuRSEoxW4wYBf/books';

export const getBookItems = createAsyncThunk(
  'books/getBookItems',
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBooks = createAsyncThunk('books/addBooks', async (book) => {
  await axios.post(`${url}`, {
    item_id: book.id,
    title: book.title,
    category: book.category,
    author: book.author,
  });
  return book;
});

export const deleteBooks = createAsyncThunk(
  'book/deleteBooks',
  async (itemId) => {
    await axios.delete(`${url}/${itemId}`);
    return itemId;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.bookList = action.payload || [];
      });
  },
});

export default booksSlice.reducer;
