import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import {FirebaseAuthProvider} from '@react-firebase/auth';



console.log(process.env.REACT_APP_APIKEY);
const firebaseConfig = {
 apiKey: "AIzaSyDScFdbM9xQSUuUkFtk1GSR-CuRdX3WgsI",
 authDomain: "tortillerias-4f254.firebaseapp.com",
 databaseURL: "https://tortillerias-4f254.firebaseio.com",
 projectId: "tortillerias-4f254",
 storageBucket: "",
 messagingSenderId: "807566598913",
 appId: "1:807566598913:web:cf61f95f59c3a09f"
};

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <App />
  </FirebaseAuthProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
