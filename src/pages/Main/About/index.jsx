import Images from "constants/images";
import React from "react";
import Bounce from "react-reveal/Bounce";
import "./About.css";

function About(props) {
  return (
    <div className="about">
      <Bounce top delay={400}>
        <div className="about_rectang">
          <Bounce top delay={500}>
            <div className="track">
              <div className="circle">
                <div className="point"></div>
              </div>
            </div>
          </Bounce>
        </div>
      </Bounce>

      <Bounce top delay={200}>
        <div className="about_info">
          <div className="info_content">
            <Bounce top delay={300}>
              <h2>PV Food</h2>
            </Bounce>
            <p>
              <Bounce top delay={400}>
                Established since 2015, PV Food can only be reached by boat, and
              </Bounce>
              <Bounce top delay={500}>
                hasn’t changed much since ancient times..Food has brought a new
              </Bounce>
              <Bounce top delay={600}>
                genius and revolution in our daily life. Standing at rank 3 in
              </Bounce>
              <Bounce top delay={700}>
                both Asia and the world, number one in Taiwan, PVFood has
              </Bounce>
              <Bounce top delay={800}>
                potential to rank 1 in the world. It has become the most
                important
              </Bounce>
              <Bounce top delay={900}>
                national industry and enterprise that we have to rely on to
                solve the food crisis.
              </Bounce>
            </p>
          </div>
          <div className="drop-shadow"></div>
        </div>
      </Bounce>

      <div className="img_review">
        <Bounce top delay={100}>
          <img src={Images.REVIEW} alt="" />
        </Bounce>
      </div>
    </div>
  );
}

export default About;
