import React from "react";
import "./resume.css";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import ExperienceResume from "./Experiences/ExperienceResume";
import EducationResume from "./Education/EducationResume";

const Resume = ({
  firstName,
  lastName,
  email,
  phone,
  aboutMe,
  image,
  experienceState,
  experiencePart,
  educationState,
  educationPart,
  degree,
}) => {
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
          {/* phone !== "+" && */}
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
      {experiencePart && (
        <div className="experience-resume">
          <hr className="resume-hr" />
          <h3>გამოცდილება</h3>
          {experienceState &&
            experienceState.map((form, index) => {
              return <ExperienceResume key={index} form={form} />;
            })}
        </div>
      )}

      {educationPart && (
        <div className="education-resume">
          <hr className="education-hr" />
          <h3>განათლება</h3>
          {educationState &&
            educationState.map((form, index) => {
              return (
                <EducationResume
                  key={index}
                  form={form}
                  degree={degree}
                  index={index}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Resume;
