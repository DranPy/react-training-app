import { LOGIN_ACCOUNT } from './actionsType';

const initialState = {
    isLogin: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACCOUNT:
          let isLogin = false;
          // if ...
          return { isLogin }

        default:
            return state;
    }
}