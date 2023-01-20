import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYKKnQqQ7kD40tdIsMrQvOxO6c_mP1UGk",
  authDomain: "miniblog-91c9d.firebaseapp.com",
  projectId: "miniblog-91c9d",
  storageBucket: "miniblog-91c9d.appspot.com",
  messagingSenderId: "371655996415",
  appId: "1:371655996415:web:d77ca02f9dc3f0a362edca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};