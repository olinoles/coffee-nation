// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9gk1iFRy7GZ7wp4R9B-zGvx9GvZnq0sA',
  authDomain: 'coffee-nation-5c0f1.firebaseapp.com',
  projectId: 'coffee-nation-5c0f1',
  storageBucket: 'coffee-nation-5c0f1.appspot.com',
  messagingSenderId: '248018761759',
  appId: '1:248018761759:web:7440a85c647fc58488bd2a',
  measurementId: 'G-27LLDMFPPS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
