import { auth } from "./firebase-init.js";

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
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(app);
  
  // Navigate to Create Account page
  document.getElementById("create-account").addEventListener("click", function () {
    window.location.href = "create-account.html";
  });
  
  // User registration for Create Account page
  const createAccountForm = document.getElementById("create-account-form");
  
  if (createAccountForm) {
    createAccountForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
  
        // TODO: Save the username to the user's profile or a separate database collection
  
        alert("Account created successfully!");
        // Redirect to the user profile page
        window.location.href = "profile.html";
      } catch (error) {
        console.error("Error creating user:", error);
        alert("Error creating account: " + error.message);
      }
    });
  }
  