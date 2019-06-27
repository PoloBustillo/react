import { SET_MODAL_VISIBILITY_REGISTER,
  SET_MODAL_VISIBILITY_LOGIN,
  CREATE_NEW_USER_EMAIL_SUCCESS,
  CREATE_NEW_USER_EMAIL_STARTED,
  CREATE_NEW_USER_EMAIL_FAILURE,
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
       dispatch(createNewUserSucces(result));
    }
  };
};

const createNewUserSucces = authUser => ({
  type: CREATE_NEW_USER_EMAIL_SUCCESS,
  spinner:false,
  payload: authUser
});

const createNewUserStarted = () => ({
  type: CREATE_NEW_USER_EMAIL_STARTED,
  spinner:true
});

const createNewUserFailure = error => ({
  type: CREATE_NEW_USER_EMAIL_FAILURE,
  spinner:true,
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
