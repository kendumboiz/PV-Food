import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchTerm: "",
    filterTerm: null,
  },
  reducers: {
    postSearchKeyword: (state, action) => {
      state.searchTerm = action.payload;
    },

    postFilterKeyword: (state, action) => {
      state.filterTerm = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { postFilterKeyword, postSearchKeyword } = filterSlice.actions;

export default filterSlice.reducer;
