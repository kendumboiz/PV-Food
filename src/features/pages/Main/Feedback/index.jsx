import Images from "constants/images";
import React from "react";
import "./Feedback.css";

function Feedback(props) {
  return (
    <div className="feedback">
      <div className="feedback_rectang"></div>
      <div className="feedback_img">
        <img src={Images.FEED_BACK} alt="feedback" />
      </div>
      <div className="feedback_content">
        <div className="title">
          <p>Feedback</p>
        </div>
        <h2>Some Feedback from customers</h2>
        <div className="c-btn" id="c-btn">
          <button className="fetchAPI">
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
