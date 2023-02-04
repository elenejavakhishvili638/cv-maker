import React from "react";
import "./calendarInput.css";

const CalendarInput = ({ label, type, placeholder }) => {
  return (
    <div className="calendar-input-container">
      <label className="calendar-input-label">{label}</label>
      <input className="calendar-input" type={type} placeholder={placeholder} />
    </div>
  );
};

export default CalendarInput;
