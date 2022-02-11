// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfuFxRn_QTUSPCSBJWDl5FdtW2kTS62aM",
  authDomain: "twitter-clone-321c6.firebaseapp.com",
  projectId: "twitter-clone-321c6",
  storageBucket: "twitter-clone-321c6.appspot.com",
  messagingSenderId: "88230109893",
  appId: "1:88230109893:web:587b8e6a09e6d6aa1306ac",
  measurementId: "G-J06SFR9M42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export default db;