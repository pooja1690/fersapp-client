import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TermsAndConditions from "../../terms-conditions";
import Container from "../container";
const terms = false;

function UserForm() {
  return (
    <div>
      <TermsAndConditions />
    </div>
  );
}

export default UserForm;
