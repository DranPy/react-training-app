import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registrationReducer from './registration';
import loginReducer from './login';
import productsReducer from './product';

const reducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  products: productsReducer,
  form: formReducer,
});

export default reducer;
