import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Resume from "../components/Resume";
import "./education.css";
import Vector from "../assets/images/Vector.png";
import Title from "../components/shared/Title";
import EducationForm from "../components/EducationForm";
import educationValidation from "../validations/EducationValidation";

const Education = () => {
  const location = useLocation();
  const { twoPartFormData, infoFormData, image, preview } = location.state;

  // const [mimeType, encodedData] = image.split(",");

  // // console.log(fileUrl);
  // const binaryString = atob(encodedData);
  // const uint8Array = new Uint8Array(
  //   binaryString.split("").map((char) => char.charCodeAt(0))
  // );

  // const file = new Blob([uint8Array], { type: mimeType });

  // const fileUrl = URL.createObjectURL(file);

  // console.log(fileUrl);

  // const base64Image = image;
  // const [, format, body] = /data:([^;]+),(.*)/.exec(image) || [];

  // if (!format || !body) {
  //   throw new Error("Invalid image fromat or data");
  // }

  // const blob = new Blob([atob(body)], { type: `iamge/${format}` });
  // const file = new File([blob], "image.jpeg", { type: `image/${format}` });

  // console.log(file, image);

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
    image: preview,
    about_me: twoPartFormData.about_me,
    experiences: twoPartFormData.experiences,
    educations: [],
  });

  console.log(preview);

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
  // console.log(twoPartFormData, experienceState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("loo");
    const forms = { ...thirdPartFormData, educations: educationState };
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
    console.log(data);

    for (let prop in thirdPartFormData) {
      console.log(thirdPartFormData[prop]);
      data.append(prop, thirdPartFormData[prop]);
    }

    // console.log(thirdPartFormData);
    // try {
    //   const response = await fetch(
    //     "https://resume.redberryinternship.ge/api/cvs",
    //     {
    //       method: "POST",
    //       headers: {
    //         // "Content-Type": "application/json",
    //         Accept: "application/json",
    //
    //       },
    //       body: data,
    //     }
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }

    fetch("https://resume.redberryinternship.ge/api/cvs", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  console.log(thirdPartFormData);

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
