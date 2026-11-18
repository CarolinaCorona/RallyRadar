// Rally Radar online sync settings.
// 1) In the Firebase console open Project settings > General > Your apps > your web app.
// 2) Copy the values from "firebaseConfig" and replace the null below with them, like the example.
// These values identify your project; they are not passwords.
//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ImI5ZEgUPQtKTME9Yh5BcF9PA3QkuvE",
  authDomain: "rally-radar-a1d11.firebaseapp.com",
  projectId: "rally-radar-a1d11",
  storageBucket: "rally-radar-a1d11.firebasestorage.app",
  messagingSenderId: "1020989634736",
  appId: "1:1020989634736:web:21e228333813888fade375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
