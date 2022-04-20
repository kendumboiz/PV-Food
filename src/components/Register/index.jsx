import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { profileImgUrl } from "actions/Login";
import {
  DAY_BIRTHDAY_OPTIONS,
  MONTH_BIRTHDAY_OPTIONS,
  YEAR_BIRTHDAY_OPTIONS,
} from "constants/global";
import { submit } from "constants/login/login";
import {
  registerWithEmailAndPassword,
  signupNewUser,
} from "constants/register/register";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import "../Login/Login.css";
import "./Register.css";

function Register(props) {
  const { openLoginForm } = props;
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  var [imgUrl, setImgUrl] = useState(null);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="regist_contain">
        <form onSubmit={submit} className="regist_form">
          <div className="login-text">
            <h2>Register</h2>
          </div>
          <div className="regist_birthday">
            <h4>
              <b>Birthday</b> * You can complete purchases on matruecannabis.com
              if you are over 18 years old
            </h4>
            {/* <Select
              className=" react-select day"
              classNamePrefix="react-select"
              placeholder="Day"
              options={DAY_BIRTHDAY_OPTIONS}
            />
            <Select
              className="react-select month"
              classNamePrefix="react-select"
              placeholder="Month"
              options={MONTH_BIRTHDAY_OPTIONS}
            />
            <Select
              className="react-select year"
              classNamePrefix="react-select"
              placeholder="Year"
              options={YEAR_BIRTHDAY_OPTIONS}
            /> */}
          </div>
          <div className="input_contain register_input">
            {/* <div className="input">
              <input
                type="text"
                placeholder=" "
                className="input_item"
                spellCheck="false"
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <label htmlFor="Name" className="input_label">
                name
              </label>
            </div> */}

            {/* <div className="input">
              <input type="text" placeholder=" " className="input_item" />
              <label htmlFor="Surname" className="input_label">
                surname
              </label>
            </div> */}

            <div className="input">
              <input
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input_item"
                spellCheck="false"
              />
              <label htmlFor="your email address " className="input_label">
                your email address
              </label>
            </div>

            <div className="warning_pass">
              <span>
                <strong>password</strong> 8 characters minimum length{" "}
              </span>
            </div>

            <div className="input">
              <input
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input_item"
                spellCheck="false"
              />
              <label htmlFor="New passwords" className="input_label">
                new password
              </label>
            </div>

            <div className="input">
              <input
                type="password"
                placeholder=" "
                className="input_item"
                spellCheck="false"
              />
              <label htmlFor="New passwords" className="input_label">
                confirm password
              </label>
            </div>
            {/* {image ? (
              <img className="preview" src={image} alt="preview" />
            ) : (
              <label className="img_picker">
                <FontAwesomeIcon
                  className="icon"
                  icon={faCamera}
                  size="3x"
                  style={{ color: "#464646" }}
                />
                <input type="file" onChange={onImageChange} required />
              </label>
            )} */}
          </div>
          <div className="remember register_policy">
            <label>
              I have read and agree to the privacy policy *
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="required_field">
            <span onClick={openLoginForm}>* Require field</span>
          </div>
          <div className="submit submit_regist">
            <button
              // onClick={() =>
              //   registerWithEmailAndPassword(
              //     displayName,
              //     imgUrl,
              //     email,
              //     password,
              //     selectedFile,
              //     { dispatch },
              //     { setProgress },
              //     { setImgUrl }
              //   )
              // }
              onClick={() => signupNewUser(email, password)}
              className="register"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
