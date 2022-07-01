import cartReducer from "features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "features/filterSlice";
import loginReducer from "features/loginSlice";
import { productApi } from "services/productService";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    login: loginReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
setupListeners(store.dispatch);
