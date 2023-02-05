import React from "react";
import BigInput from "./shared/BigInput";
import CalendarInput from "./shared/CalendarInput";
import "./ExperienceFormComponent.css";

const ExperienceFormComponent = ({ handleChange, form, index }) => {
  return (
    <>
      <div className="experience-description">
        <BigInput
          label="თანამდებობა"
          name="position"
          type="text"
          text="მინიმუმ 2 სიმბოლო"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          value={form.position}
          handleChange={handleChange}
          index={index}
        />
        <BigInput
          label="დამსაქმებელი"
          name="employer"
          type="text"
          text="მინიმუმ 2 სიმბოლო"
          placeholder="დამსაქმებელი"
          value={form.employer}
          handleChange={handleChange}
          index={index}
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
        />
        <CalendarInput
          label="დამთავრების რიცხვი"
          type="date"
          name="due_date"
          value={form.due_date}
          index={index}
          handleChange={handleChange}
        />
      </div>
      <div className="textarea">
        <p>აღწერა</p>
        <textarea
          name="description"
          className="about-me"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          value={form.description}
          onChange={(event) => {
            handleChange(event, index);
          }}
        />
      </div>
      <hr className="experience-hr" />
    </>
  );
};

export default ExperienceFormComponent;
