import React, { useRef } from "react";
import BigInput from "./BigInput";
import "./information.css";
import SmallInput from "./SmallInput";

const Information = () => {
  const ref = useRef(null);

  const pickImageHandler = () => {
    ref.current.click();
  };

  return (
    // <div></div>
    <form className="info-form">
      <div className="full-name">
        <SmallInput
          label="სახელი"
          type="text"
          name="firstName"
          placeholder="ანზორ"
        />
        <SmallInput
          label="გვარი"
          type="text"
          name="lastName"
          placeholder="მუმლაძე"
        />
      </div>
      <div className="image-paragraph">
        <p>პირადი ფოტოს ატვირთვა</p>
        <input
          type="file"
          ref={ref}
          style={{ display: "none" }}
          accept=".jpg,.png,.jpeg"
        />
        <button className="upload-button" onClick={pickImageHandler}>
          ატვირთვა
        </button>
      </div>
      <div className="textarea">
        <p>ჩემ შესახებ (არასავალდებულო)</p>
        <textarea className="about-me" placeholder="ზოგადი ინფო შენ შესახებ" />
      </div>
      <div className="technical-information">
        <BigInput
          label="ელ.ფოსტა"
          type="text"
          name="email"
          text="უნდა მთავრდებოდეს @redberry.ge-ით"
          placeholder="anzor666@redberry.ge"
        />
        <BigInput
          label="მობილური ნომერი"
          type="text"
          name="number"
          text="უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"
          placeholder="+995 551 12 34 56"
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
