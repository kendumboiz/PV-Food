import Images from "constants/images";
import React from "react";
import Slide from "react-reveal/Slide";
import "./BestSeller.css";

function BestSeller(props) {
  return (
    <div className="best-seller">
      <Slide left delay={100}>
        <div className="sell_content">
          <h2>
            <Slide left delay={200}>
              Just your
            </Slide>{" "}
            <Slide left delay={300}>
              custom
            </Slide>
            <Slide left delay={400}>
              prescription
            </Slide>
          </h2>

          <p>
            <Slide left delay={500}>
              A journey into CBD Cannabis, our Worlds created to
            </Slide>
            <Slide left delay={600}>
              accompany you in the discovery of a plant with
            </Slide>
            <Slide left delay={700}>
              properties handed down over millennia.
            </Slide>
          </p>

          <Slide left delay={600}>
            <h4>$50.000</h4>
          </Slide>
          <div className="content_icon">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </div>
        </div>
      </Slide>
      <Slide left delay={100}>
        <div className="sell_img">
          <img src={Images.CEREALS_BIG} alt="" />
        </div>
      </Slide>
      <Slide left delay={800}>
        <div className="sell_rectang"></div>
      </Slide>
    </div>
  );
}

export default BestSeller;
