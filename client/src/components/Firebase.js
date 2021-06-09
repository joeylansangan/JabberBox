import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyBu0Hoy7kBNBMQ1HZYaL-_HTRoKI8RRdeY",
    authDomain: "jabberspot-a5034.firebaseapp.com",
    projectId: "jabberspot-a5034",
    storageBucket: "jabberspot-a5034.appspot.com",
    messagingSenderId: "990199757475",
    appId: "1:990199757475:web:86f2176f6391a3e998dd16",
    measurementId: "G-VFLM6KTQVZ"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
       }
  
  export default firebase