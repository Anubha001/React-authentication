import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/items";
import "./LoginForm.css";

import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    console.log(this.state, "props");
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <h4>Login Form</h4>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="center red-text">
            {/* { authError ? <p>{authError}</p> : null } */}
          </div>
        </div>
        <div className="message">
          {isLoginPending && <div>Please wait...</div>}
          {isLoginSuccess && <Redirect to="/list" />}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: "",
      password: ""
    });
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
