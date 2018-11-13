import {
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  LOGOUT_USERS,
} from './actionsType';
import api from '../../utils/api-helper';
import { setUserToken } from '../../helpers/auth/user';

export const loginRequest = () => ({
  type: LOGIN_USERS_REQUEST,
});

export const loginFailure = error => ({
  type: LOGIN_USERS_FAILURE,
  payload: error,
});

export const loginSuccess = () => ({
  type: LOGIN_USERS_SUCCESS,
});

export const login = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const userInfo = await api.login(user);
    dispatch(loginSuccess());
    // setUserToken(userInfo.token)
  } catch (error) {
    dispatch(loginFailure(error));
    console.error(error);
  }
};

export const logout = () => ({
  type: LOGOUT_USERS,
});
