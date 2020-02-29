import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="d-flex navbar mb-5 sticky-top justify-content-between navbar-expand-lg navbar-dark bg-dark">
      <a id="homeBtn" className="buttonEffect" href="/"> ctanon </a>
      <div className="p-2 text-primary">CTA Anonymous Reporting</div>
      <a id="subBtn" className="buttonEffect" href="/submit">Submit Alert</a>
      <a id="copBtn" className="buttonEffect" href="tel:911">CALL 911</a>
    </nav>
  );
}

export default Nav;
