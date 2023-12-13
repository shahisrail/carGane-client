
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuaemqf6WrC6taiorNXZnkqArzDe-SHug",
  authDomain: "games-21038.firebaseapp.com",
  projectId: "games-21038",
  storageBucket: "games-21038.appspot.com",
  messagingSenderId: "652232395028",
  appId: "1:652232395028:web:01f6a0eb45620e1869da01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;