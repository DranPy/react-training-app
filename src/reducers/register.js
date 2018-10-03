import { CREATE_ACCOUNT } from '../actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CREATE_ACCOUNT:
            return {
                email: action.email,
                password: action.password
            };

        default:
            return state;
    }
}