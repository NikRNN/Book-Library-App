import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createBookWithId } from "../../utils/createBookWithId";
import { setError } from "./errorSlice";

const initialState = {
  books: [],
  isLoadingApi: false,
};

export const fetchBook = createAsyncThunk(
  "book/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);

      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError("Проблема соединения с сервером"));
      throw error;
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      return { ...state, books: state.books.concat(action.payload) };
    },

    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    },

    toggleFavorite: (state, action) => {
      return {
        ...state,
        books: state.books.map((book) => {
          return book.id === action.payload.id
            ? { ...book, isFavorite: !book.isFavorite }
            : book;
        }),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        return { ...state, isLoadingApi: true };
      })

      .addCase(fetchBook.fulfilled, (state, action) => {
        if (action.payload.title && action.payload.author) {
          return {
            ...state,
            books: state.books.concat(createBookWithId(action.payload, "API")),
            isLoadingApi: false,
          };
        }
        return { ...state, isLoadingApi: false };
      })

      .addCase(fetchBook.rejected, (state, action) => {
        return {
          ...state,
          books: state.books.concat(createBookWithId(action.payload, "API")),
        };
      });
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;

export default bookSlice.reducer;
