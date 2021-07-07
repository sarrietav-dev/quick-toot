/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

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
  const { accessToken } = useAppSelector((state) => state.credentials);

  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={(props) => {
        if (accessToken) return <Component {...props} />;
        return <Redirect to={{ pathname: '/auth', state: props.location }} />;
      }}
    />
  );
};
