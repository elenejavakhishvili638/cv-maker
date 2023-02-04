import React from "react";
import Footer from "../components/shared/Footer";
import Resume from "../components/Resume";
import "./education.css";

const Education = () => {
  return (
    <div className="experience-wrapper">
      <div className="experience-card"></div>
      <div className="info-experience-resume">
        <div className="private-info-resume-wrap">
          <Resume />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Education;
