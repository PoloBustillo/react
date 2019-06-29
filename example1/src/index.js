import React from 'react';
import {render} from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import {FirebaseAuthProvider} from '@react-firebase/auth';
import { Provider } from 'react-redux';
import {firebaseConfig} from './utils/Firebase';
import configureStore from './configureStore';



const store = new Promise(function(resolve, reject) {

    const store = configureStore();
    resolve(store);
})

store.then(store => {
  render(
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseAuthProvider>
    , document.getElementById('root'));
});
