import Images from "constants/images";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Tilt from "react-tilt";
import "./Connect.css";
Connect.propTypes = {};

function Connect(props) {
  return (
    <div className="connect">
      <Slide right>
        <div className="connect_contain">
          <Bounce top delay={200}>
            <h2>Connect to us</h2>
          </Bounce>
          <div className="connect_social">
            <ul className="sci">
              <Zoom delay={300}>
                <Tilt options={{ max: 30, speed: 1000 }}>
                  <li>
                    <a className="icon facebook" href>
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                </Tilt>
              </Zoom>
              <Zoom delay={400}>
                <Tilt options={{ max: 30, speed: 1000 }}>
                  <li>
                    <a className="icon instagram" href>
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </Tilt>
              </Zoom>
              <Zoom delay={500}>
                <Tilt options={{ max: 30, speed: 1000 }}>
                  <li>
                    <a className="icon github" href>
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                </Tilt>
              </Zoom>
              <Zoom delay={700}>
                <Tilt options={{ max: 30, speed: 1000 }}>
                  <li>
                    <a className="icon shopee" href>
                      <img src={Images.SHOPEE} alt="SHOPEE" />
                    </a>
                  </li>
                </Tilt>
              </Zoom>
            </ul>
          </div>
          <div className="connect_img">
            <img src={Images.CONNECT} alt="" />
          </div>
          <Fade bottom delay={600}>
            <div className="connect_img-hand">
              <img src={Images.HAND} alt="" />
            </div>
          </Fade>
        </div>
      </Slide>
    </div>
  );
}

export default Connect;
