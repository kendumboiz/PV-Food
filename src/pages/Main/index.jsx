import About from "../../components/About";
import Banner from "../../components/HomeBanner";
import BestSeller from "../../components/BestSeller";
import Collection from "../../components/Collection";
import Connect from "../../components/Connect";
import Feedback from "../../components/Feedback";
import React from "react";

function Home(props) {
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

export default Home;
