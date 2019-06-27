import {
  SET_MODAL_VISIBILITY_REGISTER,
  SET_MODAL_VISIBILITY_LOGIN,
  CREATE_NEW_USER_EMAIL_STARTED,
  CREATE_NEW_USER_EMAIL_FAILURE,
  CREATE_NEW_USER_EMAIL_SUCCESS,
  SET_MODAL_VISIBILITY_EMAIL
} from '../actions/types';

const INITIAL_STATE = {
  openRegister: false,
  openLogin: false,
  errorCode:'',
  spinner:false,
  openEmailVerification:false
};

function modalsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_MODAL_VISIBILITY_REGISTER: {
      return {
        ...state,
        openRegister: action.isOpen
      }
    }
    case SET_MODAL_VISIBILITY_LOGIN: {
      return {
        ...state,
        openLogin: action.isOpen
      }
    }
    case SET_MODAL_VISIBILITY_EMAIL: {
      return {
        ...state,
        openEmailVerification: action.isOpen
      }
    }
    case CREATE_NEW_USER_EMAIL_STARTED: {
      return {
        ...state,
        spinner: action.spinner
      }
    }
    case CREATE_NEW_USER_EMAIL_FAILURE: {
      return {
        ...state,
        errorCode: action.errorCode,
        spinner: false
      }
    }
    case CREATE_NEW_USER_EMAIL_SUCCESS: {
      return {
        ...state,
        errorCode: '',
        spinner: false,
        openRegister:false,
        openEmailVerification:true
        }
    }
    default:
      return state;
  }
}


export default modalsReducer;
