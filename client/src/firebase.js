// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'blog-d1a0d.firebaseapp.com',
  projectId: 'blog-d1a0d',
  storageBucket: 'blog-d1a0d.appspot.com',
  messagingSenderId: '852696228937',
  appId: '1:852696228937:web:0ed3491ec99c11f3000b98',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
