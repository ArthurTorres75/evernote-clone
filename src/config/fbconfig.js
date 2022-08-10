import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBV7C-NvHiNCIVOmu8wNAjGFqFM6EUASRY",
    authDomain: "evernote-clone-bc9ef.firebaseapp.com",
    projectId: "evernote-clone-bc9ef",
    storageBucket: "evernote-clone-bc9ef.appspot.com",
    messagingSenderId: "810516256091",
    appId: "1:810516256091:web:642c46c60d94d7c9ad767e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
