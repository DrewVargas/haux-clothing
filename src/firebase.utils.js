import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCWH3WEShjS0-pN6ROo2DHq-v-JZgOrgqc',
  authDomain: 'haux-clothing-db.firebaseapp.com',
  databaseURL: 'https://haux-clothing-db.firebaseio.com',
  projectId: 'haux-clothing-db',
  storageBucket: 'haux-clothing-db.appspot.com',
  messagingSenderId: '801497489386',
  appId: '1:801497489386:web:027c805aa9f00b64'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
