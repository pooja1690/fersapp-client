import React, {Component} from 'react';
import {SignIn} from './sign-in';
import {signInUser} from './actions';
import {connect} from 'react-redux';

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', error: ''};
  }

  emailChange = e => {
    console.log('email', e);
    this.setState({
      email: e,
    });
  };
  passwordChange = e => {
    this.setState({
      password: e,
    });
  };
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  onSubmit = () => {
    if (this.validateEmail(this.state.email)) {
      console.log('valid');
      if (this.state.password.length >= 6) {
        this.setState({
          error: '',
        });
        dis;
      } else {
        this.setState({
          error: 'Invalid password. Please try again!',
        });
      }
    } else {
      this.setState({
        error: 'Invalid email. Please try again!',
      });
    }
  };

  render() {
    return (
      <SignIn
        emailChange={e => this.emailChange(e)}
        passwordChange={e => this.passwordChange(e)}
        onSubmit={() => this.onSubmit()}
        error={this.state.error}
      />
    );
  }
}

const mapDispatchToProps = (dispatch = {
  signInUser,
});

export default connect(
  null,
  mapDispatchToProps,
)(SignInContainer);
