import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAczm2Jul23QiKRd0M4b4zGqjr5pgdwTpo",
  authDomain: "tubse-7dd8e.firebaseapp.com",
  databaseURL:
    "https://tubse-7dd8e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tubse-7dd8e",
  storageBucket: "tubse-7dd8e.appspot.com",
  messagingSenderId: "427831823047",
  appId: "1:427831823047:web:c4c83e910c2b4439cecce2",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
