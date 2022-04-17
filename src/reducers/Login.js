const initialState = {
  data: null,
  url: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TOKEN": {
      // console.log("token : ", action.payload);
      return {
        ...state,
        data: action.payload,
      };
    }

    case "SAVE_IMG": {
      // console.log(
      //   "🚀 ~ file: Login.js ~ line 21 ~ loginReducer ~ action.payload",
      //   action.payload
      // );
      return {
        ...state,
        url: action.payload,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
