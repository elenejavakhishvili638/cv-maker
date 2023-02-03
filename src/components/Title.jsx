import React from "react";
import "./title.css";

const Title = ({ page, title }) => {
  return (
    <div className="main-title">
      <div className="title">
        <h1>{title}</h1>
        <p>{page}/3</p>
      </div>
      <hr className="info-hr" />
    </div>
  );
};

export default Title;
