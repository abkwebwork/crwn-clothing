import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnmYsv0MIoWDZjxBuIcNKoKVqFg8pdPyw",
    authDomain: "crwn-db-a47ba.firebaseapp.com",
    databaseURL: "https://crwn-db-a47ba.firebaseio.com",
    projectId: "crwn-db-a47ba",
    storageBucket: "crwn-db-a47ba.appspot.com",
    messagingSenderId: "477001419454",
    appId: "1:477001419454:web:fb76df8b050d1bbdee6cef",
    measurementId: "G-VWSZG5XS5P"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;