import axios from "axios";

export const getUserData = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    idToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhZmE4MTJiMTY5NzkxODBmYzc4MjA5ZWE3Y2NhYjkxZTY4NDM2NTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHYtZm9vZCIsImF1ZCI6InB2LWZvb2QiLCJhdXRoX3RpbWUiOjE2NTA0NDE1MTEsInVzZXJfaWQiOiJycmxiQUloSFBFaDdHb1ZRRVczZXlodUVSQUMzIiwic3ViIjoicnJsYkFJaEhQRWg3R29WUUVXM2V5aHVFUkFDMyIsImlhdCI6MTY1MDQ0MTUxMSwiZXhwIjoxNjUwNDQ1MTExLCJlbWFpbCI6ImxlZHVjbmdoaTI4MTIyMDAwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJsZWR1Y25naGkyODEyMjAwMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ndujsT45Pdll0ORaeA6y7RVBX-91yWm7FNEyS8i_oxjdGUU2QSxVqAFVXXNtaKIuJbNveVZe4WuCPkQjMMiiuH218azpr1Hx9uk55pzdT-uuIBQZqpIiXm32u5p9ooeWf8gPWWH9h_z2E6vYilfky8YYOrXp1kewXRLRgI198ek7l7s2ELF7516GpNS3A1OHpNft4Bkt3hU7s00jEcBfzloH_vbvqyrpiwlUfU6Z2DYd_brlgPxg1Z1_7GhkpGkQUq0_cfn9OXMmz9GsUFuCjYwxnpo11EGxZoTCOr6VGfkn_4PfQ5lMqFdhoBh57OMQeDXlwSbo6dt1nFYjCuvz8Q",
  };
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API}`,
      body,
      config
    );
    console.log("🚀 ~ file: profile.js ~ line 6 ~ getUserData ~ res", res.data);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

export const updateProfile = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    idToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhZmE4MTJiMTY5NzkxODBmYzc4MjA5ZWE3Y2NhYjkxZTY4NDM2NTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHYtZm9vZCIsImF1ZCI6InB2LWZvb2QiLCJhdXRoX3RpbWUiOjE2NTA0NDE1MTEsInVzZXJfaWQiOiJycmxiQUloSFBFaDdHb1ZRRVczZXlodUVSQUMzIiwic3ViIjoicnJsYkFJaEhQRWg3R29WUUVXM2V5aHVFUkFDMyIsImlhdCI6MTY1MDQ0MTUxMSwiZXhwIjoxNjUwNDQ1MTExLCJlbWFpbCI6ImxlZHVjbmdoaTI4MTIyMDAwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJsZWR1Y25naGkyODEyMjAwMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ndujsT45Pdll0ORaeA6y7RVBX-91yWm7FNEyS8i_oxjdGUU2QSxVqAFVXXNtaKIuJbNveVZe4WuCPkQjMMiiuH218azpr1Hx9uk55pzdT-uuIBQZqpIiXm32u5p9ooeWf8gPWWH9h_z2E6vYilfky8YYOrXp1kewXRLRgI198ek7l7s2ELF7516GpNS3A1OHpNft4Bkt3hU7s00jEcBfzloH_vbvqyrpiwlUfU6Z2DYd_brlgPxg1Z1_7GhkpGkQUq0_cfn9OXMmz9GsUFuCjYwxnpo11EGxZoTCOr6VGfkn_4PfQ5lMqFdhoBh57OMQeDXlwSbo6dt1nFYjCuvz8Q",
    displayName: "",
    photoUrl: "",
    returnSecureToken: true,
  };
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API}`,
      body,
      config
    );
    console.log(
      "🚀 ~ file: profile.js ~ line 46 ~ updateProfile ~ res",
      res.data
    );
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};
