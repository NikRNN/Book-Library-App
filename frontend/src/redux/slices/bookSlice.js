import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createBookWithId } from "../../utils/createBookWithId";

const initialState = [];

export const fetchBook = createAsyncThunk("book/fetchBook", async () => {
  const res = await axios.get("http://localhost:4000/random-book");
  console.log(res.data);
  return res.data;
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload];
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
    toggleFavorite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload.id
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        return [...state, createBookWithId(action.payload, "API")];
      }
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;

export default bookSlice.reducer;
