import * as Session from '../actions/session_actions.js';
import { merge } from 'lodash';

const defaultSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (session = defaultSession, action) => {
  switch (action.type) {
    case Session.RECEIVE_CURRENT_USER:
      return ( merge({}, session, { currentUser: action.currentUser }));
    case Session.RECEIVE_ERRORS:
      return ( merge({}, session, { errors: action.errors}));
    case Session.LOGOUT:
      return ({
        currentUser: null,
        errors: []
      });
    default:
      return session;
  }
};

export default SessionReducer;




// return ({
//   currentUser: action.user,
//   errors: []
// });

// return ({
//   currentUser: null,
//   errors: action.errors
// });

// return ({
//   currentUser: null,
//   errors: []
// });
