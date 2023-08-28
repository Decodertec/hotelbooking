// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiLYKGFRKeMXnj14BLwcc2nMbaFEJ3prk",
  authDomain: "bookstay-d32ea.firebaseapp.com",
  projectId: "bookstay-d32ea",
  storageBucket: "bookstay-d32ea.appspot.com",
  messagingSenderId: "457709238936",
  appId: "1:457709238936:web:6a0492ba93d25434982eed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
