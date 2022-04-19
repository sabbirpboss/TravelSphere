// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv87kM-TCrcxv9REmQO9euSNUsmtOCr3I",
  authDomain: "travelsphere-18293.firebaseapp.com",
  projectId: "travelsphere-18293",
  storageBucket: "travelsphere-18293.appspot.com",
  messagingSenderId: "722701188885",
  appId: "1:722701188885:web:c15afb3d0c9cb535f8f31c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
