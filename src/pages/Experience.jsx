import React, { useEffect, useState } from "react";
import "./experience.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Resume from "../components/Resume";
import Footer from "../components/shared/Footer";
import Title from "../components/shared/Title";
import ExperienceForm from "../components/Experiences/ExperienceForm";
import Vector from "../assets/images/Vector.png";
import experienceValidation from "../validations/ExperienceValidation";

const Experience = () => {
  const location = useLocation();
  const { infoFormData, image } = location.state;
  // console.log(preview);
  const navigate = useNavigate();
  const [experiencePart, setExperiencePart] = useState(false);
  const [errors, setErrors] = useState([]);
  const [experienceState, setExperienceState] = useState([
    {
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ]);
  // const [twoPartFormData, setTwoPartFormData] = useState({
  //   name: infoFormData.name,
  //   surname: infoFormData.surname,
  //   email: infoFormData.email,
  //   phone_number: infoFormData.phone_number,
  //   image: image,
  //   about_me: infoFormData.about_me,
  //   experiences: [],
  // });

  useEffect(() => {
    const data = localStorage.getItem("experienceState");

    if (data) {
      console.log(JSON.parse(data));
      setExperienceState(JSON.parse(data));
    }

    // const forms = { ...twoPartFormData, experiences: JSON.parse(data) };
    // setTwoPartFormData(forms);
  }, []);

  useEffect(() => {
    setExperiencePart(
      Object.values(experienceState).some((value) => {
        if (value !== "") {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [experienceState]);

  const handleChange = (event, index) => {
    // console.log(event);
    const { name, value } = event.target;
    const newForms = [...experienceState];

    newForms[index][name] = value;

    setExperienceState(newForms);
    setExperiencePart(true);

    newForms.forEach((form, index) => {
      const formError = experienceValidation(form);
      errors[index] = formError;
    });
    console.log(errors);
    // const errors = experienceValidation(newForms);

    // console.log("errors", errors);
    setErrors(errors);

    localStorage.setItem("experienceState", JSON.stringify(newForms));
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const forms = { ...twoPartFormData, experiences: experienceState };
    // setTwoPartFormData(forms);
    // console.log(forms);

    experienceState.forEach((form, index) => {
      const formError = experienceValidation(form);
      errors[index] = formError;
    });
    setErrors(errors);

    let goToNextPage = true;
    errors.forEach((error) => {
      if (error && Object.keys(error).length !== 0) {
        for (const [key, value] of Object.entries(error)) {
          if (value !== "Success") {
            goToNextPage = false;
            break;
          }
        }
      }
    });

    if (!goToNextPage) {
      console.log("Pass the validation");
      return;
    }

    navigate("/education", {
      state: {
        // twoPartFormData: twoPartFormData,
        experiencePart: experiencePart,
        infoFormData: infoFormData,
        image: image,
        // preview: preview,
        experienceState: experienceState,
      },
    });
  };

  // console.log(preview);

  return (
    <div className="experience-wrapper">
      <div className="experience-card">
        <div className="title-wrap">
          <Link
            className="back"
            to="/"
            onClick={() => {
              localStorage.clear();
            }}
          >
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
            errors={errors}
            handleSubmit={handleSubmit}
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
              experiencePart={experiencePart}
            />
            <div className="info-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
