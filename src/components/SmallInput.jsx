import React from "react";

const SmallInput = ({ label, type, placeholder, name }) => {
  return (
    <div className="first-name">
      <label htmlFor="firstName">{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} />
      <p>მინიმუმ 2 ასო, ქართული ასოები</p>
    </div>
  );
};

export default SmallInput;
