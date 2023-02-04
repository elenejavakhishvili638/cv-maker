import React, { useEffect, useState } from "react";
import "./info.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import Title from "../components/Title";
import Vector from "../assets/images/Vector.png";
import Information from "../components/Information";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

const Info = () => {
  const [image, setImage] = useState();
  const [previewImg, setPreviewImage] = useState();
  const [infoFormData, setInfoFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    image: "",
    about_me: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newInfoFormData = { ...infoFormData, [name]: value };

    setInfoFormData(newInfoFormData);
  };

  const handleImageUpload = (event) => {
    const dataWithNewImage = { ...infoFormData, image: event.target.files[0] };

    setInfoFormData(dataWithNewImage);

    const img = event.target.files[0];

    setImage(URL.createObjectURL(img));
  };

  const handleBlur = () => {
    if (!infoFormData.name) {
      console.log("quired");
    } else {
      console.log("no error");
    }
  };

  const handleSUbmit = (event) => {
    // event.preventDefault()
  };

  return (
    <div className="private-info">
      <div className="private-info-card">
        <div className="title-wrap">
          <Link className="back" to="/">
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
            handleBlur={handleBlur}
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Info;
