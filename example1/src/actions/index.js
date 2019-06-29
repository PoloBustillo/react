import { SET_MODAL_VISIBILITY_REGISTER,
  SET_MODAL_VISIBILITY_LOGIN,
  CREATE_NEW_USER_EMAIL_SUCCESS,
  CREATE_NEW_USER_EMAIL_STARTED,
  CREATE_NEW_USER_EMAIL_FAILURE,
  LOGIN_USER_EMAIL_SUCCESS,
  LOGIN_USER_EMAIL_STARTED,
  LOGIN_USER_EMAIL_FAILURE,
  LOGIN_USER_FB_SUCCESS,
  LOGIN_USER_FB_STARTED,
  LOGIN_USER_FB_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_STARTED,
  SET_MODAL_VISIBILITY_EMAIL,
  USER_PROFILE_SUCCESS
} from './types';

import {errorCodes} from '../utils/Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

export const setRegisterModalVisibility = isOpen => ({
  type: SET_MODAL_VISIBILITY_REGISTER,
  isOpen: isOpen
})

export const setLoginModalVisibility = isOpen => ({
  type: SET_MODAL_VISIBILITY_LOGIN,
  isOpen: isOpen
})

export const setEmailModalVisibility = isOpen => ({
  type: SET_MODAL_VISIBILITY_EMAIL,
  isOpen: isOpen
})

export const createNewUserEmail =  (username,email,password)=> {
  return async dispatch => {
    dispatch(createNewUserStarted());
    const result = await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {dispatch(createNewUserFailure(errorCodes[error.code]))});

    if(result!=null){
      var user = firebase.auth().currentUser;
      user.updateProfile({
          displayName: username,
          photoURL: ""
        });
       result.user.sendEmailVerification();
       dispatch(createNewUserSucces(result, username));
    }
  };
};

const createNewUserSucces = (authUser, username) => ({
  type: CREATE_NEW_USER_EMAIL_SUCCESS,
  payload: authUser,
  username: username
});

const createNewUserStarted = () => ({
  type: CREATE_NEW_USER_EMAIL_STARTED
});

const createNewUserFailure = error => ({
  type: CREATE_NEW_USER_EMAIL_FAILURE,
  errorCode: error
});

export const loadUserProfile = (user)=> {
  return async dispatch => {
    if(user){
      const isAdmin = await user.getIdTokenResult(true)
        .then((idTokenResult) => {
           return Promise.resolve(idTokenResult.claims.admin);
        })
        .catch((error) => {
          return Promise.resolve(false);
        });
      dispatch(userProfileSuccess(user,isAdmin));
    }
  };
};

const userProfileSuccess = (authUser, isAdmin)=> ({
  type: USER_PROFILE_SUCCESS,
  payload: authUser,
  isAdmin: isAdmin
});


export const loginUserEmail =  (email,password)=> {
  return async dispatch => {
    dispatch(loginUserStarted());

    const result = await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {dispatch(loginUserFailure(errorCodes[error.code]))});

    if(result!=null){
      dispatch(loginUserSuccess(result));
    }
  };
};

const loginUserSuccess = authUser => ({
  type: LOGIN_USER_EMAIL_SUCCESS,
  payload: authUser
});

const loginUserStarted = () => ({
  type: LOGIN_USER_EMAIL_STARTED
});

const loginUserFailure = error => ({
  type: LOGIN_USER_EMAIL_FAILURE,
  errorCode: error
});

export const logoutUserEmail =  (email,password)=> {
  return async dispatch => {
    dispatch(logoutUserStarted());
    await firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user) =>{
      if(user===null)
        dispatch(logoutUserSuccess());
    });


  };
};

const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
  spinner:false,
  logout: true
});

const logoutUserStarted = () => ({
  type: LOGOUT_USER_STARTED,
  spinner:true
});


export const loginUserFB =  ()=> {
  return async dispatch => {
    dispatch(loginUserFBStarted());
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (err) {
      console.log(err);
      if (err.email
        && err.credential
        && err.code === 'auth/account-exists-with-different-credential') {
        const providers = await firebase.auth().fetchSignInMethodsForEmail(err.email)
        console.log(provider);
        const result = await firebase.auth()
          .signInWithEmailAndPassword(err.email, '123456')
          .catch(error => {dispatch(loginUserFailure(errorCodes[error.code]))});
        console.log(result);
        const linkresult = await result.user.linkWithCredential(err.credential)
              .catch(error => {dispatch(loginUserFailure(errorCodes[error.code]))});
        console.log(linkresult);
      }
    }
  }
};

const loginUserFBSuccess = authUser => ({
  type: LOGIN_USER_FB_SUCCESS,
  payload: authUser
});

const loginUserFBStarted = () => ({
  type: LOGIN_USER_FB_STARTED
});

const loginUserFBFailure = error => ({
  type: LOGIN_USER_FB_FAILURE,
  errorCode: error
});
