import React from "react";
import About from "./About";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Collection from "./Collection";
import Connect from "./Connect";
import Feedback from "./Feedback";

function MainPage(props) {
  return (
    <div className="main-page">
      <Banner />
      <About />
      <Collection />
      <BestSeller />
      <Connect />
      <Feedback />
    </div>
  );
}

export default MainPage;
