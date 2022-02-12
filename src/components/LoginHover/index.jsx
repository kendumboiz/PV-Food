import { Button } from "@mui/material";
import Images from "constants/images";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styles from "./LoginHover.module.css";

function LoginHover(props) {
  const { openMiniTab, setOpenMiniTab } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const loginStorage = useSelector((state) => state.login);
  const { data } = loginStorage;
  console.log("🚀 ~ file: index.jsx ~ line 16 ~ LoginHover ~ data", data);

  const userAvt = data.photoURL;

  return (
    <div
      className={
        openMiniTab ? `${styles.info_container}` : `${styles.close_miniTab}`
      }
    >
      <div className={styles.user_info}>
        <div className={styles.user_img}>
          <div className={styles.img}>
            <img
              src={userAvt ? userAvt : Images.EMPTY_CART}
              alt="Cant find ur avt"
            />
          </div>
        </div>
        <div className={styles.info_content}>
          <div className={styles.name}>
            <p>{data.displayName} </p>
          </div>
          <div className={styles.email}>
            <p>{data.email} </p>
          </div>
          <div className={styles.manage_setting}>
            <Button
              // disabled
              sx={{
                borderRadius: 50,
                color: "#000",
                fontWeight: 600,
                fontSize: 8,
              }}
              // onClick={() => handlePush(1, "Profile")}
              variant="outlined"
            >
              Manage your account
            </Button>
          </div>
        </div>
        <div className={styles.logout}>
          <Button
            // onClick={handleLogout}
            variant="outlined"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginHover;
