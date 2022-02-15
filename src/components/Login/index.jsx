// import { auth } from "App";
import ForgotPass from "components/ForgotPass";
import Register from "components/Register";
import {
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./Login.css";

const uiConfig = {
  signInFlow: "redirect",
  // signInSuccessUrl: '/signedIn',

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function Login(props) {
  const { openLoginFrame, setOpenLoginFrame } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState(true);
  const [registerForm, setRegisterForm] = useState(false);
  const [forgotForm, setForgotForm] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [user, loading] = useAuthState(auth);

  const submit = (e) => {
    e.preventDefault();
  };

  const logInWithEmailAndPassword = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const user = cred.user;
        console.log(
          "🚀 ~ file: index.jsx ~ line 50 ~ signInWithEmailAndPassword ~ user",
          user
        );
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
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
      {/* <div className="login_toggle">
        <i className="fa fa-user" aria-hidden="true" onClick={openFrame}></i>
      </div> */}

      <div
        className={openLoginFrame ? "open-overlay" : "overlay"}
        onClick={() => setOpenLoginFrame(false)}
      ></div>

      <div className={openLoginFrame ? "open-Login" : "login_container"}>
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
              {error && <div className="auth__error">{error}</div>}
              <div className="input_contain">
                <div className="email input">
                  <input
                    type="text"
                    placeholder=" "
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="input_item"
                    spellCheck="false"
                  />
                  <label htmlFor="your email address" className="input_label">
                    your email address
                  </label>
                </div>

                <div className="password input">
                  <input
                    type="password"
                    placeholder=" "
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="input_item"
                  />
                  <label htmlFor="password" className="input_label">
                    password
                  </label>
                </div>
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
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
              <button onClick={logInWithEmailAndPassword} className="login">
                Login
              </button>
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
