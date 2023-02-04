import React from "react";
import "./bigInput.css";

const BigInput = ({
  label,
  name,
  type,
  text,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <div className="technical-wrap">
      <label htmlFor="technical-title">{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <p>{text}</p>
    </div>
  );
};

export default BigInput;
