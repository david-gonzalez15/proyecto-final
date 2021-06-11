// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUtTIZyt9dfh-mMZ1oBEJ4B2k_5BqI8Zc",
  authDomain: "odyssey-c2561.firebaseapp.com",
  databaseURL: "https://odyssey-c2561-default-rtdb.firebaseio.com",
  projectId: "odyssey-c2561",
  storageBucket: "odyssey-c2561.appspot.com",
  messagingSenderId: "318698140601",
  appId: "1:318698140601:web:3a2ff8d71e206316e0fc68",
  measurementId: "G-4LPPF0DQCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
