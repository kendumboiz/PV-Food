import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASTKET } from "constants/global";

const initialState = {
  basketNumbers: 0,
};

const addToBasket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET: {
      return {
        basketNumbers: state.basketNumbers + 1,
      };
    }
    case GET_NUMBERS_BASTKET: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default addToBasket;
