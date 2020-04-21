import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOFIJa_UnrtPb_8yajLdH5xgyKzIIDbLg",
  authDomain: "react-native-for-designe-f0f02.firebaseapp.com",
  databaseURL: "https://react-native-for-designe-f0f02.firebaseio.com",
  projectId: "react-native-for-designe-f0f02",
  storageBucket: "react-native-for-designe-f0f02.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
