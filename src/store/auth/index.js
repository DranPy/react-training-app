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

const initialState = {
  isLoading: false,
  isAuthorized: false,
  errorMessage: null,
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USERS_REQUEST:
    case SIGNUP_USERS_REQUEST:
    case CHECK_SESSION_USERS_REQUEST:
      return {
        ...state,
        isAuthorized: false,
        isLoading: true,
        errorMessage: null,
      };

    case SIGNIN_USERS_SUCCESS:
    case SIGNUP_USERS_SUCCESS:
    case CHECK_SESSION_USERS_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        isLoading: false,
        errorMessage: null,
        user: action.payload,
      };

    case SIGNIN_USERS_FAILURE:
    case SIGNUP_USERS_FAILURE:
    case CHECK_SESSION_USERS_FAILURE:
      return {
        ...state,
        isAuthorized: false,
        isLoading: false,
        errorMessage: action.payload,
        user: null,
      };

    case SIGNOUT_USERS:
      return {
        ...state,
        isAuthorized: false,
        isLoading: false,
        errorMessage: null,
        user: null,
      };

    default:
      return state;
  }
}
