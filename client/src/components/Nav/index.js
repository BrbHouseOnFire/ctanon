import React from "react";

function Nav() {
  return (
    <nav className="d-flex navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand p-2" href="/"> ctanon </a>
      <div className="p-2 text-primary">The Unofficial CTA Anonymous Reporting and Social Media Experience</div>
      <a className="danger ml-auto p-2" href="tel:911">CALL 911</a>
      <a className="danger ml-auto p-2" href="/submit">Submit Alert</a>
    </nav>
  );
}

export default Nav;
