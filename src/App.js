import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { Suspense, useEffect } from "react";
import "./assets/Styles/GlobalStyles.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FoodPage from "features/pages/FoodPage";
import Error from "components/NotFound";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Checkout from "components/Checkout";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Configure Firebase.

library.add(fab);
const Pvfood = React.lazy(() => import("./features/pages"));

const config = {
  apiKey: "AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM",
  authDomain: "myproject-1234.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

// Configure Firebase.
// const config = {
//   apiKey: "AIzaSyAqfUkRmKr4wCKMzEZYZRXDwiax9CXQYng",
//   authDomain: "pv-food.firebaseapp.com",
// };
// firebase.initializeApp(config);

function App() {
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
