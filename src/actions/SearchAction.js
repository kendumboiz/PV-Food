export const searchProduct = (data) => {
  return {
    type: "SEARCH",
    payload: data,
  };
};
