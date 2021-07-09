import React from 'react';
import { ComposeForm } from './pages/ComposeForm.page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { InstanceNamePage } from './pages/InstanceName.page';
import { ProtectedRoute } from './components/ProtectedRoute';
import {
  checkAppCreated,
  checkUserAuthenticated,
  checkUserToken,
} from './utils/authCacheCheckers';
import { AuthCode } from './pages/AuthCode.page';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <ProtectedRoute
          path="/"
          exact
          component={ComposeForm}
          condition={
            checkAppCreated() && checkUserAuthenticated() && checkUserToken()
          }
          redirectionPath={checkAppCreated() ? '/auth-code' : '/instance-name'}
        />
        <Route path="/instance-name" exact component={InstanceNamePage} />
        <ProtectedRoute
          path="/auth-route"
          exact
          component={AuthCode}
          condition={checkAppCreated()}
          redirectionPath="/instance-name"
        />
      </Switch>
    </Router>
  );
}
