import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import firebase from 'firebase/app';
import 'firebase/auth';
import {firebaseConfig} from './utils/Firebase';
import {loadUserProfile} from './actions';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) =>{store.dispatch(loadUserProfile(user));});
  return store
}
