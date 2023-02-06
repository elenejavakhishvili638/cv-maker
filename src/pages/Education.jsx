import React, { useEffect, useState } from "react";
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
  const [degrees, setDegrees] = useState([]);
  const [degree, setDegree] = useState("აირჩიეთ ხარისხი");
  // const [thirdPartFormData, setThirdPartFormData] = useState({

  // })

  const fetchDegrees = () => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => res.json())
      .then((data) => setDegrees(data));
  };

  useEffect(() => {
    fetchDegrees();
  }, []);

  const handleDegree = (id, name) => {
    setDegree(name);
  };

  console.log(degrees);

  // console.log(twoPartFormData, experienceState);
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
          <EducationForm
            degrees={degrees}
            degree={degree}
            handleDegree={handleDegree}
          />
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
