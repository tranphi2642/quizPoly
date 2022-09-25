import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZpSPpJ_HjEeeoJRfxgJwB_NhMD8or_is",
  authDomain: "reactjs-e34bb.firebaseapp.com",
  databaseURL: "https://reactjs-e34bb-default-rtdb.firebaseio.com",
  projectId: "reactjs-e34bb",
  storageBucket: "reactjs-e34bb.appspot.com",
  messagingSenderId: "93428612467",
  appId: "1:93428612467:web:e448e54023548137579906",
  measurementId: "G-HDNMJ5YYR8",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
