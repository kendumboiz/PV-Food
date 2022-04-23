import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const uiConfig = {
  signInFlow: "redirect",
  // signInSuccessUrl: '/signedIn',

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export const submit = (e) => {
  e.preventDefault();
};

export const logInWithEmailAndPassword = (email, password) => {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      const user = cred.user;
      console.log(
        "🚀 ~ file: index.jsx ~ line 50 ~ signInWithEmailAndPassword ~ user",
        user
      );
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

export const signinWithOAuth = async (
  values,
  { setSubmitting },
  { history }
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = {
    email: values.email,
    password: values.password,
    returnSecureToken: true,
  };

  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API}
      `,
      body,
      config
    );
    console.log(
      "🚀 ~ file: login.js ~ line 50 ~ SigninWithOAuth ~ res",
      res.data
    );

    await saveCookie(res.data);
    setTimeout(() => {
      // console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    history.push(`/profile`);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

const saveCookie = (data) => {
  // const { idToken, expiresIn, email, displayName  } = data;

  // cookies.set("user", user, {
  //   path: "/",
  //   maxAge: expiresIn,
  // });

  cookies.set("information", data, {
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  // cookies.set("token_type", email, {
  //   path: "/",
  //   maxAge: expiresIn,
  // });
};

export const openRegisterForm = (
  { setLoginForm },
  { setForgotForm },
  { setRegisterForm }
) => {
  setLoginForm(false);
  setForgotForm(false);
  setRegisterForm(true);
};

export const openLoginForm = (
  { setForgotForm },
  { setRegisterForm },
  { setLoginForm }
) => {
  setForgotForm(false);
  setRegisterForm(false);
  setLoginForm(true);
};

export const openForgotForm = (
  { setLoginForm },
  { setRegisterForm },
  { setForgotForm }
) => {
  setLoginForm(false);
  setRegisterForm(false);
  setForgotForm(true);
};
