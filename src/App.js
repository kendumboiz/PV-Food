import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import productApi from "api/productApi";
import Checkout from "components/Checkout";
import Error from "components/NotFound";
import FoodPage from "features/pages/FoodPage";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./assets/Styles/GlobalStyles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { loginProfile } from "actions/Login";
import ProfileForm from "features/pages/Profile";

library.add(fab);
const Pvfood = React.lazy(() => import("./features/pages"));

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
export const storage = getStorage(app);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("User is not logged in ");
          return;
        }
        const token = await user.getIdToken();
        if (token) dispatch(loginProfile(user._delegate));
        console.log("Logged user : ", user.photoURL);
        console.log("user token : ", token);
      });
    return () => unregisterAuthObserver();
  }, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Pvfood} />
            <Route path="/product" component={FoodPage} />

            <Route path="/checkout" component={Checkout} />

            <Route path="/profile" component={ProfileForm} />

            <Route component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
