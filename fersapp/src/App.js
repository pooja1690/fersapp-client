import React from "react";
import Header from "./pages/components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
