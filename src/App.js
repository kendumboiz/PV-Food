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
import { library } from "@fortawesome/fontawesome-svg-core";
import { unregisterAuthObserver } from "constants/firebase";
import { useEffect } from "react";

library.add(fab);

function App() {
  useEffect(() => {
    unregisterAuthObserver();
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="home" />} />

          <Route path="home" element={<Home />} />

          <Route path="product/*" element={<FoodPage />} />

          <Route path="checkout" element={<Checkout />} />

          <Route path="profile" element={<ProfileForm />} />

          <Route element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
