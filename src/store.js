import cartSlice from "features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "services/productService";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// import rootReducer from "reducers";
// import { createStore } from "redux";

// const store = createStore(rootReducer);
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

// export default store;
