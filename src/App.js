import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./assets/Styles/GlobalStyles.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Checkout from "components/Checkout";
import Error from "components/NotFound";
import FoodPage from "pages/FoodPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "pages/Main";
import ProfileForm from "pages/Profile";
import { fab } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
// import productApi from "api/productApi";
import { library } from "@fortawesome/fontawesome-svg-core";
import { loginProfile } from "actions/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

library.add(fab);

// const Pvfood = React.lazy(() => import("pages"));

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
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/product" element={<FoodPage />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/profile" element={<ProfileForm />} />

          <Route element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
