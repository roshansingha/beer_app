import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4bdyfnc6sIrIcuYq5D7NMLPxcEFX2jYA",
  authDomain: "beer-app-b3bc0.firebaseapp.com",
  databaseURL: "https://beer-app-b3bc0.firebaseio.com",
  projectId: "beer-app-b3bc0",
  storageBucket: "beer-app-b3bc0.appspot.com",
  messagingSenderId: "338508315055",
  appId: "1:338508315055:web:b7379aa03e386e93f0d75a",
  measurementId: "G-MWR4HYHFYY",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { db, auth };
