import React from 'react';
import { ComposeForm } from './pages/ComposeForm.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { InstanceNamePage } from './pages/InstanceName.page';
import {
  checkAppCreated,
  checkUserAuthenticated,
  checkUserToken,
} from './utils/authCacheCheckers';
import { AuthCode } from './pages/AuthCode.page';

export const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          if (checkAppCreated() && checkUserAuthenticated() && checkUserToken())
            return <ComposeForm />;
          return (
            <Redirect
              to={{
                pathname: checkAppCreated() ? '/auth-code' : '/instance-name',
              }}
            />
          );
        }}
      />
      <Route
        path="/instance-name"
        exact
        render={() => {
          if (!checkAppCreated()) return <InstanceNamePage />;
          return <Redirect to={{ pathname: '/' }} />;
        }}
      />
      <Route
        path="/auth-code"
        exact
        render={() => {
          if (checkAppCreated() && !checkUserAuthenticated())
            return <AuthCode />;
          return <Redirect to={{ pathname: '/instance-name' }} />;
        }}
      />
    </Switch>
  </Router>
);
