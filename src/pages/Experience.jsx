import React, { useEffect, useState } from "react";
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

  const [experienceState, setExperienceState] = useState([
    {
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ]);
  const [twoPartFormData, setTwoPartFormData] = useState({
    name: infoFormData.name,
    surname: infoFormData.surname,
    email: infoFormData.email,
    phone_number: infoFormData.phone_number,
    image: image,
    about_me: infoFormData.about_me,
    experiences: [],
  });

  useEffect(() => {
    const data = localStorage.getItem("experienceState");
    if (data) {
      setExperienceState(JSON.parse(data));
    }
  }, []);

  const handleChange = (event, index) => {
    // console.log(event);
    const { name, value } = event.target;
    const newForms = [...experienceState];
    newForms[index][name] = value;
    setExperienceState(newForms);
    const forms = { ...twoPartFormData, experiences: newForms };
    setTwoPartFormData(forms);

    localStorage.setItem("experienceState", JSON.stringify(newForms));
  };

  // console.log(twoPartFormData);

  const addForm = () => {
    setExperienceState([
      ...experienceState,
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
  };

  console.log(twoPartFormData, "kk", experienceState);

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
            addForm={addForm}
            handleChange={handleChange}
            experienceState={experienceState}
          />
        </div>
      </div>
      <div className="info-experience-resume-wrap">
        <div className="info-experience-resume">
          <div className="private-info-resume-wrap">
            <Resume
              firstName={infoFormData && infoFormData.name}
              lastName={infoFormData && infoFormData.surname}
              email={infoFormData && infoFormData.email}
              phone={infoFormData && infoFormData.phone_number}
              aboutMe={infoFormData && infoFormData.about_me}
              image={image}
              experienceState={experienceState}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
