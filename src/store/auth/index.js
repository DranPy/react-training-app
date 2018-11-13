import {
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  LOGOUT_USERS,
} from './actionsType';

const initialState = {
  isLoading: false,
  authorized: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USERS_REQUEST:
      return {
        ...state,
        authorized: false,
        isLoading: true,
      };

    case LOGIN_USERS_SUCCESS:
      return {
        ...state,
        authorized: true,
        isLoading: false,
      };

    case LOGIN_USERS_FAILURE:
    case LOGOUT_USERS:
      return {
        ...state,
        authorized: false,
        isLoading: false,
      };

    default:
      return state;
  }
}
