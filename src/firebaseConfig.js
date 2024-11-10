// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBK3Jq9cX9y5vEEQwQV6quJGw4W6NW9Dn4",
    authDomain: "ntpc-test-73213.firebaseapp.com",
    projectId: "ntpc-test-73213",
    storageBucket: "ntpc-test-73213.firebasestorage.app",
    messagingSenderId: "85129474432",
    appId: "1:85129474432:web:dcf74824947a19de749165",
    measurementId: "G-8DG8P84LX6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };