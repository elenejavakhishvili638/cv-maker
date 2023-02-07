import React from "react";
import "./educationResume.css";

const EducationResume = ({ form }) => {
  const { institute, degree, due_date, description } = form;
  return (
    <div className="education-resume-component">
      {institute && institute.length !== 0 && (
        <h4>{`${institute}${degree.length !== 0 ? `,` : ""} ${degree}`}</h4>
      )}
      <p className="education-date">{due_date}</p>
      <p className="education-description-text">{description}</p>
    </div>
  );
};

export default EducationResume;
