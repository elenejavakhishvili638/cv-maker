import React from "react";
import "./educationFormComponent.css";
import BigInput from "./shared/BigInput";
import CalendarInput from "./shared/CalendarInput";
import DegreeComponent from "./DegreeComponent";

const EducationFormComponent = ({ degrees, degree, handleDegree }) => {
  return (
    <>
      <div className="education-description">
        <BigInput
          label="სასწავლებელი"
          name="institute"
          type="text"
          defultText="მინიმუმ 2 სიმბოლო"
          placeholder="სასწავლებელი"
        />
      </div>
      <div className="education-info">
        <DegreeComponent
          degrees={degrees}
          degree={degree}
          handleDegree={handleDegree}
        />
        <CalendarInput type="date" label="დამთავრების რიცხვი" />
      </div>
      <div className="textarea-education">
        <p>აღწერა</p>
        <textarea
          className="education-textarea"
          name="description"
          placeholder="განათლების აღწერა"
        />
      </div>
      <hr className="experience-hr" />
    </>
  );
};

export default EducationFormComponent;
