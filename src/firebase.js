import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQrOs_KPgAm-htQp2ie2h-gP9HpSEO8JQ",
    authDomain: "whats-app-clone-662c4.firebaseapp.com",
    databaseURL: "https://whats-app-clone-662c4.firebaseio.com",
    projectId: "whats-app-clone-662c4",
    storageBucket: "whats-app-clone-662c4.appspot.com",
    messagingSenderId: "306628760457",
    appId: "1:306628760457:web:1af33b0449accd43924758",
    measurementId: "G-ZHEM549JV4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider};
  export default db;