import Cart from "components/Cart";
import Search from "components/Search";
import React, { useState } from "react";
import Login from "../Login";
import { Badge } from "@material-ui/core";
import "./Header.css";
import "./HeaderActive.css";
import { useSelector } from "react-redux";

function Header() {
  window.addEventListener("scroll", function () {
    const Header = this.document.querySelector("header");
    Header.classList.toggle("sticky", window.scrollY > 0);
  });
  const cartStorage = useSelector((state) => state.cart);
  const { list } = cartStorage;

  const [openLoginFrame, setOpenLoginFrame] = useState(false);
  const [openSearchFrame, setOpenSearchFrame] = useState(false);
  const [openCartFrame, setOpenCartFrame] = useState(false);

  const countCartItems = list.length;

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
                <a href className="menu-link">
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

          <div className="toggle">
            <div className="login_toggle">
              <i
                className="fa fa-user"
                aria-hidden="true"
                onClick={() => setOpenLoginFrame(!openLoginFrame)}
              ></i>
            </div>

            <div className="cart_toggle">
              <Badge color="secondary" badgeContent={countCartItems}>
                <i
                  onClick={() => setOpenCartFrame(!openCartFrame)}
                  class="fa fa-shopping-cart"
                  aria-hidden="true"
                ></i>
              </Badge>
            </div>

            <div className="search_toggle">
              <i
                onClick={() => setOpenSearchFrame(!openSearchFrame)}
                class="fa fa-search"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <Login
            openLoginFrame={openLoginFrame}
            setOpenLoginFrame={setOpenLoginFrame}
          />

          <Cart
            openCartFrame={openCartFrame}
            setOpenCartFrame={setOpenCartFrame}
          />

          <Search
            openSearchFrame={openSearchFrame}
            setOpenSearchFrame={setOpenSearchFrame}
          />
        </header>
      </section>
    </div>
  );
}

export default Header;
