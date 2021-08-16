import ForgotPass from "components/ForgotPass";
import React, { useEffect, useState } from "react";
import Register from "components/Register";
import "./Login.css";

function Login(props) {
  const [frame, setFrame] = useState(false);

  const [loginForm, setLoginForm] = useState(true);

  const [registerForm, setRegisterForm] = useState(false);

  const [forgotForm, setForgotForm] = useState(false);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(frame);
    console.log(loginForm);
    console.log(registerForm);
  }, [frame, registerForm, loginForm]);

  const submit = (e) => {
    e.preventDefault();
  };

  const openFrame = () => {
    setFrame(true);
  };
  const closeFrame = () => {
    setFrame(false);
  };
  const openRegisterForm = () => {
    setLoginForm(false);
    setForgotForm(false);
    setRegisterForm(true);
  };

  const openLoginForm = () => {
    setForgotForm(false);
    setRegisterForm(false);
    setLoginForm(true);
  };

  const openForgotForm = () => {
    setLoginForm(false);
    setRegisterForm(false);
    setForgotForm(true);
  };

  return (
    <div>
      <div className="login_toggle">
        <i className="fa fa-user" aria-hidden="true" onClick={openFrame}></i>
      </div>

      <div
        className={frame ? "open-overlay" : "overlay"}
        onClick={closeFrame}
      ></div>

      <div className={frame ? "open-Login" : "login_container"}>
        <div className="login_section">
          <div
            className="login_contain"
            style={{
              display: loginForm ? "block" : "none",
            }}
          >
            <form onSubmit={submit} className="login_form">
              <div className="login-text">
                <h2>Log in to your account</h2>
              </div>
              <div className="input_contain">
                <input
                  type="text"
                  placeholder=" "
                  className="input_item"
                  spellCheck="false"
                />
                <label htmlFor="your email address" className="input_label">
                  your email address
                </label>

                <input type="password" placeholder=" " className="input_item" />
                <label htmlFor="password" className="input_label">
                  password
                </label>
              </div>
              <div className="remember">
                <label>
                  Remember me
                  <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="forgot">
                <span onClick={openForgotForm}>Forgot password ?</span>
              </div>
            </form>
            <div className="submit">
              <button className="register" onClick={openRegisterForm}>
                Register
              </button>
              <button className="login">Login</button>
            </div>
          </div>

          <div
            style={{
              display: forgotForm ? "block" : "none",
            }}
          >
            <ForgotPass openLoginForm={openLoginForm} />
          </div>
          <div
            style={{
              display: registerForm ? "block" : "none",
            }}
          >
            <Register openLoginForm={openLoginForm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
