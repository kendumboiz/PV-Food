import Images from "constants/images";
import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import "./Collection.css";

function Collection(props) {
  return (
    <div className="collection">
      <Slide left delay={100}>
        <div className="collection_content">
          <div className="content">
            <Slide left delay={200}>
              <h2>Collection</h2>
            </Slide>
            <p>
              <Slide left delay={200}>
                A journey into CBD Cannabis, our Worlds
              </Slide>
              <Slide left delay={300}>
                created to accompany you in the discovery of
              </Slide>
              <Slide left delay={400}>
                a plant with properties handed down over
              </Slide>
              <Slide left delay={500}>
                millennia.
              </Slide>
            </p>
          </div>
          <div className="drop-shadow"></div>
        </div>
      </Slide>

      <div className="food_collection">
        <div className="rectang"></div>
        <Zoom>
          <div className="food_img">
            <img src={Images.CEREALS} alt="" />
          </div>
        </Zoom>
        <div className="text">
          <Bounce top delay={400}>
            <p>Collection</p>
          </Bounce>
          <Bounce top delay={500}>
            <Link to="/product/food" className="col_text">
              Food
            </Link>
          </Bounce>
        </div>
      </div>

      <div className="cloth_collection">
        <Zoom delay={600}>
          <div className="cloth_img">
            <img src={Images.CLOTH} alt="" />
          </div>
        </Zoom>
        <div className="text closer">
          <Bounce top delay={700}>
            <p>Collection</p>
          </Bounce>
          <Bounce top delay={800}>
            <a className="col_text" href>
              Clothing
            </a>
          </Bounce>
        </div>
      </div>

      <div className="decor_collection">
        <Zoom delay={900}>
          <div className="decor_img">
            <img src={Images.DECOR} alt="" />
          </div>
        </Zoom>
        <div className="text closer">
          <Bounce top delay={1000}>
            <p>Collection</p>
          </Bounce>
          <Bounce top delay={1100}>
            <a className="col_text" href>
              Decor
            </a>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default Collection;
