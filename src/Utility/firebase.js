// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCepe_GYjBSdA0dOzegZVkFjrxj5fn2pMM",
  authDomain: "clone-9c464.firebaseapp.com",
  projectId: "clone-9c464",
  storageBucket: "clone-9c464.appspot.com", // fixed typo here too
  messagingSenderId: "1002860766810",
  appId: "1:1002860766810:web:e890f65dad78917e905a63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
