import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
      apiKey: "AIzaSyCDADfR8kHKeLqSgO5K5x301P7cd32iFok",
  authDomain: "techno-brain-866f4.firebaseapp.com",
  databaseURL: "https://techno-brain-866f4-default-rtdb.firebaseio.com",
  projectId: "techno-brain-866f4",
  storageBucket: "techno-brain-866f4.appspot.com",
  messagingSenderId: "393914914879",
  appId: "1:393914914879:web:36dc4879a27a46ebe0808a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}
