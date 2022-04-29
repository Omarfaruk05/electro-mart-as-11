// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD47JubBMDVNMNpWFcIXhSfkM1Q1JptkiY",
  authDomain: "electro-mart-36ca8.firebaseapp.com",
  projectId: "electro-mart-36ca8",
  storageBucket: "electro-mart-36ca8.appspot.com",
  messagingSenderId: "506574464126",
  appId: "1:506574464126:web:731162e9edb1c24121a42f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;