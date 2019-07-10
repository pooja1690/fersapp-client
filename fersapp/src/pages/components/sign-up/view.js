import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./styles.css";

const SignUpView = props => {
  return (
    <div>
      <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To proceed signing up with Fersapp, please create an account with your
          email address and a password.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth={true}
          error={props.emailHelperText ? true : false}
          helperText={props.emailHelperText}
          onChange={props.emailAddressHandler}
        />
        <div className="Signup-password-input">
          <TextField
            id="standard-password-input__primary"
            label="New Password"
            type="password"
            margin="normal"
            onChange={props.newPasswordHandler}
            error={props.passwordHelperText ? true : false}
            helperText={props.passwordHelperText}
          />
          <TextField
            id="standard-password-input__confirm"
            label="Confirm Password"
            type="password"
            margin="normal"
            onChange={props.confirmPasswordHandler}
            error={props.passwordHelperText ? true : false}
            helperText={props.passwordHelperText}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.cancelHandler}>
          Cancel
        </Button>
        <Button color="primary" onClick={props.submitHandler}>
          Sign Up
        </Button>
      </DialogActions>
    </div>
  );
};

export default SignUpView;
