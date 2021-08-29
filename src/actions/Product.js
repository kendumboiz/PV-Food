import { DISPLAY_COMPONENT } from "constants/global";

export const showEditCheckout = () => {
  return {
    type: "SHOW_EDIT_CHECKOUT",
  };
};

export const showListItem = () => {
  return {
    type: "SHOW_LIST",
  };
};

export const showCheckout = () => {
  return {
    type: "SHOW_CHECKOUT",
  };
};

export const activeDelivery = () => {
  return {
    type: "ACTIVE_DELIVERY",
  };
};

export const displayComponent = (data) => {
  return {
    type: DISPLAY_COMPONENT,
    payload: data,
  };
};
