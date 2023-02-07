import React, { useState } from "react";
import "./degreeComponent.css";

const DegreeComponent = ({ degrees, degree, handleDegree, index }) => {
  const [selectedDegree, setSelectedDegree] = useState(false);
  // console.log(degree);
  return (
    <div className="degree-component-wrap">
      <label>ხარისხი</label>
      <div
        className="dropdown"
        onClick={() => setSelectedDegree(!selectedDegree)}
      >
        <div className="dropdown-btn">
          <p
            className={`${
              degree === "აირჩიეთ ხარისხი" ? "light-color" : "dark-color"
            }`}
          >
            {degree.length === 0 ? "აირჩიე ხარისხი" : degree[index]}
          </p>
          <i className="arrows down" />
        </div>
        {selectedDegree && (
          <div className="dropdown-content">
            {degrees &&
              degrees.map((degree) => {
                return (
                  <div key={degree.id}>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleDegree(degree.id, degree.title, index);
                      }}
                    >
                      {degree.title}
                    </button>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DegreeComponent;
