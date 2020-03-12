import React from "react";
import "./style.css";
import "../../assets/css/sizing.css"

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
      <ul className="list-group">{children}</ul>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item listItemSize">{children}</li>;
}
