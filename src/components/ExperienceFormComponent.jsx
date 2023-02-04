import React from "react";
import BigInput from "./shared/BigInput";
import CalendarInput from "./shared/CalendarInput";
import "./ExperienceFormComponent.css";

const ExperienceFormComponent = () => {
  return (
    <>
      <div className="experience-description">
        <BigInput
          label="თანამდებობა"
          name=""
          type="text"
          text="მინიმუმ 2 სიმბოლო"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          value=""
        />
        <BigInput
          label="დამსაქმებელი"
          name=""
          type="text"
          text="მინიმუმ 2 სიმბოლო"
          placeholder="დამსაქმებელი"
          value=""
        />
      </div>
      <div className="calendar-input-wrapper">
        <CalendarInput label="დაწყების რიცხვი" type="date" name="" value="" />
        <CalendarInput
          label="დამთავრების რიცხვი"
          type="date"
          name=""
          value=""
        />
      </div>
      <div className="textarea">
        <p>აღწერა</p>
        <textarea
          name="about_me"
          className="about-me"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        />
      </div>
      <hr className="experience-hr" />
    </>
  );
};

export default ExperienceFormComponent;
