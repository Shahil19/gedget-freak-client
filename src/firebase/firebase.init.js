// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDixsq_FHzwdriAzQZ-HSHA5cm4f283-bU",
    authDomain: "gadget-freak-8226b.firebaseapp.com",
    projectId: "gadget-freak-8226b",
    storageBucket: "gadget-freak-8226b.appspot.com",
    messagingSenderId: "249619540539",
    appId: "1:249619540539:web:9a5285ca45b7fc0db58a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;