import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserInfo from '../../components/auth/UserInfo';
import AuthMenu from '../../components/auth/AuthMenu';
import { getIsAuthorized, getUser } from '../../store/auth/selectors';
import { signOut } from '../../store/auth/actions';
import { removeUserToken } from '../../helpers/auth/user';

class StatusBarContainer extends Component {
  static propTypes = {
    isAuthorized: PropTypes.bool,
    user: PropTypes.object,
    signOut: PropTypes.func,
  };

  render() {
    const { isAuthorized, signOut, user } = this.props;
    return (
      <div className="status-bar">
        {isAuthorized ? <UserInfo user={user} onSignOut={signOut} /> : <AuthMenu />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(signOut());
    removeUserToken();
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBarContainer);
