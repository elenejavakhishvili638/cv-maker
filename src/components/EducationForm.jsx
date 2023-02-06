import React from "react";
import "./educationForm.css";
import { Link } from "react-router-dom";
import EducationFormComponent from "./EducationFormComponent";

const EducationForm = ({ degrees, degree, handleDegree }) => {
  console.log(degrees);
  return (
    <form className="education-form">
      <EducationFormComponent
        degree={degree}
        degrees={degrees}
        handleDegree={handleDegree}
      />
      <div className="experience-btn-container">
        <button className="add-information" type="button">
          სხვა სასწავლების დამატება
        </button>
        <div className="next-back-page-button top">
          <Link to="/experience" className="first-next">
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
