import { profileImgUrl } from "actions/Login";
import { storage } from "App";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";

const uploadFiles = (
  selectedFile,
  imgUrl,
  { dispatch },
  { setProgress },
  { setImgUrl }
) => {
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
        imgUrl = url;
        setImgUrl(imgUrl);
        console.log(
          "🚀 ~ file: register.js ~ line 26 ~ getDownloadURL ~ imgUrl",
          imgUrl
        );
        dispatch(profileImgUrl(imgUrl));
      });
    }
  );
};

const createUser = (displayName, imgUrl, email, password) => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (cred) => {
      const user = cred.user;

      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: imgUrl,
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

export const submit = (e) => {
  e.preventDefault();
};

export const registerWithEmailAndPassword = async (
  displayName,
  imgUrl,
  email,
  password,
  selectedFile,
  { dispatch },
  { setProgress },
  { setImgUrl }
) => {
  await uploadFiles(
    selectedFile,
    imgUrl,
    { dispatch },
    { setProgress },
    { setImgUrl }
  );
  await createUser(displayName, imgUrl, email, password);
};

export const signupNewUser = async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  try {
    const res = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqfUkRmKr4wCKMzEZYZRXDwiax9CXQYng`,
      body,
      config
    );
    console.log("🚀 ~ file: register.js ~ line 100 ~ signupNewUser ~ res", res);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};
