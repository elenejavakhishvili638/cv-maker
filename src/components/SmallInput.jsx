import React from "react";
import "./smallInput.css";
import {
  BsExclamationTriangleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const SmallInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
  error,
}) => {
  return (
    <div className="first-name">
      <label
        className={
          (error && error !== "Success"
            ? "label-error"
            : error === "Success" && "first-name-label") || "first-name-label"
        }
        htmlFor="firstName"
      >
        {label}
      </label>
      <div
        className={
          (error && error !== "Success"
            ? "input-error first-name-input"
            : error === "Success"
            ? "input-success first-name-input"
            : "first-name-input") || "first-name-input"
        }
      >
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          // onBlur={handleBlur}
        />
        {(error && error !== "Success" ? (
          ""
        ) : error === "Success" ? (
          <BsFillCheckCircleFill className="success-logo" />
        ) : (
          ""
        )) || ""}
      </div>
      <p>მინიმუმ 2 ასო, ქართული ასოები</p>
    </div>
  );
};

export default SmallInput;
