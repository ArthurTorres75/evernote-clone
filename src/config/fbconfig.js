// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV7C-NvHiNCIVOmu8wNAjGFqFM6EUASRY",
  authDomain: "evernote-clone-bc9ef.firebaseapp.com",
  projectId: "evernote-clone-bc9ef",
  storageBucket: "evernote-clone-bc9ef.appspot.com",
  messagingSenderId: "810516256091",
  appId: "1:810516256091:web:642c46c60d94d7c9ad767e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebase;