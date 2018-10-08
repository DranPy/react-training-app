import { CREATE_ACCOUNT } from './actionsType';

const initialState = {
  email: '',
  password: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        email: action.email,
        password: action.password,
      };

    default:
      return state;
  }
}
