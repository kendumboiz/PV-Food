import Cart from "components/Cart";
import Search from "components/Search";
import React from "react";
import Login from "../Login";
import "./Header.css";

function Header() {
  window.addEventListener("scroll", function () {
    const Header = this.document.querySelector("header");
    Header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div>
      <section>
        <header>
          <div className="menu-logo">
            <a href className="logo">
              PVFood
            </a>
          </div>
          <nav id="menu">
            <div className="menu-item">
              <div className="menu-text">
                <a href="#home" className="menu-link">
                  Home
                </a>
              </div>
            </div>

            <div className="menu-item highlight">
              <div className="menu-text">
                <a href="#categories" className="menu-link">
                  Categories
                </a>
              </div>
            </div>

            <div className="menu-item">
              <div className="menu-text">
                <a href="#service" className="menu-link">
                  Supports
                </a>
              </div>
            </div>

            <div className="menu-item">
              <div className="menu-text">
                <a href="#socials" className="menu-link">
                  Socials
                </a>
              </div>
            </div>
            <div id="sub-menu-container">
              <div id="sub-menu-holder">
                <div id="sub-menu-bottom"></div>
              </div>
            </div>
          </nav>
          <div className="login-section">
            <Login />
          </div>
          <div className="cart-section">
            <Cart />
          </div>
          <div className="search-section">
            <Search />
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
