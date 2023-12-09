// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg9BaOjZgiIrGuscyPuIrkMbp47fpNwPE",
  authDomain: "brand-shop-assign-10.firebaseapp.com",
  projectId: "brand-shop-assign-10",
  storageBucket: "brand-shop-assign-10.appspot.com",
  messagingSenderId: "665946864162",
  appId: "1:665946864162:web:12476b1311aef48afd287b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;