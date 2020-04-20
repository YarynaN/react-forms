import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "KEY",
    authDomain: "cat-app-ccab8.firebaseapp.com",
    databaseURL: "https://cat-app-ccab8.firebaseio.com",
    projectId: "cat-app-ccab8",
    storageBucket: "cat-app-ccab8.appspot.com",
    messagingSenderId: "997952909125",
    appId: "1:997952909125:web:843ab7f28cf83e13fe982c"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;