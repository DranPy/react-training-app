import { reduxForm } from 'redux-form';

import { loginAccount } from '../store/login/actions';
import LoginForm from '../components/LoginForm';

export default reduxForm({
  form: 'loginForm',
  onSubmit: (values, dispatch) => dispatch(loginAccount(values)),
})(LoginForm);
