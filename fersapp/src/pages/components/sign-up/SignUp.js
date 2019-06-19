import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./SignUp.css"

function SignUp() {
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
          fullWidth
        />
        <div className="Signup-password-input">
          <TextField
            id="standard-password-input__primary"
            label="New Password"
            type="password"
            margin="normal"
          />
          <TextField
            id="standard-password-input__confirm"
            label="Confirm Password"
            type="password"
            margin="normal"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button color="primary">Subscribe</Button>
      </DialogActions>
    </div>
  );
}

export default SignUp;
