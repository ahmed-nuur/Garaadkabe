// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sahan-bloging.firebaseapp.com",
  projectId: "sahan-bloging",
  storageBucket: "sahan-bloging.appspot.com",
  messagingSenderId: "875022951592",
  appId: "1:875022951592:web:2958706e70f0fd83184e9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);