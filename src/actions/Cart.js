import {
  ADD_PRODUCT,
  DECREASE_QTY,
  INCREASE_QTY,
  REMOVE_PRODUCT,
  UPDATE_QTY,
} from "constants/global";

export const addNewProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const updateProduct = (item) => {
  return {
    type: UPDATE_QTY,
    payload: {
      item,
    },
  };
};

export const increaseProduct = (item) => {
  return {
    type: INCREASE_QTY,
    payload: item,
  };
};

export const decreaseProduct = (item) => {
  return {
    type: DECREASE_QTY,
    payload: item,
  };
};

export const removeProduct = (item) => {
  return {
    type: REMOVE_PRODUCT,
    payload: item,
  };
};
