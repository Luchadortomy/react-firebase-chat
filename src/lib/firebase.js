import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4ec0c.firebaseapp.com",
  projectId: "reactchat-4ec0c",
  storageBucket: "reactchat-4ec0c.appspot.com",
  messagingSenderId: "330591347708",
  appId: "1:330591347708:web:aeafcd7ef5bdd81bbb0879"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()