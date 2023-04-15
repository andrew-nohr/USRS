import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword as createUser } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsjXx0ax8Qh3b8_f6PmN0ARHThgXrR6dg",
  authDomain: "usrs-99501.firebaseapp.com",
  projectId: "usrs-99501",
  storageBucket: "usrs-99501.appspot.com",
  messagingSenderId: "410770603376",
  appId: "1:410770603376:web:0b7c2fe48f76b3834923b5",
  measurementId: "G-H970355Y3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { firebase, auth, createUser };
