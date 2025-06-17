import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3TeukE0qk_DJyVgTrMZohfE1VxVU8GHg",
  authDomain: "icecream-shopping-website.firebaseapp.com",
  projectId: "icecream-shopping-website",
  storageBucket: "icecream-shopping-website.firebasestorage.app",
  messagingSenderId: "222906224619",
  appId: "1:222906224619:web:e0d1d724e54aed312053ae",
  databaseURL:"https://icecream-shopping-website-default-rtdb.firebaseio.com"
};
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);