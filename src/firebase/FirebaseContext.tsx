import { initializeApp } from "firebase/app";
import { createContext } from "react";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: "mim-one.firebaseapp.com",
    projectId: "mim-one",
    storageBucket: "mim-one.appspot.com",
    messagingSenderId: "510182335109",
    appId: import.meta.env.FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const FirebaseContext = createContext(app)