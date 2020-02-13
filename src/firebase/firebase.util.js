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


  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth){
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error) {
        console.log('error creating user ', error.message);
      }
    }



    return userRef;
  }

  firebase.initializeApp(config);

  //Refer to documentation for understanding completely 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Google auth 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)


  export default firebase;