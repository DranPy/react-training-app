import { LOGIN_ACCOUNT } from './actionsType';

export const loginAccount = user => ({
    type: LOGIN_ACCOUNT,
    email: user.email,
    password: user.password
});