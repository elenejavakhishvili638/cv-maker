import React, { useCallback, useState } from "react";
import "./experience.css";
import { useLocation, Link } from "react-router-dom";
import Resume from "../components/Resume";
import Footer from "../components/shared/Footer";
import Title from "../components/shared/Title";
import ExperienceForm from "../components/ExperienceForm";
import Vector from "../assets/images/Vector.png";

const Experience = () => {
  const location = useLocation();
  const { infoFormData, image } = location.state;
  const [twoPartFormData, setTwoPartFormData] = useState({
    name: infoFormData.name,
    surname: infoFormData.surname,
    email: infoFormData.email,
    phone_number: infoFormData.phone_number,
    image: infoFormData.image,
    about_me: infoFormData.about_me,
    experiences: [
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ],
  });
  const [formCount, setFormCount] = useState(1);

  const handleFormCount = () => {
    // const count = { id: formCount.length + 1 };
    // setFormCount([...formCount, count]);
    setFormCount((prevValue) => prevValue + 1);
  };
  console.log(infoFormData);
  return (
    <div className="experience-wrapper">
      <div className="experience-card">
        <div className="title-wrap">
          <Link className="back" to="/">
            <div className="vector-wrap">
              <img src={Vector} alt="vector" />
            </div>
          </Link>
          <Title title="გამოცდილება" page="2" />
        </div>
        <div className="experience">
          <ExperienceForm
            formCount={formCount}
            handleFormCount={handleFormCount}
          />
        </div>
      </div>
      <div className="info-experience-resume">
        <div className="private-info-resume-wrap">
          <Resume
            firstName={infoFormData && infoFormData.name}
            lastName={infoFormData && infoFormData.surname}
            email={infoFormData && infoFormData.email}
            phone={infoFormData && infoFormData.phone_number}
            aboutMe={infoFormData && infoFormData.about_me}
            image={image}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Experience;
