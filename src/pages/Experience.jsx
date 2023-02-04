import React from "react";
import "./experience.css";
import { useLocation } from "react-router";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

const Experience = () => {
  const location = useLocation();
  const { infoFormData, image } = location.state;

  console.log(infoFormData);
  return (
    <div className="experience-wrapper">
      <div className="experience-card"></div>
      <div className="info-experience-resume">
        <div className="private-info-resume-wrap">
          <Resume
            firstName={infoFormData.name}
            lastName={infoFormData.surname}
            email={infoFormData.email}
            phone={infoFormData.phone_number}
            aboutMe={infoFormData.about_me}
            image={image}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Experience;
