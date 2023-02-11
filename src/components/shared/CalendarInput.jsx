import React from "react";
import "./calendarInput.css";
import { BsExclamationTriangleFill } from "react-icons/bs";

const CalendarInput = ({
  label,
  type,
  value,
  handleChange,
  error,
  index,
  name,
}) => {
  const correct =
    error === "Success" &&
    "calendar-input-correct calendar-input-default-color";

  const incorrect = error && error !== "Success" && "calendar-input-error";

  return (
    <div className="calendar-input-container">
      <label
        className={
          (error && error !== "Success"
            ? "label-error"
            : error === "Success" && "calendar-input-label") ||
          "calendar-input-label"
        }
      >
        {label}
      </label>
      <div className="calendar-input-wrap">
        <input
          className={
            correct ||
            incorrect ||
            "calendar-input-default calendar-input-default-color"
          }
          value={value}
          name={name}
          type={type}
          onChange={(event) => {
            handleChange(event, index);
          }}
        />
        {error === "Success"
          ? ""
          : error &&
            error !== "Success" && (
              <BsExclamationTriangleFill className="calendar-invalid-logo invalid-logo" />
            )}
      </div>
    </div>
  );
};

export default CalendarInput;
