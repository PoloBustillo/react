import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  openRegister: false,
  openLogin: false,
  errorCode:'',
  spinner:false,
  openEmailVerification:false
};

function modalsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_MODAL_VISIBILITY_REGISTER: {
      return {
        ...state,
        openRegister: action.isOpen
      }
    }
    case ActionTypes.SET_MODAL_VISIBILITY_LOGIN: {
      return {
        ...state,
        openLogin: action.isOpen
      }
    }
    case ActionTypes.SET_MODAL_VISIBILITY_EMAIL: {
      return {
        ...state,
        openEmailVerification: action.isOpen
      }
    }
    case ActionTypes.CREATE_NEW_USER_EMAIL_STARTED:
    case ActionTypes.LOGIN_USER_FB_STARTED:
    case ActionTypes.LOGIN_USER_EMAIL_STARTED: {
      return {
        ...state,
        spinner: true
      }
    }
    case ActionTypes.CREATE_NEW_USER_EMAIL_FAILURE:
    case ActionTypes.LOGIN_USER_EMAIL_FAILURE:
    case ActionTypes.LOGIN_USER_FB_FAILURE: {
      return {
        ...state,
        errorCode: action.errorCode,
        spinner: false
      }
    }
    case ActionTypes.CREATE_NEW_USER_EMAIL_SUCCESS:{
      return {
        ...state,
        errorCode: '',
        spinner: false,
        openRegister:false,
        openLogin:false,
        openEmailVerification:true
        }
    }
    case ActionTypes.LOGIN_USER_FB_SUCCESS:
    case ActionTypes.LOGIN_USER_EMAIL_SUCCESS: {
      return {
        ...state,
        errorCode: '',
        spinner: false,
        openLogin:false,
        openRegister:false
      }
    }
    default:
      return state;
  }
}


export default modalsReducer;
