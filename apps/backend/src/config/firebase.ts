import * as dotenv from 'dotenv';
dotenv.config();
import { initializeApp, applicationDefault } from 'firebase-admin/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  credential: applicationDefault(),
};

export const setupFirebase = () => initializeApp(firebaseConfig);
