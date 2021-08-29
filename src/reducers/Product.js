import { DISPLAY_COMPONENT } from "constants/global";

const initialState = {
  showComponent: localStorage.getItem("component") || "List product",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_COMPONENT: {
      console.log(action.payload.component);
      localStorage.setItem("component", action.payload.component);
      return {
        ...state,
        showComponent: action.payload.component,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
