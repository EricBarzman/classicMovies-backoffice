// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE5HlPPV4J6casNOCqz1Hv_huSk-IYLog",
  authDomain: "classic-movies-eb.firebaseapp.com",
  projectId: "classic-movies-eb",
  storageBucket: "classic-movies-eb.firebasestorage.app",
  messagingSenderId: "534272823760",
  appId: "1:534272823760:web:889a9c647765457196a9d5",
  measurementId: "G-ES3DMMY1M8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);