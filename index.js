import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getFirestore,collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBQdJt1ALnalUCDhvb8ZI3_g-5dasdco0",
    authDomain: "medical-stores-25562.firebaseapp.com",
    projectId: "medical-stores-25562",
    storageBucket: "medical-stores-25562.appspot.com",
    messagingSenderId: "448682246093",
    appId: "1:448682246093:web:ece4d5626e3e0a20ab4e84"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();


  