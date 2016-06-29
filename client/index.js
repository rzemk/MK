import App from './components/App';
import CreatureCreate from './components/CreatureCreate';
import WeaponCreate from './components/WeaponCreate';
import Fight from './components/Fight';
import Home from './components/Home';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="creature" component={CreatureCreate} />
      <Route path="weapon" component={WeaponCreate} />
      <Route path="fight" component={Fight} />
    </Route>
  </Router>
  , document.getElementById('root'));
