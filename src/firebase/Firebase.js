import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3TeukE0qk_DJyVgTrMZohfE1VxVU8GHg",
  authDomain: "icecream-shopping-website.firebaseapp.com",
  projectId: "icecream-shopping-website",
  storageBucket: "icecream-shopping-website.firebasestorage.app",
  messagingSenderId: "222906224619",
  appId: "1:222906224619:web:e0d1d724e54aed312053ae",
  databaseURL: "https://icecream-shopping-website-default-rtdb.firebaseio.com"
};
export const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export const signUpWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = result.user;
    console.log(user);
    return user;
  } catch (error) {
    console.error("Error signing up with Email and Password:", error);
    throw error;
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = res.user;
    return user
  } catch (error) {
    console.log("Error Signing In with Email and password:", error);
    throw error;
  }
}
