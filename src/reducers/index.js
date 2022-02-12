import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import loginReducer from "./Login";
import productsReducer from "./Product";
import searchReducer from "./SearchReducer";
import { shippingInfoReducer } from "./shippingReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  shipping: shippingInfoReducer,
  search: searchReducer,
  login: loginReducer,
});

export default rootReducer;
