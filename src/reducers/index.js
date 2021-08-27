import { combineReducers } from "redux";
import addToBasket from "./BasketReducer";
import cartReducer from "./Cart";
import { shippingInfoReducer } from "./shipping";
import productsReducer from "./Product";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  basket: addToBasket,
  shipping: shippingInfoReducer,
});

export default rootReducer;
