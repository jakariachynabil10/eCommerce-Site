// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeCFAp9MdXFLdx7sGFp7ET3FLDci6VimU",
  authDomain: "ecommerce-site-d98c7.firebaseapp.com",
  projectId: "ecommerce-site-d98c7",
  storageBucket: "ecommerce-site-d98c7.appspot.com",
  messagingSenderId: "236856746737",
  appId: "1:236856746737:web:e1204508c095659b1f3f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app