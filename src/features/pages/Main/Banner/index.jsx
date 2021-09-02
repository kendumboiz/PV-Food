import Images from "constants/images";
import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
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
              <Zoom>
                <img src={Images.FRICE_CHICK} alt="" />
              </Zoom>
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
            <hr />
            <Fade delay={100} bottom>
              ❤ Fresh squid is carefully selected, marinated with spices
            </Fade>
            <Fade delay={200} bottom>
              while eating combined with a special processing process
            </Fade>
            <Fade delay={300} bottom>
              {" "}
              to help the squid retain its softness and moderate
            </Fade>
            <Fade delay={400} bottom>
              toughness , when eating,you will feel the harmonious
            </Fade>
            <Fade delay={500} bottom>
              sweetand salty taste
            </Fade>
          </p>
          <a href> See collection </a>
          <Zoom>
            <img src={Images.CONNECT_HAND} alt="" />
          </Zoom>
        </div>
        <div className="drop-shadow"></div>
      </div>
      <div className="banner_thumb">
        <ul className="thumb">
          {/* <Fade delay={300} bottom> */}
          <li>
            {" "}
            <Fade delay={300} bottom>
              Garlic seaweed
            </Fade>{" "}
          </li>
          {/* </Fade> */}
          {/* <Fade delay={400} bottom> */}
          <li>
            <Fade delay={400} bottom>
              Fresh squid
            </Fade>
          </li>
          {/* </Fade> */}
          {/* <Fade delay={500} bottom> */}
          <li>
            <Fade delay={500} bottom>
              Chili garlic pork skin
            </Fade>
          </li>
          {/* </Fade> */}
        </ul>
      </div>
      <div className="banner_warning">
        <Fade delay={600} bottom>
          <p className="warning_time">24</p>
        </Fade>
        <Fade delay={700} bottom>
          <p className="warning_hrs">hrs</p>
        </Fade>
        <Fade delay={800} bottom>
          <p className="warning_text">
            STORAGE DRY, COOL, AVOID DIRECT SUNSHIP, CLOSED AFTER OPENING.
          </p>
        </Fade>
      </div>
      <div className="banner_note">
        <Fade delay={100} bottom>
          <p className="note">This is a great snack to sip</p>
        </Fade>
        <Fade delay={200} bottom>
          <p className="note"> and also a convenient drink</p>
        </Fade>
      </div>
    </div>
  );
}

export default Banner;
