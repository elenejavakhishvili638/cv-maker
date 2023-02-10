import React, { useState } from "react";
import "./degreeComponent.css";

const DegreeComponent = ({ degrees, degree, handleDegree, index, error }) => {
  const [selectedDegree, setSelectedDegree] = useState(false);
  const correct = error === "Success" && "dropdown dropdown-border-correct";
  const incorrect =
    error && error !== "Success" && "dropdown dropdown-border-error ";

  return (
    <div className="degree-component-wrap">
      <label>ხარისხი</label>
      <div
        className={`${correct || incorrect || "dropdown dropdown-border"}`}
        onClick={() => setSelectedDegree(!selectedDegree)}
      >
        <div className="dropdown-btn">
          <p className={`${degree[index] ? "dark-color" : "light-color"}`}>
            {degree[index] ? degree[index] : "აირჩიე ხარისხი"}
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
                        console.log(degree.id, index);
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
