// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1VLLw8YSrhkM4lEThOEitP8owydGSuKk",
  authDomain: "userdetailsapp-f86da.firebaseapp.com",
  databaseURL: "https://userdetailsapp-f86da-default-rtdb.firebaseio.com",
  projectId: "userdetailsapp-f86da",
  storageBucket: "userdetailsapp-f86da.appspot.com",
  messagingSenderId: "1076826158502",
  appId: "1:1076826158502:web:d955697f151564907d4b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}