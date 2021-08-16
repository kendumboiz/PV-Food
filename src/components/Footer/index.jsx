import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="sec aboutus">
          <h2>About us</h2>
          <p>
            PV Food has established since 2015 to be one of the leading food and
            drink manufacturers. Their range of products has expanded to include
            cookie dough, gum balls, and more. As a result, they have a diverse
            produce list that is constantly changing with new flavors being
            added to satisfy even the most demanding customer's tastes.
          </p>
          <ul className="sci">
            <li>
              <a href>
                <i class="fa fa-facebook fb" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href>
                <i class="fa fa-instagram ig" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href>
                <i class="fa fa-twitter twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href>
                <i class="fa fa-youtube-play ytb" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="sec quicklinks">
          <h2>Information</h2>
          <ul>
            <li>
              <a href>About</a>
            </li>
            <li>
              <a href>FAQ</a>
            </li>
            <li>
              <a href>Điều khoản hoàn trả</a>
            </li>
            <li>
              <a href>Trợ giúp</a>
            </li>
            <li>
              <a href>Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact</h2>
          <ul className="info">
            <li>
              <span>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <span>134/34/11 đường số 1, Phường 16, Quận Gò Vấp, TP HCM</span>
            </li>
            <li>
              <span>
                <i class="fa fa-phone" aria-hidden="true"></i>
              </span>
              <span>
                <a href>093 130 3515</a>
              </span>
            </li>
            <li>
              <span>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <span>
                <a href>leng.kimvy@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
