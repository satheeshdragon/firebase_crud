import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDpNG2sDe3w-Lw39XGXNoNORW3v5kUbcTM",
  authDomain: "reactsample-85097.firebaseapp.com",
  databaseURL: "https://reactsample-85097.firebaseio.com",
  projectId: "reactsample-85097",
  storageBucket: "reactsample-85097.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;

