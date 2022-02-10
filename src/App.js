import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import productApi from "api/productApi";
import Checkout from "components/Checkout";
import Error from "components/NotFound";
import FoodPage from "features/pages/FoodPage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./assets/Styles/GlobalStyles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

library.add(fab);
const Pvfood = React.lazy(() => import("./features/pages"));

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const res = await productApi.getAll();
        console.log(
          "🚀 ~ file: App.js ~ line 30 ~ fetchProductList ~ res",
          res
        );
      } catch (error) {
        console.log(
          "🚀 ~ file: App.js ~ line 39 ~ fetchProductList ~ error",
          error
        );
      }
    };
    fetchProductList();
  }, []);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("User is not logged in ");
          return;
        }
        const token = await user.getIdToken();
        console.log("Logged user : ", user.displayName);
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

            <Route component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
