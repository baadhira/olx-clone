import firebase from "firebase";
import 'firebase/auth'
import 'firebase'
import 'firebase/storage'



  const firebaseConfig = {
    apiKey: "AIzaSyAziFcsE3lUrfXMCo4Ggsq2SKAyDiJemxA",
    authDomain: "olx-clone-f7fce.firebaseapp.com",
    databaseURL: "https://olx-clone-f7fce-default-rtdb.firebaseio.com",
    projectId: "olx-clone-f7fce",
    storageBucket: "olx-clone-f7fce.appspot.com",
    messagingSenderId: "123772997784",
    appId: "1:123772997784:web:84fc53ac4f44f1581e40ed",
    measurementId: "G-LRE5ZH9JYG"
  };

 export default firebase.initializeApp(firebaseConfig)