import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserToken } from 'helpers/auth/user';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getUserToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);
