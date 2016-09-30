import React from 'react';
import Greeting from './greeting.jsx';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions.js';

const myStateToProps = (state) => ({
  currentUser: state.currentUser
});

const myDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(myStateToProps, myDispatchToProps)(Greeting);
