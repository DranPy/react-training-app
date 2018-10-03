import { connect } from 'react-redux';

import { createAccount } from '../actions';
import Register from '../components/Register';


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onRegister: Register => dispatch(createAccount(Register))
    }
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;