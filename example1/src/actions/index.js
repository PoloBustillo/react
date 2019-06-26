import { SET_MODAL_VISIBILITY_REGISTER,
  SET_MODAL_VISIBILITY_LOGIN } from './types';

export const setRegisterModalVisibility = isOpen => ({
  type: SET_MODAL_VISIBILITY_REGISTER,
  isOpen: isOpen
})

export const setLoginModalVisibility = isOpen => ({
  type: SET_MODAL_VISIBILITY_LOGIN,
  isOpen: isOpen
})
