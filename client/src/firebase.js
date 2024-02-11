// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log("api key",import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-28fa7.firebaseapp.com",
  projectId: "blog-app-28fa7",
  storageBucket: "blog-app-28fa7.appspot.com",
  messagingSenderId: "761739792840",
  appId: "1:761739792840:web:e1e599fb62d2175790f0fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
