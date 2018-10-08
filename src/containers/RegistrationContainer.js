import { connect } from 'react-redux';

import { createAccount } from '../store/registration/actions';
import RegistrationForm from '../components/RegistrationForm';

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  onRegister: createAccount,
};

const RegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);

export default RegistrationContainer;
