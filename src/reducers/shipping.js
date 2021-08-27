const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  district: "",
  country: "",
  city: "",
  mobile: "",
  deliveryId: null,
  methodTitle: null,
  methodContent: null,
  methodNote: null,
};

export const shippingInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INFO": {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        address: action.payload.address,
        district: action.payload.district,
        country: action.payload.country,
        city: action.payload.city,
        mobile: action.payload.mobile,
        deliveryId: action.payload.deliveryId,
        methodTitle: action.payload.methodTitle,
        methodContent: action.payload.methodContent,
        methodNote: action.payload.methodNote,
      };
    }

    // case "SET_DELIVERY": {
    //   return {
    //     ...state,
    //   };
    // }

    default:
      return state;
  }
};
