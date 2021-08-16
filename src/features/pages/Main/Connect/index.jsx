import "./Connect.css";
import Tilt from "react-tilt";
import Images from "constants/images";
Connect.propTypes = {};

function Connect(props) {
  return (
    <div className="connect">
      <div className="connect_contain">
        <h2>Connect to us</h2>
        <div className="connect_social">
          <ul className="sci">
            <Tilt options={{ max: 30, speed: 1000 }}>
              <li>
                <a className="icon facebook" href>
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
            </Tilt>
            <Tilt options={{ max: 30, speed: 1000 }}>
              <li>
                <a className="icon instagram" href>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </Tilt>
            <Tilt options={{ max: 30, speed: 1000 }}>
              <li>
                <a className="icon github" href>
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
            </Tilt>
            <Tilt options={{ max: 30, speed: 1000 }}>
              <li>
                <a className="icon" href>
                  <img src={Images.SHOPEE} alt="SHOPEE" />
                </a>
              </li>
            </Tilt>
          </ul>
        </div>
        <div className="connect_img">
          <img src={Images.CONNECT} alt="" />
        </div>
        <div className="connect_img-hand">
          <img src={Images.HAND} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Connect;
