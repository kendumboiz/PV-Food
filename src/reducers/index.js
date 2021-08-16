import { combineReducers } from "redux";
import addToBasket from "./BasketReducer";
import cartReducer from "./Cart";

const rootReducer = combineReducers({
  cart: cartReducer,
  basket: addToBasket,
});

export default rootReducer;
