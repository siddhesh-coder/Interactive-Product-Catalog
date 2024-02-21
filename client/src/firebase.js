// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-Nra2Gk1K82aHBVwoQxerAYzDeGMi8rg",
  authDomain: "quickmart-7b54f.firebaseapp.com",
  projectId: "quickmart-7b54f",
  storageBucket: "quickmart-7b54f.appspot.com",
  messagingSenderId: "443642177965",
  appId: "1:443642177965:web:1bb41be22efaa73d605924",
  measurementId: "G-RD78S92KKC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
