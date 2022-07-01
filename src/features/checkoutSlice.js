import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    shippingInfo: null,
  },
  reducers: {
    postShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { postShippingInfo } = checkoutSlice.actions;

export default checkoutSlice.reducer;
