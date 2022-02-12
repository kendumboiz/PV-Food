export const loginProfile = (data) => {
  return {
    type: "SAVE_TOKEN",
    payload: data,
  };
};
