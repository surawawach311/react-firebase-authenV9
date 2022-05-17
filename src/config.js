import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmK-QOuAGhXQtWbE_5raCxj5EcTXS0GLk",
  authDomain: "fir-authen-7b5ad.firebaseapp.com",
  projectId: "fir-authen-7b5ad",
  storageBucket: "fir-authen-7b5ad.appspot.com",
  messagingSenderId: "1089817396528",
  appId: "1:1089817396528:web:75e0e0ed568f3e645974f5",
  measurementId: "G-SD0TE5VRP9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
