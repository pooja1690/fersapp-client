import React from "react";
import "./LandingPage.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="fersapp-reasons">
      <div className="reasons__content">
        <Typography variant="h4">Calulate your federal returns</Typography>
        <div className="reasons__bullets">
          <div className="reasons__bullet">
            <h5 className="">Accurate calculations</h5>
            <p className="">
              Our objective is to make even the most complicated complicated
              calculations simple. So you get the most out of your returns!
            </p>
          </div>
          <div className="reasons__bullet">
            <h5 className="">Helpful tools</h5>
            <p className="">
              Side-by-side comparisons, smart calculators and straightforward
              simulators help you make sense of your options.
            </p>
          </div>
        </div>
      </div>
      <div className="reasons__button">
        <Link to="/userform">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth={false}
            aria-label="Large contained secondary button"
          >
            Calculate Now!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
