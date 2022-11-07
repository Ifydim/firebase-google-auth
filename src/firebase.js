// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaGt_541gFA_EmlaVcNAqvQzVEcVGxX1U",
  authDomain: "authentication-3f46c.firebaseapp.com",
  projectId: "authentication-3f46c",
  storageBucket: "authentication-3f46c.appspot.com",
  messagingSenderId: "255522954294",
  appId: "1:255522954294:web:bc7127e0d152b9c747cc97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
