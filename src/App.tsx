import React from 'react';
import { ComposeForm } from './pages/ComposeForm.page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { InstanceNamePage } from './pages/InstanceName.page';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" exact component={ComposeForm} />
        <Route path="/auth" exact component={InstanceNamePage} />
      </Switch>
    </Router>
  );
}
