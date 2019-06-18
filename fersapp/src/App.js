import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Header-left">
          <div className="Header-logo">Federal returns calculator</div>
        </div>
        <div className="Header-right">
          <div className="Header-sign__in">Sign In</div>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </div>
      </header>
      <body>
        <div>HELLo</div>
      </body>
    </div>
  );
}

export default App;
