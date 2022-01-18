export const searchProduct = (data) => {
  return {
    type: "SEARCH",
    payload: data,
  };
};

export const filterProduct = (data) => {
  return {
    type: "FILTER",
    payload: data,
  };
};
