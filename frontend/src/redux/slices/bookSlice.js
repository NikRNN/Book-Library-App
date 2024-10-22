import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createBookWithId } from "../../utils/createBookWithId";

const initialState = [];

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
});

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;

export const thunkFunction = async (dispatch, getstate) => {
  try {
    const res = await axios.get("http://localhost:4000/random-book");
    console.log(res);
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWithId(res.data, "API")));
    }
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default bookSlice.reducer;
