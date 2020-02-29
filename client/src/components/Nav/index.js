import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="d-flex navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="buttonEffect" href="/"> ctanon </a>
      <div className="p-2 text-primary">The Unofficial CTA Anonymous Reporting and Social Media Experience</div>
      <a className="buttonEffect" href="tel:911">CALL 911</a>
      <a className="buttonEffect" href="/submit">Submit Alert</a>
    </nav>
  );
}

export default Nav;
