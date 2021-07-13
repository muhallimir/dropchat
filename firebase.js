import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMzTWDOa972c0TUNmDRvYilPLqn0prTq0",
  authDomain: "drop-chat23.firebaseapp.com",
  projectId: "drop-chat23",
  storageBucket: "drop-chat23.appspot.com",
  messagingSenderId: "783165968220",
  appId: "1:783165968220:web:c6aabfe3a00d09835cbb99",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
