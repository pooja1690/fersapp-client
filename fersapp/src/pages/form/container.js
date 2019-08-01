import React from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "./styles.css";

const Container = props => {
  return (
    <div>
      <div className="container-heading">
        <Typography variant="h4" gutterBottom>
          {props.heading}
        </Typography>
      </div>
      <div className="form-container">
        <div className="container-content">{props.content}</div>
        <div className="container-footer">
          <SecondaryButton className="container-secondary-button">
            Decline
          </SecondaryButton>
          <PrimaryButton className="container-primary-button">
            Accept
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

const PrimaryButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText("#000"),
    backgroundColor: "#00a77b",
    "&:hover": {
      backgroundColor: "#017557"
    },
    padding: "10px 30px 10px 30px"
  }
}))(Button);

const SecondaryButton = withStyles(theme => ({
  root: {
    border: "1px solid",
    padding: "10px 30px 10px 30px"
  }
}))(Button);

export default Container;
