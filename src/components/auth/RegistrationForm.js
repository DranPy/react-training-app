import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputWithLabel from '../../components/forms/fields/InputWithLabel';

class RegistrationForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    valid: PropTypes.bool,
    submitting: PropTypes.bool,
    errorMessage: PropTypes.string,
    isLoading: PropTypes.bool,
    isAuthorized: PropTypes.bool,
  };

  errorMessage = () => {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return <div className="alert alert-warning">{errorMessage}</div>;
    }
  };

  // TODO: create page and move redirect to page
  redirectAuthorizedUser = () => {
    const { history, isAuthorized } = this.props;
    if (isAuthorized) {
      if (history.length > 1) {
        //   history.goBack();
        // } else {
        history.push('/');
      }
    }
  };

  render() {
    this.redirectAuthorizedUser();
    const { handleSubmit, valid, submitting } = this.props;

    return (
      <div className="container" style={{ width: 600 }}>
        <form onSubmit={handleSubmit}>
          <Field
            label="Email"
            className="form-control"
            name="email"
            component={InputWithLabel}
            type="email"
          />
          <Field
            label="Password"
            className="form-control"
            name="password"
            component={InputWithLabel}
            type="password"
          />
          <Field
            label="Confirm password"
            className="form-control"
            name="confirmPassword"
            component={InputWithLabel}
            type="password"
          />
          <div>
            <input
              type="submit"
              className="btn btn-block btn-primary"
              disabled={submitting || !valid}
              value="Register"
            />
          </div>
          {this.errorMessage()}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
