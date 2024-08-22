// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpBbjiAMzLCzhgno2OvYgQoGJNlwHIbyw",
  authDomain: "portfolio-reactapp-d0dda.firebaseapp.com",
  projectId: "portfolio-reactapp-d0dda",
  storageBucket: "portfolio-reactapp-d0dda.appspot.com",
  messagingSenderId: "598107382489",
  appId: "1:598107382489:web:e88bd0a8da4634b30354c8",
  measurementId: "G-LE482G9NZ4",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleAuthentication = new GoogleAuthProvider(app);
const githubAuthentication = new GithubAuthProvider(app);

export { auth, googleAuthentication, githubAuthentication };
export const db = getFirestore(app);
