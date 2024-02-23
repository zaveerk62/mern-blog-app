// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e8cc4.firebaseapp.com",
  projectId: "mern-blog-e8cc4",
  storageBucket: "mern-blog-e8cc4.appspot.com",
  messagingSenderId: "970041700010",
  appId: "1:970041700010:web:eff24c81112c5888edaad3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);