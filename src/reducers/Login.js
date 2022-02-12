const initialState = {
  data: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TOKEN": {
      console.log("token : ", action.payload);
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
