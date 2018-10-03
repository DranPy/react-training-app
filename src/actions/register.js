export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export function createAccount(account) {
    return {
        type: CREATE_ACCOUNT,
        email: account.email,
        password: account.password
    }
}