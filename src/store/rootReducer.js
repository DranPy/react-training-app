import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registrationReducer from './registration';
import loginReducer from './login';

const reducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  form: formReducer,
});

export default reducer;
