import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Images from "constants/images";
import { initialValues, validationSchema } from "constants/profile/formik";
import { getUserData, updateProfile } from "constants/profile/profile";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Zoom from "react-reveal/Zoom";
import Cookies from "universal-cookie";
import styles from "./Account.module.css";

function Account(props) {
  const cookies = new Cookies();
  // const showForm = useSelector((state) => state.form.showForm);
  // const account = cookies.get("account");

  const [checked, setChecked] = useState(true);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [genderId, setGenderId] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  var [accountData, setAccountData] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const activeGenderId = (id) => {
    setGenderId(id);
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) =>
          updateProfile(values, { setSubmitting })
        }
      >
        <Form className={styles.account}>
          <div className={styles.account_header}>
            <h2>Account information</h2>
          </div>
          <div className={styles.account_info}>
            <div className={styles.input}>
              <span>First Name</span>

              <Field
                name="firstName"
                // onChange={(e) => setFirstName(e.target.value)}
                type="text"
                // placeholder={accountData.firstName}
              />
            </div>
            <ErrorMessage name="firstName" />

            <div className={styles.input}>
              <span>Last Name</span>

              <Field
                name="lastName"
                // onChange={(e) => setLastName(e.target.value)}
                type="text"
                // placeholder={accountData.lastName}
              />
            </div>
            <ErrorMessage name="lastName" />

            <div className={styles.input}>
              <span>Email</span>

              <Field
                name="email"
                // onChange={(e) => setEmail(e.target.value)}
                type="text"
                // placeholder={accountData.email}
              />
            </div>
            <ErrorMessage name="email" />

            <div className={styles.input}>
              <span>User Name</span>

              <input
                // onChange={(e) => setUserName(e.target.value)}
                type="text"
                // placeholder={account.username}
                readOnly
              />
            </div>
            <div className={`${styles.gender} ${styles.input}`}>
              <span>Gender</span>

              <div className={styles.remember}>
                <label>
                  Male
                  <input
                    type="radio"
                    name="gender"
                    defaultChecked={accountData.gender === 1 ? checked : null}
                    onChange={() => activeGenderId(1)}
                  />
                  <span class={styles.checkmark}></span>
                </label>
              </div>

              <div className={styles.remember}>
                <label>
                  Female
                  <input
                    type="radio"
                    name="gender"
                    defaultChecked={accountData.gender === 2 ? checked : null}
                    onChange={() => activeGenderId(2)}
                  />
                  <span class={styles.checkmark}></span>
                </label>
              </div>

              <div className={styles.remember}>
                <label>
                  Bede
                  <input
                    type="radio"
                    name="gender"
                    defaultChecked={accountData.gender === 3 ? checked : null}
                    onChange={() => activeGenderId(3)}
                  />
                  <span class={styles.checkmark}></span>
                </label>
              </div>
            </div>
            <div className={styles.input}>
              <span>Phone number</span>

              <input
                name="phone"
                // onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder={accountData.phone}
              />
            </div>
          </div>
          <div className={styles.user_avatar}>
            <div className={styles.avatar}>
              <Zoom delay={100}>
                {image ? (
                  <img
                    className={styles.preview_img}
                    src={image}
                    alt="preview_image"
                  />
                ) : (
                  <img src={Images.EMPTY_CART} alt="user_avt" />
                )}
              </Zoom>
            </div>
            <label className={styles.avatar_change_icon}>
              <Zoom delay={100}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faCamera}
                  size="3x"
                  style={{ color: "#464646" }}
                />
                <input onChange={onImageChange} name="file_avt" type="file" />
              </Zoom>
            </label>
          </div>
          <div className={styles.account_btn}>
            <button type="button" className={styles.cancel}>
              Cancel
            </button>

            <button type="submit" className={styles.apply}>
              Apply
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
export default Account;
