import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAlHXKHbZRME1S9GOuW0de3ueVR8jOC9xI",
  authDomain: "web-project-1c42a.firebaseapp.com",
  projectId: "web-project-1c42a",
  storageBucket: "web-project-1c42a.appspot.com",
  messagingSenderId: "746502288283",
  appId: "1:746502288283:web:3ac508900ebec8b05b273e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();