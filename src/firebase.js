import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuAMor44xql4rjgobCzYBzh4Arn0el39Q",
    authDomain: "linkedin-clone-yt-55da2.firebaseapp.com",
    projectId: "linkedin-clone-yt-55da2",
    storageBucket: "linkedin-clone-yt-55da2.appspot.com",
    messagingSenderId: "315992660619",
    appId: "1:315992660619:web:bb9aef1a0806e3d42c928e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };