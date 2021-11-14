// import firebase from 'firebase/compat/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';

// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(clientCredentials);

export const db = getFirestore();


// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();

// export async function getCyberLogMessages() {
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.limit(10);
//   const messagesDoc = (await query.get()).docs[0];
//   return messagesDoc;
// }

export function postToJSON(doc) {
  const data = doc.data();

  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}