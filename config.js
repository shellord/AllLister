import * as firebase from 'firebase'

const FIREBASE_CONFIG  = {
    //config
  }

  const Firebase = firebase.initializeApp(FIREBASE_CONFIG)

  export {FIREBASE_CONFIG,Firebase}
