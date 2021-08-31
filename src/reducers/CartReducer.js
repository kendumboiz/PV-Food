import {
  ADD_PRODUCT,
  DECREASE_QTY,
  INCREASE_QTY,
  REMOVE_PRODUCT,
  UPDATE_QTY,
} from "constants/global";

const initialState = {
  list: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newCart = [...state.list];
      newCart.push(action.payload);
      // console.log("new list : ", newCart);
      return {
        ...state,
        list: newCart,
      };
    }

    case REMOVE_PRODUCT: {
      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
      state.list.splice(index, 1);
      // console.log("list : ", state.list);
      // console.log("state remove : ", index);
      return {
        ...state,
        list: state.list,
      };
    }

    case UPDATE_QTY: {
      // console.log("action payload :", action.payload.item);
      // state.list.forEach((item) => {
      //   if (item.id === action.payload.item.id) {
      //     item.qty += 1;
      //   }
      // });

      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
      // alert(index);
      state.list[index].qty += 1;
      console.log("list : ", state.list);
      console.log("state increase : ", index);

      return {
        ...state,
        list: state.list,
      };
    }

    case INCREASE_QTY: {
      // console.log(" && :", action.payload.item);
      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
      state.list[index].qty += 1;
      console.log("list : ", state.list);
      console.log("state increase : ", index);

      return {
        ...state,
        list: state.list,
      };
    }

    case DECREASE_QTY: {
      // console.log("action payload :", action.payload.item);
      let index = state.list.findIndex(
        (item) =>
          item.category === action.payload.item.category &&
          item.id === action.payload.item.id
      );
      state.list[index].qty -= 1;
      console.log("list : ", state.list);
      console.log("state decrease : ", index);
      return {
        ...state,
        list: state.list,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
