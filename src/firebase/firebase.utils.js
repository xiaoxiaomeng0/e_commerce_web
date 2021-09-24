import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCfGfl-nOGwjEDKB49fXInlDygcOhL6gMk",
  authDomain: "annas-closet.firebaseapp.com",
  projectId: "annas-closet",
  storageBucket: "annas-closet.appspot.com",
  messagingSenderId: "397474869436",
  appId: "1:397474869436:web:4cc680c1ba7b12af6620b9",
  measurementId: "G-B2PHSHGNVN",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
