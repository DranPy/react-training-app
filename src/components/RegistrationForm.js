import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class RegistrationForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-4 col-form-label">
              <label className="form-control-plaintext">Email</label>
            </div>
            <div className="col-8">
              <Field className="form-control" name="email" component="input" type="email" />
            </div>
            <div className="col-4 col-form-label">
              <label className="form-control-plaintext">Password</label>
            </div>
            <div className="col-8">
              <Field className="form-control" name="password" component="input" type="password" />
            </div>
            <div className="col-4 col-form-label">
              <label className="form-control-plaintext">Confirm password</label>
            </div>
            <div className="col-8">
              <Field
                className="form-control"
                name="confirmPassword"
                component="input"
                type="password"
              />
            </div>
          </div>
          <div>
            <input type="submit" className="btn btn-sm" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registrationForm',
  onSubmit: (values, dispatch, props) => props.onRegister(values),
})(RegistrationForm);
