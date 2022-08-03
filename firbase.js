// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWwvqW8_c93nN7kbsJtpoJDZGN5-KF5pM",
    authDomain: "test-fb840.firebaseapp.com",
    projectId: "test-fb840",
    storageBucket: "test-fb840.appspot.com",
    messagingSenderId: "326658231976",
    appId: "1:326658231976:web:e014699e810df16ff77c9d",
    measurementId: "G-53QMHGZ132"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();

export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

