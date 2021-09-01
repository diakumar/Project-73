import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyDDsbVnt_LpK4-g812YOprMtqUCZNP5-_s",
    authDomain: "project-71-46a1d.firebaseapp.com",
    projectId: "project-71-46a1d",
    storageBucket: "project-71-46a1d.appspot.com",
    messagingSenderId: "78944628155",
    appId: "1:78944628155:web:0123599def3b107604e89e"
  }; 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

