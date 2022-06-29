import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./Login.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { initialValues, validationSchema } from "constants/login/formik";
import {
  openForgotForm,
  openLoginForm,
  openRegisterForm,
  signinWithOAuth,
} from "constants/login/login";

import CircularProgress from "@mui/material/CircularProgress";
import ForgotPass from "components/ForgotPass";
import Notification from "components/Notification";
import Register from "components/Register";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(true);
  const [registerForm, setRegisterForm] = useState(false);
  const [forgotForm, setForgotForm] = useState(false);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState({
    message: "",
    severity: "",
  });

  // const [user, loading] = useAuthState(auth);

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) =>
                signinWithOAuth(
                  values,
                  { setSubmitting },
                  { navigate },
                  { setNotify },
                  { setOpen }
                )
              }
            >
              {(formikProps) => {
                const { isSubmitting, isValid } = formikProps;
                return (
                  <Form className="login_form">
                    <div className="login-text">
                      <h2>Log in to your account</h2>
                    </div>

                    <div className="input_contain">
                      <div className="email input">
                        <Field
                          name="email"
                          type="text"
                          placeholder=" "
                          // onChange={(e) => setEmail(e.target.value)}
                          // value={email}
                          className="input_item"
                          spellCheck="false"
                        />
                        <label
                          htmlFor="your email address"
                          className="input_label"
                        >
                          your email address
                        </label>
                        <ErrorMessage name="email" />
                      </div>

                      <div className="password input">
                        <Field
                          name="password"
                          type="password"
                          placeholder=" "
                          // onChange={(e) => setPassword(e.target.value)}
                          // value={password}
                          className="input_item"
                        />
                        <label htmlFor="password" className="input_label">
                          password
                        </label>
                        <ErrorMessage name="password" />
                      </div>
                      <div className="firebase_login">
                        <StyledFirebaseAuth
                          uiConfig={uiConfig}
                          firebaseAuth={firebase.auth()}
                        />
                      </div>
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
                      <span
                        onClick={() =>
                          openForgotForm(
                            { setLoginForm },
                            { setRegisterForm },
                            { setForgotForm }
                          )
                        }
                      >
                        Forgot password ?
                      </span>
                    </div>
                    <div className="submit">
                      <button
                        type="button"
                        className="register"
                        onClick={() =>
                          openRegisterForm(
                            { setLoginForm },
                            { setForgotForm },
                            { setRegisterForm }
                          )
                        }
                      >
                        Register
                      </button>
                      <button
                        disabled={isSubmitting || !isValid}
                        // onClick={() => logInWithEmailAndPassword(email, password)}
                        type="submit"
                        className="login"
                      >
                        {isSubmitting ? (
                          <CircularProgress color="success" />
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>

          <div
            style={{
              display: forgotForm ? "block" : "none",
            }}
          >
            <ForgotPass
              openLoginForm={() =>
                openLoginForm(
                  { setForgotForm },
                  { setRegisterForm },
                  { setLoginForm }
                )
              }
            />
          </div>
          <div
            style={{
              display: registerForm ? "block" : "none",
            }}
          >
            <Register
              openLoginForm={() =>
                openLoginForm(
                  { setForgotForm },
                  { setRegisterForm },
                  { setLoginForm }
                )
              }
            />
          </div>
        </div>
      </div>
      <Notification notify={notify} open={open} setOpen={setOpen} />
    </div>
  );
}

export default Login;
