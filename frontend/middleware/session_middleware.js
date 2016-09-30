import * as API from '../util/session_api_util.js';
import * as Session from '../actions/session_actions.js';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(Session.receiveCurrentUser(user));
  const errorCallback = error => dispatch(Session.receiveErrors(error));
  switch(action.type) {
    case Session.LOGIN:
      API.login(action.user, successCallback, errorCallback);
      return next(action);
    case Session.LOGOUT:
      API.logout(() => next(action));
      break;
    case Session.SIGNUP:
      API.signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
