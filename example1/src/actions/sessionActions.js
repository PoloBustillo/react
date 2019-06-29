import * as ActionTypes from './types';
import {errorCodes} from '../utils/Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

const supportedPopupSignInMethods = [
  firebase.auth.EmailAuthProvider.PROVIDER_ID,
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  firebase.auth.GithubAuthProvider.PROVIDER_ID,
];

function getProvider(providerId) {
  switch (providerId) {
    case firebase.auth.GoogleAuthProvider.PROVIDER_ID:
      return new firebase.auth.GoogleAuthProvider();
    case firebase.auth.FacebookAuthProvider.PROVIDER_ID:
      return new firebase.auth.FacebookAuthProvider();
    case firebase.auth.EmailAuthProvider.PROVIDER_ID:
      return new firebase.auth.EmailAuthProvider();
    default:
      throw new Error(`No provider implemented for ${providerId}`);
  }
}





export const createNewUserEmail =  (username,email,password)=> {
  return async dispatch => {
    dispatch(createNewUserStarted());
    let result =null;
    try{
      result = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
    }
    catch(error){
        if(error.code === 'auth/email-already-in-use'){
          const providers = await firebase.auth().fetchSignInMethodsForEmail(email);
          if(!providers.includes(firebase.auth.EmailAuthProvider.PROVIDER_ID)){
            const firstPopupProviderMethod =
              providers.find(p => supportedPopupSignInMethods.includes(p));
            const linkedProvider = getProvider(firstPopupProviderMethod);
            linkedProvider.setCustomParameters({ login_hint: email });
            const credential = firebase.auth.EmailAuthProvider.credential(email, password);
            result = await firebase.auth().signInWithPopup(linkedProvider);
            result.user.linkWithCredential(credential);
            dispatch(createNewUserSucces(result, username))
          }
        }else{
          dispatch(createNewUserFailure(errorCodes[error.code]))
        }
      }
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
  type: ActionTypes.CREATE_NEW_USER_EMAIL_SUCCESS,
  payload: authUser,
  username: username
});

const createNewUserStarted = () => ({
  type: ActionTypes.CREATE_NEW_USER_EMAIL_STARTED
});

const createNewUserFailure = error => ({
  type: ActionTypes.CREATE_NEW_USER_EMAIL_FAILURE,
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
  type: ActionTypes.USER_PROFILE_SUCCESS,
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
  type: ActionTypes.LOGIN_USER_EMAIL_SUCCESS,
  payload: authUser
});

const loginUserStarted = () => ({
  type: ActionTypes.LOGIN_USER_EMAIL_STARTED
});

const loginUserFailure = error => ({
  type: ActionTypes.LOGIN_USER_EMAIL_FAILURE,
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
  type: ActionTypes.LOGOUT_USER_SUCCESS,
  spinner:false,
  logout: true
});

const logoutUserStarted = () => ({
  type: ActionTypes.LOGOUT_USER_STARTED,
  spinner:true
});


export const loginUserFB =  ()=> {
  return async dispatch => {
    dispatch(loginUserFBStarted());
    const provider = new firebase.auth.FacebookAuthProvider();
    let result;
    try {
      result = await firebase.auth().signInWithPopup(provider);
    } catch (err) {
      if (err.email
        && err.credential
        && err.code === 'auth/account-exists-with-different-credential') {
        const providers = await firebase.auth().fetchSignInMethodsForEmail(err.email)
        console.log(providers);

      }
    }

    dispatch(loginUserFBSuccess(result));
  }
};

const loginUserFBSuccess = authUser => ({
  type: ActionTypes.LOGIN_USER_FB_SUCCESS,
  payload: authUser
});

const loginUserFBStarted = () => ({
  type: ActionTypes.LOGIN_USER_FB_STARTED
});

const loginUserFBFailure = error => ({
  type: ActionTypes.LOGIN_USER_FB_FAILURE,
  errorCode: error
});

export const askForPasswordToLogin =  (email,password)=> {
  return async dispatch => {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password)
      .catch(error => {dispatch(loginUserFailure(errorCodes[error.code]))});
    // const linkresult = await result.user.linkWithCredential(credential)
    //       .catch(error => {dispatch(loginUserFBFailure(errorCodes[error.code]))});
  };
};
