import Images from "constants/images";
import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner_container">
        <div className="banner_contain-circle">
          <div className="banner_circle-middle">
            <div className="circle_star small_circle">
              <button>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </button>
            </div>
            <div className="circle_plus small_circle">
              <button>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <div className="banner_circle-item">
              <img src={Images.FRICE_CHICK} alt="" />
            </div>
            <svg viewBox="0 0 210 297" className="line left">
              <path
                className="polymorph"
                d="M 0 350 q 150 -600 400 -600"
                fill="none"
                stroke="#c89b7e"
                strokeWidth="2em"
              />
            </svg>
            <svg viewBox="0 0 210 297" className="linee left">
              <path
                className="polymorph"
                d="M 0 350 q 150 -600 400 -600"
                fill="none"
                stroke="#c89b7e"
                strokeWidth="2em"
              />
            </svg>
            <svg viewBox="0 0 210 297" className="line-bottom left">
              <path
                className="polymorph"
                d="M 0 350 q 150 -600 400 -600"
                fill="none"
                stroke="#c89b7e"
                strokeWidth="2em"
              />
            </svg>
            <svg viewBox="0 0 210 297" className="linee-bottom left">
              <path
                className="polymorph"
                d="M 0 350 q 150 -600 400 -600"
                fill="none"
                stroke="#c89b7e"
                strokeWidth="2em"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="banner_contain-content">
        <div className="content_text">
          <p>
            <hr /> ❤ Fresh squid is carefully selected, marinated with spices
            while eating combined with a special processing process to help the
            squid retain its softness and moderate toughness, when eating, you
            will feel the harmonious sweet and salty taste.
          </p>
          <a href> See collection </a>
          <img src={Images.CONNECT_HAND} alt="" />
        </div>
        <div className="drop-shadow"></div>
      </div>
      <div className="banner_thumb">
        <ul className="thumb" data>
          <li>Garlic seaweed</li>
          <li>Fresh squid</li>
          <li>Chili garlic pork skin</li>
        </ul>
      </div>
      <div className="banner_warning">
        <p className="warning_time">24</p>
        <p className="warning_hrs">hrs</p>
        <p className="warning_text">
          STORAGE DRY, COOL, AVOID DIRECT SUNSHIP, CLOSED AFTER OPENING.
        </p>
      </div>
      <div className="banner_note">
        <p className="note">
          This is a great snack to sip and also a convenient drink
        </p>
      </div>
    </div>
  );
}

export default Banner;
