import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import * as API from './util/session_api_util.js';
import * as Session from './actions/session_actions.js';
import Root from './components/root.jsx';

window.store = configureStore();
// window.login = Session.login;
// window.signup = Session.signup;
// window.logout = Session.logout;

window.user1 = { username: "Genghis_Khan", password: "MONGOOOOOOLIA"};
window.success = (data) => { store.dispatch({type: "RECEIVE_CURRENT_USER", currentUser: data });};

window.login = API.login;



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});
