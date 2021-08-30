const initialState = {
  searchTerm: "",
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH": {
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    }

    default:
      return state;
  }
};

export default search;
