import React from "react";
import "../styles/Button.css";

const ButtonClear = (props) => (
  <div className="container-button upperRow " onClick={props.click}>
    {props.children}
  </div>
);

export default ButtonClear;
