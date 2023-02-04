import React from "react";
import "./bigInput.css";
import {
  BsExclamationTriangleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const BigInput = ({
  label,
  name,
  type,
  text,
  placeholder,
  value,
  handleChange,
  error,
}) => {
  // console.log(error);
  return (
    <div className="technical-wrap">
      <label htmlFor="technical-title">{label}</label>
      <div className="big-input-wrapper">
        <div
          className={
            (error && error !== "Success"
              ? "big-input-error technical-wrap-input"
              : error === "Success"
              ? "big-input-success technical-wrap-input"
              : "technical-wrap-input") || "technical-wrap-input"
          }
        >
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
          />
          {(error && error !== "Success" ? (
            ""
          ) : error === "Success" ? (
            <BsFillCheckCircleFill className="big-success-logo" />
          ) : (
            ""
          )) || ""}
        </div>
        {error === "Success"
          ? ""
          : error &&
            error !== "Success" && (
              <BsExclamationTriangleFill className="big-invalid-logo" />
            )}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default BigInput;
