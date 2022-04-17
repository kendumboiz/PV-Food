import { storage } from "App";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const auth = getAuth();

export const uploadFiles = (selectedFile, { setProgress }, { setUrl }) => {
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

export const createUser = (displayName, url, email, password) => {
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

export const submit = (e) => {
  e.preventDefault();
};

export const registerWithEmailAndPassword = async (
  displayName,
  url,
  email,
  password,
  selectedFile,
  { setProgress },
  { setUrl }
) => {
  await uploadFiles(selectedFile, { setProgress }, { setUrl });
  await createUser(displayName, url, email, password);
};
