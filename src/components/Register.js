import React, { Component } from 'react';
import PropTypes  from 'prop-types';

class Register extends Component {

    onSubmitHandler = (event) => {
        event.preventDefault();

        if(this.state.password == this.state.confirmPassword) {
            this.props.onRegister({
                email: this.state.email || null,
                password: this.state.password || null
            });
        }
    }

    onPassChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onConfirmPassChange = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group row">
                        <div className="col-4 col-form-label">
                            <label className="form-control-plaintext">Email</label>
                        </div>
                        <div className="col-8">
                            <input onChange={this.onEmailChange} className="form-control" type="email"></input>
                        </div>
                        <div className="col-4 col-form-label">
                            <label className="form-control-plaintext">Password</label>
                        </div>
                        <div className="col-8">
                            <input onChange={this.onPassChange} className="form-control" type="password"></input>
                        </div>
                        <div className="col-4 col-form-label">
                            <label className="form-control-plaintext">Confirm password</label>
                        </div>
                        <div className="col-8">
                            <input onChange={this.onConfirmPassChange} className="form-control" type="password"></input>
                        </div>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-sm" value="Send from" />
                    </div>
                </form>
            </div>
        );
    }
}


Register.propTypes = {
    onRegister: PropTypes.func.isRequired,
};

export default Register;