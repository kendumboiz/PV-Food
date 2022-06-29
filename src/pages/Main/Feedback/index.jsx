import Images from "constants/images";
import Zoom from "react-reveal/Zoom";
import React from "react";
import "./Feedback.css";

function Feedback(props) {
  return (
    <div className="feedback">
      <Zoom>
        <div className="feedback_rectang"></div>
      </Zoom>
      <Zoom>
        <div className="feedback_img">
          <img src={Images.FEED_BACK} alt="feedback" />
        </div>
      </Zoom>
      <div className="feedback_content">
        <div className="title">
          <p>Feedback</p>
        </div>
        <h2>Some Feedback from customers</h2>
        <div className="c-btn">
          <button className="feedback_btn">
            <span class="circlee" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">See all feedback</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
