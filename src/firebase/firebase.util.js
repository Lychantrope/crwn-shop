import firebase from 'firebase/app';

 import 'firebase/firestore';
 import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyDnnGPQuZHgcwwDsyjvjOBn0Wa9uDaCsTA",
    authDomain: "crwn-db-4522a.firebaseapp.com",
    databaseURL: "https://crwn-db-4522a.firebaseio.com",
    projectId: "crwn-db-4522a",
    storageBucket: "crwn-db-4522a.appspot.com",
    messagingSenderId: "136929491993",
    appId: "1:136929491993:web:b772e7298c5dbf316ffe88"
  };

  firebase.initializeApp(config);

  //Refer to documentation for undestanding compotely 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Google auth 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)


  export default firebase;