import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Movie from 'containers/MovieItem';
import {
  HOME as HOME_URL,
  MOVIE_ITEM as MOVIE_URL,
} from './constants';

export default () => (
  <Switch>
    <Route
      exact
      path={MOVIE_URL}
      component={Movie}
    />
    <Route 
      exact
      path={HOME_URL}
      component={Home}
    />
  </Switch>
);