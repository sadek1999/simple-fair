// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0IxZo6reCVrd9EU9tkED1fcSYC-RJbS4",
  authDomain: "simple-fair.firebaseapp.com",
  projectId: "simple-fair",
  storageBucket: "simple-fair.appspot.com",
  messagingSenderId: "309830163341",
  appId: "1:309830163341:web:98c1d467599d3c21d63bc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;