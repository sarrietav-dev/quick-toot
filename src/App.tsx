import React from 'react';
import { ComposeForm } from './pages/ComposeForm.page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth } from './pages/Auth.page';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ComposeForm} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Router>
  );
}
