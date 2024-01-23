import React from "react";

function Input(props) {
  return (
    <div className="InputDiv">
      <img
        title={props.description}
        className="InputImage"
        src={props.image}
      ></img>

      <span>{props.description}</span>
      <input type="number" placeholder={props.placeholder}></input>
    </div>
  );
}

export default Input;
