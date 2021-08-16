import React, { useState } from "react";

import "../Login/Login.css";
import "./Register.css";
import Select from "react-select";
import {
  DAY_BIRTHDAY_OPTIONS,
  MONTH_BIRTHDAY_OPTIONS,
  YEAR_BIRTHDAY_OPTIONS,
} from "constants/global";

function Register(props) {
  const { openLoginForm } = props;
  const [checked, setChecked] = useState(false);
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="regist_contain">
        <form onSubmit={submit} className="login_form">
          <div className="login-text">
            <h2>Register</h2>
          </div>
          <div className="regist_birthday">
            <h4>
              <b>Birthday</b> * You can complete purchases on matruecannabis.com
              if you are over 18 years old
            </h4>
            <Select
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
            />
          </div>
          <div className="input_contain register_input">
            <input
              type="text"
              placeholder=" "
              className="input_item"
              spellCheck="false"
            />
            <label htmlFor="Name" className="input_label">
              name
            </label>

            <input type="text" placeholder=" " className="input_item" />
            <label htmlFor="Surname" className="input_label">
              surname
            </label>

            <input
              type="email"
              placeholder=" "
              className="input_item"
              spellCheck="false"
            />
            <label htmlFor="your email address " className="input_label">
              your email address
            </label>

            <div className="warning_pass">
              <span>
                <strong>password</strong> 8 characters minimum length{" "}
              </span>
            </div>

            <input
              type="password"
              placeholder=" "
              className="input_item"
              spellCheck="false"
            />
            <label htmlFor="New passwords" className="input_label">
              new password
            </label>

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
        </form>
        <div className="required_field">
          <span onClick={openLoginForm}>* Require field</span>
        </div>
        <div className="submit submit_regist">
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
