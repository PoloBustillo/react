import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import "firebase/auth";
import {FirebaseAuthProvider} from '@react-firebase/auth';
import { Provider } from 'react-redux';
import configureStore from './configureStore'

const store = configureStore()
const firebaseConfig = {
 apiKey: process.env.REACT_APP_APIKEY,
 authDomain: process.env.REACT_APP_AUTHDOMAAIN,
 databaseURL: process.env.REACT_APP_DB,
 projectId: process.env.REACT_APP_PROYID,
 messagingSenderId: process.env.REACT_APP_MSGID,
 appId: process.env.REACT_APP_APPID
};

render(
  <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseAuthProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
