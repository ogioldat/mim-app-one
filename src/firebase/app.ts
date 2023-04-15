import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mim-one.firebaseapp.com",
    projectId: "mim-one",
    storageBucket: "mim-one.appspot.com",
    messagingSenderId: "510182335109",
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export default initializeApp(firebaseConfig)