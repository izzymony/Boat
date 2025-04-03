// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const signIn = {
    apiKey: "AIzaSyB2P3Dt5pOxbANCAgCREhNz74CyGs9K3tA",
    authDomain: "boat-e7dab.firebaseapp.com",
    projectId: "boat-e7dab",
    storageBucket: "boat-e7dab.firebasestorage.app",
    messagingSenderId: "243368326319",
    appId: "1:243368326319:web:377c2df74f3da7197a505a",
    measurementId: "G-P3YPRD3MPM",
  };
// Initialize Firebase
const app = initializeApp(signIn);
const auth = getAuth(app);

// Email and Password Sign-In Functionality
const emailSignInForm = document.querySelector("form");

if (emailSignInForm) {
  emailSignInForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const email = emailSignInForm.email.value;
    const password = emailSignInForm.password.value;

    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User  signed in:", user);

        // Redirect or perform any action after successful sign-in
        window.location.href = "main.html"; // Replace with your desired URL
      })
      .catch((error) => {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error during sign-in:", {
          errorCode,
          errorMessage,
        });

        // Display a user-friendly error message
        alert(`Sign-in failed: ${errorMessage}`);
      });
  });
} else {
  console.error("Email sign-in form not found!");
}