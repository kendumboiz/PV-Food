import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    list: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(
        "🚀 ~ file: usersSlice.js ~ line 11 ~ action.payload",
        action.payload
      );
      state.list.push(action.payload);
    },

    removeProduct: (state, action) => {
      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
      state.list.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.list));
    },

    updateQty: (state, action) => {
      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
      // alert(index);
      state.list[index].qty += 1;
    },

    decreaseQty: (state, action) => {
      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
      state.list[index].qty -= 1;
    },
  },
});

export const { addProduct, removeProduct, updateQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducers;
