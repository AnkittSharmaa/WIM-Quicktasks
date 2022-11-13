import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyALHHLpB0OxPiQM4cyUo0_7j0yH6b1KLpM",
  authDomain: "otp-wim-849e9.firebaseapp.com",
  projectId: "otp-wim-849e9",
  storageBucket: "otp-wim-849e9.appspot.com",
  messagingSenderId: "380481518757",
  appId: "1:380481518757:web:343bc66c1bbf01e712614c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
