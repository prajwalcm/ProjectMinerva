import * as firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDey5tOsCk278MRwd4Qxk4aljBdzjFmigA",
    authDomain: "projectminerva-63e42.firebaseapp.com",
    projectId: "projectminerva-63e42",
    storageBucket: "projectminerva-63e42.appspot.com",
    messagingSenderId: "460830435019",
    appId: "1:460830435019:web:2b5305e34d1787c2469d4e",
    measurementId: "G-GE4RT6K7F6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
