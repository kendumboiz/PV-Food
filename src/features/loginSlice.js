import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    token: null,
    url: null,
    oob: "",
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },

    saveImg: (state, action) => {
      state.url = action.payload;
    },

    saveOOB: (state, action) => {
      state.oob = action.payload;
    },
  },
});

export const { saveToken, saveImg, saveOOB } = loginSlice.actions;

export default loginSlice.reducers;
