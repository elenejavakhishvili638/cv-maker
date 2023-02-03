import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import RedberryLogo from "../assets/images/redberrylogo.png";
import Logo from "../assets/images/logo.png";

const Home = () => {
  return (
    <div className="main-page">
      <div className="home-page">
        <img className="RedberryLogo" src={RedberryLogo} alt="Logo" />
        <hr className="hr" />
        <img src={Logo} alt="logo" className="logo" />
        <Link className="add-resume" to="/info">
          რეზიუმეს დამატება
        </Link>
      </div>
    </div>
  );
};

export default Home;
