// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqVyIjkxto6CRHyY90Tii6D6dVkRQt8MM",
  authDomain: "netflixgpt-b29d7.firebaseapp.com",
  projectId: "netflixgpt-b29d7",
  storageBucket: "netflixgpt-b29d7.firebasestorage.app",
  messagingSenderId: "723289848132",
  appId: "1:723289848132:web:d79c388f7811ee3529bf11",
  measurementId: "G-M2K1HLZBLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
