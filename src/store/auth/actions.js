import {
  SIGNIN_USERS_REQUEST,
  SIGNIN_USERS_SUCCESS,
  SIGNIN_USERS_FAILURE,
  SIGNOUT_USERS,
  SIGNUP_USERS_REQUEST,
  SIGNUP_USERS_SUCCESS,
  SIGNUP_USERS_FAILURE,
  CHECK_SESSION_USERS_REQUEST,
  CHECK_SESSION_USERS_SUCCESS,
  CHECK_SESSION_USERS_FAILURE,
} from './actionsType';
import api from '../../utils/api-helper';
import { setUserToken } from '../../helpers/auth/user';

export const signInRequest = () => ({
  type: SIGNIN_USERS_REQUEST,
});

export const signInFailure = error => ({
  type: SIGNIN_USERS_FAILURE,
  payload: error,
});

export const signInSuccess = () => ({
  type: SIGNIN_USERS_SUCCESS,
});

export const signIn = user => async dispatch => {
  dispatch(signInRequest());

  try {
    const userInfo = await api.signIn(user);
    dispatch(signInSuccess());
    setUserToken(userInfo.data.token);
  } catch (error) {
    dispatch(signInFailure(error.response.data.error));
    console.error(error);
  }
};

export const signOut = () => ({
  type: SIGNOUT_USERS,
});

export const signUpRequest = () => ({
  type: SIGNUP_USERS_REQUEST,
});

export const signUpSuccess = () => ({
  type: SIGNUP_USERS_SUCCESS,
});

export const signUpFailure = error => ({
  type: SIGNUP_USERS_FAILURE,
  payload: error,
});

export const signUp = user => async dispatch => {
  dispatch(signUpRequest());

  try {
    const userInfo = await api.signUp(user);
    dispatch(signUpSuccess());
    setUserToken(userInfo.data.token);
  } catch (error) {
    dispatch(signUpFailure(error.response.data.error));
    console.error(error);
  }
};

export const checkUserSessionRequest = () => ({
  type: CHECK_SESSION_USERS_REQUEST,
});

export const checkUserSessionSuccess = () => ({
  type: CHECK_SESSION_USERS_SUCCESS,
});

export const checkUserSessionFailure = error => ({
  type: CHECK_SESSION_USERS_FAILURE,
  payload: error,
});

export const checkUserSession = token => async dispatch => {
  dispatch(checkUserSessionRequest());

  try {
    await api.checkUserSession(token);
    dispatch(checkUserSessionSuccess());
  } catch (error) {
    dispatch(checkUserSessionFailure(error.response.data.error));
    console.error(error);
  }
};
