import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  favorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterTitle: (state, action) => {
      return { ...state, title: action.payload };
    },
    resetFilters: () => {
      return initialState;
    },
    setFavoriteFilter: (state, action) => {
      return { ...state, favorite: action.payload };
    },
    setFilterAuthor: (state, action) => {
      return { ...state, author: action.payload };
    },
  },
});

export const {
  setFilterTitle,
  resetFilters,
  setFilterAuthor,
  setFavoriteFilter,
} = filterSlice.actions;

// console.log(filterSlice.actions.setFilterAuthor("nikita"));

export default filterSlice.reducer;
