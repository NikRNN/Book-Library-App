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
  },
});

export const { setFilterTitle } = filterSlice.actions;
console.log(filterSlice.actions.setFilterTitle("123"));

export default filterSlice.reducer;
console.log(filterSlice);
