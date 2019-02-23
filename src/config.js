import firebase from 'firebase'

export const appName = "crona-group"

export const firebaseConfig = {
    apiKey: "AIzaSyDv5Ak1Lg2OOXh31CwcGhrWowTCHMreBXc",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "15703755873"
};

firebase.initializeApp((firebaseConfig))