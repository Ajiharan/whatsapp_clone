import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA81_vJUUUjsdRem_V_6u-YzD82xU8kXs8",
  authDomain: "whatsapp-clone-e3233.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e3233.firebaseio.com",
  projectId: "whatsapp-clone-e3233",
  storageBucket: "whatsapp-clone-e3233.appspot.com",
  messagingSenderId: "285146178672",
  appId: "1:285146178672:web:d34067e4ff4b775d6600b5",
  measurementId: "G-H9E8B8XXME",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
