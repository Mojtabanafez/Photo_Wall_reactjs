import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDW0ZeSCT9TxBiL9A-ZixbXbiJfmqEflHM",
    authDomain: "photowall-15671.firebaseapp.com",
    databaseURL: "https://photowall-15671.firebaseio.com",
    projectId: "photowall-15671",
    storageBucket: "",
    messagingSenderId: "393382204426",
    appId: "1:393382204426:web:2692a327cb138fde"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database();

export {database}