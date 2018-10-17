import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';

export default composeWithDevTools(applyMiddleware(thunkMiddleware, promise));
