import firebase from 'firebase/compat/app'
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore,serverTimestamp} from 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
    apiKey: "AIzaSyA9xWyQHjKvuEhQtn3YfMIQroS-agOlxd4",
    authDomain: "bidding-f67c4.firebaseapp.com",
    projectId: "bidding-f67c4",
    storageBucket: "bidding-f67c4.appspot.com",
    messagingSenderId: "928524646224",
    appId: "1:928524646224:web:2fedf96c36d0253546de55"
});
//export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const firestoreApp =getFirestore(app);
export const storageApp = getStorage(app);
export const authApp = getAuth(app);