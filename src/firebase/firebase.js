// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";

// // const config = {
// //   apiKey: process.env.REACT_APP_FIREBASE_API,
// //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyAqfUkRmKr4wCKMzEZYZRXDwiax9CXQYng",
//   authDomain: "pv-food.firebaseapp.com",
//   projectId: "pv-food",
//   storageBucket: "pv-food.appspot.com",
//   messagingSenderId: "641135637611",
//   appId: "1:641135637611:web:738db0a02087d2c7686d2e",
//   measurementId: "G-1YWWVYZY5H",
// };
// const app = firebase.initializeApp(firebaseConfig);
// const storage = getStorage(app);

// const auth = getAuth();
// var firebaseImgUrl = null;

// const uploadFiles = (selectedFile) => {
//   if (!selectedFile) return;
//   const storageRef = ref(storage, `files/${selectedFile.name}`);
//   const uploadTask = uploadBytesResumable(storageRef, selectedFile);
//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const prog = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//       // setProgress(prog);
//     },
//     (error) => console.log(error),
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//         console.log("File available at", url);
//         firebaseImgUrl = url;
//         console.log(
//           "🚀 ~ file: firebase.js ~ line 54 ~ getDownloadURL ~ firebaseImgUrl",
//           firebaseImgUrl
//         );
//       });
//     }
//   );
// };

// const createUser = (displayName, email, password) => {
//   console.log(
//     "🚀 ~ file: firebase.js ~ line 65 ~ createUser ~ displayName,email, password",
//     displayName,
//     email,
//     password
//   );
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(async (cred) => {
//       const user = cred.user;
//       await updateProfile(auth.currentUser, {
//         displayName: displayName,
//         photoURL: firebaseImgUrl,
//       });
//       console.log(
//         "🚀 ~ file: index.jsx ~ line 50 ~ signInWithEmailAndPassword ~ user",
//         user
//       );
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//     });
// };

// export const registerWithEmailAndPassword = async (
//   selectedFile,
//   email,
//   password,
//   displayName
// ) => {
//   await uploadFiles(selectedFile);
//   await createUser(displayName, email, password);
// };

// export const logInWithEmailAndPassword = (email, password) => {
//   const auth = getAuth();

//   signInWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//       const user = cred.user;
//       console.log(
//         "🚀 ~ file: index.jsx ~ line 50 ~ signInWithEmailAndPassword ~ user",
//         user
//       );
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//     });
// };
