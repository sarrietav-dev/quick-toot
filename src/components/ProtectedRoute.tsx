/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkAppCreated, checkUserToken } from '../utils/authCacheCheckers';

interface ProtectedRoute {
  component: React.ElementType;
  path: string;
  exact: boolean;
}

export const ProtectedRoute = ({
  path,
  exact,
  component: Component,
  ...rest
}: ProtectedRoute): JSX.Element => {
  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={(props) => {
        if (checkAppCreated() && checkUserToken())
          return <Component {...props} />;
        return <Redirect to={{ pathname: '/auth', state: props.location }} />;
      }}
    />
  );
};
