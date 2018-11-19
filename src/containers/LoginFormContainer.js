import { reduxForm } from 'redux-form';
import { flow } from 'lodash';
import { connect } from 'react-redux';

import { signIn } from '../store/auth/actions';
import { getErrorMessage, getIsLoading, getIsAuthorized } from '../store/auth/selectors';
import LoginForm from '../components/auth/LoginForm';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*\d).{4,8}$/i.test(values.password)) {
    errors.password = 'Invalid password';
  }

  return errors;
};

const mapStateToProps = state => ({
  errorMessage: getErrorMessage(state),
  isLoading: getIsLoading(state),
  isAuthorized: getIsAuthorized(state),
});

export default flow(
  reduxForm({
    form: 'loginForm',
    validate,
    onSubmit: (values, dispatch) => signIn(values)(dispatch),
  }),
  connect(mapStateToProps)
)(LoginForm);
