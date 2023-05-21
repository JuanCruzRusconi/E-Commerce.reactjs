// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_hJ-N0XV5lZ1NFhGRiOp8SifJQ8ovhI",
  authDomain: "ecommerce-reactjs-8633c.firebaseapp.com",
  projectId: "ecommerce-reactjs-8633c",
  storageBucket: "ecommerce-reactjs-8633c.appspot.com",
  messagingSenderId: "224056726376",
  appId: "1:224056726376:web:522f6bcc9ace91c81afcdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    app
}