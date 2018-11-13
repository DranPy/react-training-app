import { reduxForm } from 'redux-form';

import { createAccount } from '../store/registration/actions';
import RegistrationForm from '../components/auth/RegistrationForm';

export default reduxForm({
  form: 'registrationForm',
  onSubmit: (values, dispatch) => dispatch(createAccount(values)),
})(RegistrationForm);
