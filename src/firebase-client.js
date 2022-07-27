import {initializeApp} from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut
} from 'firebase/auth';

const fireApp = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING,
    appId: process.env.FIREBASE_APP_ID
});

const auth = getAuth();

export const authApp = {
    auth,
    createUserWithEmailAndPassword,
    googleProvider: new GoogleAuthProvider(),
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut
};
export default fireApp;