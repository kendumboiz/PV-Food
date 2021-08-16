import Images from "constants/images";
import React from "react";

import "./Collection.css";

function Collection(props) {
  return (
    <div className="collection">
      <div className="collection_content">
        <div className="content">
          <h2>Collection</h2>
          <p>
            A journey into CBD Cannabis, our Worlds created to accompany you in
            the discovery of a plant with properties handed down over millennia.
          </p>
        </div>
        <div className="drop-shadow"></div>
      </div>

      <div className="food_collection">
        <div className="rectang"></div>
        <div className="food_img">
          <img src={Images.CEREALS} alt="" />
        </div>
        <div className="text">
          <p>Collection</p>
          <a href="/home/food" className="col_text">
            Food
          </a>
        </div>
      </div>

      <div className="cloth_collection">
        <div className="cloth_img">
          <img src={Images.CLOTH} alt="" />
        </div>
        <div className="text closer">
          <p>Collection</p>
          <a className="col_text" href>
            Clothing
          </a>
        </div>
      </div>

      <div className="decor_collection">
        <div className="decor_img">
          <img src={Images.DECOR} alt="" />
        </div>
        <div className="text closer">
          <p>Collection</p>
          <a className="col_text" href>
            Decor
          </a>
        </div>
      </div>
    </div>
  );
}

export default Collection;
