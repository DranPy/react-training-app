import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registrationReducer from './registration';
import loginReducer from './login';
import productsReducer from './product';
import authorsReducer from './authors';
import categoriesReducer from './categories';

const reducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  products: productsReducer,
  authors: authorsReducer,
  categories: categoriesReducer,
  form: formReducer,
});

export default reducer;
