import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./books/reducer";
import bookSlice from "./slices/bookSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: { books: bookSlice, filter: filterReducer },
});

export default store;
