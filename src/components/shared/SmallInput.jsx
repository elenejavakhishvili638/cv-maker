import React from "react";
import "./smallInput.css";
import {
  BsFillCheckCircleFill,
  BsExclamationTriangleFill,
} from "react-icons/bs";

const SmallInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
  error,
  text,
  defultText,
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
      <div className="small-input-wrapper">
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
        {error === "Success"
          ? ""
          : error &&
            error !== "Success" && (
              <BsExclamationTriangleFill className="small-invalid-logo invalid-logo" />
            )}
      </div>
      <p>{(error === "Success" ? defultText : text) || defultText}</p>
    </div>
  );
};

export default SmallInput;
