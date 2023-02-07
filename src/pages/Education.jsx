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
  const [experiencePart, setExperiencePart] = useState(false);
  const [degree, setDegree] = useState([]);
  //"აირჩიე ხარისხი"
  // const [degreeOptions, setDegreeOptions] = useState([]);
  const [educationPart, setEducationPart] = useState(false);
  const [educationState, setEducationState] = useState([
    {
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    },
  ]);
  const [thirdPartFormData, setThirdPartFormData] = useState({
    name: twoPartFormData.name,
    surname: twoPartFormData.surname,
    email: twoPartFormData.email,
    phone_number: twoPartFormData.phone_number,
    image: twoPartFormData.image,
    about_me: twoPartFormData.about_me,
    experiences: twoPartFormData.experiences,
    educations: [],
  });

  useEffect(() => {
    setExperiencePart(
      Object.values(twoPartFormData.experiences).some((value) => {
        if (value !== "") {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [twoPartFormData.experiences]);

  // console.log(educationPart);

  useEffect(() => {
    setEducationPart(
      Object.values(educationState).some((value) => {
        // console.log(value);
        if (value !== "") {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [educationState]);

  const fetchDegrees = () => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => res.json())
      .then((data) => setDegrees(data));
  };

  useEffect(() => {
    fetchDegrees();
  }, []);

  const handleDegree = (id, name, index) => {
    degree.push(name);

    setDegree(degree);

    const newDegrees = [...educationState];
    newDegrees[index]["degree"] = name;

    setEducationState(newDegrees);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newForm = [...educationState];
    newForm[index][name] = value;
    setEducationState(newForm);
  };
  // console.log(thirdPartFormData);

  const addForm = () => {
    setEducationState([
      ...educationState,
      {
        institute: "",
        degree: "",
        due_date: "",
        description: "",
      },
    ]);
  };
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
            addForm={addForm}
            educationState={educationState}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="info-education-resume-wrap">
        <div className="info-education-resume">
          <div className="private-info-resume-wrap">
            <Resume
              firstName={twoPartFormData && twoPartFormData.name}
              lastName={twoPartFormData && twoPartFormData.surname}
              email={twoPartFormData && twoPartFormData.email}
              phone={twoPartFormData && twoPartFormData.phone_number}
              aboutMe={twoPartFormData && twoPartFormData.about_me}
              image={twoPartFormData && twoPartFormData.image}
              experienceState={twoPartFormData && twoPartFormData.experiences}
              educationPart={educationPart}
              educationState={educationState}
              experiencePart={experiencePart}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
