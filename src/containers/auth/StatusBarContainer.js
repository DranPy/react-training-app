import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserInfo from '../../components/auth/UserInfo';
import AuthMenu from '../../components/auth/AuthMenu';
import { getIsAuthorized } from '../../store/auth/selectors';
import { signOut } from '../../store/auth/actions';
import { removeUserToken } from '../../helpers/auth/user';

class StatusBarContainer extends Component {
  static propTypes = {
    isAuthorized: PropTypes.bool,
    user: PropTypes.bool,
    signOut: PropTypes.func,
  };

  render() {
    const { isAuthorized, signOut, user } = this.props;
    return isAuthorized ? <UserInfo user={user} onSignOut={signOut} /> : <AuthMenu />;
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  user: { email: 'test@gmail.com' },
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
