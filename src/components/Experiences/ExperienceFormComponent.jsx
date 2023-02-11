import React from "react";
import BigInput from "../shared/BigInput";
import CalendarInput from "../shared/CalendarInput";
import "./ExperienceFormComponent.css";
import { BsExclamationTriangleFill } from "react-icons/bs";

const ExperienceFormComponent = ({ handleChange, form, index, errors }) => {
  const correct =
    errors[index] &&
    errors[index].description === "Success" &&
    "experience-description-text-correct";
  const incorrect =
    errors[index] &&
    errors[index].description &&
    errors[index].description !== "Success" &&
    "experience-description-text-error ";

  return (
    <>
      <div className="experience-description">
        <BigInput
          label="თანამდებობა"
          name="position"
          type="text"
          text={errors[index] && errors[index].position}
          defultText="მინიმუმ 2 სიმბოლო"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          value={form.position}
          handleChange={handleChange}
          index={index}
          error={errors[index] && errors[index].position}
        />
        <BigInput
          label="დამსაქმებელი"
          name="employer"
          type="text"
          text={errors[index] && errors[index].employer}
          defultText="მინიმუმ 2 სიმბოლო"
          placeholder="დამსაქმებელი"
          value={form.employer}
          handleChange={handleChange}
          index={index}
          error={errors[index] && errors[index].employer}
        />
      </div>
      <div className="calendar-input-wrapper">
        <CalendarInput
          label="დაწყების რიცხვი"
          type="date"
          name="start_date"
          value={form.start_date}
          index={index}
          handleChange={handleChange}
          error={errors[index] && errors[index].start_date}
        />
        <CalendarInput
          label="დამთავრების რიცხვი"
          type="date"
          name="due_date"
          value={form.due_date}
          index={index}
          handleChange={handleChange}
          error={errors[index] && errors[index].due_date}
        />
      </div>
      <div className="textarea">
        <p
          className={
            (errors[index] &&
            errors[index].description &&
            errors[index] &&
            errors[index].description !== "Success"
              ? "label-error"
              : errors[index] &&
                errors[index].description === "Success" &&
                "technical-title") || "technical-title"
          }
        >
          აღწერა
        </p>
        <div className="textarea-wrapper">
          <textarea
            name="description"
            className={`${
              correct || incorrect || "experience-description-text-form"
            }`}
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            value={form.description}
            onChange={(event) => {
              handleChange(event, index);
            }}
          />
          {errors[index] && errors[index].description === "Success"
            ? ""
            : errors[index] &&
              errors[index].description &&
              errors[index] &&
              errors[index].description !== "Success" && (
                <BsExclamationTriangleFill className="textarea-invalid-logo invalid-logo" />
              )}
        </div>
      </div>
      <hr className="experience-hr" />
    </>
  );
};

export default ExperienceFormComponent;
