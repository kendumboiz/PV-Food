import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { Suspense, useEffect } from "react";
import "./assets/Styles/GlobalStyles.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Pvfood = React.lazy(() => import("./features/pages"));

// Configure Firebase.
// const config = {
//   apiKey: "AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM",
//   authDomain: "myproject-1234.firebaseapp.com",
// };
// firebase.initializeApp(config);

function App() {
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase
  //     .auth()
  //     .onAuthStateChanged(async (user) => {
  //       if (!user) {
  //         console.log("User is not logged in ");
  //         return;
  //       }
  //       const token = await user.getIdToken();
  //       console.log("Logged user : ", user.displayName);
  //       console.log("user token : ", token);
  //     });
  //   return () => unregisterAuthObserver();
  // }, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Pvfood} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
