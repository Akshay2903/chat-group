// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-n2C-44VBniP2619sww3p6ovPbqw7srU",
  authDomain: "react-chat-7c9d3.firebaseapp.com",
  projectId: "react-chat-7c9d3",
  storageBucket: "react-chat-7c9d3.appspot.com",
  messagingSenderId: "575933985311",
  appId: "1:575933985311:web:478bfabfc09afe81abdb2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)