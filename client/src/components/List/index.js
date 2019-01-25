import React from "react";
//import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div classNameName="list-overflow-container">
      <ul classNameName="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li classNameName="list-group-item">{children}</li>;
}