import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Resume from "../components/Resume";
import "./education.css";
import Vector from "../assets/images/Vector.png";
import Title from "../components/shared/Title";
import EducationForm from "../components/Education/EducationForm";
import educationValidation from "../validations/EducationValidation";
import { base64StringToFile } from "../components/converter";

const Education = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { infoFormData, image, experienceState, experiencePart } =
    location.state;

  const [resume, setResume] = useState({});
  const [degrees, setDegrees] = useState([]);

  const [degree, setDegree] = useState([]);
  const [errors, setErrors] = useState([]);
  const [educationPart, setEducationPart] = useState(false);
  console.log(experiencePart);
  const [imageFile, setImageFile] = useState();
  const [educationState, setEducationState] = useState([
    {
      institute: "",
      degree_id: "",
      due_date: "",
      description: "",
    },
  ]);

  useEffect(() => {
    const file = base64StringToFile(image);
    setImageFile(file);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("educationState");
    if (data) {
      setEducationState(JSON.parse(data));
    }

    const degree = localStorage.getItem("degree");
    if (degree) {
      setDegree(JSON.parse(degree));
    }
  }, []);

  useEffect(() => {
    setEducationPart(
      Object.values(educationState).some((value) => {
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
    setEducationPart(true);
    degree[index] = name;
    setDegree(degree);
    console.log(degree);
    const newDegrees = [...educationState];
    newDegrees[index]["degree_id"] = id;

    setEducationState(newDegrees);

    newDegrees.forEach((item, index) => {
      const formError = educationValidation(item);
      errors[index] = formError;
    });

    setErrors(errors);

    console.log(degree[index], degree);

    localStorage.setItem("educationState", JSON.stringify(newDegrees));
    localStorage.setItem("degree", JSON.stringify(degree));
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newForm = [...educationState];
    newForm[index][name] = value;
    setEducationState(newForm);
    setEducationPart(true);

    newForm.forEach((item, index) => {
      const formError = educationValidation(item);
      errors[index] = formError;
    });

    setErrors(errors);

    localStorage.setItem("educationState", JSON.stringify(newForm));
  };

  const addForm = () => {
    setEducationState([
      ...educationState,
      {
        institute: "",
        degree_id: "",
        due_date: "",
        description: "",
      },
    ]);
  };

  useEffect(() => {
    if (Object.keys(resume).length !== 0) {
      navigate("/resume", {
        state: {
          resume: resume,
        },
      });
      localStorage.clear();
    }
  }, [resume, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    educationState.forEach((form, index) => {
      const formError = educationValidation(form);
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

    const data = new FormData();

    data.append("image", imageFile);

    for (let i = 0; i < educationState.length; i++) {
      data.append(`educations[${i}][institute]`, educationState[i].institute);
      data.append(`educations[${i}][degree_id]`, educationState[i].degree_id);
      data.append(`educations[${i}][due_date]`, educationState[i].due_date);
      data.append(
        `educations[${i}][description]`,
        educationState[i].description
      );
    }

    for (let i = 0; i < experienceState.length; i++) {
      data.append(`experiences[${i}][position]`, experienceState[i].position);
      data.append(`experiences[${i}][employer]`, experienceState[i].employer);
      data.append(
        `experiences[${i}][start_date]`,
        experienceState[i].start_date
      );
      data.append(`experiences[${i}][due_date]`, experienceState[i].due_date);
      data.append(
        `experiences[${i}][description]`,
        experienceState[i].description
      );
    }
    data.append("name", infoFormData.name);
    data.append("surname", infoFormData.surname);
    data.append("about_me", infoFormData.about_me);
    data.append("email", infoFormData.email);
    data.append("phone_number", infoFormData.phone_number.replace(/\s/g, ""));

    console.log(data);

    try {
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/cvs",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        }
      );

      const res = await response.json();
      setResume(() => res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="education-wrapper">
      <div className="education-card">
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
            handleSubmit={handleSubmit}
            errors={errors}
            infoFormData={infoFormData}
            image={image}
          />
        </div>
      </div>
      <div className="info-education-resume-wrap">
        <div className="info-education-resume">
          <div className="private-info-resume-wrap">
            <Resume
              firstName={infoFormData.name}
              lastName={infoFormData.surname}
              email={infoFormData.email}
              phone={infoFormData.phone_number}
              aboutMe={infoFormData.about_me}
              image={image}
              experienceState={experienceState}
              educationPart={educationPart}
              educationState={educationState}
              experiencePart={experiencePart}
              degree={degree}
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

export default Education;
