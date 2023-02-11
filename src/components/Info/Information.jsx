import React, { useRef } from "react";
import BigInput from "../shared/BigInput";
import "./information.css";
import SmallInput from "../shared/SmallInput";
import {
  BsExclamationTriangleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const Information = ({
  handleChange,
  data,
  handleImageUpload,
  errors,
  image,
  handleSubmit,
}) => {
  const ref = useRef(null);

  const pickImageHandler = (event) => {
    event.preventDefault();
    ref.current.click();
  };

  return (
    <form className="info-form" onSubmit={handleSubmit}>
      <div className="full-name">
        <SmallInput
          label="სახელი"
          type="text"
          name="name"
          value={data.name}
          placeholder="ანზორ"
          handleChange={handleChange}
          error={errors.name}
          text={errors && errors.name}
          defultText="მინიმუმ 2 ასო, ქართული ასოები"
        />
        <SmallInput
          label="გვარი"
          type="text"
          name="surname"
          value={data.surname}
          placeholder="მუმლაძე"
          handleChange={handleChange}
          error={errors.surname}
          text={errors && errors.surname}
          defultText="მინიმუმ 2 ასო, ქართული ასოები"
        />
      </div>
      <div className="image-paragraph">
        <p>პირადი ფოტოს ატვირთვა</p>
        <input
          type="file"
          ref={ref}
          style={{ display: "none" }}
          name="image"
          // accept=".jpg,.png,.jpeg"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button className="upload-button" onClick={pickImageHandler}>
          ატვირთვა
        </button>
        {image ? (
          <BsFillCheckCircleFill className="success-logo" />
        ) : (
          errors.image &&
          errors.image !== "Success" && (
            <BsExclamationTriangleFill className="invalid-logo image-logo" />
          )
        )}
      </div>
      <div className="textarea">
        <p>ჩემ შესახებ (არასავალდებულო)</p>
        <textarea
          onChange={handleChange}
          name="about_me"
          className="about-me"
          value={data.about_me}
          placeholder="ზოგადი ინფო შენ შესახებ"
        />
      </div>
      <div className="technical-information">
        <BigInput
          label="ელ.ფოსტა"
          type="email"
          name="email"
          text={errors && errors.email}
          defultText="უნდა მთავრდებოდეს @redberry.ge-ით"
          placeholder="anzor666@redberry.ge"
          handleChange={handleChange}
          value={data.email}
          error={errors.email}
        />
        <BigInput
          label="მობილური ნომერი"
          type="text"
          name="phone_number"
          text={errors && errors.phone_number}
          defultText="უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"
          placeholder="+995 551 12 34 56"
          handleChange={handleChange}
          value={data.phone_number}
          error={errors.phone_number}
        />
      </div>
      <div className="next-page-button">
        <button type="submit" className="first-next">
          შემდეგი
        </button>
      </div>
    </form>
  );
};

export default Information;
