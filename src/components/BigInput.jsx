import React from "react";
import "./bigInput.css";

const BigInput = ({ label, name, type, text, placeholder }) => {
  return (
    <div className="technical-wrap">
      <label htmlFor="technical-title">{label}</label>
      <input type={type} id={name} placeholder={placeholder} name={name} />
      <p>{text}</p>
    </div>
  );
};

export default BigInput;

{
  /* <input type={} id={} name={} placeholder={} /> */
}
