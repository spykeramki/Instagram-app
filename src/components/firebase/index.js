import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDV5JpAoHShZGzRdwijMTwdcbwxCaQB-W8",
    authDomain: "project-hamgram.firebaseapp.com",
    projectId: "project-hamgram",
    storageBucket: "project-hamgram.appspot.com",
    messagingSenderId: "157139647203",
    appId: "1:157139647203:web:fef058b1fcca23abf523d6",
    measurementId: "G-56NQ79LL8Q"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  export {storage, firebase as default};