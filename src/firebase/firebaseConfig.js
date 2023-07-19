// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ83RYJtvv3dgj1vjnKTIfqMYUZtBwqRM",
  authDomain: "eccomerce-react-15a06.firebaseapp.com",
  projectId: "eccomerce-react-15a06",
  storageBucket: "eccomerce-react-15a06.appspot.com",
  messagingSenderId: "552939966351",
  appId: "1:552939966351:web:3dba5c89e9b9c030c405fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);