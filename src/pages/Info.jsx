import React, { useEffect, useState } from "react";
import "./info.css";
import { Link, useNavigate } from "react-router-dom";
import privateValidation from "../validations/PrivateInformationValidation";

import Title from "../components/shared/Title";
import Vector from "../assets/images/Vector.png";
import Information from "../components/Info/Information";
import Resume from "../components/Resume";
import Footer from "../components/shared/Footer";

const Info = () => {
  const [image, setImage] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [infoFormData, setInfoFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    image: "",
    about_me: "",
  });

  //Save infoFormData in local storage

  useEffect(() => {
    const data = localStorage.getItem("infoFormdata");
    if (data) {
      setInfoFormData(JSON.parse(data));
    }
    const image = localStorage.getItem("image");
    if (image) {
      setImage(image);
    }
  }, []);

  //Handle change of form

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newInfoFormData = {
      ...infoFormData,
      [name]: value,
    };
    setInfoFormData(newInfoFormData);

    const errors = privateValidation(newInfoFormData, image);
    setErrors(errors);

    localStorage.setItem("infoFormdata", JSON.stringify(newInfoFormData));
  };

  //Handle image upload

  const handleImageUpload = (event) => {
    const dataWithNewImage = { ...infoFormData, image: event.target.files[0] };
    setInfoFormData(dataWithNewImage);

    const img = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem("image", reader.result);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = privateValidation(infoFormData, image);

    setErrors(errors);
    if (errors && Object.keys(errors).length !== 0) {
      for (const [key, value] of Object.entries(errors)) {
        if (value !== "Success") {
          return;
        }
      }
    }

    navigate("/experience", {
      state: { infoFormData: infoFormData, image: image },
    });
  };

  return (
    <div className="private-info">
      <div className="private-info-card">
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
          <Title title="პირადი ინფო" page="1" />
        </div>
        <div className="information">
          <Information
            handleChange={handleChange}
            data={infoFormData}
            handleImageUpload={handleImageUpload}
            errors={errors}
            image={image}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="private-info-resume">
        <div className="private-info-resume-wrap">
          <Resume
            firstName={infoFormData.name}
            lastName={infoFormData.surname}
            email={infoFormData.email}
            phone={infoFormData.phone_number}
            aboutMe={infoFormData.about_me}
            image={image}
          />
          <div className="info-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
