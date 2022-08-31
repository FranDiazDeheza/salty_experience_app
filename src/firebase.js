// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDawrBFTLkU8oDCPTzu2m4Ul6nvdogNk90",
  authDomain: "saltyexperience.firebaseapp.com",
  projectId: "saltyexperience",
  storageBucket: "saltyexperience.appspot.com",
  messagingSenderId: "524081722588",
  appId: "1:524081722588:web:37c85265c7d46ce8773019",
  measurementId: "G-6FPTVT9XP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore(app);
export {db}