import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js"

 const firebaseConfig = {
    apiKey: "AIzaSyA5cuEDejR99HedYWktbRuYAboZINN8Z0w",
    authDomain: "hackaton-e7f62.firebaseapp.com",
    projectId: "hackaton-e7f62",
    storageBucket: "hackaton-e7f62.appspot.com",
    messagingSenderId: "966273044023",
    appId: "1:966273044023:web:461e406ceb69395bf039b2",
    measurementId: "G-VEVKJCKX9R"
 };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);