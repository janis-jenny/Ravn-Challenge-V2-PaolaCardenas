/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import Character from './components/Character';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AllCharacters} />
      <Route exact path="/character/:id" component={Character} />
    </Switch>
  </Router>
);

export default Routes;
