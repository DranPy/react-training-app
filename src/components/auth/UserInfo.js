import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onSignOut: PropTypes.func.isRequired,
  };

  render() {
    const { user, onSignOut } = this.props;

    return (
      <div className="row">
        <div className="col-7">
          <div>{user.email}</div>
        </div>
        <div className="col-5">
          <button className="btn" onClick={onSignOut}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default UserInfo;
