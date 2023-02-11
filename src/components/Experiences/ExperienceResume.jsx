import React from "react";
import "./experienceResume.css";

const ExperienceResume = ({ form }) => {
  const { position, employer, due_date, start_date, description } = form;
  return (
    <div className="experience-resume-component">
      {position && position.length !== 0 && (
        <h4>{`${position}${employer.length !== 0 ? `,` : ""} ${employer}`}</h4>
      )}

      <p className="experience-dates">{`${start_date} ${
        start_date || due_date ? `-` : ""
      } ${due_date}`}</p>
      <p className="experience-description-text">{description}</p>
    </div>
  );
};

export default ExperienceResume;
