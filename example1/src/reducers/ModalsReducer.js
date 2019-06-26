const INITIAL_STATE = {
  openRegister: false,
  openLogin: false,
  errorMsg:''
};

function modalsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_MODAL_VISIBILITY_REGISTER': {
      return {
        ...state,
        openRegister: action.isOpen
      }
    }
    case 'SET_MODAL_VISIBILITY_LOGIN': {
      return {
        ...state,
        openLogin: action.isOpen
      }
    }
    default:
      return state;
  }
}


export default modalsReducer;
