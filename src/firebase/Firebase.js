import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB3TeukE0qk_DJyVgTrMZohfE1VxVU8GHg",
  authDomain: "icecream-shopping-website.firebaseapp.com",
  projectId: "icecream-shopping-website",
  storageBucket: "icecream-shopping-website.firebasestorage.app",
  messagingSenderId: "222906224619",
  appId: "1:222906224619:web:e0d1d724e54aed312053ae",
  databaseURL: "https://icecream-shopping-website-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign up - save user with default role "user"
export const signUpWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    email,
    role: "user", 
  });

  return user;
};

// Sign in - retrieve role
export const signInWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (userDoc.exists()) {
    const role = userDoc.data().role;
    localStorage.setItem("role", role); // Store role for access check
  }

  return user;
};
