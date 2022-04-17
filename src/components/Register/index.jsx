import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storage } from "App";
import {
  DAY_BIRTHDAY_OPTIONS,
  MONTH_BIRTHDAY_OPTIONS,
  YEAR_BIRTHDAY_OPTIONS,
} from "constants/global";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../Login/Login.css";
import "./Register.css";

function Register(props) {
  const { openLoginForm } = props;
  const auth = getAuth();

  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(
      "🚀 ~ file: index.jsx ~ line 29 ~ Register ~ selectedFile",
      selectedFile
    );
    console.log("🚀 ~ file: index.jsx ~ line 28 ~ Register ~ image", image);
  }, [selectedFile, image]);

  useEffect(() => {
    console.log("🚀 ~ file: index.jsx ~ line 31 ~ Register ~ url", url);
  }, [url]);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);

      // var url = URL.createObjectURL(e.target.files[0]);
      // console.log("🚀 ~ file: index.jsx ~ line 41 ~ onImageChange ~ url", url);
      // console.log(
      //   "🚀 ~ file: index.jsx ~ line 40 ~ onImageChange ~ e.target.files[0]",
      //   typeof url,
      //   url,
      //   url.substring(5, url.length)
      // );
      // var newUrl = url.substring(5, url.length);
      // setImage(newUrl);
    }
  };

  const uploadFiles = () => {
    //
    if (!selectedFile) return;
    const storageRef = ref(storage, `files/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("File available at", url);
          setUrl(url);
        });
      }
    );
  };

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (cred) => {
        const user = cred.user;

        await updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: url,
        });

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

  const submit = (e) => {
    e.preventDefault();
  };

  const registerWithEmailAndPassword = async () => {
    await uploadFiles();
    await createUser();
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
            <div className="input">
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
            </div>

            <div className="input">
              <input type="text" placeholder=" " className="input_item" />
              <label htmlFor="Surname" className="input_label">
                surname
              </label>
            </div>

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
            {image ? (
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
            )}
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
          <button onClick={registerWithEmailAndPassword} className="register">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
