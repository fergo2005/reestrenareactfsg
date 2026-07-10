import { getFirestore } from 'firebase/firestore';
/* import { getFirestore } from "firebase/firestore"; */
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdkl1pZq3Ab28xdfVbUCT59aUQAP7tGGM",
    authDomain: "curso-react-2026-c26122.firebaseapp.com",
    projectId: "curso-react-2026-c26122",
    storageBucket: "curso-react-2026-c26122.firebasestorage.app",
    messagingSenderId: "823592416193",
    appId: "1:823592416193:web:c7956192aed046a4b5f540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


/* Para cuando veamos el login */

const auth = getAuth(app);

export { db, auth };







