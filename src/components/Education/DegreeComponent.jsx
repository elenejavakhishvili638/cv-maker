import React, { useState } from "react";
import "./degreeComponent.css";
import { BsExclamationTriangleFill } from "react-icons/bs";

const DegreeComponent = ({ degrees, degree, handleDegree, index, error }) => {
  const [selectedDegree, setSelectedDegree] = useState(false);
  const correct = error === "Success" && "dropdown dropdown-border-correct";
  const incorrect =
    error && error !== "Success" && "dropdown dropdown-border-error ";

  return (
    <div className="degree-component-wrap">
      <label
        className={
          (error && error && error && error !== "Success"
            ? "label-error"
            : error && error === "Success" && "technical-title") ||
          "technical-title"
        }
      >
        ხარისხი
      </label>
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
        {error === "Success"
          ? ""
          : error &&
            error !== "Success" && (
              <BsExclamationTriangleFill className="degree-invalid-logo" />
            )}
      </div>
    </div>
  );
};

export default DegreeComponent;
