/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface ProtectedRoute {
  component: React.ElementType;
  path: string;
  exact: boolean;
  condition: boolean;
  redirectionPath: string;
}

export const ProtectedRoute = ({
  path,
  exact,
  condition,
  redirectionPath,
  component: Component,
  ...rest
}: ProtectedRoute): JSX.Element => {
  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={(props) => {
        if (condition) return <Component {...props} />;
        return (
          <Redirect to={{ pathname: redirectionPath, state: props.location }} />
        );
      }}
    />
  );
};
