import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
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
    setFilterAuthor: (state, action) => {
      return { ...state, author: action.payload };
    },
  },
});

export const { setFilterTitle, resetFilters, setFilterAuthor } =
  filterSlice.actions;

console.log(filterSlice.actions.setFilterAuthor());

export default filterSlice.reducer;
