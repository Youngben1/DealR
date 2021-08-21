import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBSokOFNIFS8C5K0r1k81rhPHRq5HUgoPY",
    authDomain: "dealr-6bc49.firebaseapp.com",
    projectId: "dealr-6bc49",
    storageBucket: "dealr-6bc49.appspot.com",
    messagingSenderId: "23127227802",
    appId: "1:23127227802:web:07fe8ead73ebd3fc270e23"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };