// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhHDuTFIBxOXkR2ESBuAAJekOOXsrOphE",
  authDomain: "app-moviles-d89bd.firebaseapp.com",
  projectId: "app-moviles-d89bd",
  storageBucket: "app-moviles-d89bd.firebasestorage.app",
  messagingSenderId: "883322120246",
  appId: "1:883322120246:web:dca1c2021b14aa5e421097",
  measurementId: "G-684S7KPE1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)