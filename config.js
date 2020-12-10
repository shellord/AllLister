import * as firebase from 'firebase'

const FIREBASE_CONFIG  = {
    apiKey: "AIzaSyBcFoN87oFcOvw5cVsnOBM0pj5oNq6yqM8",
    authDomain: "projectx-7c40c.firebaseapp.com",
    databaseURL: "https://projectx-7c40c.firebaseio.com",
    projectId: "projectx-7c40c",
    storageBucket: "projectx-7c40c.appspot.com",
    messagingSenderId: "790112231693",
    appId: "1:790112231693:web:b13c00dc5315314dcf9044",
    measurementId: "G-ZV5QJ723QV"
  }

  const Firebase = firebase.initializeApp(FIREBASE_CONFIG)

  export {FIREBASE_CONFIG,Firebase}