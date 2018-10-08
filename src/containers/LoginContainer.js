import { connect } from 'react-redux';

import { loginAccount } from '../store/login/actions';
import LoginForm from '../components/LoginForm';


function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {
    onLogin: loginAccount
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginContainer;