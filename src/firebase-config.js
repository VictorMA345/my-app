// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDih4Yl_BgqUgjX3eGRWROcmyo4Il-kWek",

  authDomain: "tareaarquitecturavictormontero.firebaseapp.com",

  projectId: "tareaarquitecturavictormontero",

  storageBucket: "tareaarquitecturavictormontero.appspot.com",

  messagingSenderId: "839474027314",

  appId: "1:839474027314:web:15012b8bd6bb0357bad52b",

  measurementId: "G-4618W8V8BY"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

 
export const db = getFirestore(app)