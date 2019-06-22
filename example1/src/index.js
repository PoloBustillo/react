import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import {FirebaseAuthProvider} from '@react-firebase/auth';

const firebaseConfig = {
 apiKey: process.env.REACT_APP_APIKEY,
 authDomain: process.env.REACT_APP_AUTHDOMAAIN,
 databaseURL: process.env.REACT_APP_DB,
 projectId: process.env.REACT_APP_PROYID,
 messagingSenderId: process.env.REACT_APP_MSGID,
 appId: process.env.REACT_APP_APPID
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
