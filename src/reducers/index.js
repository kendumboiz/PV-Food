import cartSlice from "features/cartSlice";
import { combineReducers } from "redux";
import loginReducer from "./Login";
import productsReducer from "./Product";
import searchReducer from "./SearchReducer";
import { shippingInfoReducer } from "./shippingReducer";

// import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  // cart: cartReducer,
  cart: cartSlice,
  shipping: shippingInfoReducer,
  search: searchReducer,
  login: loginReducer,
});

export default rootReducer;
