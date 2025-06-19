// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByfR2HF2gaew40z0KVpymDvENKUV36Ng4",
  authDomain: "email-password-login-944f3.firebaseapp.com",
  projectId: "email-password-login-944f3",
  storageBucket: "email-password-login-944f3.firebasestorage.app",
  messagingSenderId: "1086095384997",
  appId: "1:1086095384997:web:9ff79da063fb508d88484c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
