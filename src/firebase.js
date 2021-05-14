// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp  = firebase.initializeApp({
    apiKey: "AIzaSyDm7W2bRjmdRpl5EN8314Tc0JNrD8RHSMA",
    authDomain: "clone-cc6cf.firebaseapp.com",
    projectId: "clone-cc6cf",
    storageBucket: "clone-cc6cf.appspot.com",
    messagingSenderId: "840146417584",
    appId: "1:840146417584:web:68996d52626ac755f14875",
    measurementId: "G-E5YZGBTMB7"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db,provider,auth}