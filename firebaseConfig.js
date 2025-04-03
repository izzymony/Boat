// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
 
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2P3Dt5pOxbANCAgCREhNz74CyGs9K3tA",
  authDomain: "boat-e7dab.firebaseapp.com",
  projectId: "boat-e7dab",
  storageBucket: "boat-e7dab.firebasestorage.app",
  messagingSenderId: "243368326319",
  appId: "1:243368326319:web:377c2df74f3da7197a505a",
  measurementId: "G-P3YPRD3MPM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Google Sign-In Functionality
const googleAuthBtn = document.getElementById("google-auth-btn");

if (googleAuthBtn) {
  googleAuthBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider(); // Create a Google Auth Provider

    // Sign in with Google using a popup
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info
        const user = result.user;
        console.log("User signed in:", user);

        // Redirect or perform any action after successful sign-in
        window.location.href = "https://your-redirect-url.com"; // Replace with your desired URL
      })
      .catch((error) => {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
       

        console.error("Error during sign-in:", {
          errorCode,
          errorMessage,
          email,
          credential,
        });

        // Display a user-friendly error message
        alert(`Sign-in failed: ${errorMessage}`);
      });
  });
} else {
  console.error("Google Sign-In button not found!");
}

// Email and Password Sign-Up Functionality
const emailSignUpForm = document.querySelector("form");

if (emailSignUpForm) {
  emailSignUpForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const email = emailSignUpForm.email.value;
    const password = emailSignUpForm.password.value;

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user);

        // Redirect or perform any action after successful sign-up
        window.location.href = "main.html"; // Replace with your desired URL
      })
      .catch((error) => {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error during sign-up:", {
          errorCode,
          errorMessage,
        });

        // Display a user-friendly error message
      
      });
  });
} else {
  console.error("Email sign-up form not found!");
}