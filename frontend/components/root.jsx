import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { SessionFormContainer } from './session_form/session_form_container.js';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/#/login" component={SessionFormContainer} />
      <Route path="/#/signup" component={SessionFormContainer} />
    </Router>
  </Provider>
);

export default Root;

// create skeleton container SearchContainer
