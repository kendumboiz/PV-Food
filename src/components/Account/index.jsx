import "./Account.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { getUserData, uploadFiles } from "utils/profile";
import { initialValues, validationSchema } from "formik/profileFormik";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "constants/images";
import Zoom from "react-reveal/Zoom";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

// import Cookies from "universal-cookie";

function Account(props) {
  // const cookies = new Cookies();
  const dispatch = useDispatch();
  // const accountProfile = cookies.get("information");

  // const [checked, setChecked] = useState(true);
  // const [genderId, setGenderId] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  var [imgUrl, setImgUrl] = useState(null);
  var [accountData, setAccountData] = useState({});

  useEffect(() => {
    getUserData(accountData, { setAccountData });
  }, []);

  // const activeGenderId = (id) => {
  //   setGenderId(id);
  // };

  const onImageChange = ({ setFieldValue }, e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
      setFieldValue("image", e.target.files[0]);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) =>
          uploadFiles(
            values,
            selectedFile,
            imgUrl,
            { dispatch },
            { setImgUrl },
            { setSubmitting }
          )
        }
      >
        {(formikProps) => {
          const { setFieldValue } = formikProps;
          return (
            <>
              <Form className="account">
                <div className="account_header">
                  <h2>Account information</h2>
                </div>
                <div className="account_info">
                  <div className="input">
                    <span>First Name</span>

                    <Field
                      name="firstName"
                      type="text"
                      placeholder={accountData.displayName}
                    />
                    <ErrorMessage name="firstName" />
                  </div>

                  <div className="input">
                    <span>Last Name</span>

                    <Field
                      name="lastName"
                      type="text"
                      placeholder={accountData.displayName}
                    />
                    <ErrorMessage name="lastName" />
                  </div>

                  <div className="input">
                    <span>Email</span>

                    <Field
                      name="email"
                      type="text"
                      placeholder={accountData.email}
                    />
                    <ErrorMessage name="email" />
                  </div>

                  <div className="input">
                    <span>User Name</span>

                    <input
                      type="text"
                      placeholder={accountData.displayName}
                      readOnly
                    />
                  </div>
                  <div className="gender input">
                    <span>Gender</span>

                    <div className="remember">
                      <label>
                        Male
                        <input
                          type="radio"
                          name="gender"
                          // defaultChecked={
                          //   accountData.gender === 1 ? checked : null
                          // }
                          // onChange={() => activeGenderId(1)}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>

                    <div className="remember">
                      <label>
                        Female
                        <input
                          type="radio"
                          name="gender"
                          // defaultChecked={
                          //   accountData.gender === 2 ? checked : null
                          // }
                          // onChange={() => activeGenderId(2)}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>

                    <div className="remember">
                      <label>
                        Bede
                        <input
                          type="radio"
                          name="gender"
                          // defaultChecked={
                          //   accountData.gender === 3 ? checked : null
                          // }
                          // onChange={() => activeGenderId(3)}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="input">
                    <span>Phone number</span>

                    <Field
                      name="phone"
                      type="text"
                      placeholder={accountData.phone}
                    />
                    <ErrorMessage name="phone" />
                  </div>
                </div>
                <div className="user_avatar">
                  <div className="avatar">
                    <Zoom delay={100}>
                      {image ? (
                        <img
                          className="preview_img"
                          src={image}
                          alt="preview_image"
                        />
                      ) : (
                        <img
                          src={
                            accountData.photoUrl
                              ? accountData.photoUrl
                              : Images.EMPTY_CART
                          }
                          alt="user_avt"
                        />
                      )}
                    </Zoom>
                    <ErrorMessage name="image" />
                  </div>
                  <label className="avatar_change_icon">
                    <Zoom delay={100}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faCamera}
                        size="3x"
                        style={{ color: "#464646" }}
                      />
                      <input
                        name="image"
                        onChange={(e) => onImageChange({ setFieldValue }, e)}
                        type="file"
                      />
                    </Zoom>
                  </label>
                </div>
                <div className="account_btn">
                  <button type="button" className="cancel">
                    Cancel
                  </button>

                  <button type="submit" className="apply">
                    Apply
                  </button>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
export default Account;
