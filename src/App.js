import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { Suspense } from "react";
import "./assets/Styles/GlobalStyles.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Pvfood = React.lazy(() => import("./features/pages"));

function App() {
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
