import React, { Component } from 'react';

const withAuthRedirect = option => WrappedComponent => {
  return class extends Component {
    static displayName = `withAuthRedirect(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    redirectAuthorizedUser = () => {
      const { history, isAuthorized } = this.props;
      if (isAuthorized) {
        if (option && option.path) {
          history.push(option.path);
        } else {
          if (history.length > 1) history.goBack();
          else history.push('/');
        }
      }
    };

    componentDidUpdate() {
      this.redirectAuthorizedUser();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuthRedirect;
