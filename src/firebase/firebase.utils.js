import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  addDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCfGfl-nOGwjEDKB49fXInlDygcOhL6gMk",
  authDomain: "annas-closet.firebaseapp.com",
  projectId: "annas-closet",
  storageBucket: "annas-closet.appspot.com",
  messagingSenderId: "397474869436",
  appId: "1:397474869436:web:4cc680c1ba7b12af6620b9",
  measurementId: "G-B2PHSHGNVN",
};

const app = initializeApp(config);

export const auth = getAuth();
export const stateChanged = onAuthStateChanged;
export const firestore = getFirestore(app);

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
  } else {
    const { displayName, email } = userAuth;
    const createAt = Timestamp.fromDate(new Date());
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userSnap;
};
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
