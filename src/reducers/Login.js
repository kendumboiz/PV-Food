const initialState = {
  data: null,
  url: null,
  oob: "",
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

    case "SAVE_OOB": {
      // console.log(
      //   "🚀 ~ file: Login.js ~ line 21 ~ loginReducer ~ action.payload",
      //   action.payload
      // );
      return {
        ...state,
        oob: action.payload,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
