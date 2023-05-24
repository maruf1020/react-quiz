import { initializeApp } from "firebase/app";

const app = initializeApp({
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    // databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
    databaseURL: "https://react-quiz-dev-5cba3-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default app;
