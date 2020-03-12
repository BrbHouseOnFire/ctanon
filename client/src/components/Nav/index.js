import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="d-flex navbar mb-1 sticky-top justify-content-between navbar-expand-lg navbar-dark bg-dark">
      {/* <a id="homeBtn" className="lead text-secondary buttonEffect buttonEffectHome" href="/">uCTAnon Alerts</a> */}
      <Link to="/" id="homeBtn" className="lead text-secondary buttonEffect buttonEffectHome" >uCTAnon Alerts</Link>
      {/* <a id="subBtn" className="buttonEffect ml-auto" href="/submit">Submit Alert</a> */}
      <Link to="/submit" id="subBtn" className="buttonEffect ml-auto" >Submit Alert</Link>
      {/* <a id="ctaBtn" className="buttonEffect" href="/ctaAlerts">Official CTA Alerts</a> */}
      <Link to="/ctaAlerts" id="ctaBtn" className="buttonEffect">Official CTA Alerts</Link>
      <a id="copBtn" className="buttonEffect buttonEffect911" href="tel:911">CALL 911</a>
      {/* <Link to="tel:911">← Back</Link> */}
    </nav>
  );
}

export default Nav;
