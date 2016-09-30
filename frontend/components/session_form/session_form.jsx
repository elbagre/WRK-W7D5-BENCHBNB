import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleUserChange(e) {
    this.setState({ username: e.currentTarget.value});
  }

  handlePasswordChange(e) {
    this.setState({ password: e.currentTarget.value});
  }

  render () {
    return (
      <div>
        <h1>Sign Up!</h1>
        <label>Username</label>
        <input type="text" onChange={handleChange(e)} value={this.state.username} />
        <label>Password</label>
        <input type="password" onChange={handleChange(e)} value={this.state.password} />
        <input type="submit" onSubmit={handleSubmit(e)} value="Submit" />
      </div>
    );
  }
}
