import React from "react";
import "../styles/Button.css";

function Button(props) {
  const isOperator = (value) => {
    return (
      isNaN(value) &&
      value !== "." &&
      value !== "," &&
      value !== "AC" &&
      value !== "±" &&
      value !== "%"
    );
  };



  const isZero = (value) => {
    // eslint-disable-next-line eqeqeq
    return value == 0;
  };

  const upperRow = (value) => {
    return value === "AC" || value === "±" || value === "%";
  };

  return (
    <button
      className={`container-button ${
        isOperator(props.children)
          ? "operator"
          : isZero(props.children)
          ? "zero"
          : upperRow(props.children)
          ? "upperRow"
          : null
      } `}
      onClick={() => props.click(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;
