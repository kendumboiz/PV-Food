import {
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
