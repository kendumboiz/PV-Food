import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import productsReducer from "./Product";
import { shippingInfoReducer } from "./shippingReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  shipping: shippingInfoReducer,
});

export default rootReducer;
