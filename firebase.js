import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv7X885Rly4ebEPfq4BZ-gf1yNBWnSUbo",
  authDomain: "chat-9e8ae.firebaseapp.com",
  projectId: "chat-9e8ae",
  storageBucket: "chat-9e8ae.appspot.com",
  messagingSenderId: "775860662448",
  appId: "1:775860662448:web:b3d9dfe3193cc9886d4b75",
  measurementId: "G-44NHR69BM4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { auth, db };
