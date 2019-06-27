import {
  CREATE_NEW_USER_EMAIL_SUCCESS,
  USER_PROFILE_SUCCESS,
  LOGIN_USER_EMAIL_SUCCESS,
  LOGOUT_USER_SUCCESS
} from '../actions/types';
const INITIAL_STATE = {
  authUser: null,
  userName:'',
  email:'',
  isAdmin:false
};


function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_NEW_USER_EMAIL_SUCCESS:
    case LOGIN_USER_EMAIL_SUCCESS: {
      return {
        ...state,
        authUser:action.payload.user,
        userName:action.payload.displayName,
        email:action.payload.user.email
        }
    }
    case USER_PROFILE_SUCCESS: {
      return {
        ...state,
        authUser:action.payload,
        userName:action.payload.displayName,
        isAdmin:action.isAdmin,
        email:action.payload.email
        }
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        authUser:null,
        userName:'',
        isAdmin:false,
        email:''
        }
    }

    default:
      return state;
  }
}

export default sessionReducer;
