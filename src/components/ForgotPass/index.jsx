import "../Login/Login.css";
import "./Forgot.css";

function ForgotPass(props) {
  const { openLoginForm } = props;
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="forgot_contain">
      <form onSubmit={submit} className="login_form">
        <div className="login-text">
          <h2>Forgot password?</h2>
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
        </div>

        <div className="forgot request">
          <span onClick={openLoginForm}>Back to Login</span>
        </div>
      </form>
      <div className="submit submit_request">
        <button className="register ">Request password</button>
      </div>
    </div>
  );
}

export default ForgotPass;
