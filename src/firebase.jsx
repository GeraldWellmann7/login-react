import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD32jemshMLpYWsAFcVh01Iqy4q_97meC4",
  authDomain: "login-react-3d9f7.firebaseapp.com",
  projectId: "login-react-3d9f7",
  storageBucket: "login-react-3d9f7.appspot.com",
  messagingSenderId: "519613251436",
  appId: "1:519613251436:web:3ef118de9a8645ede1bd49"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };