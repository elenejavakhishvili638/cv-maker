import React from "react";
import "./smallInput.css";

const SmallInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="first-name">
      <label htmlFor="firstName">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>მინიმუმ 2 ასო, ქართული ასოები</p>
    </div>
  );
};

export default SmallInput;
