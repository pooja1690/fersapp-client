import React from "react";
import TermsAndConditions from "../../terms-conditions";
import { steps } from "./main";
import MultiStep from "react-multistep";

const terms = true;

function UserForm() {
  return (
    <div>
      {!terms ? (
        <TermsAndConditions />
      ) : (
        <div className="container">
          <div>
            <MultiStep showNavigation={true} steps={steps} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserForm;
