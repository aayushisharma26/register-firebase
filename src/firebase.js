// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn8iHNQriXiaF4mVJO915_3AOW7Dr06T0",
  authDomain: "login-signup-19c32.firebaseapp.com",
  projectId: "login-signup-19c32",
  storageBucket: "login-signup-19c32.firebasestorage.app",
  messagingSenderId: "961741632761",
  appId: "1:961741632761:web:dddc608590711ad36cde28",
  measurementId: "G-286R2VHB9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Authentication ke liye

const analytics = getAnalytics(app);