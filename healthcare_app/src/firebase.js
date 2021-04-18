import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCKXHOMmqDkAe3jz3sBOMFm1NGRSw-l59I",
    authDomain: "healthcaresystem-20062.firebaseapp.com",
    databaseURL: "https://healthcaresystem-20062.firebaseio.com",
    projectId: "healthcaresystem-20062",
    storageBucket: "healthcaresystem-20062.appspot.com",
    messagingSenderId: "722168508618",
    appId: "1:722168508618:web:14fa43addc6d50e1f08433",
    measurementId: "G-WZKNLBQVHS"
};

const app = firebase.initializeApp(firebaseConfig);


export const auth = app.auth()
export const database = app.database()
export default app