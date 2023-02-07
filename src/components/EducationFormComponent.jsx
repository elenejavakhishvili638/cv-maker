import React from "react";
import "./educationFormComponent.css";
import BigInput from "./shared/BigInput";
import CalendarInput from "./shared/CalendarInput";
import DegreeComponent from "./DegreeComponent";

const EducationFormComponent = ({
  degrees,
  degree,
  handleDegree,
  form,
  index,
  handleChange,
}) => {
  // console.log(form);
  return (
    <>
      <div className="education-description">
        <BigInput
          label="სასწავლებელი"
          name="institute"
          type="text"
          value={form.institute}
          defultText="მინიმუმ 2 სიმბოლო"
          placeholder="სასწავლებელი"
          index={index}
          handleChange={handleChange}
        />
      </div>
      <div className="education-info">
        <DegreeComponent
          degrees={degrees}
          degree={degree}
          handleDegree={handleDegree}
          index={index}
        />
        <CalendarInput
          type="date"
          label="დამთავრების რიცხვი"
          value={form.due_date}
          name="due_date"
          index={index}
          handleChange={handleChange}
        />
      </div>
      <div className="textarea-education">
        <p>აღწერა</p>
        <textarea
          className="education-textarea"
          name="description"
          placeholder="განათლების აღწერა"
          value={form.description}
          onChange={(event) => {
            handleChange(event, index);
          }}
        />
      </div>
      <hr className="experience-hr" />
    </>
  );
};

export default EducationFormComponent;
