import * as ActionTypes from '../actions/types';
const INITIAL_STATE = {
  authUser: null,
  userName:'',
  email:'',
  isAdmin:false
};


function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_USER_EMAIL_SUCCESS:
    case ActionTypes.LOGIN_USER_EMAIL_SUCCESS: {
      return {
        ...state,
        authUser:action.payload.user,
        userName:action.username,
        email:action.payload.user.email
        }
    }
    case ActionTypes.USER_PROFILE_SUCCESS: {
      const username = state.userName!==''?state.userName:action.payload.displayName;
      return {
        ...state,
        authUser:action.payload,
        userName:username,
        isAdmin:action.isAdmin,
        email:action.payload.email
        }
    }
    case ActionTypes.LOGOUT_USER_SUCCESS: {
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
