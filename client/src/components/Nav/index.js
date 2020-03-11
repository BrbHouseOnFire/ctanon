import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="d-flex navbar mb-5 sticky-top justify-content-between navbar-expand-lg navbar-dark bg-dark">
      <a id="homeBtn" className="lead text-secondary" href="/">uCTAnon Alerts</a>
      <a id="subBtn" className="buttonEffect ml-auto" href="/submit">Submit Alert</a>
      <a id="ctaBtn" className="buttonEffect" href="/ctaAlerts">Official CTA Alerts</a>
      <a id="copBtn" className="buttonEffect buttonEffect911" href="tel:911">CALL 911</a>
    </nav>
  );
}

export default Nav;
