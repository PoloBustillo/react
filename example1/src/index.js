import React from 'react';
import {render} from 'react-dom';
import App from './App';
import firebase from "firebase/app";
import {FirebaseAuthProvider} from '@react-firebase/auth';
import { Provider } from 'react-redux';
import {firebaseConfig} from './utils/Firebase';
import configureStore from './configureStore'

const store = configureStore();
render(
  <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseAuthProvider>
  , document.getElementById('root'));
