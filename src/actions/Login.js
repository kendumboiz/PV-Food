export const loginProfile = (data) => {
  return {
    type: "SAVE_TOKEN",
    payload: data,
  };
};

export const profileImgUrl = (data) => {
  return {
    type: "SAVE_IMG",
    payload: data,
  };
};

export const saveOOB = (data) => {
  return {
    type: "SAVE_OOB",
    payload: data,
  };
};
