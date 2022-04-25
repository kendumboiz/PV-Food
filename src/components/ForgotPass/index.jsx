import Notification from "components/Notification";
import { handleResetPassword } from "constants/forgotPass/forgot";
import {
  initialResetPwValues,
  validationSchema,
} from "constants/forgotPass/formik";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import "../Login/Login.css";
import "./Forgot.css";

function ForgotPass(props) {
  const { openLoginForm } = props;
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState({
    message: "",
    severity: "",
  });
  return (
    <div className="forgot_contain">
      <Formik
        initialValues={initialResetPwValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleResetPassword(
            values,
            { setSubmitting },
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
                <h2>Forgot password?</h2>
              </div>
              <div className="input_contain">
                <div className="email input">
                  <Field
                    name="email"
                    type="text"
                    placeholder=" "
                    className="input_item"
                    spellCheck="false"
                  />
                  <label htmlFor="your email address" className="input_label">
                    your email address
                  </label>
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="forgot request">
                <span onClick={openLoginForm}>Back to Login</span>
              </div>
              <div className="submit submit_request">
                <button type="submit" className="register ">
                  Request password
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <Notification notify={notify} open={open} setOpen={setOpen} />
    </div>
  );
}

export default ForgotPass;
