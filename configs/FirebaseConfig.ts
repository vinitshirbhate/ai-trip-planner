// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC36CpfkCscHrrZUxr7EMJmEHHOsOV9mqU",
  authDomain: "ai-travel-planner-68af3.firebaseapp.com",
  projectId: "ai-travel-planner-68af3",
  storageBucket: "ai-travel-planner-68af3.appspot.com",
  messagingSenderId: "567815635538",
  appId: "1:567815635538:web:7bd9651e7d63cc35c0158b",
  measurementId: "G-QN8TR0FZMR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
