import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import {
  faBell,
  faHeart,
  faShoppingBag,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import Account from "../../components/Account";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "constants/images";
import styles from "./Profile.module.css";

function ProfileForm(props) {
  const { pathname } = useLocation();

  const [show, setShow] = useState(false);
  const [formId, setFormId] = useState();

  const displayForm = (id, name) => {
    setShow(!show);
    setFormId(id);
    // dispatch(openForm({ drawerId: formId, component: name }));
    console.log(
      "🚀 ~ file: index.jsx ~ line 43 ~ displayForm ~ id, name",
      id,
      name
    );
  };

  return (
    <div>
      {/* <Banner title="My profile" backgroundUrl={Images.SPACE4} /> */}
      <div className={styles.profile}>
        <div className={styles.drawer}>
          <div className={styles.user_avatar}>
            <div className={styles.avatar}>
              <img src={Images.EMPTY_CART} alt="" />
            </div>
          </div>
          <div className={styles.label_drawer}>
            <label
              className={
                formId === 1 ? `${styles.account}` : ` ${styles.label}`
              }
              onClick={() => displayForm(1, "Profile")}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faUserCircle}
                size="2x"
                style={{
                  color: formId === 1 ? "red" : "#0c7d97",
                  transition: "color 0.5s ease-in-out",
                }}
              />
              <span>
                <Link
                  style={{
                    color: formId === 1 ? "red" : "#0c7d97",
                    transition: "color 0.5s ease-in-out",
                  }}
                  to={`${pathname}/account`}
                >
                  My account
                </Link>
              </span>
            </label>

            <label
              className={formId === 2 ? `${styles.order}` : ` ${styles.label}`}
              onClick={() => displayForm(2, "Order")}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faShoppingBag}
                // transform="shrink-3 "
                size="2x"
                style={{
                  color: formId === 2 ? "red" : "#0c7d97",
                  transition: "color 0.5s ease-in-out",
                }}
              />
              <span>
                <Link
                  style={{
                    color: formId === 2 ? "red" : "#0c7d97",
                    transition: "color 0.5s ease-in-out",
                  }}
                  to={`${pathname}/order`}
                >
                  My order
                </Link>
              </span>
            </label>

            <label
              className={formId === 3 ? `${styles.fav}` : ` ${styles.label}`}
              // onClick={() => displayForm(3, "Fav list")}
              // onClick={getFavs}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faHeart}
                size="2x"
                // style={{
                //   color: formId === 3 && drawerId === 3 ? "red" : "#0c7d97",
                //   transition: "color 0.5s ease-in-out",
                // }}
              />
              <span>
                <Link
                  // style={{
                  //   color: formId === 3 && drawerId === 3 ? "red" : "#0c7d97",
                  //   transition: "color 0.5s ease-in-out",
                  // }}
                  to={`${pathname}/favorites`}
                >
                  My favorites list
                </Link>
              </span>
            </label>

            <label
              className={formId === 4 ? `${styles.notify}` : ` ${styles.label}`}
              onClick={() => displayForm(4, "Notify")}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faBell}
                size="2x"
                // style={{
                //   color: formId === 4 && drawerId === 4 ? "red" : "#0c7d97",
                //   transition: "color 0.5s ease-in-out",
                // }}
              />
              <span>
                <Link
                  // style={{
                  //   color: formId === 4 && drawerId === 4 ? "red" : "#0c7d97",
                  //   transition: "color 0.5s ease-in-out",
                  // }}
                  to={`${pathname}/notify`}
                >
                  My notifications
                </Link>
              </span>
            </label>

            <label
              className={formId === 5 ? `${styles.logout}` : ` ${styles.label}`}
              // onClick={() => displayForm(5, "")}
              // onClick={handleLogout}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faSignOutAlt}
                size="2x"
                rotation={180}
                style={{
                  color: formId === 5 ? "red" : "#0c7d97",
                  transition: "color 0.5s ease-in-out",
                }}
              />

              <span>
                <Link
                  style={{
                    color: formId === 5 ? "red" : "#0c7d97",
                    transition: "color 0.5s ease-in-out",
                  }}
                >
                  Log out
                </Link>
              </span>
            </label>
          </div>
        </div>

        <Account />

        {/* <Switch>
          <Redirect exact from={path} to={`${path}/account`} />
          <Route path={`${path}/:form`} component={Drawer} />
        </Switch> */}
      </div>
    </div>
  );
}

export default ProfileForm;
