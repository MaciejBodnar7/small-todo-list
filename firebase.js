// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { collection, getFireStore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFDFWaJRpyqct3pZUmTgALH9h8RJxjxaY",
  authDomain: "todo-list-scrimba-react.firebaseapp.com",
  projectId: "todo-list-scrimba-react",
  storageBucket: "todo-list-scrimba-react.appspot.com",
  messagingSenderId: "599462075993",
  appId: "1:599462075993:web:e492941f380661c4385b48",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFireStore(app)
const notesCollection = collection(db, "notes")
