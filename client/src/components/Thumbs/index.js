import React from "react";


import "./style.css";

 export function VoteUp() {
    return (
        <img  alt=""  className="" src={require('./../../assets/images/ctanonImages/upArw.png')} onClick={() => console.log('cluck')} />
    );
  }

  export function VoteDn() {
    return (
        <img  alt="" className="" src={require('./../../assets/images/ctanonImages/dnArw.png')} onClick={() => console.log('cluck')} />
    );
  }

  export function Clear() {
    return (
        <img  alt="" className="" src={require('./../../assets/images/ctanonImages/exp.png')} onClick={() => console.log('cluck')} />
    );
  }
