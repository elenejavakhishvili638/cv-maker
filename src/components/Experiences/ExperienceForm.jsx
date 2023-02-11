import React from "react";
import { Link } from "react-router-dom";
import "./experienceForm.css";
import ExperienceFormComponent from "./ExperienceFormComponent";

const ExperienceForm = ({
  experienceState,
  addForm,
  handleChange,
  errors,
  handleSubmit,
}) => {
  return (
    <form className="experience-form" onSubmit={handleSubmit}>
      {experienceState &&
        experienceState.map((form, index) => {
          return (
            <ExperienceFormComponent
              key={index}
              form={form}
              index={index}
              handleChange={handleChange}
              errors={errors}
            />
          );
        })}

      <div className="experience-btn-container">
        <button className="add-information" type="button" onClick={addForm}>
          მეტი გამოცდილების დამატება
        </button>
        <div className="next-back-page-button">
          <Link to="/info" className="first-next">
            უკან
          </Link>

          <button type="submit" className="first-next">
            შემდეგი
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExperienceForm;
