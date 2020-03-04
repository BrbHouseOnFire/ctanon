import React from "react";
import "./style.css";
import API from "../../utils/API";


function upvote() {
}

// we need the on click functions to add +1 and pass this to the database to the votes table
 export function VoteUp(props) {
    return (
        <img {...props} alt=""  className="" src={require('./../../assets/images/ctanonImages/upArw.png')} />
    );
  }

  export function VoteDn(props) {
    return (
        <img {...props} alt="" className="" src={require('./../../assets/images/ctanonImages/dnArw.png')} />
    );
  }

  export function Clear(props) {
    return (
        <img {...props} alt="" className="" src={require('./../../assets/images/ctanonImages/exp.png')} />
    );
  }
