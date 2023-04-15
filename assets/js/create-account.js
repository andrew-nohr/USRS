// Import 'auth' and 'createUser' from the 'firebase-init.js' file
import { auth, createUser } from "./firebase-init.js";

// Log the 'auth' object and the 'createUser' function to the console for debugging purposes
console.log("auth object:", auth);
console.log("createUser function:", createUser);

// Get a reference to the create account form element
const createAccountForm = document.getElementById("create-account-form");

// Check if the form element exists
if (createAccountForm) {
  // Add a submit event listener to the form
  createAccountForm.addEventListener("submit", async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values from the form
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Try to create a new user account with the provided email and password
    try {
      const userCredential = await createUser(auth, email, password);
      const user = userCredential.user;

      // TODO: Save the username to the user's profile or a separate database collection

      // Show a success message
      alert("Account created successfully!");
      // Redirect to the user profile page
      window.location.href = "profile.html";
    } catch (error) {
      // Log the error and show an error message
      console.error("Error creating user:", error);
      alert("Error creating account: " + error.message);
    }
  });
}
