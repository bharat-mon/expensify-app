import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCvI_PgyErNo6vTCdE2IqlqSc-E6cllF9s",
  authDomain: "expensify-8c1a3.firebaseapp.com",
  databaseURL: "https://expensify-8c1a3.firebaseio.com",
  projectId: "expensify-8c1a3",
  storageBucket: "expensify-8c1a3.appspot.com",
  messagingSenderId: "235612414579"
};

firebase.initializeApp(config);