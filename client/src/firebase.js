// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD3_RYMwh4e2uo9BOTUYf3sGBefgEqRhM",
  authDomain: "hackbattle-116aa.firebaseapp.com",
  projectId: "hackbattle-116aa",
  storageBucket: "hackbattle-116aa.appspot.com",
  messagingSenderId: "989682206079",
  appId: "1:989682206079:web:1ed88228bf12912d15c64a",
  measurementId: "G-E89KV4P7W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;