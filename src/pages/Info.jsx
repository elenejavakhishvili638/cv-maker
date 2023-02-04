import React, { useEffect, useState } from "react";
import "./info.css";
import { Link, useNavigate } from "react-router-dom";
import privateValidation from "../validations/PrivateInformationValidation";

import Title from "../components/Title";
import Vector from "../assets/images/Vector.png";
import Information from "../components/Information";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

const Info = () => {
  const [image, setImage] = useState();
  const [errors, setErrors] = useState({});
  const [infoFormData, setInfoFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    image: "",
    about_me: "",
  });
  const navigate = useNavigate();

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newInfoFormData = { ...infoFormData, [name]: value };

    setInfoFormData(newInfoFormData);

    const errors = privateValidation(infoFormData);

    setErrors(errors);

    localStorage.setItem("infoFormdata", JSON.stringify(infoFormData));
  };

  const handleImageUpload = (event) => {
    const dataWithNewImage = { ...infoFormData, image: event.target.files[0] };

    setInfoFormData(dataWithNewImage);

    const img = event.target.files[0];

    const reader = new FileReader();
    // setImage(reader.result);
    reader.readAsDataURL(img);
    console.log(reader.result);
    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem("image", reader.result);
    };

    // setImage(URL.createObjectURL(img));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = privateValidation(infoFormData);

    setErrors(errors);
    if (errors && Object.keys(errors).length !== 0) {
      for (const [key, value] of Object.entries(errors)) {
        console.log(key, value);
        if (value !== "Success") {
          return;
        }
      }
    }

    console.log("dd");

    navigate("/experience", {
      state: { infoFormData: infoFormData, image: image },
    });
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Info;

// const handleBlur = async () => {
//   if (!infoFormData.name) {
//     console.log("quired");
//   } else {
//     console.log("no error");
//   }
//   const isValid = await privateSchema.isValid(infoFormData);
//   console.log(isValid);
// };

// useEffect(() => {
//   let isValid;
//   const fun = async () => {
//     isValid = await privateSchema.isValid(infoFormData);
//   };
//   fun();
//   console.log(isValid);
// }, [infoFormData]);
