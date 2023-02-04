import React from "react";
import "./resume.css";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Resume = ({ firstName, lastName, email, phone, aboutMe }) => {
  return (
    <div className="personal-resume">
      <div className="person-information">
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="email">
          <MdAlternateEmail /> <p>{email}</p>
        </div>
        <div className="phone">
          <BsTelephoneFill /> <p>{phone}</p>
        </div>
        <div className="about-me-text">
          <h3>ჩემ შესახებ</h3>
          <p>{aboutMe}</p>
        </div>
      </div>
      <div className="person-image-container">
        <img src="" alt="" className="person-image" />
      </div>
    </div>
  );
};

export default Resume;
