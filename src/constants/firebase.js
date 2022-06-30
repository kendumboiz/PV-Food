import "firebase/compat/auth";
import "firebase/compat/firestore";

import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAqfUkRmKr4wCKMzEZYZRXDwiax9CXQYng",
  authDomain: "pv-food.firebaseapp.com",
  projectId: "pv-food",
  storageBucket: "pv-food.appspot.com",
  messagingSenderId: "641135637611",
  appId: "1:641135637611:web:738db0a02087d2c7686d2e",
  measurementId: "G-1YWWVYZY5H",
};
const app = firebase.initializeApp(firebaseConfig);

export const unregisterAuthObserver = firebase
  .auth()
  .onAuthStateChanged(async (user) => {
    if (!user) {
      console.log("User is not logged in ");
      return;
    }
    const token = await user.getIdToken();

    // if (token) dispatch(loginProfile(user._delegate));
    console.log("Logged user : ", user.photoURL);
    console.log("user token : ", token);
  });
export const storage = getStorage(app);
