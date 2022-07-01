import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(
        "🚀 ~ file: cartSlice.js ~ line 10 ~ state, action",
        state,
        action
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
      // localStorage.setItem("cart", JSON.stringify(state.list));
    },
    updateQty: (state, action) => {
      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
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

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, updateQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState: {
//     list: [],
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       console.log(
//         "🚀 ~ file: cartSlice.js ~ line 10 ~ state, action",
//         state,
//         action
//       );
//       state.list.push(action.payload);
//     },

//     removeProduct: (state, action) => {
//       let index = state.list.findIndex(
//         (item) =>
//           item.category === action.payload.item.category &&
//           item.id === action.payload.item.id
//       );
//       state.list.splice(index, 1);
//       // localStorage.setItem("cart", JSON.stringify(state.list));
//     },

//     updateQty: (state, action) => {
//       let index = state.list.findIndex(
//         (item) =>
//           item.category === action.payload.item.category &&
//           item.id === action.payload.item.id
//       );
//       state.list[index].qty += 1;
//     },

//     decreaseQty: (state, action) => {
//       let index = state.list.findIndex(
//         (item) =>
//           item.category === action.payload.item.category &&
//           item.id === action.payload.item.id
//       );
//       state.list[index].qty -= 1;
//     },
//   },
// });

// export const { addProduct, removeProduct, updateQty, decreaseQty } =
//   cartSlice.actions;

// export default cartSlice.reducers;
