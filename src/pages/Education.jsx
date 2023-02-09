import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Resume from "../components/Resume";
import "./education.css";
import Vector from "../assets/images/Vector.png";
import Title from "../components/shared/Title";
import EducationForm from "../components/Education/EducationForm";
import educationValidation from "../validations/EducationValidation";
// import { useResumeContext } from "../context/Resume_conext";
// import { useResumeContext } from "../components/context/Resume_conext";

const Education = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { twoPartFormData, infoFormData, image, preview, experienceState } =
    location.state;
  // const { resume, setResume } = useResumeContext();
  const [resume, setResume] = useState({});
  const [degrees, setDegrees] = useState([]);
  const [experiencePart, setExperiencePart] = useState(false);
  const [degree, setDegree] = useState([]);
  const [errors, setErrors] = useState([]);
  const [educationPart, setEducationPart] = useState(false);
  const [educationState, setEducationState] = useState([
    {
      institute: "",
      degree_id: "",
      due_date: "",
      description: "",
    },
  ]);

  const [thirdPartFormData, setThirdPartFormData] = useState({
    name: twoPartFormData.name,
    surname: twoPartFormData.surname,
    email: twoPartFormData.email,
    phone_number: twoPartFormData.phone_number.replace(/\s/g, ""),
    image: "",
    about_me: twoPartFormData.about_me,
    experiences: twoPartFormData.experiences,
    educations: [],
  });

  useEffect(() => {
    const arr = image.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    const file = new File([u8arr], "File name", { type: mime });
    thirdPartFormData.image = file;
    setThirdPartFormData(thirdPartFormData);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("educationState");
    if (data) {
      // console.log(JSON.parse(data));
      setEducationState(JSON.parse(data));
    }

    const degree = localStorage.getItem("degree");
    if (degree) {
      setDegree(JSON.parse(degree));
    }

    const forms = { ...thirdPartFormData, educations: JSON.parse(data) };
    setThirdPartFormData(forms);
  }, []);

  useEffect(() => {
    if (twoPartFormData && twoPartFormData.experiences) {
      setExperiencePart(
        Object.values(twoPartFormData && twoPartFormData.experiences).some(
          (value) => {
            if (value !== "") {
              return true;
            } else {
              return false;
            }
          }
        )
      );
    }
  }, [twoPartFormData, twoPartFormData.experiences]);

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
    // degree.push(name);
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

    newForm.forEach((item, index) => {
      const formError = educationValidation(item);
      errors[index] = formError;
    });

    // console.log(errors);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const forms = {
      ...thirdPartFormData,
      educations: educationState,
    };
    setThirdPartFormData(forms);

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

    data.append("image", thirdPartFormData.image);

    for (let i = 0; i < educationState.length; i++) {
      data.append(`educations[${i}][institute]`, educationState[i].institute);
      data.append(`educations[${i}][degree_id]`, educationState[i].degree_id);
      data.append(`educations[${i}][due_date]`, educationState[i].due_date);
      data.append(
        `educations[${i}][description]`,
        educationState[i].description
      );
    }
    // data.append("experiences", thirdPartFormData.experiences);
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
    data.append("name", twoPartFormData.name);
    data.append("surname", twoPartFormData.surname);
    data.append("about_me", twoPartFormData.about_me);
    data.append("email", twoPartFormData.email);
    data.append(
      "phone_number",
      twoPartFormData.phone_number.replace(/\s/g, "")
    );

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
      setResume(res);

      // localStorage.setItem("finalResume", JSON.stringify(res));
    } catch (error) {
      console.log(error);
    }

    console.log(resume.length);
    if (Object.keys(resume).length !== 0) {
      navigate("/resume", {
        state: {
          resume: resume,
        },
      });
    }
  };

  console.log(resume);

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
              degree={degree}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
