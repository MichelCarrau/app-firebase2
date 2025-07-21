import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
 apiKey: "AIzaSyDOjl3MaiOaGDiDh7b9v1BiFnNy-Z0iGxw",
  authDomain: "pagos-nx-aff34.firebaseapp.com",
  databaseURL: "https://pagos-nx-aff34-default-rtdb.firebaseio.com",
  projectId: "pagos-nx-aff34",
  storageBucket: "pagos-nx-aff34.firebasestorage.app",
  messagingSenderId: "1064366105662",
  appId: "1:1064366105662:web:2c86084929599cf23add6f"
  
};

// Evita error de instancia duplicada
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// 🚨 Usa initializeFirestore con estas opciones:
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false
});

const rtdb = getDatabase(app);

export { db, rtdb };