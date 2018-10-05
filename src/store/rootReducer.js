import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registration from './registration';

const reducer = combineReducers({
    registration,
    form: formReducer
});

export default reducer;