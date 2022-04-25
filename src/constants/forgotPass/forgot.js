import axios from "axios";

export const handleResetPassword = async (
  values,
  { setSubmitting },
  { setNotify },
  { setOpen }
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    requestType: "PASSWORD_RESET",
    email: values.email,
  };
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API}`,
      body,
      config
    );
    console.log(
      "🚀 ~ file: forgot.js ~ line 19 ~ handleResetPassword ~ res",
      res.data
    );
    setTimeout(() => {
      setSubmitting(false);
      setOpen(true);
      setNotify({
        message: "Plaese check your email !!",
        severity: "success",
      });
    }, 1000);
  } catch (error) {
    if (error.response.status === 400) {
      setOpen(true);
      setNotify({
        message: `${error.response.data.error.message}`,
        severity: "error",
      });
    }
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

export const handleVerifyResetPassword = async (values, { setSubmitting }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    oobCode: "",
  };
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=${process.env.REACT_APP_FIREBASE_API}`,
      body,
      config
    );
    console.log(
      "🚀 ~ file: forgot.js ~ line 45 ~ handleVerifyResetPassword ~ res",
      res.data
    );
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

export const handleConfirmResetPassword = async (values, { setSubmitting }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    oobCode: "",
    newPassword: "",
  };
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API}`,
      body,
      config
    );
    console.log(
      "🚀 ~ file: forgot.js ~ line 19 ~ handleResetPassword ~ res",
      res.data
    );
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};
