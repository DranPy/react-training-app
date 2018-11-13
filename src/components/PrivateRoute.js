import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../helpers/auth/user';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getUser() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);
