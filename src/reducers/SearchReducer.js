const initialState = {
  searchTerm: "",
  filterTerm: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH": {
      // console.log(
      //   "🚀 ~ file: SearchReducer.js ~ line 11 ~ search ~ action.payload",
      //   action.payload
      // );
      return {
        ...state,
        searchTerm: action.payload,
      };
    }

    case "FILTER": {
      // console.log(
      //   "🚀 ~ file: SearchReducer.js ~ line 11 ~ filter ~ action.payload",
      //   action.payload
      // );
      return {
        ...state,
        filterTerm: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
