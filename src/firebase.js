// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt3m0m9QHVASMDI3fy5qCb2c5ujr6gEg8",
    authDomain: "todo-app-5c470.firebaseapp.com",
    projectId: "todo-app-5c470",
    storageBucket: "todo-app-5c470.appspot.com",
    messagingSenderId: "429916253793",
    appId: "1:429916253793:web:32cdd8c3159bd6eaa74420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)