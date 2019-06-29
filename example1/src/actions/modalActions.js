import * as ActionTypes from './types';
import {errorCodes} from '../utils/Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

export const setRegisterModalVisibility = isOpen => ({
  type: ActionTypes.SET_MODAL_VISIBILITY_REGISTER,
  isOpen: isOpen
})

export const setLoginModalVisibility = isOpen => ({
  type: ActionTypes.SET_MODAL_VISIBILITY_LOGIN,
  isOpen: isOpen
})

export const setEmailModalVisibility = isOpen => ({
  type: ActionTypes.SET_MODAL_VISIBILITY_EMAIL,
  isOpen: isOpen
})

export const askForPasswordVisibility = isOpen => ({
  type: ActionTypes.ASK_PASSWORD,
  isOpen: isOpen
});
