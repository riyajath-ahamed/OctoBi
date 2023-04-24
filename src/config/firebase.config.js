
import {getApp, getApps, initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlRKc7G9drwhQ0mJLRfFhQs0xhO0G-Q0o",
  authDomain: "octopus-47d29.firebaseapp.com",
  projectId: "octopus-47d29",
  storageBucket: "octopus-47d29.appspot.com",
  messagingSenderId: "334782323154",
  appId: "1:334782323154:web:7ddb17b3314721eb66500b",
  databaseURL:"https://octopus-47d29-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig) ;

export const database = getDatabase(app);
export const auth = getAuth();

