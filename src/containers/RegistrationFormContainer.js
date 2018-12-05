import { reduxForm } from 'redux-form';
import { flow } from 'lodash';
import { connect } from 'react-redux';

import { signUp } from '../store/auth/actions';
import { getErrorMessage, getIsLoading, getIsAuthorized } from '../store/auth/selectors';
import RegistrationForm from '../components/auth/RegistrationForm';
import withAuthRedirect from '../hocs/withAuthRedirect';

const validate = ({ email, password, confirmPassword }) => {
  const rePassword = /^(?=.*\d).{4,8}$/i;
  const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};

  if (!email) {
    errors.email = 'Required';
  } else if (!reEmail.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Required';
  } else if (!rePassword.test(password)) {
    errors.password = 'Invalid password';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (!rePassword.test(confirmPassword)) {
    errors.confirmPassword = 'Invalid confirm password';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Password and confirm password aren't equal";
  }

  return errors;
};

const mapStateToProps = state => ({
  errorMessage: getErrorMessage(state),
  isLoading: getIsLoading(state),
  isAuthorized: getIsAuthorized(state),
});

export default flow(
  withAuthRedirect(),
  reduxForm({
    form: 'registrationForm',
    validate,
    onSubmit: (values, dispatch) => signUp(values)(dispatch),
  }),
  connect(mapStateToProps)
)(RegistrationForm);
