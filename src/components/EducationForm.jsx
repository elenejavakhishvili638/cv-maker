import React from "react";
import "./educationForm.css";
import { Link } from "react-router-dom";
import EducationFormComponent from "./EducationFormComponent";

const EducationForm = ({
  degrees,
  degree,
  handleDegree,
  addForm,
  educationState,
  handleChange,
  handleSubmit,
  errors,
  infoFormData,
  image,
}) => {
  // console.log(degree, degrees);
  return (
    <form className="education-form" onSubmit={handleSubmit}>
      {educationState &&
        educationState.map((item, index) => {
          return (
            <EducationFormComponent
              form={item}
              key={index}
              index={index}
              degree={degree}
              degrees={degrees}
              handleDegree={handleDegree}
              handleChange={handleChange}
              errors={errors}
            />
          );
        })}
      <div className="experience-btn-container">
        <button className="add-information" onClick={addForm} type="button">
          სხვა სასწავლების დამატება
        </button>
        <div className="next-back-page-button top">
          <Link
            to="/experience"
            className="first-next"
            state={{ infoFormData: infoFormData, image: image }}
          >
            უკან
          </Link>
          <button type="submit" className="first-next">
            დასრულება
          </button>
        </div>
      </div>
    </form>
  );
};

export default EducationForm;
