import React, { useState } from "react";
import { Link } from "react-router-dom";
import Vector from ".././assets/images/Vector.png";
import Footer from "../components/shared/Footer";
import "./resumePage.css";
import Arrow from ".././assets/images/Group 4.png";
import { GrFormClose } from "react-icons/gr";

const ResumePage = () => {
  const [modal, setModal] = useState(true);
  return (
    <div className="resume-page">
      {/* <div className="title-wrap-resume">
        <Link className="back-resume" to="/">
          <div className="vector-wrap-resume">
            <img src={Vector} alt="vector" />
          </div>
        </Link>
      </div> */}
      <Link to="/">
        <img className="back-resume" src={Arrow} alt="arrow" />
      </Link>
      <div className="final-resume">
        <div className="final-resume-form">
          <div className="final-resume-personal">
            <div className="final-resume-info">
              <h1></h1>
              <p></p>
              <p></p>
              <div>
                <h3></h3>
                <p></p>
              </div>
            </div>
            <img />
          </div>
          <hr />
          <div className="final-resume-experience">
            <h1 className="final-resume-title"></h1>
            <p className="final-resume-experience-title"></p>
            <p className="final-resume-date"></p>
            <p className="final-resume-experience-text"></p>
          </div>
          <hr />
          <div className="final-resume-experience">
            <h1 className="final-resume-title"></h1>
            <p className="final-resume-experience-title"></p>
            <p className="final-resume-date"></p>
            <p className="final-resume-experience-text"></p>
          </div>
        </div>
        <div>
          <Footer />
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
