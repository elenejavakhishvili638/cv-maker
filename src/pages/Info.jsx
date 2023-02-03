import React from "react";
import "./info.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import Title from "../components/Title";
import Vector from "../assets/images/Vector.png";
import Information from "../components/Information";

const Info = () => {
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
          <Information />
        </div>
      </div>
      <div className="private-info-resume"></div>
    </div>
  );
};

export default Info;
