import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="d-flex navbar mb-5 sticky-top justify-content-between navbar-expand-lg navbar-dark bg-dark">
      <div className="lead text-light">Unofficial CTA Anonymous Alerts</div>
      <a id="homeBtn" className="buttonEffect ml-auto" href="/">uCTAnon Alerts</a>
      <a id="ctaBtn" className="buttonEffect" href="/ctaAlerts">Official CTA Alerts</a>
      <a id="subBtn" className="buttonEffect" href="/submit">Submit Alert</a>
      <a id="copBtn" className="buttonEffect buttonEffect911" href="tel:911">CALL 911</a>
    </nav>
  );
}

export default Nav;
