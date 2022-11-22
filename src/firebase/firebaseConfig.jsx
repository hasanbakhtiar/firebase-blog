import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyDxVd-HJ1MoVEBgN3B0cyyCz6ehXvXxb0U",
    authDomain: "codeislife-f1ab6.firebaseapp.com",
    databaseURL: "https://codeislife-f1ab6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "codeislife-f1ab6",
    storageBucket: "codeislife-f1ab6.appspot.com",
    messagingSenderId: "797473712224",
    appId: "1:797473712224:web:1140ad6c3edaaafc2f3b05"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}
