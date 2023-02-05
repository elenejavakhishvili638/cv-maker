import React from "react";

const ExperienceResume = ({ form }) => {
  return (
    <div className="Experience-resume-component">
      <h3>{`${form.position}, ${form.employer}`}</h3>
      <p>
        {form.start_date} {form.due_date}
      </p>
      <p>{form.description}</p>
    </div>
  );
};

export default ExperienceResume;
