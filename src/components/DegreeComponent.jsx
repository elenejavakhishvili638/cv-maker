import React, { useState } from "react";
import "./degreeComponent.css";

const DegreeComponent = ({ degrees, degree, handleDegree }) => {
  const [selectedDegree, setSelectedDegree] = useState(false);

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
            {degree}
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
                        handleDegree(degree.id, degree.title);
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
