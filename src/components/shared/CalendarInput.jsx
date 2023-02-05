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
  return (
    <div className="calendar-input-container">
      <label className="calendar-input-label">{label}</label>
      <input
        className="calendar-input"
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
