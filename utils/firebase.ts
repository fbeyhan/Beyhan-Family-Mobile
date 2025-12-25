// Firebase initialization for Expo/React Native app
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Replace with your actual Firebase config from the web project
const firebaseConfig = {
  apiKey: 'AIzaSyDzlKNFJ1ClEXy8TvTK29AeTaJe8MzDZYo',
  authDomain: 'beyhan-family-website.firebaseapp.com',
  projectId: 'beyhan-family-website',
  storageBucket: 'beyhan-family-website.firebasestorage.app',
  messagingSenderId: '967303162008',
  appId: '1:967303162008:web:de9f26fca6a4a6c70d08ed',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
