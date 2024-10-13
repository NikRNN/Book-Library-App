import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterTitle: (state, action) => {
      return { ...state, title: action.payload };
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setFilterTitle, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
