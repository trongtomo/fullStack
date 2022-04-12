import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "trong",
      password: "trong",
      isShowPassword: false,
    };
  }
  handleOnChangeInputUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangeInputPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = () => {
    console.log(this.state.username, this.state.password);
    console.log("all state:", this.state);
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                onChange={(event) => this.handleOnChangeInputUsername(event)}
              ></input>
            </div>
            <div className="col-12 form group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={(event) => this.handleOnChangeInputPassword(event)}
                ></input>
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  {" "}
                  <i
                    class={
                      this.state.isShowPassword
                        ? "fa-solid fa-eye-slash"
                        : "fa-solid fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button onClick={() => this.handleLogin()} className="btn-login">
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or Login with:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google google"></i>
              <i className="fab fa-facebook facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
