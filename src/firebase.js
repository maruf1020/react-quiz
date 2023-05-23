// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // eslint-disable-next-line no-undef
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // eslint-disable-next-line no-undef
    projectId: process.env.REACT_APP_FIREBASE_PROJET_ID,
    // eslint-disable-next-line no-undef
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // eslint-disable-next-line no-undef
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // eslint-disable-next-line no-undef
    appId: process.env.REACT_APP_FIREBASE_API_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;