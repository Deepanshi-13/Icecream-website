import React from 'react';
import "./Button.css";

const Button = (props, onClick) => {
  return (
    <>
      <button onClick={props.onClick}>{props.value}</button>
    </>
  )
}

export default Button;
