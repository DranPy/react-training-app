import { CREATE_ACCOUNT } from './actionsType';

export const createAccount = user => ({
    type: CREATE_ACCOUNT,
    email: user.email,
    password: user.password
});