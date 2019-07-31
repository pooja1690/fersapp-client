import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./pages/components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";
import TermsAndConditions from "./pages/terms-conditions";
import UserForm from "./pages/form/user-form";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/userform" component={UserForm} />
        <Route path="/terms" component={TermsAndConditions} />
      </div>
    </Router>
  );
}

export default App;
