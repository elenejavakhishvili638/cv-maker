import React from "react";
import { Link } from "react-router-dom";
import "./experienceForm.css";
import ExperienceFormComponent from "./ExperienceFormComponent";

const ExperienceForm = ({ formCount, handleFormCount }) => {
  return (
    <form className="experience-form">
      <ExperienceFormComponent />
      {/* {[...Array(formCount)].map((_, index) => {
        return <ExperienceFormComponent key={index} />;
      })} */}
      <div className="experience-btn-container">
        <button className="add-information">მეტი გამოცდილების დამატება</button>
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
