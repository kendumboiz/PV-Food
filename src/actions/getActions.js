import { GET_NUMBERS_BASTKET } from "constants/global";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Getting all Basket Numbers");
    dispatch({
      type: GET_NUMBERS_BASTKET,
    });
  };
};
