import React from "react";
import "./resume.css";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import ExperienceResume from "./ExperienceResume";

const Resume = ({
  firstName,
  lastName,
  email,
  phone,
  aboutMe,
  image,
  experienceState,
}) => {
  console.log(experienceState);
  return (
    <div className="resume-wrap">
      <div className="personal-resume">
        <div className="person-information">
          {firstName && firstName.length !== 0 && (
            <h1>
              {firstName} {lastName}
            </h1>
          )}
          {email && email.length !== 0 && (
            <div className="email">
              <MdAlternateEmail /> <p>{email}</p>
            </div>
          )}
          {phone && phone.length !== 0 && (
            <div className="phone">
              <BsTelephoneFill /> <p>{phone}</p>
            </div>
          )}
          {aboutMe && aboutMe.length !== 0 && (
            <div className="about-me-text">
              <h3>ჩემ შესახებ</h3>
              <p>{aboutMe}</p>
            </div>
          )}
        </div>
        {image && (
          <div className="person-image-container">
            <img src={image} alt="person" className="person-image" />
          </div>
        )}
      </div>
      {/* {experienceState.length !== 0 && (
        <div className="experience-resume">
          <hr className="resume-hr" />
          <h3>გამოცდილება</h3>
          {experienceState &&
            experienceState.map((form, index) => {
              return <ExperienceResume key={index} form={form} />;
            })}
        </div>
      )} */}
    </div>
  );
};

export default Resume;
