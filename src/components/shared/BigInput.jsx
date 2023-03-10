import React from "react";
import "./bigInput.css";
import {
  BsExclamationTriangleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const BigInput = ({
  label,
  type,
  name,
  placeholder,
  text,
  value,
  handleChange,
  error,
  index,
  defultText,
}) => {
  return (
    <div className="technical-wrap">
      <label
        className={
          (error && error !== "Success"
            ? "label-error"
            : error === "Success" && "technical-title") || "technical-title"
        }
      >
        {label}
      </label>
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
            onChange={(event) => handleChange(event, index)}
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
              <BsExclamationTriangleFill className="big-invalid-logo invalid-logo" />
            )}
      </div>
      <p>{(error === "Success" ? defultText : text) || defultText}</p>
    </div>
  );
};

export default BigInput;
