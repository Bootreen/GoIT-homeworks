import React from 'react';
// import { Route, IndexRoute } from 'react-router';
import { Router, Route, Link, IndexRoute } from 'react-router';

import App from './App';
import HomePage from '../../pages/bbq4u/bbq4u';


export default (
  <Route path="http://bootreen.github.io/bbq4u/build/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
