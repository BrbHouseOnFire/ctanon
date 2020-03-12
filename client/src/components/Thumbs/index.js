import React from "react";
import "./style.css";
// import API from "../../utils/API";


// we need the on click functions to add +1 and pass this to the database to the votes table
export function VoteUp(props) {
  return (
    <img
      {...props}
      alt=""
      className="up "
      src={require('./../../assets/images/ctanonImages/upArw.png')}
      title="Vote Up This Alert"
    />
  );
}

export function VoteDn(props) {
  return (
    <img
      {...props}
      alt=""
      className="dn "
      src={require('./../../assets/images/ctanonImages/dnArw.png')}
      title="Vote Down This Alert"
    />
  );
}

export function Clear(props) {
  return (
    <img
      {...props}
      alt=""
      className="cl "
      src={require('./../../assets/images/ctanonImages/stale.png')}
      title="Mark this Alert as Stale"
    />
  );
}
