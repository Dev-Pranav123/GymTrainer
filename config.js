// import firebase from 'firebase/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app';
// import 'firebase/firestore';
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4bvfC6IJ_UJXG_bmXjFyHE5e7s2SlOxM",
    authDomain: "gymt-b9fe8.firebaseapp.com",
    projectId: "gymt-b9fe8",
    storageBucket: "gymt-b9fe8.appspot.com",
    messagingSenderId: "791640226514",
    appId: "1:791640226514:web:79e8234a4f04dece358b0b",
    measurementId: "G-Y4H0XLG23K"
};


if (firebase.appCheck?.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };