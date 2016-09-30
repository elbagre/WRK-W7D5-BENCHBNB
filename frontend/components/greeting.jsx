import React from 'react';
import { Router, Route, Link } from 'react-router';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>OH HEY THERE BUDDY BOY!</h1>
          <button onClick={this.props.logout}>LOG OUT BUDDY</button>
        </div>
      );
    } else { return (
      <div>
        <Link to="/#/signup">Sign Up Buckaroo!</Link>
        <Link to="/#/login">Log In Pal!</Link>
      </div>
      );
    }
  }
}

export default Greeting;
