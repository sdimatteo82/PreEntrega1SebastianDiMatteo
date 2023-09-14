import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkv1d7lunqWuZKrgFMwb2RD4-R6-D2_DA",
  authDomain: "proyecto-final-di-matteo.firebaseapp.com",
  projectId: "proyecto-final-di-matteo",
  storageBucket: "proyecto-final-di-matteo.appspot.com",
  messagingSenderId: "620920615393",
  appId: "1:620920615393:web:e0a7fdf697595b525be2a0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
