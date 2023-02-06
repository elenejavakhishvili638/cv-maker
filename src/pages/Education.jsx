import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Resume from "../components/Resume";
import "./education.css";
import Vector from "../assets/images/Vector.png";
import Title from "../components/shared/Title";
import EducationForm from "../components/EducationForm";

const Education = () => {
  const location = useLocation();
  const { twoPartFormData, experienceState } = location.state;
  // const [thirdPartFormData, setThirdPartFormData] = useState({

  // })
  console.log(twoPartFormData, experienceState);
  return (
    <div className="education-wrapper">
      <div className="education-card">
        <div className="title-wrap">
          <Link className="back" to="/">
            <div className="vector-wrap">
              <img src={Vector} alt="vector" />
            </div>
          </Link>
          <Title title="განათლება" page="3" />
        </div>
        <div className="education">
          <EducationForm />
        </div>
      </div>
      <div className="info-education-resume">
        <div className="private-info-resume-wrap">
          <Resume />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Education;
