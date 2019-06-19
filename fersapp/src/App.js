import React from "react";
import Header from "./pages/components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <LandingPage />
      </body>
    </div>
  );
}

export default App;
