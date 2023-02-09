import React from "react";
import "./educationFormComponent.css";
import BigInput from "../shared/BigInput";
import CalendarInput from "../shared/CalendarInput";
import DegreeComponent from "../DegreeComponent";

const EducationFormComponent = ({
  degrees,
  degree,
  handleDegree,
  form,
  index,
  handleChange,
  errors,
}) => {
  // console.log(errors);
  const correct =
    errors[index] &&
    errors[index].description === "Success" &&
    "experience-description-text-correct";
  const incorrect =
    errors[index] &&
    errors[index].description &&
    errors[index].description !== "Success" &&
    "experience-description-text-error ";
  return (
    <>
      <div className="education-description">
        <BigInput
          label="სასწავლებელი"
          name="institute"
          type="text"
          value={form.institute}
          defultText="მინიმუმ 2 სიმბოლო"
          text={errors[index] && errors[index].institute}
          placeholder="სასწავლებელი"
          index={index}
          handleChange={handleChange}
          error={errors[index] && errors[index].institute}
        />
      </div>
      <div className="education-info">
        <DegreeComponent
          degrees={degrees}
          degree={degree}
          handleDegree={handleDegree}
          index={index}
          error={errors[index] && errors[index].degree_id}
        />
        <CalendarInput
          type="date"
          label="დამთავრების რიცხვი"
          value={form.due_date}
          name="due_date"
          index={index}
          handleChange={handleChange}
          error={errors[index] && errors[index].due_date}
        />
      </div>
      <div className="textarea-education">
        <p>აღწერა</p>
        <textarea
          // className="education-textarea"
          name="description"
          placeholder="განათლების აღწერა"
          value={form.description}
          onChange={(event) => {
            handleChange(event, index);
          }}
          className={`${correct || incorrect || "education-textarea"}`}
        />
      </div>
      <hr className="experience-hr" />
    </>
  );
};

export default EducationFormComponent;
