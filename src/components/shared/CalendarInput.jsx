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
  const correct = error === "Success" && "calendar-input-correct";

  const incorrect = error && error !== "Success" && "calendar-input-error";

  return (
    <div className="calendar-input-container">
      <label className="calendar-input-label">{label}</label>
      <input
        className={correct || incorrect || "calendar-input-default"}
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
