import React from "react";
import TermsAndConditions from "../../terms-conditions";
import Main from "./main";
const terms = false;

function UserForm() {
  return <div>{!terms ? <TermsAndConditions /> : <Main />}</div>;
}

export default UserForm;
