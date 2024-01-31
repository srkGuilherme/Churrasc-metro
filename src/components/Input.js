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
      <input
        min={0}
        step={props.step}
        type="number"
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default Input;
