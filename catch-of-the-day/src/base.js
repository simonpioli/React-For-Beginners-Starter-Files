import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDERMt9ruN7CrnKEu1KS_Ksd4j2U6e9y-Q",
    authDomain: "catch-of-the-day-b370b.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-b370b.firebaseio.com",
    projectId: "catch-of-the-day-b370b",
    storageBucket: "catch-of-the-day-b370b.appspot.com",
    messagingSenderId: "403028144770",
    appId: "1:403028144770:web:9a06c68755f0ebde7d3a9b"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
