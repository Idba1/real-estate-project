// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Vf1j4dlX332mBZrfPovLt7F4keWHSOg",
  authDomain: "brightest-luxury.firebaseapp.com",
  projectId: "brightest-luxury",
  storageBucket: "brightest-luxury.appspot.com",
  messagingSenderId: "1044552988937",
  appId: "1:1044552988937:web:a29034fc173f80233ebbd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;