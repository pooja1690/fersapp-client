import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import SignUp from "../sign-up";
import SignIn from "../sign-in/SignIn";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

function Header() {
  const [open, setOpen] = React.useState(false);
  const [signIn, showSignIn] = React.useState(false);
  const [signUp, showSignUp] = React.useState(false);

  function handleClickOpenSignIn() {
    setOpen(true);
    showSignIn(true);
  }

  function handleClickOpenSignUp() {
    setOpen(true);
    showSignUp(true);
  }

  function handleClose() {
    setOpen(false);
    showSignIn(false);
    showSignUp(false);
  }

  return (
    <div className="header-panel">
      <div className="header-content">
        <div className="header-left">
          <div className="header-logo">
            <Typography variant="h6">
              Federal Returns Calculator
            </Typography>
          </div>
        </div>
        <div className="header-right">
          <Button
            variant="text"
            color="inherit"
            onClick={handleClickOpenSignIn}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpenSignUp}
          >
            Get Started
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            {signUp && <SignUp />}
            {signIn && <SignIn />}
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Header;
