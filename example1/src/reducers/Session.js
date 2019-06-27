import {CREATE_NEW_USER_EMAIL_STARTED} from '../actions/types';
const INITIAL_STATE = {
  authUser: null,
  userName:'',
  email:''
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser,
});

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'AUTH_USER_SET': {
      return applySetAuthUser(state, action);
    }

    default:
      return state;
  }
}

export default sessionReducer;
