// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEUjTGv36ULuJ09_QiVIBy-8iJCLFPHf4",
  authDomain: "blogprojec-f533d.firebaseapp.com",
  projectId: "blogprojec-f533d",
  storageBucket: "blogprojec-f533d.appspot.com",
  messagingSenderId: "436033450483",
  appId: "1:436033450483:web:ce737572104f194982e286",
  measurementId: "G-T68WWJTZED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();