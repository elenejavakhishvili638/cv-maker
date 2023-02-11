import React from "react";
import "./educationResume.css";

const EducationResume = ({ form, degree, index }) => {
  const { institute, due_date, description } = form;

  return (
    <div className="education-resume-component">
      {institute && institute.length !== 0 && (
        <h4>{`${institute}${degree && degree.length !== 0 ? `,` : ""} ${
          degree[index] !== undefined ? degree[index] : ""
        }`}</h4>
      )}
      <p className="education-date">{due_date}</p>
      <p className="education-description-text">{description}</p>
    </div>
  );
};

export default EducationResume;
