import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD85CbKQW7uzWG905H8NSsTrUUs_dpbb6A",
  authDomain: "live-chatroom-845e2.firebaseapp.com",
  projectId: "live-chatroom-845e2",
  storageBucket: "live-chatroom-845e2.appspot.com",
  messagingSenderId: "701952375639",
  appId: "1:701952375639:web:0829b827e196a09fe85c12"
};

// Init Firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }