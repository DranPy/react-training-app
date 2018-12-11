import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import productsReducer from './product';
import authorsReducer from './authors';
import categoriesReducer from './categories';

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  authors: authorsReducer,
  categories: categoriesReducer,
  form: formReducer,
});

export default reducer;
