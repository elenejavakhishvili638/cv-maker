import React from "react";
import "./calendarInput.css";

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
      <label className="calendar-input-label">{label}</label>
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
    </div>
  );
};

export default CalendarInput;
