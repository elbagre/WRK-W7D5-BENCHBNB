import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions.js';

const mapStateToProps = (state) => {
  const currUser = !!state.currentUser;
  return (
  {
    loggedIn: currUser,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: location.pathname,
  processForm: () => {
    if (this.props.formType === 'signup') {
      dispatch(login());
    } else if (this.props.formType === 'login') {
      dispatch(signup());
    }
  },
  user: ownProps
});
