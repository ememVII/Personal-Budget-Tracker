import React from "react";
import './Button.css'

export default function Button(props) {
  return (
    <button
      className={`button ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
