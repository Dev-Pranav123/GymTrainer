// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4bvfC6IJ_UJXG_bmXjFyHE5e7s2SlOxM",
  authDomain: "gymt-b9fe8.firebaseapp.com",
  databaseURL: "https://gymt-b9fe8-default-rtdb.firebaseio.com",
  projectId: "gymt-b9fe8",
  storageBucket: "gymt-b9fe8.appspot.com",
  messagingSenderId: "791640226514",
  appId: "1:791640226514:web:c46ae7caeedac55a358b0b",
  measurementId: "G-Z5T84HKVP1"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default firebase;