import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import "./resumePage.css";
import Arrow from ".././assets/images/Group 4.png";
import { GrFormClose } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { formatNumber } from "../components/phoneFormat";

const ResumePage = () => {
  const [modal, setModal] = useState(true);
  const location = useLocation();
  const { resume } = location.state;

  const {
    about_me,
    educations,
    email,
    experiences,
    image,
    name,
    phone_number,
    surname,
  } = resume;

  return (
    <div className="resume-page">
      <Link to="/">
        <img className="back-resume" src={Arrow} alt="arrow" />
      </Link>
      <div className="final-resume">
        <div className="resume-frame">
          <div className="final-resume-form">
            <div className="final-resume-personal">
              <div className="final-resume-info">
                <h1>
                  {name} {surname}
                </h1>
                <div className="resume-email">
                  <MdAlternateEmail />
                  <p>{email}</p>
                </div>
                <div className="resume-phone">
                  <BsTelephoneFill />
                  <p>{formatNumber(phone_number)}</p>
                </div>
                <div className="about-me-resume">
                  <h2>{about_me && "ჩემ შესახებ"}</h2>
                  <div>
                    <p>{about_me}</p>
                  </div>
                </div>
              </div>
              <img
                className="resume-image"
                src={`https://resume.redberryinternship.ge/${image}`}
                alt="person"
              />
            </div>
            <hr />
            <div className="final-resume-experience">
              <h1 className="final-resume-title">გამოცდილება</h1>
              {experiences &&
                experiences.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="final-resume-experience-title">
                        {item.position}, {item.employer}
                      </p>
                      <p className="final-resume-date">
                        {item.start_date} - {item.due_date}
                      </p>
                      <p className="final-resume-experience-text">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
            </div>
            <hr />
            <div className="final-resume-experience">
              <h1 className="final-resume-title">განათლება</h1>
              {educations &&
                educations.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="final-resume-experience-title">
                        {item.institute}, {item.degree}
                      </p>
                      <p className="final-resume-date">{item.due_date}</p>
                      <p className="final-resume-experience-text">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="resume-footer">
            <Footer />
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-text">
            <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
          </div>
          <GrFormClose
            className="modal-close"
            onClick={() => {
              setModal(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ResumePage;
