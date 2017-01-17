import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import DefaultLayout from './view/DefaultLayout';
import Home from './view/Home';
import PageOne from './view/PageOne';
import PageTwo from './view/PageTwo';

const routes = (
  <Router>
    <Route path="/" component={DefaultLayout}>
      <IndexRoute component={Home} />
      <Route path="/one" component={PageOne} />
      <Route path="/two" component={PageTwo} />
    </Route>
  </Router>
);

export default routes;
