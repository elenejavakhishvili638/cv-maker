import React, { useRef } from "react";
import BigInput from "./BigInput";
import "./information.css";
import SmallInput from "./SmallInput";

const Information = ({ handleChange, data, handleImageUpload, handleBlur }) => {
  const ref = useRef(null);

  console.log(data);

  const pickImageHandler = (event) => {
    event.preventDefault();
    ref.current.click();
  };

  return (
    <form className="info-form">
      <div className="full-name">
        <SmallInput
          label="სახელი"
          type="text"
          name="name"
          value={data.name}
          placeholder="ანზორ"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <SmallInput
          label="გვარი"
          type="text"
          name="surname"
          value={data.surname}
          placeholder="მუმლაძე"
          handleChange={handleChange}
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
          text="უნდა მთავრდებოდეს @redberry.ge-ით"
          placeholder="anzor666@redberry.ge"
          handleChange={handleChange}
          value={data.email}
        />
        <BigInput
          label="მობილური ნომერი"
          type="text"
          name="phone_number"
          text="უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"
          placeholder="+995 551 12 34 56"
          handleChange={handleChange}
          value={data.phone_number}
        />
      </div>
      <div className="next-page-button">
        <button className="first-next">შემდეგი</button>
      </div>
    </form>
  );
};

export default Information;

{
  /* <div className="first-name">
          <label htmlFor="firstName">სახელი</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="ანზორ"
          />
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div> */
}
{
  /* <div className="last-name">
          <label htmlFor="lastName">გვარი</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="მუმლაძე"
          />
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div> */
}
