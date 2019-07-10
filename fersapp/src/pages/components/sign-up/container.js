import React from "react";
import SignUpView from "./view";
import * as EmailValidator from "email-validator";

export class SignUpContainer extends React.Component {
  state = { emailAddr: null, newPwd: null, confirmPwd: null };

  emailAddress = event => {
    this.setState({ emailAddr: event.target.value });
  };

  newPassword = event => {
    this.setState({ newPwd: event.target.value });
  };

  confirmPassword = event => {
    this.setState({ confirmPwd: event.target.value });
  };

  submit = () => {
    this.validateSignUpFields();
  };

  validateSignUpFields = () => {
    if (EmailValidator.validate(this.state.emailAddr)) {
      if (this.validatePassword()) {
        this.setState(
          {
            emailHelperText: null,
            passwordHelperText: null
          },
          () => {
            console.log(this.state);
          }
        );
        console.log("making a call");
      } else {
        this.setState({
          passwordHelperText: "New and confirm password need to match.",
          emailHelperText: null
        });
      }
    } else {
      this.setState({
        emailHelperText: "Please enter a valid email address."
      });
    }
  };

  validatePassword = () => {
    const newPwd = this.state.newPwd;
    const confirmPwd = this.state.confirmPwd;
    if (!newPwd || !confirmPwd) {
      return false;
    }

    if (newPwd.length < 8) {
      return false;
    }
    if (newPwd === confirmPwd) {
      return true;
    }
    return false;
  };

  cancel = () => {};

  render() {
    return (
      <SignUpView
        emailAddressHandler={this.emailAddress}
        newPasswordHandler={this.newPassword}
        confirmPasswordHandler={this.confirmPassword}
        submitHandler={this.submit}
        cancelHandler={this.cancel}
        emailHelperText={this.state.emailHelperText}
        passwordHelperText={this.state.passwordHelperText}
      />
    );
  }
}
