// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIW-L-TeCgH7Xv06KeW95q7LoOEYG-v0M",
  authDomain: "archiveunderground-2a0e8.firebaseapp.com",
  projectId: "archiveunderground-2a0e8",
  storageBucket: "archiveunderground-2a0e8.firebasestorage.app",
  messagingSenderId: "99933656129",
  appId: "1:99933656129:web:66d59068caa352b6fb62c0",
  measurementId: "G-ZLCYZSMLW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);