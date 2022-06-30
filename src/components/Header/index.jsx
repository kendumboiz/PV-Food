import "./Header.css";
import "./HeaderActive.css";

import React, { useState } from "react";

import { Badge } from "@material-ui/core";
import Cart from "components/Cart";
import Images from "constants/images";
import Login from "../Login";
import LoginHover from "components/LoginHover";
import Search from "components/Search";
import { useSelector } from "react-redux";

function Header() {
  window.addEventListener("scroll", function () {
    const Header = this.document.querySelector("header");
    Header.classList.toggle("sticky", window.scrollY > 0);
  });
  // const cartStorage = useSelector((state) => state.cart.list);
  // const loginStorage = useSelector((state) => state.login);
  // const { data, url } = loginStorage;
  // const {  } = cartStorage;

  const [openLoginFrame, setOpenLoginFrame] = useState(false);
  const [openSearchFrame, setOpenSearchFrame] = useState(false);
  const [openCartFrame, setOpenCartFrame] = useState(false);
  const [openMiniTab, setOpenMiniTab] = useState(false);

  // const countCartItems = cartStorage.length;

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
                <a href="/home" className="menu-link">
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
              {/* {data ? (
                <img
                  className="user_avt"
                  src={url ? url : Images.EMPTY_CART}
                  alt=""
                  onClick={() => setOpenMiniTab(!openMiniTab)}
                />
              ) : (
                
              )} */}
              <i
                className="fa fa-user"
                aria-hidden="true"
                onClick={() => setOpenLoginFrame(!openLoginFrame)}
              ></i>
            </div>

            <div className="cart_toggle">
              <Badge
                color="secondary"
                // badgeContent={countCartItems}
              >
                <i
                  onClick={() => setOpenCartFrame(!openCartFrame)}
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                ></i>
              </Badge>
            </div>

            <div className="search_toggle">
              <i
                onClick={() => setOpenSearchFrame(!openSearchFrame)}
                className="fa fa-search"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          {/* {data ? (
            <LoginHover
              openMiniTab={openMiniTab}
              setOpenMiniTab={setOpenMiniTab}
            />
          ) : (
            
          )} */}
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
